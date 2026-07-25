"use client";

/**
 * Curved grey light streaks for Hero depth — clearly visible, soft, premium.
 */
export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Soft ambient grey wash for base depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_30%,rgba(90,90,90,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_70%,rgba(70,70,70,0.1),transparent_50%)]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-90"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="heroStreakA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(200,200,200,0)" />
            <stop offset="25%" stopColor="rgba(210,210,210,0.55)" />
            <stop offset="50%" stopColor="rgba(230,230,230,0.7)" />
            <stop offset="75%" stopColor="rgba(200,200,200,0.45)" />
            <stop offset="100%" stopColor="rgba(180,180,180,0)" />
          </linearGradient>
          <linearGradient id="heroStreakB" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="rgba(180,180,180,0)" />
            <stop offset="30%" stopColor="rgba(200,200,200,0.35)" />
            <stop offset="50%" stopColor="rgba(57,255,20,0.12)" />
            <stop offset="70%" stopColor="rgba(210,210,210,0.4)" />
            <stop offset="100%" stopColor="rgba(180,180,180,0)" />
          </linearGradient>
          <linearGradient id="heroStreakC" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(190,190,190,0)" />
            <stop offset="40%" stopColor="rgba(200,200,200,0.5)" />
            <stop offset="70%" stopColor="rgba(220,220,220,0.35)" />
            <stop offset="100%" stopColor="rgba(180,180,180,0)" />
          </linearGradient>
          <linearGradient id="heroStreakSoft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(160,160,160,0)" />
            <stop offset="50%" stopColor="rgba(190,190,190,0.28)" />
            <stop offset="100%" stopColor="rgba(160,160,160,0)" />
          </linearGradient>
          {/* Soft glow under core lines */}
          <filter id="heroStreakGlow" x="-5%" y="-80%" width="110%" height="260%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="heroStreakSoftBlur" x="-5%" y="-80%" width="110%" height="260%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
        </defs>

        {/* Glow layer — wider, softer under-strokes */}
        <g opacity="0.45" filter="url(#heroStreakSoftBlur)">
          <path
            d="M-80 180 C280 60 520 320 780 220 C1040 120 1280 280 1520 160"
            stroke="rgba(200,200,200,0.5)"
            strokeWidth="6"
          />
          <path
            d="M-60 340 C240 220 480 480 760 360 C1040 240 1300 420 1520 300"
            stroke="rgba(190,190,190,0.4)"
            strokeWidth="5"
          />
          <path
            d="M-40 520 C300 400 560 640 820 520 C1080 400 1320 580 1540 460"
            stroke="rgba(200,200,200,0.4)"
            strokeWidth="5"
          />
          <path
            d="M1520 100 C1180 220 900 -20 620 140 C340 300 160 80 -40 200"
            stroke="rgba(180,180,180,0.35)"
            strokeWidth="5"
          />
        </g>

        {/* Core sharp-soft arcs */}
        <g filter="url(#heroStreakGlow)" strokeLinecap="round">
          <path
            d="M-80 180 C280 60 520 320 780 220 C1040 120 1280 280 1520 160"
            stroke="url(#heroStreakA)"
            strokeWidth="2.2"
          />
          <path
            d="M-60 340 C240 220 480 480 760 360 C1040 240 1300 420 1520 300"
            stroke="url(#heroStreakA)"
            strokeWidth="1.9"
            opacity="0.9"
          />
          <path
            d="M-40 520 C300 400 560 640 820 520 C1080 400 1320 580 1540 460"
            stroke="url(#heroStreakC)"
            strokeWidth="2"
          />
          <path
            d="M-100 680 C260 560 540 780 860 640 C1140 520 1360 720 1560 600"
            stroke="url(#heroStreakA)"
            strokeWidth="1.7"
            opacity="0.85"
          />
          <path
            d="M1520 100 C1180 220 900 -20 620 140 C340 300 160 80 -40 200"
            stroke="url(#heroStreakC)"
            strokeWidth="1.8"
            opacity="0.85"
          />
          <path
            d="M1540 420 C1220 300 960 560 680 420 C400 280 200 500 -20 380"
            stroke="url(#heroStreakA)"
            strokeWidth="1.85"
            opacity="0.8"
          />
          <path
            d="M-50 260 C320 140 560 400 900 280 C1180 180 1360 340 1520 240"
            stroke="url(#heroStreakB)"
            strokeWidth="2.4"
          />
          <path
            d="M200 820 C480 700 720 860 1000 740 C1200 660 1360 780 1500 720"
            stroke="url(#heroStreakC)"
            strokeWidth="1.6"
            opacity="0.75"
          />
          <path
            d="M-20 40 C200 120 360 -40 600 80 C840 200 1100 40 1440 120"
            stroke="url(#heroStreakA)"
            strokeWidth="1.5"
            opacity="0.7"
          />
          {/* Extra mid-layer arcs for richer depth */}
          <path
            d="M-90 430 C200 310 500 560 820 430 C1100 320 1340 500 1560 390"
            stroke="url(#heroStreakSoft)"
            strokeWidth="1.4"
          />
          <path
            d="M1540 620 C1200 500 900 720 580 580 C300 460 120 640 -40 520"
            stroke="url(#heroStreakSoft)"
            strokeWidth="1.5"
          />
          <path
            d="M100 760 C400 640 700 820 1000 700 C1240 620 1400 760 1520 700"
            stroke="url(#heroStreakA)"
            strokeWidth="1.35"
            opacity="0.65"
          />
        </g>
      </svg>

      {/* Light edge vignette only — keep center open so streaks read clearly */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.35)_100%)]" />
    </div>
  );
}
