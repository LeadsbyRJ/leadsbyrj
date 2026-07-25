"use client";

import { motion } from "framer-motion";

/** Low-density, slow-drifting neon particles — elegant, not busy */
const PARTICLES = [
  { left: "12%", top: "22%", size: 2, delay: 0, duration: 14, drift: 18 },
  { left: "22%", top: "68%", size: 1.5, delay: 2.1, duration: 16, drift: 14 },
  { left: "38%", top: "35%", size: 2, delay: 0.8, duration: 15, drift: 20 },
  { left: "52%", top: "18%", size: 1.5, delay: 3.2, duration: 17, drift: 12 },
  { left: "64%", top: "58%", size: 2.5, delay: 1.4, duration: 15.5, drift: 16 },
  { left: "78%", top: "32%", size: 1.5, delay: 2.8, duration: 16.5, drift: 15 },
  { left: "88%", top: "72%", size: 2, delay: 0.5, duration: 14.5, drift: 18 },
  { left: "8%", top: "48%", size: 1.5, delay: 3.8, duration: 18, drift: 12 },
  { left: "46%", top: "78%", size: 2, delay: 1.9, duration: 15, drift: 14 },
  { left: "72%", top: "12%", size: 1.5, delay: 2.4, duration: 16, drift: 16 },
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
            boxShadow: "0 0 8px rgba(57,255,20,0.4)",
          }}
          animate={{
            x: [0, p.drift * 0.4, -p.drift * 0.25, 0],
            y: [0, -p.drift, -p.drift * 0.3, 0],
            opacity: [0.12, 0.4, 0.22, 0.12],
            scale: [1, 1.25, 1.05, 1],
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
