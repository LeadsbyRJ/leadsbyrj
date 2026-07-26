/** Sticky header heights (match Header.tsx) */
const HEADER_OFFSET_MOBILE = 76;
const HEADER_OFFSET_DESKTOP = 88;

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
  const top =
    el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    left: 0,
    behavior,
  });

  return true;
}
