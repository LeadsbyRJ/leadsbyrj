"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Label } from "@/components/ui/Input";

export function ContactForm({
  title = "Send a message",
  submitLabel = "Send Message",
}: {
  title?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const consent = data.get("consent");

    if (!consent) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Phase 1: client-side only — wire to email/API later
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const website = String(data.get("website") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        website ? `Website: ${website}` : null,
        "",
        message,
        "",
        "Consent: Yes — may contact by phone, text, and/or email.",
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:rj@leadsbyrj.com?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {title && (
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required>
            Name
          </Label>
          <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
        </div>
        <div>
          <Label htmlFor="phone" required>
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(949) 555-0100"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@business.com"
          />
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            type="url"
            autoComplete="url"
            placeholder="https:// (optional)"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message" required>
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell me about your business and goals…"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-border bg-background-elevated accent-[var(--accent)]"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-muted">
          I consent to being contacted by phone, text, and/or email regarding my
          inquiry. I understand I can opt out at any time. See our{" "}
          <Link href="/privacy" className="text-accent underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Please complete all required fields and accept the consent checkbox.
        </p>
      )}
      {status === "success" && (
        <p className="text-sm text-accent">
          Thanks! Your email client should open with your message. If it doesn’t,
          email{" "}
          <a href="mailto:rj@leadsbyrj.com" className="underline">
            rj@leadsbyrj.com
          </a>
          .
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto neon-glow" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}
