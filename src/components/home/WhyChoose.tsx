"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

const cardClass = cn(
  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface",
  "transition-all duration-300 ease-out will-change-transform",
  "hover:-translate-y-1.5 hover:scale-[1.015]",
  "hover:border-accent/50",
  "hover:shadow-[0_0_0_1px_rgba(57,255,20,0.18),0_0_32px_rgba(57,255,20,0.14),0_16px_36px_rgba(0,0,0,0.4)]"
);

function RisingChartVisual() {
  const bars = [28, 42, 38, 58, 52, 72, 68, 88];
  return (
    <div className="relative flex h-full w-full flex-col justify-end px-4 pb-3 pt-4">
      <div className="pointer-events-none absolute inset-x-4 top-4 bottom-10 flex flex-col justify-between opacity-40">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-px w-full bg-border" />
        ))}
      </div>
      <div className="relative flex h-28 items-end justify-between gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="relative flex-1 rounded-t-sm bg-gradient-to-t from-accent/25 to-accent"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: `${h}%`, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M4 78 L16 62 L28 66 L40 48 L52 52 L64 32 L76 36 L92 14"
            fill="none"
            stroke="#39FF14"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.35, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 4px rgba(57,255,20,0.6))" }}
          />
          <motion.circle
            cx="92"
            cy="14"
            r="2.5"
            fill="#39FF14"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.35 }}
            style={{ filter: "drop-shadow(0 0 6px rgba(57,255,20,0.8))" }}
          />
        </svg>
      </div>
      <div className="mt-2 flex items-center justify-between text-[10px] font-medium">
        <span className="text-muted">Traffic → Leads</span>
        <span className="text-accent neon-text">↑ +187%</span>
      </div>
    </div>
  );
}

function SupportGaugeVisual() {
  const circumference = 2 * Math.PI * 46;
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-4 py-3">
      <div className="relative h-28 w-28">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle
            cx="60"
            cy="60"
            r="46"
            fill="none"
            stroke="rgba(34,34,34,1)"
            strokeWidth="8"
          />
          <motion.circle
            cx="60"
            cy="60"
            r="46"
            fill="none"
            stroke="#39FF14"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference * 0.12 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ filter: "drop-shadow(0 0 8px rgba(57,255,20,0.55))" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-2xl font-bold text-accent neon-text"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.45 }}
          >
            24/7
          </motion.span>
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted">
            online
          </span>
        </div>
        <motion.div
          className="absolute inset-2 rounded-full border border-accent/30"
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.1, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="mt-2 flex items-center gap-2 text-[10px] text-muted">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        Priority response
      </div>
    </div>
  );
}

function StatsVisual() {
  const stats = [
    { label: "Leads Generated", value: "2.4k+", delay: 0.2 },
    { label: "Avg. ROI", value: "4.1x", delay: 0.35 },
    { label: "Cost per Lead", value: "↓ 38%", delay: 0.5 },
  ];

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 px-4 py-4">
      {stats.map((s) => (
        <motion.div
          key={s.label}
          className="flex items-center justify-between rounded-lg border border-border bg-background/70 px-3 py-2"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: s.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[11px] text-muted sm:text-xs">{s.label}</span>
          <span className="text-sm font-bold text-accent neon-text sm:text-base">
            {s.value}
          </span>
        </motion.div>
      ))}
      <motion.div
        className="flex items-center justify-between rounded-lg border border-accent/25 bg-accent/5 px-3 py-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65, duration: 0.5 }}
      >
        <span className="text-[11px] text-muted sm:text-xs">Client rating</span>
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5" role="img" aria-label="5.0 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.svg
                key={i}
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5 text-accent"
                fill="currentColor"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.75 + i * 0.06, duration: 0.3 }}
              >
                <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.27 5.06 16.7l.94-5.5-4-3.9 5.53-.8L10 1.5z" />
              </motion.svg>
            ))}
          </div>
          <span className="text-sm font-bold text-accent neon-text">5.0</span>
        </div>
      </motion.div>
    </div>
  );
}

const CARDS = [
  {
    title: "More Leads, Not Just Traffic",
    description:
      "Every site, ad, and ranking strategy is built to convert—calls, forms, and booked jobs you can actually measure.",
    visual: <RisingChartVisual />,
  },
  {
    title: "24/7 Priority Support",
    description:
      "Questions, campaign tweaks, or site issues—you get a real human who knows your account, not a ticket black hole.",
    visual: <SupportGaugeVisual />,
  },
  {
    title: "Transparent & Measurable Growth",
    description:
      "Clear reporting on leads, ROI, and cost per lead so you always know what’s working and where dollars go.",
    visual: <StatsVisual />,
  },
] as const;

export function WhyChoose() {
  return (
    <Section className="bg-background-elevated" id="why-choose">
      <SectionHeading
        eyebrow="The difference"
        title="Why Choose Leads by RJ"
        description="Local lead generation built for results—not vanity metrics. Here’s what sets the work apart."
      />

      <StaggerChildren
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        stagger={0.16}
      >
        {CARDS.map((card) => (
          <StaggerItem key={card.title}>
            <article className={cardClass}>
              <div className="relative h-44 border-b border-border bg-gradient-to-b from-background to-surface sm:h-48">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(57,255,20,0.08),transparent_60%)]" />
                <div className="relative h-full">{card.visual}</div>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-semibold leading-snug text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
