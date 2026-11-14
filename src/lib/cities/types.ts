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
