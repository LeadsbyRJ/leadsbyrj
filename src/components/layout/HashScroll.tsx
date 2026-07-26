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
    function scrollFromHash(behavior: ScrollBehavior = "smooth") {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.setTimeout(() => {
            scrollToElementWithHeaderOffset(hash, behavior);
          }, 100);
        });
      });
    }

    function onHashChange() {
      scrollFromHash("smooth");
    }

    scrollFromHash("smooth");

    // Correct after layout/fonts (mobile Safari)
    const retry1 = window.setTimeout(() => scrollFromHash("auto"), 300);
    const retry2 = window.setTimeout(() => scrollFromHash("auto"), 600);

    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.clearTimeout(retry1);
      window.clearTimeout(retry2);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
