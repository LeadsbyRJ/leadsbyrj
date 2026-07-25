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
        "hover:-translate-y-1 hover:scale-[1.015]",
        "hover:border-accent/45 hover:bg-surface-elevated",
        "hover:shadow-[0_0_0_1px_rgba(57,255,20,0.12),0_0_24px_rgba(57,255,20,0.12),0_12px_28px_rgba(0,0,0,0.35)]",
        glow &&
          "border-accent/40 shadow-[0_0_20px_rgba(57,255,20,0.08)] hover:border-accent/55",
        className
      )}
    >
      {children}
    </div>
  );
}
