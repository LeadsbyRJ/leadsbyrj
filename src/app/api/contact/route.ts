import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

export const runtime = "nodejs";

/** Google Apps Script web app — writes to Sheet + emails */
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
  const messageRaw = sanitize(body.message, 5000);
  const consent = Boolean(body.consent);

  if (!name || !phone || !email || !messageRaw || !consent) {
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

  // Payload keys must match Google Apps Script expectations:
  // name, businessName, phone, email, website, message
  const payload = {
    name,
    businessName, // optional; empty string when not provided
    phone,
    email,
    website,
    message: messageRaw,
  };

  try {
    const gasRes = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const raw = await gasRes.text();
    let data: { status?: string; message?: string } = {};

    try {
      data = JSON.parse(raw) as { status?: string; message?: string };
    } catch {
      // Apps Script sometimes returns HTML on misconfiguration
      console.error("Google Script non-JSON response:", raw.slice(0, 400));
      return NextResponse.json(
        {
          ok: false,
          error: `Could not send message. Please try again or email ${SITE.email} directly.`,
        },
        { status: 502 }
      );
    }

    if (data.status === "success") {
      return NextResponse.json({ ok: true });
    }

    console.error("Google Script error payload:", data);
    return NextResponse.json(
      {
        ok: false,
        error:
          data.message ||
          `Could not send message. Please try again or email ${SITE.email} directly.`,
      },
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
