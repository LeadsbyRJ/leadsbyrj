"use client";

import { PACKAGE_PRICING, PRICING_CATEGORIES } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection";

export function PackageCards() {
  return (
    <StaggerChildren className="grid gap-5 lg:grid-cols-3" stagger={0.12}>
      {PACKAGE_PRICING.map((pkg) => (
        <StaggerItem key={pkg.name}>
          <Card
            glow={pkg.popular}
            className={cn(
              "relative flex h-full flex-col",
              pkg.popular && "border-accent/55 ring-1 ring-accent/35"
            )}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-black neon-glow">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
            <p className="mt-1 text-xs text-muted">{pkg.savings}</p>
            <div className="mt-6">
              <p className="text-3xl font-bold text-foreground">
                {pkg.oneTime}
                <span className="ml-1 text-sm font-normal text-muted">
                  one-time
                </span>
              </p>
              <p className="mt-1 text-2xl font-semibold text-accent neon-text">
                {pkg.monthly}
                <span className="ml-1 text-sm font-normal text-muted">/mo</span>
              </p>
            </div>
            <ul className="mt-6 flex-1 space-y-2.5">
              {pkg.includes.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted">
                  <span className="shrink-0 text-accent">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button
              href="/contact"
              variant={pkg.popular ? "primary" : "secondary"}
              className={cn("mt-8 w-full", pkg.popular && "neon-glow")}
            >
              Get Started
            </Button>
          </Card>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}

export function IndividualCards() {
  return (
    <div className="space-y-12 sm:space-y-14">
      {PRICING_CATEGORIES.map((category) => (
        <div key={category.id}>
          <h3 className="mb-5 text-center text-lg font-semibold text-foreground sm:mb-6 sm:text-left sm:text-xl">
            <span className="text-accent neon-text">{category.title}</span>
          </h3>
          <StaggerChildren
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {category.services.map((item) => (
              <StaggerItem key={item.name}>
                <Card className="flex h-full flex-col">
                  <h4 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="mt-3 text-2xl font-bold text-accent neon-text">
                    {item.price}
                    <span className="ml-1 text-sm font-normal text-muted">
                      {item.period}
                    </span>
                  </p>
                  <ul className="mt-4 flex-1 space-y-2 border-t border-border pt-4">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-[13px] leading-snug text-muted sm:text-sm"
                      >
                        <span className="mt-0.5 shrink-0 text-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    className="mt-6 w-full"
                  >
                    Get Started
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      ))}
    </div>
  );
}
