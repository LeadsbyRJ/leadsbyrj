import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  CITY_SECTIONS,
  ORANGE_COUNTY_CITIES,
  SERVICE_AREA_FAQS,
  citySectionId,
} from "./city-content";

const PAGE_PATH = "/serving-orange-county";
const META_TITLE =
  "Website Designer in Orange County, CA | Leads by RJ";
const META_DESCRIPTION =
  "Website designer and developer in Orange County, CA. Custom websites, Google Maps marketing, SEO services, and digital marketing across all 34 cities.";

const PAGE_KEYWORDS = [
  "website designer Orange County",
  "website designer in Newport Beach CA",
  "website design Orange County",
  "website developer Orange County",
  "website development Orange County",
  "custom website Orange County",
  "digital marketing Orange County",
  "online marketing Orange County",
  "marketing agency Orange County",
  "Google marketing Orange County",
  "Google Maps marketing Orange County",
  "web design Orange County",
  "web designer near me",
  "SEO services Orange County",
  "local SEO Orange County",
  "SEO company Orange County",
  "Google Business Profile optimization",
  "Google Ads management Orange County",
  "small business website",
  "website for contractors",
];

const LOCAL_SERVICES = SERVICES.filter((service) =>
  ["web", "seo", "ads", "gbp"].includes(service.id)
);

const OFFERED_SERVICES = [
  "Website design",
  "Website development",
  "Custom website",
  "Web design",
  "Digital marketing",
  "Online marketing",
  "Google marketing",
  "Google Maps marketing",
  "SEO services",
  "Local SEO",
  "Google Ads management",
  "Google Business Profile optimization",
  "Small business website",
  "Website for contractors",
] as const;

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
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
        alt: "Website designer and Google marketing in Orange County, CA",
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
  const pageUrl = `${SITE.url}${PAGE_PATH}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${pageUrl}#business`,
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        telephone: "+1-949-264-2559",
        image: `${SITE.url}/photos/website-link-preview.jpg`,
        description: META_DESCRIPTION,
        foundingDate: String(SITE.since),
        sameAs: [SITE.xUrl],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Newport Beach",
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
            name: `${city}, CA`,
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Orange County, California",
            },
          })),
        ],
        serviceType: [
          ...LOCAL_SERVICES.map((service) => service.title),
          ...OFFERED_SERVICES,
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Website design and digital marketing services",
          itemListElement: [
            ...LOCAL_SERVICES.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                provider: { "@id": `${pageUrl}#business` },
                areaServed: {
                  "@type": "AdministrativeArea",
                  name: "Orange County, California",
                },
              },
            })),
            ...OFFERED_SERVICES.map((name) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name,
                provider: { "@id": `${pageUrl}#business` },
              },
            })),
          ],
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-949-264-2559",
          contactType: "sales",
          email: SITE.email,
          availableLanguage: "English",
          areaServed: "US",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: `${pageUrl}#service-area-faq`,
        mainEntity: SERVICE_AREA_FAQS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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

export default function ServingOrangeCountyPage() {
  return (
    <>
      <ServingAreaJsonLd />
      <Section className="bg-radial-neon pt-12 sm:pt-16">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent neon-text sm:mb-2.5 sm:text-xs">
          Service area
        </p>
        <h1 className="max-w-3xl text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Website Designer Serving Orange County, CA
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          Leads by RJ is based in Newport Beach and helps local service
          businesses get found and get more customers. We serve businesses
          across all of Orange County and also work with clients remotely
          beyond OC for custom websites, SEO, and Google marketing.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          We work as a website designer and website developer for Orange
          County companies, and as a marketing agency when you need more than
          a site. That includes website design, website development, and a
          custom website, plus digital marketing and online marketing—Google
          marketing, Google Maps marketing, local SEO, and Google Ads—so
          customers in Orange County can find you.
        </p>
      </Section>

      <Section>
        <h2 className="text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl">
          Services for these cities
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          From a small business website or a website for contractors to web
          design, local SEO, and Google Ads, these are the services we provide
          throughout Orange County, CA.
        </p>
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
          Cities We Serve in Orange County
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          All {ORANGE_COUNTY_CITIES.length} incorporated cities in Orange
          County, California—each with website design, website development,
          Google Maps marketing, and digital marketing support.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {CITY_SECTIONS.map((section) => (
            <li key={section.city}>
              <a
                href={`#${citySectionId(section.city)}`}
                className="block rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                {section.city}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CITY_SECTIONS.map((section) => (
            <article
              key={section.city}
              id={citySectionId(section.city)}
              className="scroll-mt-[5.5rem] rounded-xl border border-border bg-surface p-4 sm:scroll-mt-24 sm:p-5"
            >
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                {section.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {section.copy}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="service-area-faq">
        <h2 className="text-[1.65rem] font-bold tracking-tight text-foreground sm:text-3xl">
          Orange County website design FAQ
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Common questions about hiring a website designer, website developer,
          or digital marketing agency in Orange County, CA.
        </p>
        <div className="mx-auto mt-8 max-w-2xl space-y-3">
          {SERVICE_AREA_FAQS.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-border bg-surface open:border-accent/40 open:shadow-[0_0_24px_rgba(57,255,20,0.08)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:gap-4 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span className="text-[13px] font-semibold leading-snug text-foreground sm:text-base">
                  {item.question}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted transition-colors group-open:border-accent/50 group-open:bg-accent/10 group-open:text-accent sm:h-8 sm:w-8">
                  <Plus
                    className="h-3.5 w-3.5 transition-transform duration-300 group-open:rotate-45 sm:h-4 sm:w-4"
                    aria-hidden
                  />
                </span>
              </summary>
              <div className="border-t border-border px-4 pb-4 pt-3 sm:px-6 sm:pb-6">
                <p className="text-[13px] leading-relaxed text-muted sm:text-[0.95rem]">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
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
