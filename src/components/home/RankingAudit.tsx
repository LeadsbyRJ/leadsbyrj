"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  ExternalLink,
  User,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

function buildMapsSearchUrl(service: string, location: string) {
  const query = [service.trim(), location.trim()].filter(Boolean).join(" ");
  // Google Maps search — less personalization bias than signed-in Google Search
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function RankingAudit() {
  const uid = useId();

  // Primary tool
  const [service, setService] = useState("");
  const [cityState, setCityState] = useState("");
  const [mapsError, setMapsError] = useState("");

  // Secondary lead form
  const [leadStatus, setLeadStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [leadError, setLeadError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function openGoogleMaps(e: FormEvent) {
    e.preventDefault();
    if (!service.trim() || !cityState.trim()) {
      setMapsError("Enter both a service / key phrase and city & state.");
      return;
    }
    setMapsError("");
    const url = buildMapsSearchUrl(service, cityState);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function submitLead(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const nameVal = String(data.get("name") || "").trim();
    const phoneVal = String(data.get("phone") || "").trim();
    const emailVal = String(data.get("email") || "").trim();
    const consent = data.get("consent") === "on";
    const company = String(data.get("company") || "").trim();

    if (!nameVal || !phoneVal || !emailVal) {
      setLeadStatus("error");
      setLeadError("Please enter your name, phone, and email.");
      return;
    }
    if (!consent) {
      setLeadStatus("error");
      setLeadError("Please accept the consent checkbox to continue.");
      return;
    }

    setLeadStatus("submitting");
    setLeadError("");

    const serviceLine = service.trim() || "(not specified)";
    const locationLine = cityState.trim() || "(not specified)";

    const message = [
      "[Free Personal Ranking Audit Request]",
      `Service / key phrase: ${serviceLine}`,
      `City & State: ${locationLine}`,
      "",
      "Please review my Google Maps / local rankings and send a free professional audit.",
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
        setLeadStatus("error");
        setLeadError(
          json.error ||
            `Something went wrong. Please try again or email ${SITE.email}.`
        );
        return;
      }

      setName("");
      setPhone("");
      setEmail("");
      form.reset();
      setLeadStatus("success");
    } catch {
      setLeadStatus("error");
      setLeadError(
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
          {/* ── Primary: Google Maps ranking check ── */}
          <div className="border-b border-border p-5 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent neon-text">
                Free ranking tool
              </p>
              <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Check Your Google Ranking Free
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                See who shows up for your service in your city—on Google Maps,
                with less personalization bias than a normal search. Instant.
                Free. No signup required.
              </p>
            </div>

            <form
              onSubmit={openGoogleMaps}
              className="mx-auto mt-6 max-w-xl space-y-4 sm:mt-8"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor={`${uid}-service`} required>
                    Service / Key Phrase
                  </Label>
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <Input
                      id={`${uid}-service`}
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      placeholder="e.g. Landscaping, Plumber"
                      required
                      className="pl-10"
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
                      autoComplete="address-level2"
                    />
                  </div>
                </div>
              </div>

              {mapsError && (
                <p className="text-center text-sm text-red-400" role="alert">
                  {mapsError}
                </p>
              )}

              <Button
                type="submit"
                size="xl"
                className="w-full neon-glow-strong sm:h-14"
              >
                <ExternalLink className="h-4 w-4" />
                Search on Google Maps
              </Button>

              <p className="text-center text-[11px] text-muted sm:text-xs">
                Opens Google Maps in a new tab · No account required
              </p>
            </form>
          </div>

          {/* ── Secondary: optional personal audit lead capture ── */}
          <div className="bg-background-elevated/50 p-5 sm:p-8 lg:px-10 lg:py-8">
            <div className="mx-auto max-w-xl">
              <div className="mb-5 text-center sm:mb-6 sm:text-left">
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  Want me to review your rankings and send you a free audit?
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
                  Optional. I&apos;ll look at your Maps / local presence and
                  email clear next steps—no hard sell.
                </p>
              </div>

              {leadStatus === "success" ? (
                <div className="rounded-xl border border-accent/30 bg-accent/5 p-5 text-center sm:p-6">
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-base font-semibold text-accent neon-text">
                    Thanks! I&apos;ll review your rankings and get back to you
                    shortly.
                  </p>
                  <p className="mt-2 text-xs text-muted sm:text-sm">
                    Prefer to talk now?{" "}
                    <a
                      href={SITE.phoneHref}
                      className="text-accent hover:underline"
                    >
                      {SITE.phone}
                    </a>
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="mt-4"
                    onClick={() => setLeadStatus("idle")}
                  >
                    Submit another request
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={submitLead}
                  className="space-y-3.5"
                  noValidate
                >
                  <div className="grid gap-3.5 sm:grid-cols-3">
                    <div>
                      <Label htmlFor={`${uid}-name`} required>
                        Name
                      </Label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
                        <Input
                          id={`${uid}-name`}
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          required
                          className="h-10 pl-9 text-sm"
                          disabled={leadStatus === "submitting"}
                          autoComplete="name"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor={`${uid}-phone`} required>
                        Phone
                      </Label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
                        <Input
                          id={`${uid}-phone`}
                          name="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(949) 555-0100"
                          required
                          className="h-10 pl-9 text-sm"
                          disabled={leadStatus === "submitting"}
                          autoComplete="tel"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor={`${uid}-email`} required>
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
                        <Input
                          id={`${uid}-email`}
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@business.com"
                          required
                          className="h-10 pl-9 text-sm"
                          disabled={leadStatus === "submitting"}
                          autoComplete="email"
                        />
                      </div>
                    </div>
                  </div>

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

                  <div className="flex items-start gap-2.5">
                    <input
                      id={`${uid}-consent`}
                      name="consent"
                      type="checkbox"
                      required
                      disabled={leadStatus === "submitting"}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-border bg-background-elevated accent-[var(--accent)]"
                    />
                    <label
                      htmlFor={`${uid}-consent`}
                      className="text-[11px] leading-relaxed text-muted sm:text-xs"
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

                  {leadStatus === "error" && leadError && (
                    <p className="text-sm text-red-400" role="alert">
                      {leadError}
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full border-accent/35 hover:border-accent/55 hover:text-accent"
                    disabled={leadStatus === "submitting"}
                  >
                    <Sparkles className="h-4 w-4 text-accent" />
                    {leadStatus === "submitting"
                      ? "Submitting…"
                      : "Get My Free Personal Audit"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
