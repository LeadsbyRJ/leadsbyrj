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
        "rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all duration-300",
        "hover:border-accent/45 hover:bg-surface-elevated hover:shadow-[0_0_24px_rgba(0,255,159,0.1)]",
        "hover:-translate-y-0.5",
        glow && "neon-border border-accent/45 shadow-[0_0_28px_rgba(0,255,159,0.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}
