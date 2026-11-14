import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";
import {
  CITY_SERVICE_SECTIONS,
  cityPageFaqs,
  cityPageKeywords,
  cityPageTitle,
  cityPath,
  getAllCities,
  getCityBySlug,
  getNearbyCities,
  type CityFaq,
  type OrangeCountyCity,
} from "@/lib/cities";

export const dynamicParams = false;

const OG_IMAGE = {
  url: "https://www.leadsbyrj.com/photos/website-link-preview.jpg",
  width: 1200,
  height: 630,
  alt: "Custom Websites & Google Marketing",
} as const;

type CityPageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return getAllCities().map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const title = cityPageTitle(city.name);
  const path = cityPath(city.slug);

  return {
    title: { absolute: title },
    description: city.metaDescription,
    keywords: cityPageKeywords(city.name),
    alternates: { canonical: path },
    openGraph: {
      title,
      description: city.metaDescription,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      title,
      description: city.metaDescription,
      images: [OG_IMAGE.url],
    },
  };
}

const SCHEMA_SERVICES = [
  "Website Design & Development",
  "Custom Website Design",
  "Local SEO",
  "SEO Services",
  "Google Maps Marketing",
  "Google Business Profile Optimization",
  "Google Ads Management",
  "Digital Marketing",
  "Online Marketing",
] as const;

function CityJsonLd({
  city,
  faqs,
}: {
  city: OrangeCountyCity;
  faqs: readonly CityFaq[];
}) {
  const pageUrl = `${SITE.url}${cityPath(city.slug)}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}#business`,
        name: SITE.name,
        url: pageUrl,
        image: OG_IMAGE.url,
        email: SITE.email,
        telephone: "+1-949-264-2559",
        description: city.metaDescription,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Newport Beach",
          addressRegion: "CA",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Orange County, California",
          },
        },
        serviceType: [...SCHEMA_SERVICES],
        knowsAbout: [...SCHEMA_SERVICES, `${city.name}, CA`],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-949-264-2559",
          contactType: "sales",
          email: SITE.email,
          availableLanguage: "English",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Serving Orange County",
            item: `${SITE.url}/serving-orange-county`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Website Designer in ${city.name}, CA`,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function CityLandingPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const nearby = getNearbyCities(city);
  const faqs = cityPageFaqs(city.name, city.faqs);

  return (
    <>
      <CityJsonLd city={city} faqs={faqs} />

      <Section className="bg-radial-neon pt-12 sm:pt-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/serving-orange-county"
                className="transition-colors hover:text-accent"
              >
                Orange County
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">{city.name}</li>
          </ol>
        </nav>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent neon-text sm:mb-2.5 sm:text-xs">
          Website design &amp; local marketing
        </p>
        <h1 className="max-w-3xl text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Website Designer in {city.name}, CA
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          Serving {city.areas}.
        </p>
        <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          {city.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section className="bg-background-elevated">
        <h2 className="text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl">
          Web design, SEO &amp; Google marketing in {city.name}
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Custom websites, local SEO, Google Maps and Google Business Profile
          work, Google Ads management, and online marketing—written for
          businesses that serve {city.name}. If you need a website developer in{" "}
          {city.name}, CA, you work directly with me from design through launch.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {CITY_SERVICE_SECTIONS.map((section) => (
            <li
              key={section.key}
              className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {section.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {city.services[section.key]}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl">
          Why local search matters in {city.name}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          {city.whyLocal}
        </p>
      </Section>

      <Section className="bg-background-elevated">
        <h2 className="text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl">
          {city.name} website design FAQ
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Straight answers for owners who want to show up for website designer,
          web design, and local SEO searches in {city.name}, and what to expect
          from a {city.name} marketing agency that handles Google Maps, ads, and
          your website.
        </p>
        <dl className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
            >
              <dt className="text-base font-semibold text-foreground">
                {faq.question}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <h2 className="text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl">
          Nearby Orange County cities
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Also looking for a website designer near {city.name}? These neighboring
          cities have their own pages.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {nearby.map((nearbyCity) => (
            <li key={nearbyCity.slug}>
              <Link
                href={cityPath(nearbyCity.slug)}
                className="block rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                {nearbyCity.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          <Link
            href="/serving-orange-county"
            className="font-medium text-accent hover:underline"
          >
            View all 34 Orange County cities
          </Link>
        </p>
      </Section>

      <Section className="bg-background-elevated">
        <h2 className="text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl">
          Get a free ranking audit for {city.name}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          Tell me your service and that you want to show up in {city.name}. I
          will show you where you stand on Google and what to fix first. Leads
          by RJ is based in Newport Beach and works with local businesses across
          Orange County.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-base">
          <a
            href={SITE.phoneHref}
            className="font-medium text-accent hover:underline"
          >
            {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="font-medium text-accent hover:underline"
          >
            {SITE.email}
          </a>
        </div>
        <div className="mt-8">
          <Button href="/#ranking-audit" size="lg" className="neon-glow">
            Get a Free Ranking Audit
          </Button>
        </div>
      </Section>
    </>
  );
}
