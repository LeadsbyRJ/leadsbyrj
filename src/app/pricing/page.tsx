import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  IndividualCards,
  PackageCards,
} from "@/components/pricing/PricingCards";

export const metadata: Metadata = {
  title: "Pricing — Google Ads, SEO, Websites & GBP Packages",
  description:
    "Transparent Orange County pricing for Google Business Profile, Google Ads, websites, SEO retainers, and packages with 20% savings. No mystery retainers.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Leads by RJ — Google Ads, SEO & Website Packages",
    description:
      "Clear rates for Google Ads, SEO, Google Business Profile, and conversion websites. Packages save 20%.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Section className="bg-radial-neon pt-10 sm:pt-14">
        <SectionHeading
          eyebrow="Pricing"
          title="Clear packages. Real results."
          description="À la carte services or bundled packages with 20% savings. No mystery retainers—just what you need to generate more leads."
        />
      </Section>

      <Section className="bg-background pt-0">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Packages{" "}
            <span className="text-accent text-base font-semibold sm:text-lg">
              (20% savings)
            </span>
          </h2>
        </div>
        <PackageCards />
      </Section>

      <Section className="bg-background-elevated">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Individual services
          </h2>
          <p className="mt-2 text-sm text-muted sm:text-base">
            Mix and match Google Marketing and Website Design &amp; SEO—or ask
            which combination fits your goals.
          </p>
        </div>
        <IndividualCards />
        <div className="mt-10 text-center">
          <p className="mb-4 text-muted">
            Not sure which option is right? Start with a free ranking audit.
          </p>
          <Button href="/#ranking-audit" size="lg" className="neon-glow">
            Get Free Ranking Audit
          </Button>
        </div>
      </Section>
    </>
  );
}
