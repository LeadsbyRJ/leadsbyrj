"use client";

import { Globe, Megaphone, Search, MapPin } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection";

const icons = {
  globe: Globe,
  megaphone: Megaphone,
  search: Search,
  mapPin: MapPin,
};

export function Services() {
  return (
    <Section className="bg-background">
      <SectionHeading
        eyebrow="Services"
        title="Everything you need to generate local leads"
        description="Four pillars that work together—so your website, ads, search presence, and Google profile all pull in the same direction."
      />
      <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {SERVICES.map((service) => {
          const Icon = icons[service.icon];
          return (
            <StaggerItem key={service.title}>
              <Card className="group h-full">
                <div className="mb-4 inline-flex rounded-xl border border-accent/20 bg-accent/5 p-3 text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-[0_0_16px_rgba(57,255,20,0.15)]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </Section>
  );
}
