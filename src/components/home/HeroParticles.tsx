"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { left: "8%", top: "18%", size: 2, delay: 0, duration: 9 },
  { left: "18%", top: "72%", size: 1.5, delay: 1.2, duration: 11 },
  { left: "28%", top: "40%", size: 2, delay: 0.4, duration: 10 },
  { left: "42%", top: "22%", size: 1.5, delay: 2, duration: 12 },
  { left: "55%", top: "65%", size: 2.5, delay: 0.8, duration: 9.5 },
  { left: "68%", top: "30%", size: 1.5, delay: 1.6, duration: 11.5 },
  { left: "78%", top: "78%", size: 2, delay: 0.2, duration: 10.5 },
  { left: "88%", top: "48%", size: 1.5, delay: 2.4, duration: 12 },
  { left: "12%", top: "52%", size: 1.5, delay: 1.8, duration: 9 },
  { left: "92%", top: "16%", size: 2, delay: 0.6, duration: 11 },
  { left: "48%", top: "88%", size: 1.5, delay: 1.1, duration: 10 },
  { left: "35%", top: "12%", size: 2, delay: 2.2, duration: 13 },
] as const;

export function HeroParticles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Soft drifting grid layer */}
      <motion.div
        className="absolute inset-[-20%] opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,255,20,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, black 10%, transparent 72%)",
        }}
        animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 6px rgba(57,255,20,0.45)",
          }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.15, 0.45, 0.15],
            scale: [1, 1.35, 1],
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
