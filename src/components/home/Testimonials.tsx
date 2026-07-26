"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import {
  AnimatedSection,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

/**
 * Placeholder slots for future real testimonials.
 * Drop in { quote, name, role, rating } objects when ready.
 */
export const TESTIMONIALS: Array<{
  quote: string;
  name: string;
  role: string;
  rating?: number;
}> = [
  // Example shape for later:
  // {
  //   quote: "…",
  //   name: "Client Name",
  //   role: "Business · City",
  //   rating: 5,
  // },
];

function ComingSoonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-accent/5 blur-2xl" />
      <Quote className="h-8 w-8 text-accent/40" aria-hidden />
      <div className="mt-4 flex gap-0.5 opacity-40" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <div className="mt-5 flex-1 space-y-2.5">
        <div className="h-3 w-full rounded bg-border/80" />
        <div className="h-3 w-11/12 rounded bg-border/60" />
        <div className="h-3 w-4/5 rounded bg-border/50" />
      </div>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <div className="h-10 w-10 rounded-full border border-border bg-background" />
        <div className="space-y-1.5">
          <div className="h-2.5 w-24 rounded bg-border/80" />
          <div className="h-2 w-16 rounded bg-border/50" />
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const hasReviews = TESTIMONIALS.length > 0;

  return (
    <Section className="bg-background" id="testimonials">
      <SectionHeading
        eyebrow="Social proof"
        title="What Clients Say"
        description={
          hasReviews
            ? "Real feedback from businesses that grew with Leads by RJ."
            : "Real client reviews coming soon. I’m currently collecting feedback from recent projects."
        }
      />

      {hasReviews ? (
        <StaggerChildren className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name + t.quote.slice(0, 24)}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_24px_rgba(57,255,20,0.1)] sm:p-7">
                <Quote className="h-7 w-7 text-accent/50" aria-hidden />
                {typeof t.rating === "number" && (
                  <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < t.rating!
                            ? "fill-accent text-accent"
                            : "text-border"
                        )}
                      />
                    ))}
                  </div>
                )}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  “{t.quote}”
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{t.role}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      ) : (
        <AnimatedSection>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 rounded-2xl border border-accent/25 bg-accent/[0.04] px-5 py-6 text-center sm:px-8 sm:py-8">
              <motion.div
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(57,255,20,0)",
                    "0 0 20px 0 rgba(57,255,20,0.25)",
                    "0 0 0 0 rgba(57,255,20,0)",
                  ],
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="h-5 w-5 fill-accent" />
              </motion.div>
              <p className="text-base font-semibold text-foreground sm:text-lg">
                Client results &amp; reviews coming soon
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
                Real client reviews coming soon. I&apos;m currently collecting
                feedback from recent projects—check back shortly, or browse live
                work on the projects page.
              </p>
            </div>

            {/* Skeleton structure ready for real quotes */}
            <div className="grid gap-4 sm:grid-cols-3">
              <ComingSoonCard />
              <ComingSoonCard className="hidden sm:flex" />
              <ComingSoonCard className="hidden sm:flex" />
            </div>
          </div>
        </AnimatedSection>
      )}
    </Section>
  );
}
