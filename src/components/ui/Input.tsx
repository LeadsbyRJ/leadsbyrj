import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-lg border border-border bg-background-elevated px-4 text-sm text-foreground placeholder:text-muted/70",
        "transition-all duration-200 neon-focus",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-border bg-background-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted/70",
        "transition-all duration-200 neon-focus resize-y",
        className
      )}
      {...props}
    />
  );
}

export function Label({
  className,
  children,
  htmlFor,
  required,
}: {
  className?: string;
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("mb-1.5 block text-sm font-medium text-foreground", className)}
    >
      {children}
      {required && <span className="ml-1 text-accent">*</span>}
    </label>
  );
}
