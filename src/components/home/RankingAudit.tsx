"use client";

import { useState, type FormEvent } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";
import { Section, SectionHeading } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function RankingAudit() {
  const [service, setService] = useState("");
  const [cityState, setCityState] = useState("");
  const [searchUrl, setSearchUrl] = useState<string | null>(null);

  function generateLink(e: FormEvent) {
    e.preventDefault();
    const query = [service.trim(), cityState.trim()].filter(Boolean).join(" ");
    if (!query) return;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    setSearchUrl(url);
  }

  return (
    <Section id="ranking-audit" className="bg-background">
      <AnimatedSection>
        <div className="overflow-hidden rounded-3xl border border-accent/25 bg-surface neon-border">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-border p-6 sm:p-10 lg:border-b-0 lg:border-r">
              <SectionHeading
                align="left"
                eyebrow="Free lead magnet"
                title="Free professional ranking audit"
                description="Enter the service and city you want to rank for. We’ll generate a Google search link so you can see who shows up today—and how we can help you climb."
              />
              <ul className="mt-2 space-y-2 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  See current local pack & organic competitors
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Spot gaps in GBP, site, and ads presence
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  Get a clear next-step plan—no hard sell
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-10">
              <form onSubmit={generateLink} className="space-y-5">
                <div>
                  <Label htmlFor="audit-service" required>
                    Service
                  </Label>
                  <Input
                    id="audit-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    placeholder="e.g. landscaping, plumber, dentist"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="audit-location" required>
                    City / State
                  </Label>
                  <Input
                    id="audit-location"
                    value={cityState}
                    onChange={(e) => setCityState(e.target.value)}
                    placeholder="e.g. Irvine, CA"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" variant="secondary" className="sm:flex-1">
                    Generate Google Search Link
                  </Button>
                  <Button href="/contact" className="sm:flex-1 neon-glow">
                    Get Free Audit
                  </Button>
                </div>

                {searchUrl && (
                  <div className="rounded-xl border border-accent/20 bg-background-elevated p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Your search link
                    </p>
                    <a
                      href={searchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-start gap-2 break-all text-sm text-accent hover:underline"
                    >
                      <ExternalLink className="mt-0.5 h-4 w-4 shrink-0" />
                      {searchUrl}
                    </a>
                    <p className="mt-3 text-xs text-muted">
                      Open the link, note who ranks, then request your free
                      professional audit for a full breakdown.
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
