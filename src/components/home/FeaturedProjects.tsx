"use client";

import Image from "next/image";
import { ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

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
            <article
              className={cn(
                "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-1.5 hover:border-accent/50",
                "hover:shadow-[0_0_0_1px_rgba(57,255,20,0.16),0_0_28px_rgba(57,255,20,0.12)]"
              )}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] overflow-hidden border-b border-border bg-background"
              >
                <Image
                  src={project.image}
                  alt={`${project.name} website preview`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-background/80 text-accent opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap gap-2">
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
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-90"
                >
                  Visit live site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerChildren>
      <div className="mt-8 flex justify-center">
        <Button href="/projects" variant="secondary">
          View all projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}
