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

      // Double rAF + delay so layout settles (esp. mobile Safari)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.setTimeout(() => {
            scrollToElementWithHeaderOffset(hash, behavior);
          }, 80);
        });
      });
    }

    function onHashChange() {
      scrollFromHash("smooth");
    }

    scrollFromHash("smooth");

    // Retry after fonts/images — mobile can mis-measure on first paint
    const retry = window.setTimeout(() => {
      scrollFromHash("auto");
    }, 350);

    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.clearTimeout(retry);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
