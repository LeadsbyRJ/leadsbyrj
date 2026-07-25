"use client";

import { motion } from "framer-motion";

const PINS = [
  { x: 118, y: 92, delay: 0 },
  { x: 210, y: 148, delay: 0.35 },
  { x: 168, y: 210, delay: 0.7 },
  { x: 278, y: 118, delay: 1.05 },
  { x: 248, y: 238, delay: 1.4 },
  { x: 92, y: 178, delay: 1.75 },
] as const;

function MapPin({
  x,
  y,
  delay,
}: {
  x: number;
  y: number;
  delay: number;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* Soft ground glow */}
      <motion.ellipse
        cx={0}
        cy={10}
        rx={14}
        ry={5}
        fill="rgba(57,255,20,0.18)"
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 2.8, delay, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Pulse ring */}
      <motion.circle
        cx={0}
        cy={0}
        r={8}
        fill="none"
        stroke="rgba(57,255,20,0.55)"
        strokeWidth={1.2}
        animate={{ r: [6, 16], opacity: [0.55, 0] }}
        transition={{ duration: 2.4, delay, repeat: Infinity, ease: "easeOut" }}
      />
      {/* Pin body */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.6, delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M0 -16 C-7.2 -16 -13 -10.2 -13 -3 C-13 6 0 18 0 18 S13 6 13 -3 C13 -10.2 7.2 -16 0 -16 Z"
          fill="#39FF14"
          opacity={0.95}
          style={{
            filter: "drop-shadow(0 0 6px rgba(57,255,20,0.65))",
          }}
        />
        <circle cx={0} cy={-4} r={4.2} fill="#0A0A0A" />
        <circle cx={0} cy={-4} r={2} fill="#39FF14" opacity={0.9} />
      </motion.g>
    </g>
  );
}

export function HeroMap() {
  return (
    <motion.div
      className="relative mx-auto hidden w-full max-w-md lg:mx-0 lg:block lg:max-w-none"
      initial={{ opacity: 0, x: 28, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      {/* Soft ambient glow behind map */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.12),transparent_65%)] blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-surface/60 shadow-[0_0_40px_rgba(57,255,20,0.06)] backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(57,255,20,0.06),transparent_50%)]" />

        <svg
          viewBox="0 0 360 320"
          className="h-auto w-full"
          role="img"
          aria-label="Stylized local map with glowing location pins"
        >
          <defs>
            <linearGradient id="mapFade" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0d0d0d" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
            <pattern
              id="streetGrid"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M28 0 H0 V28"
                fill="none"
                stroke="rgba(57,255,20,0.06)"
                strokeWidth="0.8"
              />
            </pattern>
            <radialGradient id="mapVignette" cx="50%" cy="50%" r="70%">
              <stop offset="40%" stopColor="transparent" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
            </radialGradient>
          </defs>

          <rect width="360" height="320" fill="url(#mapFade)" />
          <rect width="360" height="320" fill="url(#streetGrid)" />

          {/* Major roads */}
          <g stroke="rgba(160,160,160,0.14)" strokeWidth="2.5" fill="none">
            <path d="M0 80 Q90 70 160 110 T320 90 L360 95" />
            <path d="M20 200 Q120 170 200 200 T360 180" />
            <path d="M80 0 Q100 120 90 200 T120 320" />
            <path d="M220 0 Q200 100 240 180 T260 320" />
          </g>

          {/* Secondary streets */}
          <g stroke="rgba(160,160,160,0.08)" strokeWidth="1.2" fill="none">
            <path d="M0 140 H360" />
            <path d="M0 250 H360" />
            <path d="M140 0 V320" />
            <path d="M300 0 V320" />
            <path d="M40 40 Q180 90 300 40" />
            <path d="M60 280 Q180 240 300 290" />
          </g>

          {/* Blocks / districts */}
          <g fill="rgba(57,255,20,0.03)" stroke="rgba(57,255,20,0.08)" strokeWidth="1">
            <rect x="48" y="48" width="52" height="40" rx="4" />
            <rect x="160" y="56" width="70" height="48" rx="4" />
            <rect x="48" y="150" width="60" height="50" rx="4" />
            <rect x="200" y="160" width="80" height="55" rx="4" />
            <rect x="100" y="230" width="90" height="45" rx="4" />
          </g>

          {/* Highway highlight */}
          <path
            d="M-10 160 Q100 130 180 155 T370 140"
            fill="none"
            stroke="rgba(57,255,20,0.12)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {PINS.map((pin) => (
            <MapPin key={`${pin.x}-${pin.y}`} {...pin} />
          ))}

          <rect width="360" height="320" fill="url(#mapVignette)" />
        </svg>

        {/* Corner label */}
        <div className="absolute bottom-3 left-3 rounded-md border border-border/60 bg-background/70 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted backdrop-blur-sm">
          Local visibility
        </div>
      </div>
    </motion.div>
  );
}
