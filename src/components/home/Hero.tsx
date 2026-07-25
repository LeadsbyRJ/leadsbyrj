"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4.75rem)] items-center overflow-hidden bg-radial-neon">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

      <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Crisp logo — minimal glow, no green blob */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="mb-6 sm:mb-7"
          >
            <Image
              src="/logo.png"
              alt={`${SITE.name} logo`}
              width={808}
              height={288}
              className="logo-glow-hero h-14 w-auto sm:h-16 md:h-[4.5rem]"
              priority
              sizes="(max-width: 640px) 220px, 280px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3.5 py-1.5 text-xs font-medium text-accent sm:mb-6 sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55, ease }}
            className="text-[2rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            More local{" "}
            <span className="neon-text">leads</span>
            <br className="hidden sm:block" /> that turn into customers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease }}
            className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-muted sm:mt-5 sm:max-w-xl sm:text-lg"
          >
            Websites, Google Ads, SEO, and Google Business Profile—built and
            managed so Orange County (and beyond) businesses get found, trusted,
            and called.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.5, ease }}
            className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-9 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            <Button href="/contact" size="xl" className="min-w-[200px]">
              Get Free Ranking Audit
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              size="xl"
              className="min-w-[200px]"
            >
              View Projects
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
