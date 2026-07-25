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
      <StaggerChildren className="relative grid gap-5 md:grid-cols-3">
        <div
          className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block"
          aria-hidden
        />
        {PROCESS_STEPS.map((step) => (
          <StaggerItem key={step.step}>
            <div className="relative rounded-2xl border border-border bg-surface p-5 sm:p-6 text-center transition-all duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:scale-[1.02] hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(57,255,20,0.18),0_0_28px_rgba(57,255,20,0.16)] md:text-left">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-background text-sm font-bold text-accent">
                {step.step}
              </span>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">{step.title}</h3>
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
