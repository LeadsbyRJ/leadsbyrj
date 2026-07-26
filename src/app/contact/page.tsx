import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} for a free ranking audit, website project, Google Ads, SEO, or Google Business Profile help. ${SITE.phone} · ${SITE.email}`,
};

export default function ContactPage() {
  return (
    <Section className="bg-radial-neon pt-8 sm:pt-14">
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

        <Card className="p-4 sm:p-6 lg:col-span-3">
          <ContactForm
            title="Send a message"
            submitLabel="Send Message"
          />
        </Card>
      </div>
    </Section>
  );
}
