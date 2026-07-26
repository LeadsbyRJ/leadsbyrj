import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog — Local SEO, Google Ads & Lead Gen Tips",
  description:
    "Local SEO, Google Ads, Google Business Profile, and lead generation insights from Leads by RJ. Orange County marketing tips—coming soon.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <Section className="bg-radial-neon pt-12 sm:pt-16">
      <SectionHeading
        eyebrow="Blog"
        title="Insights coming soon"
        description="Articles on local SEO, Google Business Profile, ads, and conversion-focused websites will live here."
      />
      <Card className="mx-auto max-w-lg text-center py-14">
        <p className="text-muted">
          The blog is under construction. In the meantime, grab a free ranking
          audit or browse projects.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/#ranking-audit" className="neon-glow">
            Get Free Ranking Audit
          </Button>
          <Button href="/projects" variant="secondary">
            View Projects
          </Button>
        </div>
      </Card>
    </Section>
  );
}
