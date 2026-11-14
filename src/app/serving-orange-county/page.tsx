import type { Metadata } from "next";
import Link from "next/link";
import { SITE, SERVICES } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cityPath, getAllCities } from "@/lib/cities";

const PAGE_PATH = "/serving-orange-county";
const META_TITLE =
  "Serving Orange County, CA | Custom Websites, SEO & Google Marketing | Leads by RJ";
const META_DESCRIPTION =
  "Orange County-based digital marketing for local businesses. Custom coded websites, SEO, Google Ads, and Google Business Profile management across all 34 cities in Orange County, CA.";

const ORANGE_COUNTY_CITIES = getAllCities();

const LOCAL_SERVICES = SERVICES.filter((service) =>
  ["web", "seo", "ads", "gbp"].includes(service.id)
);

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_PATH,
    images: [
      {
        url: "https://www.leadsbyrj.com/photos/website-link-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Websites & Google Marketing",
      },
    ],
  },
  twitter: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["https://www.leadsbyrj.com/photos/website-link-preview.jpg"],
  },
};

function ServingAreaJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: "+1-949-264-2559",
    image: `${SITE.url}/photos/website-link-preview.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orange County",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Orange County, California",
      },
      ...ORANGE_COUNTY_CITIES.map((city) => ({
        "@type": "City",
        name: city.name,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Orange County, California",
        },
      })),
    ],
    serviceType: LOCAL_SERVICES.map((service) => service.title),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ServingOrangeCountyPage() {
  return (
    <>
      <ServingAreaJsonLd />
      <Section className="bg-radial-neon pt-12 sm:pt-16">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent neon-text sm:mb-2.5 sm:text-xs">
          Service area
        </p>
        <h1 className="max-w-3xl text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Serving Orange County, CA | Leads by RJ
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          Leads by RJ is based in Orange County, California, and helps local
          service businesses get found and get more customers. We serve
          businesses across all of Orange County and also work with clients
          remotely beyond OC for custom websites, SEO, and Google marketing.
        </p>
      </Section>

      <Section className="bg-background-elevated">
        <h2 className="text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl">
          Cities We Serve in Orange County
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          All {ORANGE_COUNTY_CITIES.length} incorporated cities in Orange
          County, California.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {ORANGE_COUNTY_CITIES.map((city) => (
            <li key={city.slug}>
              <Link
                href={cityPath(city.slug)}
                className="block rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                {city.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl">
          Services for these cities
        </h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {LOCAL_SERVICES.map((service) => (
            <li
              key={service.id}
              className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-background-elevated">
        <h2 className="text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl">
          Local work in South Orange County
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          In South Orange County,{" "}
          <a
            href="https://www.lobatolandscaping.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent hover:underline"
          >
            Lobato Landscaping
          </a>{" "}
          uses a local site built for quote requests: before-and-after project
          galleries, a quote form, and trust signals that include a 5.0 Yelp
          rating.
        </p>
        <div className="mt-8">
          <Button href="/#ranking-audit" size="lg" className="neon-glow">
            Get a Free Ranking Audit
          </Button>
        </div>
      </Section>
    </>
  );
}
