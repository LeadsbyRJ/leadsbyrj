import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

export const runtime = "nodejs";

/**
 * Google Apps Script web app — writes to Sheet + emails.
 * Must stay exact (deployment URL).
 */
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwx2TO4FQ_qksV2OY7CRQ_sRXb5ga13YoRCycUQU8s1Eru4ilvFJ07Dkbt55lGOrq14/exec";

type ContactPayload = {
  name: string;
  businessName?: string;
  phone: string;
  email: string;
  website?: string;
  message: string;
  consent: boolean;
  /** Honeypot — bots fill this; humans leave empty */
  company?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: unknown, max = 2000) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

/**
 * POST to Google Apps Script while preserving the POST method across redirects.
 * Default fetch redirect-follow can turn 302 into GET and drop the body,
 * which returns a fake "success" without writing to the sheet.
 */
async function postJsonToGoogleScript(payload: Record<string, string>) {
  const body = JSON.stringify(payload);
  // text/plain is the most reliable Content-Type for Apps Script doPost
  const headers: HeadersInit = {
    "Content-Type": "text/plain;charset=utf-8",
  };

  let url = GOOGLE_SCRIPT_URL;
  let res: Response | null = null;

  for (let hop = 0; hop < 6; hop++) {
    res = await fetch(url, {
      method: "POST",
      headers,
      body,
      redirect: "manual",
    });

    // Follow redirects manually, always re-POST with the same body
    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get("location");
      if (!location) break;
      url = new URL(location, url).toString();
      continue;
    }

    break;
  }

  if (!res) {
    return { ok: false as const, error: "No response from Google Script." };
  }

  const raw = await res.text();
  let data: { status?: string; message?: string } | null = null;

  try {
    data = JSON.parse(raw) as { status?: string; message?: string };
  } catch {
    const match = raw.match(/\{[\s\S]*"status"\s*:\s*"[^"]+"[\s\S]*\}/);
    if (match) {
      try {
        data = JSON.parse(match[0]) as { status?: string; message?: string };
      } catch {
        data = null;
      }
    }
  }

  if (data?.status === "success") {
    return { ok: true as const };
  }

  console.error("Google Script error:", {
    httpStatus: res.status,
    body: raw.slice(0, 400),
  });

  return {
    ok: false as const,
    error:
      data?.message ||
      `Could not save your message (HTTP ${res.status}). Please try again or email ${SITE.email}.`,
  };
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot: silently succeed so bots think it worked
  if (body.company && String(body.company).trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(body.name, 120);
  const businessName = sanitize(body.businessName ?? "", 160);
  const phone = sanitize(body.phone, 40);
  const email = sanitize(body.email, 160);
  const website = sanitize(body.website ?? "", 300);
  const message = sanitize(body.message, 5000);
  const consent = Boolean(body.consent);

  if (!name || !phone || !email || !message || !consent) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Please complete all required fields and accept the consent checkbox.",
      },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Exact keys for Google Apps Script / Sheet columns
  const payload = {
    name,
    businessName,
    phone,
    email,
    website,
    message,
  };

  try {
    const result = await postJsonToGoogleScript(payload);

    if (result.ok) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { ok: false, error: result.error },
      { status: 502 }
    );
  } catch (err) {
    console.error("Contact form / Google Script error:", err);
    return NextResponse.json(
      {
        ok: false,
        error: `Something went wrong. Please email me directly at ${SITE.email}.`,
      },
      { status: 500 }
    );
  }
}
