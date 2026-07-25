import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  children,
  className,
  id,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("py-12 sm:py-16 lg:py-20", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-10 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent neon-text">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm text-muted sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
