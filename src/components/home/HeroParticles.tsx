"use client";

import { motion } from "framer-motion";

/** Visible but elegant neon particles — slow drift, not a storm */
const PARTICLES = [
  { left: "6%", top: "16%", size: 3, delay: 0, duration: 13, drift: 20 },
  { left: "14%", top: "42%", size: 2.5, delay: 1.2, duration: 15, drift: 16 },
  { left: "10%", top: "72%", size: 3, delay: 2.4, duration: 14, drift: 18 },
  { left: "22%", top: "28%", size: 3.5, delay: 0.6, duration: 16, drift: 22 },
  { left: "28%", top: "58%", size: 2.5, delay: 3.1, duration: 15, drift: 14 },
  { left: "32%", top: "82%", size: 3, delay: 1.8, duration: 14.5, drift: 17 },
  { left: "40%", top: "18%", size: 2.5, delay: 0.3, duration: 15.5, drift: 15 },
  { left: "44%", top: "48%", size: 4, delay: 2.0, duration: 13.5, drift: 20 },
  { left: "48%", top: "70%", size: 2.5, delay: 3.6, duration: 16, drift: 12 },
  { left: "54%", top: "32%", size: 3, delay: 1.0, duration: 14, drift: 18 },
  { left: "58%", top: "62%", size: 3.5, delay: 2.7, duration: 15, drift: 16 },
  { left: "62%", top: "12%", size: 2.5, delay: 0.9, duration: 17, drift: 14 },
  { left: "68%", top: "40%", size: 3, delay: 1.5, duration: 14.5, drift: 19 },
  { left: "72%", top: "76%", size: 3.5, delay: 3.3, duration: 15.5, drift: 15 },
  { left: "78%", top: "24%", size: 3, delay: 0.4, duration: 16, drift: 17 },
  { left: "82%", top: "52%", size: 2.5, delay: 2.2, duration: 13, drift: 20 },
  { left: "86%", top: "68%", size: 3.5, delay: 1.6, duration: 15, drift: 14 },
  { left: "90%", top: "36%", size: 3, delay: 2.9, duration: 14, drift: 18 },
  { left: "94%", top: "80%", size: 2.5, delay: 0.7, duration: 16.5, drift: 12 },
  { left: "18%", top: "50%", size: 3, delay: 3.9, duration: 15, drift: 16 },
  { left: "36%", top: "38%", size: 2.5, delay: 2.5, duration: 17, drift: 13 },
  { left: "75%", top: "48%", size: 3, delay: 1.3, duration: 14, drift: 18 },
] as const;

export function HeroParticles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow:
              "0 0 10px rgba(57,255,20,0.75), 0 0 18px rgba(57,255,20,0.35)",
          }}
          animate={{
            x: [0, p.drift * 0.45, -p.drift * 0.3, 0],
            y: [0, -p.drift, -p.drift * 0.35, 0],
            opacity: [0.35, 0.85, 0.5, 0.35],
            scale: [1, 1.2, 1.05, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
