"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Code2, Megaphone, Search, Check } from "lucide-react";
import { SERVICES, SERVICE_TAGS } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

function WebsiteVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="w-[72%] overflow-hidden rounded-lg border border-border bg-background shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-1 border-b border-border bg-surface-elevated px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
          <span className="ml-2 h-1 flex-1 rounded-full bg-border" />
        </div>
        <div className="space-y-1.5 p-2.5">
          <div className="h-2 w-2/3 rounded bg-accent/25" />
          <div className="h-1.5 w-full rounded bg-border" />
          <div className="h-1.5 w-5/6 rounded bg-border" />
          <div className="mt-2 grid grid-cols-3 gap-1">
            <div className="h-6 rounded bg-surface-elevated" />
            <div className="h-6 rounded bg-surface-elevated" />
            <div className="h-6 rounded border border-accent/30 bg-accent/10" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-lg border border-accent/35 bg-background text-accent shadow-[0_0_14px_rgba(57,255,20,0.25)]">
        <Code2 className="h-4 w-4" aria-hidden />
      </div>
    </div>
  );
}

function AdsVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="flex w-full flex-col items-center gap-2 px-3">
        <div className="flex w-full items-end justify-center gap-1.5 pt-2">
          {[40, 58, 72, 88, 64].map((h, i) => (
            <motion.div
              key={i}
              className="w-3 rounded-t-sm bg-gradient-to-t from-accent/20 to-accent"
              style={{ height: h * 0.55 }}
              animate={{ height: [h * 0.4, h * 0.6, h * 0.45] }}
              transition={{
                duration: 2.4 + i * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.12,
              }}
            />
          ))}
        </div>
        <div className="flex w-full items-center justify-between rounded-md border border-border bg-background/80 px-2 py-1">
          <span className="text-[9px] font-medium text-muted">ROAS</span>
          <span className="text-[10px] font-bold text-accent">↑ 3.4x</span>
        </div>
      </div>
      <div className="absolute -top-0.5 -right-0.5 flex h-8 w-8 items-center justify-center rounded-lg border border-accent/35 bg-background text-accent shadow-[0_0_14px_rgba(57,255,20,0.25)]">
        <Megaphone className="h-4 w-4" aria-hidden />
      </div>
    </div>
  );
}

function SeoVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="relative">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background">
          <Search className="h-7 w-7 text-accent" aria-hidden />
        </div>
        <motion.div
          className="absolute inset-0 rounded-full border border-accent/40"
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
        <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
          {["#1", "#2", "#3"].map((rank, i) => (
            <span
              key={rank}
              className={cn(
                "rounded px-1.5 py-0.5 text-[9px] font-bold",
                i === 0
                  ? "bg-accent text-black shadow-[0_0_10px_rgba(57,255,20,0.4)]"
                  : "border border-border bg-surface text-muted"
              )}
            >
              {rank}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function GbpVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Mini map backdrop */}
      <div
        className="absolute inset-2 rounded-lg opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,255,20,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.06) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <svg
        viewBox="0 0 80 80"
        className="relative h-20 w-20"
        aria-hidden
      >
        {/* Soft ground glow */}
        <motion.ellipse
          cx="40"
          cy="62"
          rx="16"
          ry="5"
          fill="rgba(57,255,20,0.25)"
          animate={{ opacity: [0.25, 0.7, 0.25], scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pulse rings */}
        <motion.circle
          cx="40"
          cy="38"
          r={10}
          fill="none"
          stroke="rgba(57,255,20,0.7)"
          strokeWidth={1.5}
          animate={{ r: [8, 22], opacity: [0.7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.circle
          cx="40"
          cy="38"
          r={10}
          fill="none"
          stroke="rgba(57,255,20,0.4)"
          strokeWidth={1}
          animate={{ r: [8, 20], opacity: [0.5, 0] }}
          transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeOut" }}
        />
        {/* Pin body floating */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M40 18 C32 18 26 24.2 26 32 C26 42 40 56 40 56 S54 42 54 32 C54 24.2 48 18 40 18 Z"
            fill="#39FF14"
            style={{ filter: "drop-shadow(0 0 8px rgba(57,255,20,0.7))" }}
          />
          <circle cx="40" cy="31" r="5" fill="#0A0A0A" />
          <motion.circle
            cx="40"
            cy="31"
            r="2.4"
            fill="#39FF14"
            animate={{ opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>
      </svg>
    </div>
  );
}

const visuals: Record<(typeof SERVICES)[number]["id"], ReactNode> = {
  web: <WebsiteVisual />,
  ads: <AdsVisual />,
  seo: <SeoVisual />,
  gbp: <GbpVisual />,
};

export function Services() {
  return (
    <Section className="bg-background" id="services">
      <SectionHeading
        eyebrow="What I Offer"
        title="Services built to generate local leads"
        description="Four pillars that work together—so your website, ads, search presence, and Google profile all pull in the same direction."
      />

      <StaggerChildren
        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        stagger={0.14}
      >
        {SERVICES.map((service) => (
          <StaggerItem key={service.id}>
            <article
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface",
                "transition-all duration-300 ease-out will-change-transform",
                "hover:-translate-y-1.5 hover:scale-[1.02]",
                "hover:border-accent/50",
                "hover:shadow-[0_0_0_1px_rgba(57,255,20,0.18),0_0_32px_rgba(57,255,20,0.14),0_16px_36px_rgba(0,0,0,0.4)]"
              )}
            >
              {/* Visual panel */}
              <div className="relative h-32 border-b border-border bg-gradient-to-b from-background-elevated to-surface sm:h-40">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(57,255,20,0.08),transparent_60%)]" />
                <div className="relative h-full p-3 sm:p-4">{visuals[service.id]}</div>
              </div>

              {/* Copy */}
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="text-[0.95rem] font-semibold leading-snug text-foreground sm:text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted sm:text-sm">
                  {service.description}
                </p>
                <ul className="mt-3 space-y-1.5 border-t border-border pt-3 sm:mt-4 sm:pt-4">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs text-muted sm:text-sm"
                    >
                      <Check
                        className="h-3.5 w-3.5 shrink-0 text-accent"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Service tags */}
      <StaggerChildren
        className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:mt-12 sm:gap-2.5"
        stagger={0.05}
      >
        {SERVICE_TAGS.map((tag) => (
          <StaggerItem key={tag}>
            <span className="inline-flex rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-muted transition-colors duration-300 hover:border-accent/40 hover:text-accent sm:px-3 sm:py-1.5 sm:text-sm">
              {tag}
            </span>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
