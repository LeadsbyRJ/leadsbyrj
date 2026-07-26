import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

export const runtime = "nodejs";

/**
 * Google Apps Script web app — writes to Sheet + emails.
 * Keep this URL exact (deployment).
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
  /** Optional: "yes" | "no" for free GBP ranking audit interest */
  rankingAudit?: string;
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

function parseGasResponse(raw: string): {
  status?: string;
  message?: string;
} | null {
  if (!raw?.trim()) return null;
  try {
    return JSON.parse(raw) as { status?: string; message?: string };
  } catch {
    const match = raw.match(/\{[\s\S]*"status"\s*:\s*"[^"]+"[\s\S]*\}/);
    if (!match) return null;
    try {
      return JSON.parse(match[0]) as { status?: string; message?: string };
    } catch {
      return null;
    }
  }
}

/**
 * Post JSON to Google Apps Script using text/plain.
 * This avoids intermittent HTTP 405s that occur with application/json.
 */
async function postToGoogleScript(fields: {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  website: string;
  message: string;
  rankingAudit: string;
}) {
  const payload = {
    name: fields.name,
    businessName: fields.businessName,
    phone: fields.phone,
    email: fields.email,
    website: fields.website,
    message: fields.message,
    rankingAudit: fields.rankingAudit,
  };

  const res = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: {
      // Required for reliable Google Apps Script doPost handling
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
    redirect: "follow",
  });

  const raw = await res.text();
  const data = parseGasResponse(raw);

  if (data?.status === "success") {
    return { ok: true as const };
  }

  // Treat non-JSON or unexpected status as failure (do not fake success)
  console.error("Google Script response:", {
    httpStatus: res.status,
    body: raw.slice(0, 400),
  });

  if (res.status === 405) {
    return {
      ok: false as const,
      error: `Google Script rejected the request (HTTP 405). Please try again or email ${SITE.email}.`,
    };
  }

  return {
    ok: false as const,
    error:
      data?.message ||
      `Could not save your message. Please try again or email ${SITE.email}.`,
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
  const rankingAudit = sanitize(body.rankingAudit ?? "", 10).toLowerCase();
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

  try {
    const result = await postToGoogleScript({
      name,
      businessName,
      phone,
      email,
      website,
      message,
      rankingAudit:
        rankingAudit === "yes" || rankingAudit === "no" ? rankingAudit : "",
    });

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
