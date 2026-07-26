"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { Search, MapPin, Sparkles, User, Phone, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function RankingAudit() {
  const uid = useId();
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [service, setService] = useState("");
  const [cityState, setCityState] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const serviceVal = String(data.get("service") || "").trim();
    const locationVal = String(data.get("location") || "").trim();
    const nameVal = String(data.get("name") || "").trim();
    const phoneVal = String(data.get("phone") || "").trim();
    const emailVal = String(data.get("email") || "").trim();
    const consent = data.get("consent") === "on";
    const company = String(data.get("company") || "").trim();

    if (!serviceVal || !locationVal || !nameVal || !phoneVal || !emailVal) {
      setStatus("error");
      setError("Please fill in all fields so I can deliver your free audit.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setError("Please accept the consent checkbox to continue.");
      return;
    }

    setStatus("submitting");
    setError("");

    const message = [
      "[Free Ranking Audit Request]",
      `Service / business type: ${serviceVal}`,
      `City & State: ${locationVal}`,
      "",
      "Please review my Google local rankings and send a free professional audit.",
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameVal,
          phone: phoneVal,
          email: emailVal,
          website: "",
          message,
          consent: true,
          company,
        }),
      });

      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(
          json.error ||
            `Something went wrong. Please try again or email ${SITE.email}.`
        );
        return;
      }

      setService("");
      setCityState("");
      setName("");
      setPhone("");
      setEmail("");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        `Something went wrong. Please email ${SITE.email} or call ${SITE.phone}.`
      );
    }
  }

  return (
    <Section id="ranking-audit" className="bg-background">
      <AnimatedSection>
        <div
          className={cn(
            "overflow-hidden rounded-2xl border border-accent/30 bg-surface sm:rounded-3xl",
            "shadow-[0_0_0_1px_rgba(57,255,20,0.08),0_0_48px_rgba(57,255,20,0.08)]"
          )}
        >
          <div className="grid lg:grid-cols-2">
            {/* Value prop */}
            <div className="relative border-b border-border p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(57,255,20,0.08),transparent_55%)]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent neon-text">
                  Free tool
                </p>
                <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2.15rem] lg:leading-tight">
                  Check Your Google Ranking Free
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                  Enter your service and city. I&apos;ll review how you show up
                  in Google Search &amp; Maps and send a free local ranking
                  audit with clear next steps to generate more leads.
                </p>

                <ul className="mt-5 space-y-2.5 sm:mt-7">
                  {[
                    "Local pack & Maps visibility check",
                    "Competitor snapshot for your market",
                    "Actionable SEO / GBP / ads recommendations",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[11px] font-bold text-accent">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs text-muted sm:mt-8">
                  No hard sell. Just a professional look at where you stand—and
                  how to climb.
                </p>
              </div>
            </div>

            {/* Interactive form */}
            <div className="bg-background-elevated/50 p-5 sm:p-8 lg:p-10">
              {status === "success" ? (
                <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent neon-glow">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <p className="text-lg font-semibold text-accent neon-text sm:text-xl">
                    Thanks! I&apos;ll review your rankings and get back to you
                    shortly.
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                    Your free ranking audit request was submitted. Prefer to
                    talk now? Call{" "}
                    <a
                      href={SITE.phoneHref}
                      className="text-accent hover:underline"
                    >
                      {SITE.phone}
                    </a>
                    .
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="mt-6"
                    onClick={() => setStatus("idle")}
                  >
                    Submit another request
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  <div>
                    <Label htmlFor={`${uid}-service`} required>
                      Business / Service type
                    </Label>
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                      <Input
                        id={`${uid}-service`}
                        name="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        placeholder="e.g. Landscaping, Plumber, Dentist"
                        required
                        className="pl-10"
                        disabled={status === "submitting"}
                        autoComplete="organization-title"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor={`${uid}-location`} required>
                      City &amp; State
                    </Label>
                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                      <Input
                        id={`${uid}-location`}
                        name="location"
                        value={cityState}
                        onChange={(e) => setCityState(e.target.value)}
                        placeholder="e.g. Irvine, CA"
                        required
                        className="pl-10"
                        disabled={status === "submitting"}
                        autoComplete="address-level2"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Label htmlFor={`${uid}-name`} required>
                        Name
                      </Label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                        <Input
                          id={`${uid}-name`}
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          required
                          className="pl-10"
                          disabled={status === "submitting"}
                          autoComplete="name"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor={`${uid}-phone`} required>
                        Phone
                      </Label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                        <Input
                          id={`${uid}-phone`}
                          name="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(949) 555-0100"
                          required
                          className="pl-10"
                          disabled={status === "submitting"}
                          autoComplete="tel"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor={`${uid}-email`} required>
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                        <Input
                          id={`${uid}-email`}
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@business.com"
                          required
                          className="pl-10"
                          disabled={status === "submitting"}
                          autoComplete="email"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Honeypot */}
                  <div
                    className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
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
                      className="text-[12px] leading-relaxed text-muted sm:text-[13px]"
                    >
                      I consent to being contacted by phone, text, and/or email
                      about my ranking audit. I can opt out anytime.{" "}
                      <Link
                        href="/privacy"
                        className="text-accent underline-offset-2 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>

                  {status === "error" && error && (
                    <p className="text-sm text-red-400" role="alert">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full neon-glow-strong"
                    disabled={status === "submitting"}
                  >
                    <Sparkles className="h-4 w-4" />
                    {status === "submitting"
                      ? "Submitting…"
                      : "Get My Free Ranking Audit"}
                  </Button>

                  <p className="text-center text-[11px] text-muted">
                    Free · No obligation · Usually same-day reply
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
