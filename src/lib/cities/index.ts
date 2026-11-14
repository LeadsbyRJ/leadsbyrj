import { CENTRAL_OC_CITIES } from "./central";
import { COAST_OC_CITIES } from "./coast";
import { NORTH_OC_CITIES } from "./north";
import { SOUTH_OC_CITIES } from "./south";
import type { OrangeCountyCity } from "./types";

export {
  CITY_PAGE_PREFIX,
  CITY_SERVICE_SECTIONS,
  cityPageFaqs,
  cityPageKeywords,
  cityPageTitle,
  cityPath,
} from "./types";
export type { CityFaq, CityServices, OrangeCountyCity } from "./types";

const CITY_SOURCES: OrangeCountyCity[] = [
  ...NORTH_OC_CITIES,
  ...CENTRAL_OC_CITIES,
  ...COAST_OC_CITIES,
  ...SOUTH_OC_CITIES,
];

export const ORANGE_COUNTY_CITIES: OrangeCountyCity[] = [...CITY_SOURCES].sort(
  (a, b) => a.name.localeCompare(b.name)
);

const CITIES_BY_SLUG = new Map(
  ORANGE_COUNTY_CITIES.map((city) => [city.slug, city])
);

function assertCityData() {
  const slugs = new Set<string>();
  const names = new Set<string>();

  for (const city of ORANGE_COUNTY_CITIES) {
    if (slugs.has(city.slug)) {
      throw new Error(`Duplicate city slug: ${city.slug}`);
    }
    if (names.has(city.name)) {
      throw new Error(`Duplicate city name: ${city.name}`);
    }
    slugs.add(city.slug);
    names.add(city.name);

    if (city.faqs.length === 0) {
      throw new Error(`City ${city.slug} is missing FAQs`);
    }
    if (city.intro.length === 0) {
      throw new Error(`City ${city.slug} is missing intro copy`);
    }
  }

  for (const city of ORANGE_COUNTY_CITIES) {
    for (const nearbySlug of city.nearby) {
      if (!slugs.has(nearbySlug)) {
        throw new Error(
          `Unknown nearby slug "${nearbySlug}" on city "${city.slug}"`
        );
      }
      if (nearbySlug === city.slug) {
        throw new Error(`City ${city.slug} lists itself as nearby`);
      }
    }
  }
}

assertCityData();

export function getAllCities(): OrangeCountyCity[] {
  return ORANGE_COUNTY_CITIES;
}

export function getCityBySlug(slug: string): OrangeCountyCity | undefined {
  return CITIES_BY_SLUG.get(slug);
}

export function getNearbyCities(city: OrangeCountyCity): OrangeCountyCity[] {
  return city.nearby
    .map((slug) => CITIES_BY_SLUG.get(slug))
    .filter((nearby): nearby is OrangeCountyCity => nearby != null);
}
