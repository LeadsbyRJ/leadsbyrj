import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  glow = false,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-5 sm:p-6",
        "transition-all duration-300 ease-out will-change-transform",
        "hover:-translate-y-1.5 hover:scale-[1.02]",
        "hover:border-accent/50 hover:bg-surface-elevated",
        "hover:shadow-[0_0_0_1px_rgba(57,255,20,0.18),0_0_28px_rgba(57,255,20,0.16),0_14px_32px_rgba(0,0,0,0.4)]",
        glow &&
          "border-accent/40 shadow-[0_0_20px_rgba(57,255,20,0.1)] hover:border-accent/60",
        className
      )}
    >
      {children}
    </div>
  );
}
