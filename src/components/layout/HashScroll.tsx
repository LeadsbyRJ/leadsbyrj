"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToElementWithHeaderOffset } from "@/lib/scroll";

/**
 * Handles #hash navigation with sticky-header offset (mobile + desktop).
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    function scrollFromHash() {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;

      // Wait for layout paint (esp. after client navigation)
      requestAnimationFrame(() => {
        window.setTimeout(() => {
          scrollToElementWithHeaderOffset(hash, "smooth");
        }, 50);
      });
    }

    scrollFromHash();
    window.addEventListener("hashchange", scrollFromHash);
    return () => window.removeEventListener("hashchange", scrollFromHash);
  }, [pathname]);

  return null;
}
