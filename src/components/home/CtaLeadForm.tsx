"use client";

import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SITE } from "@/lib/constants";

export function CtaLeadForm() {
  return (
    <Section
      id="contact"
      className="scroll-mt-[4.75rem] bg-background sm:scroll-mt-24"
    >
      <AnimatedSection>
        <div
          id="contact-form"
          className="scroll-mt-[4.75rem] grid gap-6 rounded-2xl border border-border bg-surface p-4 sm:scroll-mt-24 sm:gap-8 sm:p-8 lg:grid-cols-2 lg:gap-12"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent neon-text sm:text-xs">
              Let&apos;s talk
            </p>
            <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-foreground sm:mt-3 sm:text-4xl">
              Ready for more qualified leads?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
              Tell me about your business. I&apos;ll reply with clear next steps—
              whether that&apos;s a free ranking audit, a site rebuild, ads, or
              Google Business Profile help.
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted sm:mt-8 sm:space-y-3">
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
