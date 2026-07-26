import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — Orange County Google Ads, SEO & Lead Gen",
  description: `About ${SITE.name}: websites, Google Ads, SEO, and Google Business Profile for local businesses since ${SITE.since}. Practical, transparent, results-focused.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Leads by RJ | Local Marketing Since 2014",
    description:
      "Orange County–rooted digital marketing: websites, Google Ads, SEO, and Google Business Profile that generate real leads.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Section className="bg-radial-neon pt-12 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About"
              title="Leads first. Hype never."
              description={`${SITE.name} helps local businesses get found on Google and turn traffic into real inquiries—calls, forms, and booked jobs.`}
            />
            <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Since {SITE.since}, the focus has been simple: build digital
                presence that pays for itself. That means clean websites that
                convert, Google Ads that target the right intent, SEO that
                compounds, and Google Business Profiles that win the local pack.
              </p>
              <p>
                Whether you&apos;re a landscaper in South Orange County or a
                product brand selling nationwide, the playbook is the same—
                clarity, speed, trust, and measurable lead flow.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" className="neon-glow">
                Work With Me
              </Button>
              <Button href="/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </div>
          <Card className="flex flex-col items-center justify-center py-10 sm:py-12">
            <Image
              src="/logo.png"
              alt={`${SITE.name} logo`}
              width={808}
              height={288}
              className="logo-glow-hero h-14 w-auto sm:h-16"
              sizes="240px"
            />
            <p className="mt-6 text-center text-sm text-muted">
              {SITE.email}
              <br />
              {SITE.phone}
            </p>
          </Card>
        </div>
      </Section>

      <Section className="bg-background-elevated">
        <SectionHeading
          eyebrow="How I work"
          title="Practical, transparent, results-oriented"
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              title: "Honest pricing",
              body: "Published rates and package savings so you know what you’re investing before we talk.",
            },
            {
              title: "Lead metrics matter",
              body: "Pretty design is table stakes. Forms, calls, and tracked conversions are the scoreboard.",
            },
            {
              title: "Local expertise",
              body: "Deep experience with service businesses and the Google surfaces that drive them.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
