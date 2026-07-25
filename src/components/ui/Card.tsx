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
        "hover:border-accent/35 hover:bg-surface-elevated",
        "hover:-translate-y-0.5",
        glow && "border-accent/40 shadow-[0_0_20px_rgba(57,255,20,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
