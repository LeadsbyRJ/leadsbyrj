import { SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const items = [
  { label: `Since ${SITE.since}`, sub: "Helping local businesses grow" },
  { label: "Web · Ads · SEO · GBP", sub: "Full-stack local marketing" },
  { label: "Lead-first builds", sub: "Designed to convert, not just look good" },
  { label: "Orange County roots", sub: "Real service businesses, real results" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-background-elevated">
      <Container className="py-5 sm:py-7">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {items.map((item) => (
            <div key={item.label} className="text-center lg:text-left">
              <p className="text-[13px] font-semibold text-foreground sm:text-base">
                {item.label}
              </p>
              <p className="mt-0.5 text-[11px] text-muted sm:mt-1 sm:text-sm">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
