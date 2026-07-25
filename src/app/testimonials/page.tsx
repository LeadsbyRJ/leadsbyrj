import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Client testimonials and reviews for Leads by RJ. Coming soon.",
};

export default function TestimonialsPage() {
  return (
    <Section className="bg-radial-neon pt-12 sm:pt-16">
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients say"
        description="Reviews and success stories will be published here. Until then, explore live projects or get in touch."
      />
      <Card className="mx-auto max-w-lg text-center py-14">
        <p className="text-muted">
          Testimonials page is a placeholder for Phase 1. Check back soon—or
          see real work on the projects page.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/projects" className="neon-glow">
            View Projects
          </Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </Card>
    </Section>
  );
}
