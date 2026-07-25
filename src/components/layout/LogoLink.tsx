"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

function smoothScrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function LogoLink({
  className,
  imageClassName,
  priority = false,
}: {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const pendingScroll = useRef(false);

  useEffect(() => {
    if (pathname === "/" && pendingScroll.current) {
      pendingScroll.current = false;
      // Wait a frame so the home page is painted
      requestAnimationFrame(() => {
        smoothScrollTop();
      });
      // Fallback if layout shift delays scroll position
      const t = window.setTimeout(smoothScrollTop, 120);
      return () => window.clearTimeout(t);
    }
  }, [pathname]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (pathname === "/") {
        smoothScrollTop();
        return;
      }

      pendingScroll.current = true;
      router.push("/");
    },
    [pathname, router]
  );

  return (
    <Link
      href="/"
      onClick={handleClick}
      className={cn(
        "relative z-10 flex shrink-0 items-center transition-opacity hover:opacity-90",
        className
      )}
      aria-label={`${SITE.name} — go to homepage`}
    >
      <Image
        src="/logo.png"
        alt={`${SITE.name} logo`}
        width={808}
        height={288}
        className={cn("logo-glow", imageClassName)}
        priority={priority}
        sizes="180px"
      />
    </Link>
  );
}
