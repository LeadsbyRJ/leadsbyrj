"use client";

import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SITE } from "@/lib/constants";

export function CtaLeadForm() {
  return (
    <Section className="bg-background">
      <AnimatedSection>
        <div className="grid gap-8 rounded-2xl border border-border bg-surface p-5 sm:p-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent neon-text">
              Let&apos;s talk
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready for more qualified leads?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Tell me about your business. I&apos;ll reply with clear next steps—
              whether that&apos;s a free ranking audit, a site rebuild, ads, or
              Google Business Profile help.
            </p>
            <div className="mt-8 space-y-3 text-sm text-muted">
              <p>
                <span className="text-foreground">Email:</span>{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-accent hover:underline"
                >
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="text-foreground">Phone:</span>{" "}
                <a href={SITE.phoneHref} className="text-accent hover:underline">
                  {SITE.phone}
                </a>
              </p>
            </div>
          </div>
          <ContactForm title="" submitLabel="Request Free Ranking Audit" />
        </div>
      </AnimatedSection>
    </Section>
  );
}
