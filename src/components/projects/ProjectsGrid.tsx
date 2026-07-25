"use client";

import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection";

export function ProjectsGrid() {
  return (
    <StaggerChildren className="grid gap-5 md:grid-cols-2" stagger={0.12}>
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
        </StaggerItem>
      ))}

      <StaggerItem>
        <Card className="flex min-h-[220px] flex-col items-center justify-center border-dashed opacity-70">
          <p className="text-sm font-medium text-muted">More projects soon</p>
          <p className="mt-1 text-xs text-muted/80">
            Case studies and new builds will appear here.
          </p>
        </Card>
      </StaggerItem>
    </StaggerChildren>
  );
}
