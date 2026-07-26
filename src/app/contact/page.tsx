import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Free Ranking Audit | Google Ads & SEO",
  description: `Contact ${SITE.name} for a free Google ranking audit, website project, Google Ads, SEO, or Google Business Profile help. Orange County. ${SITE.phone} · ${SITE.email}`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Leads by RJ | Free Ranking Audit",
    description:
      "Request a free ranking audit or start a Google Ads, SEO, website, or Google Business Profile project. Call (949) 264-2559.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <Section
      id="contact"
      className="scroll-mt-[4.75rem] bg-radial-neon pt-8 sm:scroll-mt-24 sm:pt-14"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let’s grow your lead pipeline"
        description="Share a few details and I’ll follow up. Prefer to talk now? Call or email anytime."
      />

      <div className="grid gap-5 sm:gap-8 lg:grid-cols-5">
        <Card className="h-fit space-y-5 p-4 sm:space-y-6 sm:p-6 lg:col-span-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Email
            </h3>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-1 block text-lg text-accent hover:underline"
            >
              {SITE.email}
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Phone
            </h3>
            <a
              href={SITE.phoneHref}
              className="mt-1 block text-lg text-accent hover:underline"
            >
              {SITE.phone}
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Social
            </h3>
            <a
              href={SITE.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-lg text-accent hover:underline"
            >
              x.com/LeadsbyRJ
            </a>
          </div>
          <p className="text-sm leading-relaxed text-muted border-t border-border pt-6">
            Free ranking audits available for local service businesses. Tell me
            your service and city—I&apos;ll show you where you stand and what to
            fix first.
          </p>
        </Card>

        <Card
          id="contact-form"
          className="scroll-mt-[4.75rem] p-4 sm:scroll-mt-24 sm:p-6 lg:col-span-3"
        >
          <ContactForm
            title="Send a message"
            submitLabel="Send Message"
          />
        </Card>
      </div>
    </Section>
  );
}
