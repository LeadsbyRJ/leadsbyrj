import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects — Websites & Local Lead Gen Case Work",
  description:
    "Featured Orange County and national projects by Leads by RJ: Lobato Landscaping, vSeeBoxUS, and more conversion-focused websites, SEO, and lead gen builds.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Leads by RJ — Lead-Generating Websites",
    description:
      "Real client websites built for Google Ads, SEO, and local leads—including Lobato Landscaping and vSeeBoxUS.",
    url: "/projects",
  },
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
