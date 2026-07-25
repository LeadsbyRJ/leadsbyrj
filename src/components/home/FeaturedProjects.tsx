"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection";

export function FeaturedProjects() {
  return (
    <Section className="bg-background-elevated">
      <SectionHeading
        eyebrow="Featured work"
        title="Projects that convert"
        description="Recent builds for real businesses—local service and product brands that need leads, not just a pretty homepage."
      />
      <StaggerChildren className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <StaggerItem key={project.slug}>
            <Card className="flex h-full flex-col">
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
              <h3 className="text-xl font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">
                {project.location}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-90"
              >
                Visit live site
                <ExternalLink className="h-4 w-4" />
              </a>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>
      <div className="mt-10 flex justify-center">
        <Button href="/projects" variant="secondary">
          View all projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}
