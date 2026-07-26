"use client";

import { Suspense, useEffect, useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Label } from "@/components/ui/Input";
import { SITE } from "@/lib/constants";

function buildAuditPrefill(service: string | null, location: string | null) {
  if (!service && !location) return "";
  const parts = [
    "I'd like a free ranking audit.",
    service ? `Service / business type: ${service}` : null,
    location ? `City & state: ${location}` : null,
  ].filter(Boolean);
  return parts.join("\n");
}

type ContactFormProps = {
  title?: string;
  submitLabel?: string;
};

function ContactFormInner({
  title = "Send a message",
  submitLabel = "Send Message",
}: ContactFormProps) {
  const uid = useId();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [messagePrefill, setMessagePrefill] = useState("");

  useEffect(() => {
    const service = searchParams.get("service");
    const location = searchParams.get("location");
    const intent = searchParams.get("intent");
    if (intent === "ranking-audit" || service || location) {
      setMessagePrefill(buildAuditPrefill(service, location));
    }
  }, [searchParams]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const businessName = String(data.get("businessName") || "").trim();
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
      // Server route forwards these exact keys to Google Apps Script
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          businessName: businessName || "",
          phone,
          email,
          website: website || "",
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
            `Something went wrong. Please try again or email ${SITE.email}.`
        );
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        `Something went wrong. Please email ${SITE.email} directly.`
      );
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-4 rounded-xl border border-accent/30 bg-accent/5 p-5 sm:p-8">
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
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
      {title ? (
        <h3 className="text-lg font-semibold text-foreground sm:text-xl">
          {title}
        </h3>
      ) : null}

      <div
        className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
        aria-hidden
      >
        <label htmlFor={`${uid}-company`}>Company</label>
        <input
          id={`${uid}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
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
          <Label htmlFor={`${uid}-businessName`}>Business Name</Label>
          <Input
            id={`${uid}-businessName`}
            name="businessName"
            autoComplete="organization"
            placeholder="Your business (optional)"
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
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
          defaultValue={messagePrefill}
          key={messagePrefill || "message-empty"}
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
          className="text-[13px] leading-relaxed text-muted sm:text-sm"
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
        className="w-full neon-glow sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}

export function ContactForm(props: ContactFormProps) {
  return (
    <Suspense
      fallback={
        <div className="space-y-4 animate-pulse">
          <div className="h-11 rounded-lg bg-surface-elevated" />
          <div className="h-11 rounded-lg bg-surface-elevated" />
          <div className="h-28 rounded-lg bg-surface-elevated" />
        </div>
      }
    >
      <ContactFormInner {...props} />
    </Suspense>
  );
}
