"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

const ROWS = [
  {
    us: "You work directly with me",
    them: "Different account managers",
  },
  {
    us: "Target Marketing",
    them: "Generic marketing",
  },
  {
    us: "Fast replies – usually same day",
    them: "Slow responses",
  },
  {
    us: "Monthly reports on leads & ROI",
    them: "Vague or confusing reports",
  },
  {
    us: "Constant campaign improvements",
    them: "Limited support after setup",
  },
] as const;

export function Comparison() {
  return (
    <Section className="bg-background" id="comparison">
      <SectionHeading
        eyebrow="The clear choice"
        title="Leads by RJ vs. Typical Agencies"
        description="Same goal. Completely different experience. See what you actually get."
      />

      <AnimatedSection>
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_0_40px_rgba(0,0,0,0.35)]">
          {/* Column headers */}
          <div className="grid grid-cols-2 border-b border-border">
            <div className="flex items-center justify-center gap-2 border-r border-border bg-accent/[0.06] px-4 py-5 sm:gap-3 sm:px-6 sm:py-6">
              <Image
                src="/logo.png"
                alt={SITE.name}
                width={808}
                height={288}
                className="logo-glow h-8 w-auto sm:h-10"
                sizes="140px"
              />
            </div>
            <div className="flex items-center justify-center bg-background-elevated px-4 py-5 sm:px-6 sm:py-6">
              <span className="text-center text-sm font-semibold text-muted sm:text-base">
                Typical Agencies
              </span>
            </div>
          </div>

          {/* Rows */}
          <StaggerChildren stagger={0.1}>
            {ROWS.map((row, i) => (
              <StaggerItem key={row.us}>
                <div
                  className={cn(
                    "grid grid-cols-2",
                    i < ROWS.length - 1 && "border-b border-border"
                  )}
                >
                  {/* Us */}
                  <div className="flex items-start gap-2.5 border-r border-border bg-accent/[0.03] px-3 py-4 sm:items-center sm:gap-3 sm:px-6 sm:py-5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent sm:mt-0 sm:h-6 sm:w-6">
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-xs font-medium leading-snug text-foreground sm:text-sm">
                      {row.us}
                    </span>
                  </div>
                  {/* Them */}
                  <div className="flex items-start gap-2.5 bg-background-elevated/50 px-3 py-4 sm:items-center sm:gap-3 sm:px-6 sm:py-5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400/80 sm:mt-0 sm:h-6 sm:w-6">
                      <X className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-xs leading-snug text-muted sm:text-sm">
                      {row.them}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </AnimatedSection>

      <motion.div
        className="mt-10 flex flex-col items-center gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="max-w-lg text-sm leading-relaxed text-muted sm:text-base">
          Ready for marketing that actually generates leads—and a partner who
          answers when you call?
        </p>
        <Button href="/contact" size="lg" className="neon-glow">
          Get Free Ranking Audit
        </Button>
      </motion.div>
    </Section>
  );
}
