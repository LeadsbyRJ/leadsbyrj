"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function PromoBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem("leadsbyrj-promo-dismissed");
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function dismiss() {
    try {
      localStorage.setItem("leadsbyrj-promo-dismissed", "true");
    } catch {
      // ignore
    }
    setVisible(false);
  }

  return (
    <div className="relative border-b border-accent/15 bg-surface/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-x-3 gap-y-2 px-4 py-2.5 text-center text-sm sm:py-3">
        <p className="leading-snug">
          <span className="font-semibold text-accent">Black Friday Special</span>
          <span className="mx-1.5 text-muted">·</span>
          Custom websites for{" "}
          <span className="font-semibold text-foreground">$375</span>
          <span className="text-muted"> (50% off! - Normally $750)</span>
        </p>
        <Link
          href="/contact"
          className="shrink-0 rounded-md bg-accent px-3 py-1 text-xs font-semibold text-black transition-colors hover:bg-accent-dim"
        >
          Claim Offer
        </Link>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted transition-colors hover:bg-surface-elevated hover:text-foreground sm:right-3"
        aria-label="Dismiss offer"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
