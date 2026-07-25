import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured websites and lead-gen projects by Leads by RJ—including Lobato Landscaping and vSeeBoxUS.",
};

export default function ProjectsPage() {
  return (
    <>
      <Section className="bg-radial-neon pt-10 sm:pt-14">
        <SectionHeading
          eyebrow="Projects"
          title="Work that generates leads"
          description="Selected client sites built for conversion—local service businesses and product brands. More case studies coming soon."
        />

        <ProjectsGrid />

        <div className="mt-10 text-center">
          <p className="mb-4 text-muted">
            Want results like these for your business?
          </p>
          <Button href="/contact" size="lg" className="neon-glow">
            Start a Project
          </Button>
        </div>
      </Section>
    </>
  );
}
