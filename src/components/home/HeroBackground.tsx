/**
 * Clean Hero depth — clearly visible soft radial neon glows.
 * Focus behind logo/copy (left) and map (right).
 */
export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Stronger glow — behind logo / headline */}
      <div className="absolute left-1/2 top-[26%] h-[min(80vw,580px)] w-[min(95vw,700px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(57,255,20,0.28)_0%,rgba(57,255,20,0.12)_32%,rgba(57,255,20,0.04)_55%,transparent_72%)] blur-3xl lg:left-[28%] lg:top-[42%] lg:h-[560px] lg:w-[600px]" />

      {/* Stronger glow — behind map */}
      <div className="absolute bottom-[6%] left-1/2 h-[min(65vw,420px)] w-[min(90vw,500px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(57,255,20,0.24)_0%,rgba(57,255,20,0.1)_38%,rgba(57,255,20,0.03)_60%,transparent_74%)] blur-3xl lg:bottom-auto lg:left-auto lg:right-[0%] lg:top-[48%] lg:h-[500px] lg:w-[540px] lg:translate-x-0 lg:-translate-y-1/2" />

      {/* Center bridge so mid-hero isn’t pure black */}
      <div className="absolute left-1/2 top-1/2 h-[min(70vw,420px)] w-[min(90vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(57,255,20,0.08)_0%,transparent_65%)] blur-2xl" />

      {/* Soft top wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(57,255,20,0.1),transparent_55%)]" />

      {/* Quiet ambient greys so blacks aren’t flat */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_8%_85%,rgba(90,90,90,0.1),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_95%_12%,rgba(80,80,80,0.08),transparent_50%)]" />

      {/* Edge vignette — keep focus on content, lighter so glows stay visible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_68%_at_50%_45%,transparent_48%,rgba(0,0,0,0.35)_100%)]" />
    </div>
  );
}
