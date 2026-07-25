"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { HeroMap } from "@/components/home/HeroMap";
import { HeroParticles } from "@/components/home/HeroParticles";
import { HeroBackground } from "@/components/home/HeroBackground";

const ease = [0.22, 1, 0.36, 1] as const;

const item = {
  hidden: { opacity: 0, y: 42 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.16,
      duration: 0.7,
      ease,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4.75rem)] items-center overflow-hidden bg-background">
      <HeroBackground />
      <HeroParticles />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

      <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Copy — CTAs first on mobile; map stacks below */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              custom={0}
              variants={item}
              initial="hidden"
              animate="show"
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
              custom={1}
              variants={item}
              initial="hidden"
              animate="show"
              className="mb-5 sm:mb-6"
            >
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/5 px-3.5 py-1.5 text-xs font-medium text-accent sm:text-sm"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(57,255,20,0)",
                    "0 0 18px 2px rgba(57,255,20,0.32)",
                    "0 0 0 0 rgba(57,255,20,0)",
                  ],
                  borderColor: [
                    "rgba(57,255,20,0.3)",
                    "rgba(57,255,20,0.65)",
                    "rgba(57,255,20,0.3)",
                  ],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available for work
              </motion.div>
            </motion.div>

            <motion.h1
              custom={2}
              variants={item}
              initial="hidden"
              animate="show"
              className="text-[2rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              More local{" "}
              <span className="neon-text">leads</span>
              <br className="hidden sm:block" /> that turn into customers
            </motion.h1>

            <motion.p
              custom={3}
              variants={item}
              initial="hidden"
              animate="show"
              className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-muted sm:mt-5 sm:max-w-xl sm:text-lg"
            >
              Websites, Google Ads, SEO, and Google Business Profile—built and
              managed so Orange County (and beyond) businesses get found,
              trusted, and called.
            </motion.p>

            <motion.div
              custom={4}
              variants={item}
              initial="hidden"
              animate="show"
              className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-9 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:gap-4 lg:justify-start"
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

          {/* Map: smaller/centered on mobile, full side column on desktop */}
          <div className="mt-2 w-full lg:mt-0">
            <HeroMap />
          </div>
        </div>
      </Container>
    </section>
  );
}
