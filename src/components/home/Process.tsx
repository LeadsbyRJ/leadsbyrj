"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection";

export function Process() {
  return (
    <Section className="bg-background-elevated">
      <SectionHeading
        eyebrow="Process"
        title="A simple 3-step path to more leads"
        description="No fluff. Clear discovery, solid execution, and ongoing optimization."
      />
      <StaggerChildren className="relative grid gap-6 md:grid-cols-3">
        <div
          className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block"
          aria-hidden
        />
        {PROCESS_STEPS.map((step) => (
          <StaggerItem key={step.step}>
            <div className="relative rounded-2xl border border-border bg-surface p-6 sm:p-8 text-center md:text-left">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-background text-sm font-bold text-accent neon-glow">
                {step.step}
              </span>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
