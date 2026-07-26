"use client";

import { useId, useState, type FormEvent } from "react";
import { Search, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

function buildMapsSearchUrl(service: string, location: string) {
  const query = [service.trim(), location.trim()].filter(Boolean).join(" ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function RankingAudit() {
  const uid = useId();
  const [service, setService] = useState("");
  const [cityState, setCityState] = useState("");
  const [mapsError, setMapsError] = useState("");

  function openGoogleMaps(e: FormEvent) {
    e.preventDefault();
    if (!service.trim() || !cityState.trim()) {
      setMapsError("Enter both a service / key phrase and city & state.");
      return;
    }
    setMapsError("");
    window.open(
      buildMapsSearchUrl(service, cityState),
      "_blank",
      "noopener,noreferrer"
    );
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
          {/* Primary: Google Maps search */}
          <div className="p-5 sm:p-8 lg:p-10">
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

          {/* Secondary: simple CTA to contact form */}
          <div className="border-t border-border bg-background-elevated/50 px-5 py-6 sm:px-8 sm:py-7 lg:px-10">
            <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  Want me to review your rankings and send a free audit?
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">
                  Share a few details on the contact form—I&apos;ll follow up
                  with clear next steps.
                </p>
              </div>
              <Button
                href="/contact?intent=ranking-audit"
                className="w-full shrink-0 neon-glow sm:w-auto"
              >
                Request a Free Personal Audit
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
