"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Label } from "@/components/ui/Input";
import { SITE } from "@/lib/constants";

export function ContactForm({
  title = "Send a message",
  submitLabel = "Send Message",
}: {
  title?: string;
  submitLabel?: string;
}) {
  const uid = useId();
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const website = String(data.get("website") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent") === "on";
    const company = String(data.get("company") || "").trim();

    if (!name || !phone || !email || !message || !consent) {
      setStatus("error");
      setErrorMessage(
        "Please complete all required fields and accept the consent checkbox."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          website: website || undefined,
          message,
          consent,
          company,
        }),
      });

      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(
          json.error ||
            `Could not send message. Please email ${SITE.email} directly.`
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        `Something went wrong. Please email ${SITE.email} directly.`
      );
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-4 rounded-xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
        {title ? (
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        ) : null}
        <p className="text-base font-medium text-accent neon-text sm:text-lg">
          Thanks! I&apos;ll get back to you shortly.
        </p>
        <p className="text-sm leading-relaxed text-muted">
          Your message was sent successfully. Prefer to talk now? Call{" "}
          <a href={SITE.phoneHref} className="text-accent hover:underline">
            {SITE.phone}
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-accent hover:underline"
          >
            {SITE.email}
          </a>
          .
        </p>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {title ? (
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      ) : null}

      {/* Honeypot — hidden from users */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor={`${uid}-company`}>Company</label>
        <input
          id={`${uid}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor={`${uid}-name`} required>
            Name
          </Label>
          <Input
            id={`${uid}-name`}
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <Label htmlFor={`${uid}-phone`} required>
            Phone
          </Label>
          <Input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(949) 555-0100"
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor={`${uid}-email`} required>
            Email
          </Label>
          <Input
            id={`${uid}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@business.com"
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <Label htmlFor={`${uid}-website`}>Website</Label>
          <Input
            id={`${uid}-website`}
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="https:// (optional)"
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div>
        <Label htmlFor={`${uid}-message`} required>
          Message
        </Label>
        <Textarea
          id={`${uid}-message`}
          name="message"
          required
          placeholder="Tell me about your business and goals…"
          disabled={status === "submitting"}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id={`${uid}-consent`}
          name="consent"
          type="checkbox"
          required
          disabled={status === "submitting"}
          className="mt-1 h-4 w-4 shrink-0 rounded border-border bg-background-elevated accent-[var(--accent)]"
        />
        <label
          htmlFor={`${uid}-consent`}
          className="text-sm leading-relaxed text-muted"
        >
          I consent to being contacted by phone, text, and/or email regarding my
          inquiry. I understand I can opt out at any time. See our{" "}
          <Link
            href="/privacy"
            className="text-accent underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto neon-glow"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}
