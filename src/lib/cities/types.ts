export type CityFaq = {
  question: string;
  answer: string;
};

export type CityServices = {
  web: string;
  seo: string;
  maps: string;
  ads: string;
  marketing: string;
};

export type OrangeCountyCity = {
  slug: string;
  name: string;
  metaDescription: string;
  areas: string;
  intro: readonly string[];
  whyLocal: string;
  services: CityServices;
  faqs: readonly CityFaq[];
  nearby: readonly string[];
};

export const CITY_SERVICE_SECTIONS = [
  {
    key: "web",
    title: "Website Design & Development",
  },
  {
    key: "seo",
    title: "Local SEO Services",
  },
  {
    key: "maps",
    title: "Google Maps & Google Business Profile",
  },
  {
    key: "ads",
    title: "Google Ads Management",
  },
  {
    key: "marketing",
    title: "Digital & Online Marketing",
  },
] as const satisfies readonly {
  key: keyof CityServices;
  title: string;
}[];

export const CITY_PAGE_PREFIX = "/web-design";

export function cityPath(slug: string): string {
  return `${CITY_PAGE_PREFIX}/${slug}`;
}

export function cityPageTitle(cityName: string): string {
  return `Website Designer in ${cityName}, CA | Web Design & Local SEO | Leads by RJ`;
}

export function cityPageKeywords(cityName: string): string[] {
  return [
    `website designer ${cityName}`,
    `website design ${cityName}`,
    `web design ${cityName} CA`,
    `website developer ${cityName}`,
    `website development ${cityName}`,
    `custom website ${cityName}`,
    `Google Maps marketing ${cityName}`,
    `Google marketing ${cityName}`,
    `local SEO ${cityName}`,
    `digital marketing ${cityName}`,
    `online marketing ${cityName}`,
    `marketing agency ${cityName}`,
  ];
}

function citySharedFaq(cityName: string): CityFaq {
  return {
    question: `Do you work as a website developer in ${cityName}, CA?`,
    answer: `Yes. I design and develop custom websites for local businesses, and I also serve as a ${cityName} marketing agency for local SEO, Google Maps, and Google Ads. Leads by RJ is based in Newport Beach and works with owners across Orange County, including ${cityName}.`,
  };
}

export function cityPageFaqs(
  cityName: string,
  faqs: readonly CityFaq[]
): CityFaq[] {
  const shared = citySharedFaq(cityName);
  const last = faqs[faqs.length - 1];
  if (!last) return [shared];
  return [...faqs.slice(0, -1), shared, last];
}
