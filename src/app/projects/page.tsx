import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

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

        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card key={project.slug} className="flex flex-col">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {project.name}
              </h2>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">
                {project.location}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  href={project.url}
                  external
                  size="sm"
                  className="neon-glow"
                >
                  Visit live site
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </div>
            </Card>
          ))}

          {/* Placeholder slots for future projects */}
          <Card className="flex min-h-[220px] flex-col items-center justify-center border-dashed opacity-70">
            <p className="text-sm font-medium text-muted">More projects soon</p>
            <p className="mt-1 text-xs text-muted/80">
              Case studies and new builds will appear here.
            </p>
          </Card>
        </div>

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
