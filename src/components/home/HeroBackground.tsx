/**
 * Clean Hero depth — soft radial neon glows only (no streaks).
 * Focus behind logo/copy (left) and map (right).
 */
export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Primary glow — behind logo / headline (left-center) */}
      <div className="absolute left-1/2 top-[28%] h-[min(70vw,520px)] w-[min(90vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(57,255,20,0.16)_0%,rgba(57,255,20,0.06)_35%,transparent_68%)] blur-2xl lg:left-[28%] lg:top-[42%] lg:h-[480px] lg:w-[520px]" />

      {/* Secondary glow — behind map (right on desktop, lower on mobile) */}
      <div className="absolute bottom-[8%] left-1/2 h-[min(55vw,380px)] w-[min(80vw,440px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(57,255,20,0.14)_0%,rgba(57,255,20,0.05)_40%,transparent_70%)] blur-2xl lg:bottom-auto lg:left-auto lg:right-[2%] lg:top-[48%] lg:h-[420px] lg:w-[460px] lg:translate-x-0 lg:-translate-y-1/2" />

      {/* Soft top wash for overall depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(57,255,20,0.06),transparent_55%)]" />

      {/* Quiet ambient greys so blacks aren’t flat */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(80,80,80,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_95%_15%,rgba(70,70,70,0.06),transparent_50%)]" />

      {/* Edge vignette — keep focus on content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_65%_at_50%_45%,transparent_45%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}
