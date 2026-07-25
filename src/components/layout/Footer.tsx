import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { LogoLink } from "@/components/layout/LogoLink";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-elevated">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <LogoLink imageClassName="h-10 w-auto sm:h-11" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.tagline} Helping local businesses get found and get more
              customers since {SITE.since}.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="transition-colors hover:text-accent"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <XIcon className="h-4 w-4" />
                  @LeadsbyRJ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Ready to grow?
            </h3>
            <p className="mt-4 text-sm text-muted">
              Free ranking audit for local businesses. See where you stand on
              Google—and how to climb.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex text-sm font-semibold text-accent neon-text transition-opacity hover:opacity-90"
            >
              Get Free Ranking Audit →
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>Built for local businesses that want more leads.</p>
        </div>
      </Container>
    </footer>
  );
}
