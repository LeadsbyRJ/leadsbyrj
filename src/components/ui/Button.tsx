"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  extractSectionId,
  navigateToSection,
  resolveHomeSectionId,
  scrollToElementWithHeaderOffset,
} from "@/lib/scroll";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-black hover:bg-accent-dim neon-glow active:scale-[0.98]",
        secondary:
          "border border-border/90 bg-surface/80 text-foreground hover:border-accent/40 hover:text-accent hover:bg-accent/[0.04]",
        ghost: "text-muted hover:text-accent hover:bg-surface",
        outline:
          "border border-accent/40 text-accent hover:bg-accent/10 neon-glow",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-12 px-8 text-sm sm:h-14 sm:px-9 sm:text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
  /** Prefer scrolling to this section id (with sticky header offset) */
  scrollToId?: string;
  /** Extra delay before scroll (e.g. after closing mobile menu) */
  scrollDelayMs?: number;
}

export function Button({
  className,
  variant,
  size,
  href,
  external,
  scrollToId,
  scrollDelayMs = 0,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const pathname = usePathname();
  const router = useRouter();
  const classes = cn(buttonVariants({ variant, size, className }));

  function goToSection(sectionId: string) {
    navigateToSection(sectionId, {
      pathname,
      delayMs: scrollDelayMs,
      push: (url) => router.push(url),
    });
  }

  if (scrollToId) {
    return (
      <button
        type="button"
        className={classes}
        onClick={(e) => {
          onClick?.(e);
          if (!e.defaultPrevented) {
            e.preventDefault();
            goToSection(scrollToId);
          }
        }}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    const hashId = extractSectionId(href);
    const homeSectionId = resolveHomeSectionId(href, pathname);

    // Hash links or homepage /contact → section scroll with header offset
    if (hashId || homeSectionId) {
      const sectionId = hashId || homeSectionId!;
      const anchorHref =
        hashId && (href.startsWith("#") || href.startsWith("/#"))
          ? href.startsWith("#")
            ? href
            : `/#${hashId}`
          : `/#${sectionId}`;

      return (
        <a
          href={anchorHref}
          className={classes}
          onClick={(e) => {
            onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
            if (!e.defaultPrevented) {
              e.preventDefault();
              goToSection(sectionId);
            }
          }}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export { scrollToElementWithHeaderOffset };
