"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink, Search, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function RankingAudit() {
  const router = useRouter();
  const [service, setService] = useState("");
  const [cityState, setCityState] = useState("");
  const [searchUrl, setSearchUrl] = useState<string | null>(null);
  const [error, setError] = useState("");

  function buildQuery() {
    return [service.trim(), cityState.trim()].filter(Boolean).join(" ");
  }

  function generateLink() {
    if (!service.trim() || !cityState.trim()) {
      setError("Enter both your service type and city / state.");
      return;
    }
    setError("");
    const query = buildQuery();
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    setSearchUrl(url);
  }

  function requestAudit(e: FormEvent) {
    e.preventDefault();
    if (!service.trim() || !cityState.trim()) {
      setError("Enter both your service type and city / state.");
      return;
    }
    setError("");
    const query = buildQuery();
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    setSearchUrl(googleUrl);

    const params = new URLSearchParams({
      service: service.trim(),
      location: cityState.trim(),
      intent: "ranking-audit",
    });
    router.push(`/contact?${params.toString()}`);
  }

  return (
    <Section id="ranking-audit" className="bg-background">
      <AnimatedSection>
        <div className="overflow-hidden rounded-2xl border border-accent/30 bg-surface shadow-[0_0_40px_rgba(57,255,20,0.06)] sm:rounded-3xl">
          <div className="grid lg:grid-cols-2">
            {/* Left: value prop */}
            <div className="border-b border-border p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent neon-text">
                Free ranking audit
              </p>
              <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                See where you stand on Google—then climb
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                Tell me your service and city. I&apos;ll help you check who ranks
                today and deliver a free professional audit with clear next
                steps to get more local leads.
              </p>

              <ul className="mt-5 space-y-2.5 sm:mt-6">
                {[
                  "See local pack & organic competitors",
                  "Spot gaps in GBP, site, and ads",
                  "Get a clear action plan—no hard sell",
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
            </div>

            {/* Right: form */}
            <div className="bg-background-elevated/40 p-5 sm:p-8 lg:p-10">
              <form onSubmit={requestAudit} className="space-y-4 sm:space-y-5">
                <div>
                  <Label htmlFor="audit-service" required>
                    Service / Business type
                  </Label>
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <Input
                      id="audit-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      placeholder="e.g. landscaping, plumber, dentist"
                      required
                      className="pl-10"
                      autoComplete="organization-title"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="audit-location" required>
                    City &amp; State
                  </Label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <Input
                      id="audit-location"
                      value={cityState}
                      onChange={(e) => setCityState(e.target.value)}
                      placeholder="e.g. Irvine, CA"
                      required
                      className="pl-10"
                      autoComplete="address-level2"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-400" role="alert">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full neon-glow-strong"
                >
                  <Sparkles className="h-4 w-4" />
                  Get Free Ranking Audit
                </Button>

                <button
                  type="button"
                  onClick={generateLink}
                  className="w-full text-center text-xs font-medium text-muted transition-colors hover:text-accent sm:text-sm"
                >
                  Or just check Google rankings first →
                </button>

                {searchUrl && (
                  <div className="rounded-xl border border-accent/25 bg-background p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Your Google search
                    </p>
                    <a
                      href={searchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-start gap-2 break-all text-sm text-foreground hover:text-accent"
                    >
                      <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      Open results for “{buildQuery()}”
                    </a>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      Review who shows up, then hit Get Free Ranking Audit for a
                      full professional breakdown.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
