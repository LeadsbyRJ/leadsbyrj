"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "I help local businesses generate more leads through website design & development, Google Ads and Local Services Ads, SEO, and Google Business Profile optimization and management. Everything is built to convert—not just look good.",
  },
  {
    question: "How quickly can I expect to see results?",
    answer:
      "It depends on the channel. Google Ads and Local Services Ads can start generating leads within days once campaigns are live. Google Business Profile and SEO typically build over weeks to months as rankings and trust compound. I’ll set clear expectations for your situation on day one.",
  },
  {
    question: "Do you work with businesses in specific industries?",
    answer:
      "I work best with local service and product businesses that need a steady flow of qualified leads—landscaping, home services, professional services, retail, and similar. If you sell to customers in a defined service area or niche, we’re likely a fit.",
  },
  {
    question: "How does your pricing work?",
    answer:
      "Pricing is transparent and published on the Pricing page. You can choose individual services (one-time or monthly) or packages with 20% savings. No mystery retainers—you know what you’re investing before we start. Prefer a free ranking audit first? Reach out and we’ll map the best path for your goals and budget.",
  },
] as const;

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-surface transition-colors duration-300",
        isOpen
          ? "border-accent/40 shadow-[0_0_24px_rgba(57,255,20,0.08)]"
          : "border-border hover:border-accent/25"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:gap-4 sm:px-6 sm:py-5"
      >
        <span className="text-[13px] font-semibold leading-snug text-foreground sm:text-base">
          {question}
        </span>
        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 sm:h-8 sm:w-8",
            isOpen
              ? "border-accent/50 bg-accent/10 text-accent"
              : "border-border bg-background text-muted"
          )}
        >
          {isOpen ? (
            <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
          ) : (
            <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-4 pb-4 pt-3 sm:px-6 sm:pb-6">
              <p className="text-[13px] leading-relaxed text-muted sm:text-[0.95rem]">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-background-elevated" id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title="Your Questions Answered"
        description="Straight answers about services, timelines, industries, and pricing—so you know what to expect before we work together."
      />

      <AnimatedSection className="mx-auto max-w-2xl space-y-3">
        {FAQS.map((item, i) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </AnimatedSection>
    </Section>
  );
}
