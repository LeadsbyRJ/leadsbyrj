"use client";

/**
 * Soft curved light streaks for Hero depth — low opacity, non-distracting.
 */
export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="heroStreakA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(160,160,160,0)" />
            <stop offset="35%" stopColor="rgba(180,180,180,0.18)" />
            <stop offset="65%" stopColor="rgba(200,200,200,0.12)" />
            <stop offset="100%" stopColor="rgba(160,160,160,0)" />
          </linearGradient>
          <linearGradient id="heroStreakB" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="rgba(57,255,20,0)" />
            <stop offset="40%" stopColor="rgba(57,255,20,0.06)" />
            <stop offset="70%" stopColor="rgba(180,180,180,0.1)" />
            <stop offset="100%" stopColor="rgba(160,160,160,0)" />
          </linearGradient>
          <linearGradient id="heroStreakC" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(160,160,160,0)" />
            <stop offset="45%" stopColor="rgba(170,170,170,0.14)" />
            <stop offset="100%" stopColor="rgba(160,160,160,0)" />
          </linearGradient>
          <filter id="heroStreakBlur" x="-10%" y="-50%" width="120%" height="200%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        {/* Wide sweeping arcs — grey light */}
        <path
          d="M-80 180 C280 60 520 320 780 220 C1040 120 1280 280 1520 160"
          stroke="url(#heroStreakA)"
          strokeWidth="1.25"
          filter="url(#heroStreakBlur)"
        />
        <path
          d="M-60 340 C240 220 480 480 760 360 C1040 240 1300 420 1520 300"
          stroke="url(#heroStreakA)"
          strokeWidth="1"
          opacity="0.75"
          filter="url(#heroStreakBlur)"
        />
        <path
          d="M-40 520 C300 400 560 640 820 520 C1080 400 1320 580 1540 460"
          stroke="url(#heroStreakC)"
          strokeWidth="1.1"
          filter="url(#heroStreakBlur)"
        />
        <path
          d="M-100 680 C260 560 540 780 860 640 C1140 520 1360 720 1560 600"
          stroke="url(#heroStreakA)"
          strokeWidth="0.9"
          opacity="0.65"
          filter="url(#heroStreakBlur)"
        />

        {/* Counter-curves for depth */}
        <path
          d="M1520 100 C1180 220 900 -20 620 140 C340 300 160 80 -40 200"
          stroke="url(#heroStreakC)"
          strokeWidth="0.9"
          opacity="0.55"
          filter="url(#heroStreakBlur)"
        />
        <path
          d="M1540 420 C1220 300 960 560 680 420 C400 280 200 500 -20 380"
          stroke="url(#heroStreakA)"
          strokeWidth="1"
          opacity="0.5"
          filter="url(#heroStreakBlur)"
        />

        {/* Very soft neon-tinted streak */}
        <path
          d="M-50 260 C320 140 560 400 900 280 C1180 180 1360 340 1520 240"
          stroke="url(#heroStreakB)"
          strokeWidth="1.4"
          filter="url(#heroStreakBlur)"
        />

        {/* Thin accent arcs (lower right / left balance) */}
        <path
          d="M200 820 C480 700 720 860 1000 740 C1200 660 1360 780 1500 720"
          stroke="url(#heroStreakC)"
          strokeWidth="0.85"
          opacity="0.45"
        />
        <path
          d="M-20 40 C200 120 360 -40 600 80 C840 200 1100 40 1440 120"
          stroke="url(#heroStreakA)"
          strokeWidth="0.75"
          opacity="0.4"
        />
      </svg>

      {/* Soft vignette so streaks fade at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}
