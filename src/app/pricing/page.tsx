import type { Metadata } from "next";
import { INDIVIDUAL_PRICING, PACKAGE_PRICING } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Google Business Profile, Google Ads, websites, SEO retainers, and money-saving packages from Leads by RJ.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="bg-radial-neon pt-12 sm:pt-16">
        <SectionHeading
          eyebrow="Pricing"
          title="Clear packages. Real results."
          description="À la carte services or bundled packages with 20% savings. No mystery retainers—just what you need to generate more leads."
        />
      </Section>

      <Section className="bg-background pt-0">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Packages{" "}
            <span className="text-accent text-base font-semibold sm:text-lg">
              (20% savings)
            </span>
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {PACKAGE_PRICING.map((pkg) => (
            <Card
              key={pkg.name}
              glow={pkg.popular}
              className={cn(
                "relative flex flex-col",
                pkg.popular && "border-accent/50 ring-1 ring-accent/30"
              )}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-black neon-glow">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
              <p className="mt-1 text-xs text-muted">{pkg.savings}</p>
              <div className="mt-6">
                <p className="text-3xl font-bold text-foreground">
                  {pkg.oneTime}
                  <span className="ml-1 text-sm font-normal text-muted">
                    one-time
                  </span>
                </p>
                <p className="mt-1 text-2xl font-semibold text-accent neon-text">
                  {pkg.monthly}
                  <span className="ml-1 text-sm font-normal text-muted">
                    /mo
                  </span>
                </p>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-muted"
                  >
                    <span className="text-accent shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={pkg.popular ? "primary" : "secondary"}
                className={cn("mt-8 w-full", pkg.popular && "neon-glow")}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDIVIDUAL_PRICING.map((item) => (
            <Card key={item.name} className="flex flex-col">
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                {item.name}
              </h3>
              <p className="mt-3 text-2xl font-bold text-accent neon-text">
                {item.price}
                <span className="ml-1 text-sm font-normal text-muted">
                  {item.period}
                </span>
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
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
