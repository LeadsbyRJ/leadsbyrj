export const SECTION_IDS = {
  rankingAudit: "ranking-audit",
  contact: "contact",
  contactForm: "contact-form",
} as const;

/** Extra gap below sticky header so content isn’t tight under the bar */
const BREATHING_ROOM = 12;

/**
 * Measure the real sticky header height (not a guessed constant).
 * When the mobile drawer is open, use only the top bar height.
 */
export function getHeaderOffset() {
  if (typeof window === "undefined") return 80;

  const header = document.querySelector("header");
  if (!header) return 80;

  // Prefer the first row (logo bar) so open mobile menus don’t inflate offset
  const bar = header.querySelector("[data-header-bar]") as HTMLElement | null;
  const h = bar?.getBoundingClientRect().height ?? header.getBoundingClientRect().height;

  return Math.ceil(h) + BREATHING_ROOM;
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

  try {
    const url = new URL(window.location.href);
    url.hash = elementId;
    window.history.replaceState(
      null,
      "",
      `${url.pathname}${url.search}${url.hash}`
    );
  } catch {
    // ignore
  }

  return true;
}

/**
 * Scroll after UI settles (mobile menu close, layout paint).
 * Retries once so late layout shifts on mobile don’t mis-place the target.
 */
export function scrollToSectionWhenReady(
  elementId: string,
  options?: { delayMs?: number; behavior?: ScrollBehavior }
) {
  const delayMs = options?.delayMs ?? 0;
  const behavior = options?.behavior ?? "smooth";

  window.setTimeout(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToElementWithHeaderOffset(elementId, behavior);
        // Correct position after fonts/layout (mobile Safari)
        window.setTimeout(() => {
          scrollToElementWithHeaderOffset(elementId, "auto");
        }, 280);
      });
    });
  }, delayMs);
}

/** Parse a target id from hrefs like "#contact-form" or "/#ranking-audit" */
export function extractSectionId(href: string): string | null {
  const match = href.match(/#([\w-]+)\s*$/);
  return match ? match[1] : null;
}

/**
 * Map common routes to homepage section ids when already on home.
 * e.g. /contact → contact-form on homepage.
 */
export function resolveHomeSectionId(
  href: string,
  pathname: string
): string | null {
  const hashId = extractSectionId(href);
  if (hashId) return hashId;

  if (pathname === "/") {
    if (href === "/contact" || href.startsWith("/contact?")) {
      return SECTION_IDS.contactForm;
    }
  }

  return null;
}

/**
 * Navigate to an in-page section with sticky-header offset.
 */
export function navigateToSection(
  sectionId: string,
  options?: {
    pathname?: string;
    push?: (url: string) => void;
    /** Delay before scroll (e.g. close mobile menu first) */
    delayMs?: number;
  }
) {
  const pathname = options?.pathname ?? window.location.pathname;
  const onHome = pathname === "/";
  const delayMs = options?.delayMs ?? 0;

  if (onHome || document.getElementById(sectionId)) {
    scrollToSectionWhenReady(sectionId, { delayMs, behavior: "smooth" });
    return;
  }

  const target = `/#${sectionId}`;
  if (options?.push) {
    options.push(target);
  } else {
    window.location.href = target;
  }
}
