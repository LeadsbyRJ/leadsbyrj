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
        "rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-all duration-300",
        "hover:border-accent/30 hover:bg-surface-elevated",
        glow && "neon-border border-accent/40",
        className
      )}
    >
      {children}
    </div>
  );
}
