import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  IndividualCards,
  PackageCards,
} from "@/components/pricing/PricingCards";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Google Business Profile, Google Ads, websites, SEO retainers, and money-saving packages from Leads by RJ.",
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
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Individual services
          </h2>
          <p className="mt-2 text-muted">
            Mix and match—or ask which combination fits your goals.
          </p>
        </div>
        <IndividualCards />
        <div className="mt-10 text-center">
          <p className="mb-4 text-muted">
            Not sure which option is right? Start with a free ranking audit.
          </p>
          <Button href="/contact" size="lg" className="neon-glow">
            Get Free Ranking Audit
          </Button>
        </div>
      </Section>
    </>
  );
}
