/** Sticky header heights (match Header.tsx) + small breathing room */
const HEADER_OFFSET_MOBILE = 88;
const HEADER_OFFSET_DESKTOP = 96;

export const SECTION_IDS = {
  rankingAudit: "ranking-audit",
  contact: "contact",
  contactForm: "contact-form",
} as const;

export function getHeaderOffset() {
  if (typeof window === "undefined") return HEADER_OFFSET_MOBILE;
  return window.matchMedia("(min-width: 640px)").matches
    ? HEADER_OFFSET_DESKTOP
    : HEADER_OFFSET_MOBILE;
}

/**
 * Smooth-scroll an element into view below the sticky header.
 */
export function scrollToElementWithHeaderOffset(
  elementId: string,
  behavior: ScrollBehavior = "smooth"
) {
  const el = document.getElementById(elementId);
  if (!el) return false;

  const offset = getHeaderOffset();
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    left: 0,
    behavior,
  });

  // Keep URL hash in sync for shareability / back button
  try {
    const url = new URL(window.location.href);
    url.hash = elementId;
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  } catch {
    // ignore
  }

  return true;
}

/** Parse a target id from hrefs like "#contact-form" or "/#ranking-audit" */
export function extractSectionId(href: string): string | null {
  const match = href.match(/#([\w-]+)\s*$/);
  return match ? match[1] : null;
}

/**
 * Navigate to an in-page section with sticky-header offset.
 * - Same page: smooth scroll immediately
 * - Other page: go to /#id (HashScroll finishes positioning)
 */
export function navigateToSection(
  sectionId: string,
  options?: {
    pathname?: string;
    push?: (url: string) => void;
  }
) {
  const pathname = options?.pathname ?? window.location.pathname;
  const onHome = pathname === "/";

  if (onHome || document.getElementById(sectionId)) {
    const ok = scrollToElementWithHeaderOffset(sectionId, "smooth");
    if (ok) return;
  }

  const target = `/#${sectionId}`;
  if (options?.push) {
    options.push(target);
  } else {
    window.location.href = target;
  }
}
