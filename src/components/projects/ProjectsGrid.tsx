"use client";

import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  return (
    <StaggerChildren className="grid gap-6 md:grid-cols-2" stagger={0.14}>
      {PROJECTS.map((project) => (
        <StaggerItem key={project.slug}>
          <article
            className={cn(
              "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface",
              "transition-all duration-300 ease-out will-change-transform",
              "hover:-translate-y-1.5 hover:border-accent/50",
              "hover:shadow-[0_0_0_1px_rgba(57,255,20,0.16),0_0_32px_rgba(57,255,20,0.12),0_16px_40px_rgba(0,0,0,0.45)]"
            )}
          >
            {/* Preview image */}
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
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-background/80 text-accent opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
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
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {project.name}
              </h2>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">
                {project.location}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                {project.summary}
              </p>
              <div className="mt-6">
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
            </div>
          </article>
        </StaggerItem>
      ))}

      <StaggerItem>
        <article className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface/50 p-8 text-center opacity-80 md:min-h-full">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-muted">
            <span className="text-lg font-semibold">+</span>
          </div>
          <p className="text-sm font-medium text-muted">More projects soon</p>
          <p className="mt-1 max-w-xs text-xs text-muted/80">
            Case studies and new builds will appear here.
          </p>
        </article>
      </StaggerItem>
    </StaggerChildren>
  );
}
