import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
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
  const phone = sanitize(body.phone, 40);
  const email = sanitize(body.email, 160);
  const website = sanitize(body.website ?? "", 300);
  const message = sanitize(body.message, 5000);
  const consent = Boolean(body.consent);

  if (!name || !phone || !email || !message || !consent) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please complete all required fields and accept the consent checkbox.",
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

  const textBody = [
    `New inquiry from ${SITE.name} website`,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    website ? `Website: ${website}` : "Website: (not provided)",
    "",
    "Message:",
    message,
    "",
    "Consent: Yes — may contact by phone, text, and/or email. Opt-out anytime.",
    `Submitted: ${new Date().toISOString()}`,
  ].join("\n");

  const subject = `Website inquiry from ${name}`;

  try {
    // Preferred: Resend (set RESEND_API_KEY in Vercel env for production email)
    if (process.env.RESEND_API_KEY) {
      const from =
        process.env.RESEND_FROM_EMAIL || "Leads by RJ <onboarding@resend.dev>";
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [SITE.email],
          reply_to: email,
          subject,
          text: textBody,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
        return NextResponse.json(
          { ok: false, error: "Could not send message. Please try again or email me directly." },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true });
    }

    // Default: FormSubmit.co → delivers to rj@leadsbyrj.com (confirm once via activation email)
    const formSubmitRes = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          website: website || "N/A",
          message,
          consent: "Yes — phone, text, and/or email. Opt-out anytime.",
          _subject: subject,
          _template: "table",
          _captcha: "false",
          _replyto: email,
        }),
      }
    );

    if (!formSubmitRes.ok) {
      const errText = await formSubmitRes.text();
      console.error("FormSubmit error:", errText);
      return NextResponse.json(
        {
          ok: false,
          error: "Could not send message. Please try again or email me directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong. Please email me directly at rj@leadsbyrj.com.",
      },
      { status: 500 }
    );
  }
}
