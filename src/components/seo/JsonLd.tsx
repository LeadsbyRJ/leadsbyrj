import { SITE } from "@/lib/constants";

/** LocalBusiness + ProfessionalService JSON-LD for local SEO */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description:
      "Websites, SEO, Google Maps Marketing & Google Ads that generate real local leads. Helping local businesses get found and get more customers since 2014.",
    url: SITE.url,
    image: `${SITE.url}/og-image.png`,
    logo: `${SITE.url}/og-image.png`,
    email: SITE.email,
    telephone: "+1-949-264-2559",
    foundingDate: String(SITE.since),
    priceRange: "$$",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Orange County, California",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressLocality: "Orange County",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate OC center — refine if you add a precise business address
      latitude: 33.7175,
      longitude: -117.8311,
    },
    sameAs: [SITE.xUrl],
    knowsAbout: [
      "Google Ads",
      "Local SEO",
      "Google Business Profile",
      "Website Design",
      "Lead Generation",
      "Local Services Ads",
    ],
    serviceType: [
      "Website Design & Development",
      "Google Ads Management",
      "SEO",
      "Google Business Profile Optimization",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-949-264-2559",
      contactType: "sales",
      email: SITE.email,
      availableLanguage: "English",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
