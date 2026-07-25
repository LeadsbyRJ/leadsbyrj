"use client";

/**
 * Clean, premium Hero depth — soft radials + a few restrained arcs.
 * SpaceX / xAI style: quiet, deep, never busy.
 */
export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Layered ambient depth — soft grey + hint of neon */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(57,255,20,0.07),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_15%_40%,rgba(120,120,120,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_60%,rgba(90,90,90,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_70%_20%,rgba(57,255,20,0.035),transparent_50%)]" />

      {/* 3 restrained curved streaks only */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="cleanStreak1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(200,200,200,0)" />
            <stop offset="40%" stopColor="rgba(210,210,210,0.22)" />
            <stop offset="70%" stopColor="rgba(190,190,190,0.12)" />
            <stop offset="100%" stopColor="rgba(180,180,180,0)" />
          </linearGradient>
          <linearGradient id="cleanStreak2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(190,190,190,0)" />
            <stop offset="45%" stopColor="rgba(200,200,200,0.18)" />
            <stop offset="100%" stopColor="rgba(180,180,180,0)" />
          </linearGradient>
          <linearGradient id="cleanStreak3" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="rgba(180,180,180,0)" />
            <stop offset="50%" stopColor="rgba(57,255,20,0.08)" />
            <stop offset="100%" stopColor="rgba(180,180,180,0)" />
          </linearGradient>
          <filter id="cleanStreakSoft" x="-5%" y="-100%" width="110%" height="300%">
            <feGaussianBlur stdDeviation="1.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Top sweep — frames content from above */}
        <path
          d="M-100 200 C320 80 640 280 900 160 C1160 40 1340 180 1540 120"
          stroke="url(#cleanStreak1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#cleanStreakSoft)"
        />

        {/* Mid-right counter-curve — balances the map side */}
        <path
          d="M1540 380 C1180 260 900 520 620 380 C380 260 160 480 -40 360"
          stroke="url(#cleanStreak2)"
          strokeWidth="1.35"
          strokeLinecap="round"
          filter="url(#cleanStreakSoft)"
          opacity="0.85"
        />

        {/* Subtle lower neon-kissed arc — anchors the section */}
        <path
          d="M-60 620 C280 520 560 720 880 600 C1140 500 1360 660 1540 580"
          stroke="url(#cleanStreak3)"
          strokeWidth="1.4"
          strokeLinecap="round"
          filter="url(#cleanStreakSoft)"
          opacity="0.75"
        />
      </svg>

      {/* Soft edge vignette — keeps focus on center content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_70%_at_50%_45%,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}
