export const ORANGE_COUNTY_CITIES = [
  "Aliso Viejo",
  "Anaheim",
  "Brea",
  "Buena Park",
  "Costa Mesa",
  "Cypress",
  "Dana Point",
  "Fountain Valley",
  "Fullerton",
  "Garden Grove",
  "Huntington Beach",
  "Irvine",
  "La Habra",
  "La Palma",
  "Laguna Beach",
  "Laguna Hills",
  "Laguna Niguel",
  "Laguna Woods",
  "Lake Forest",
  "Los Alamitos",
  "Mission Viejo",
  "Newport Beach",
  "Orange",
  "Placentia",
  "Rancho Santa Margarita",
  "San Clemente",
  "San Juan Capistrano",
  "Santa Ana",
  "Seal Beach",
  "Stanton",
  "Tustin",
  "Villa Park",
  "Westminster",
  "Yorba Linda",
] as const;

export type OrangeCountyCity = (typeof ORANGE_COUNTY_CITIES)[number];

export type CitySection = {
  city: OrangeCountyCity;
  heading: string;
  copy: string;
};

export const CITY_SECTIONS = [
  {
    city: "Aliso Viejo",
    heading: "Website designer in Aliso Viejo, CA",
    copy: "Looking for a website designer in Aliso Viejo, CA? Leads by RJ builds custom websites for local service businesses and handles website development so the site is fast, clear, and easy to contact. We also run Google Maps marketing in Aliso Viejo so nearby customers can find you when they search.",
  },
  {
    city: "Anaheim",
    heading: "Website design and development in Anaheim",
    copy: "Website design and development in Anaheim should turn searches into calls, not just a pretty homepage. Leads by RJ is a digital marketing agency serving Anaheim with local SEO, Google Ads management, and Google Business Profile optimization for businesses that want a steady flow of local leads.",
  },
  {
    city: "Brea",
    heading: "Google Maps marketing in Brea, CA",
    copy: "Google Maps marketing in Brea, CA helps your business show up when locals search on Google and open Maps. Pair that with website design, SEO services, and online marketing, and Brea customers get a clear path from search to a call or quote request.",
  },
  {
    city: "Buena Park",
    heading: "Digital marketing agency serving Buena Park",
    copy: "Leads by RJ is a digital marketing agency serving Buena Park with custom websites, website development, and Google marketing. If you need a website designer in Buena Park, CA, we build small business websites that make it obvious how to reach you.",
  },
  {
    city: "Costa Mesa",
    heading: "Website developer in Costa Mesa, CA",
    copy: "Hire a website developer in Costa Mesa, CA for a custom website that loads quickly and captures leads on mobile. We combine website design in Costa Mesa with Google Maps marketing and local SEO so Costa Mesa businesses get found by people ready to buy.",
  },
  {
    city: "Cypress",
    heading: "Custom website design in Cypress, CA",
    copy: "Need a custom website in Cypress, CA? We design and develop sites for local businesses and contractors, then support them with Google marketing and SEO services. Leads by RJ is a website designer serving Cypress so your Cypress company looks professional and is easy to contact.",
  },
  {
    city: "Dana Point",
    heading: "Web designer in Dana Point, CA",
    copy: "Searching for a web designer near me in Dana Point? Leads by RJ offers website design and development in Dana Point plus Google Maps marketing for coastal businesses. Our digital marketing work helps Dana Point companies show up in local search and on Google Maps.",
  },
  {
    city: "Fountain Valley",
    heading: "SEO services in Fountain Valley, CA",
    copy: "SEO services in Fountain Valley, CA help the right customers find you before they call someone else. We also build custom websites and manage Google Ads, as a marketing agency serving Fountain Valley with local SEO and Google Business Profile optimization.",
  },
  {
    city: "Fullerton",
    heading: "Local SEO in Fullerton, CA",
    copy: "Local SEO in Fullerton is how nearby customers discover your business on Google. Leads by RJ provides website design, website development, and Google Maps marketing in Fullerton so your Fullerton company looks credible and ranks for the services you actually offer.",
  },
  {
    city: "Garden Grove",
    heading: "SEO company serving Garden Grove",
    copy: "Work with an SEO company serving Garden Grove that also builds the website. We offer website design and development in Garden Grove, Google marketing, and Google Business Profile optimization so Garden Grove businesses get more visibility in local search.",
  },
  {
    city: "Huntington Beach",
    heading: "Google Business Profile optimization in Huntington Beach",
    copy: "Google Business Profile optimization in Huntington Beach puts you on the map—literally. Leads by RJ is a website designer in Huntington Beach, CA, offering custom websites, Google Maps marketing, and digital marketing for coastal service businesses that want more local calls.",
  },
  {
    city: "Irvine",
    heading: "Website designer in Irvine, CA",
    copy: "Do you need a website designer in Irvine, CA? We build custom websites and handle website development for Irvine companies, then add Google Ads management, local SEO, and Google Maps marketing. Leads by RJ is a digital marketing agency serving Irvine and the surrounding job centers.",
  },
  {
    city: "La Habra",
    heading: "Small business website in La Habra, CA",
    copy: "A small business website in La Habra, CA should do more than look finished—it should bring in inquiries. We provide website design and development in La Habra, plus online marketing and Google Maps marketing so La Habra businesses get found by nearby customers.",
  },
  {
    city: "La Palma",
    heading: "Website for contractors in La Palma",
    copy: "Need a website for contractors in La Palma? Leads by RJ designs custom websites for trades and local service companies, then adds Google marketing and local SEO. We are a website designer serving La Palma, CA with practical digital marketing—not generic templates.",
  },
  {
    city: "Laguna Beach",
    heading: "Website designer in Laguna Beach, CA",
    copy: "Find a website designer in Laguna Beach, CA who understands local service businesses. We build custom websites, handle website development, and run Google Maps marketing in Laguna Beach so visitors and nearby customers can reach you without hunting for a phone number.",
  },
  {
    city: "Laguna Hills",
    heading: "Website design and development in Laguna Hills",
    copy: "Website design and development in Laguna Hills is built around leads, not just layout. Leads by RJ also offers SEO services, Google Ads management, and digital marketing for Laguna Hills businesses that want to grow locally and look sharp on every device.",
  },
  {
    city: "Laguna Niguel",
    heading: "Google Maps marketing in Laguna Niguel, CA",
    copy: "Google Maps marketing in Laguna Niguel, CA helps your listing stand out in local search and Maps. Pair that with a custom website and website development from a marketing agency serving Laguna Niguel, and you have a complete local presence customers can trust.",
  },
  {
    city: "Laguna Woods",
    heading: "Digital marketing agency serving Laguna Woods",
    copy: "Leads by RJ is a digital marketing agency serving Laguna Woods with website design, online marketing, and Google Business Profile optimization. If you need a website designer in Laguna Woods, CA, we create sites that make it easy to call, email, or request a quote.",
  },
  {
    city: "Lake Forest",
    heading: "Website developer in Lake Forest, CA",
    copy: "A website developer in Lake Forest, CA can turn your services into a clear, mobile-ready site. We offer website design and development in Lake Forest, plus local SEO and Google Maps marketing for Lake Forest service businesses that want to be found in South County.",
  },
  {
    city: "Los Alamitos",
    heading: "Online marketing in Los Alamitos, CA",
    copy: "Get a custom website and online marketing in Los Alamitos, CA from a team that also handles Google marketing. Leads by RJ provides website design, SEO services, and Google Maps marketing in Los Alamitos for local companies ready to grow.",
  },
  {
    city: "Mission Viejo",
    heading: "Web design in Mission Viejo, CA",
    copy: "Web design in Mission Viejo, CA should support real inquiries—calls, forms, and booked jobs. We are a website designer in Mission Viejo offering website development, digital marketing, and Google Maps marketing for South Orange County businesses.",
  },
  {
    city: "Newport Beach",
    heading: "Website designer in Newport Beach, CA",
    copy: "Leads by RJ is a website designer in Newport Beach, CA, based in Orange County and focused on local service businesses. We provide website design and development in Newport Beach, Google Maps marketing, and digital marketing so Newport Beach companies get found by nearby customers.",
  },
  {
    city: "Orange",
    heading: "Marketing agency serving Orange, CA",
    copy: "Looking for website development in Orange, CA? Leads by RJ is a marketing agency serving Orange with custom websites, local SEO, and Google Ads management. We also help with Google Maps marketing so businesses in the City of Orange show up when locals search.",
  },
  {
    city: "Placentia",
    heading: "Google marketing in Placentia, CA",
    copy: "Google marketing in Placentia, CA includes Maps, Search, and a website that converts. Hire a website designer in Placentia for custom websites, website development, and SEO services that help Placentia businesses attract customers in North Orange County.",
  },
  {
    city: "Rancho Santa Margarita",
    heading: "Web designer in Rancho Santa Margarita, CA",
    copy: "Need a web designer in Rancho Santa Margarita, CA? We build small business websites and provide local SEO, Google Maps marketing, and website development. Leads by RJ is a digital marketing agency serving Rancho Santa Margarita for companies that want more local visibility.",
  },
  {
    city: "San Clemente",
    heading: "Website designer in San Clemente, CA",
    copy: "A website designer in San Clemente, CA can help coastal businesses look as professional as the work they deliver. We offer website design and development in San Clemente plus Google Maps marketing and online marketing so San Clemente customers can find you fast.",
  },
  {
    city: "San Juan Capistrano",
    heading: "Website design and development in San Juan Capistrano",
    copy: "Website design and development in San Juan Capistrano starts with a clear offer and an easy way to request a quote. Leads by RJ also provides Google Maps marketing and SEO services as a marketing agency serving San Juan Capistrano and nearby South County cities.",
  },
  {
    city: "Santa Ana",
    heading: "Digital marketing in Santa Ana, CA",
    copy: "Leads by RJ is a digital marketing agency serving Santa Ana with custom websites, Google Maps marketing, and Google Ads management. If you need a website designer in Santa Ana, CA, we build sites that support local SEO and make it simple to get in touch.",
  },
  {
    city: "Seal Beach",
    heading: "Custom website design in Seal Beach, CA",
    copy: "Get a custom website and SEO services in Seal Beach, CA so neighbors and nearby cities can find you. We offer website design, Google Maps marketing in Seal Beach, and online marketing for local service businesses along the coast.",
  },
  {
    city: "Stanton",
    heading: "Small business website in Stanton, CA",
    copy: "A small business website in Stanton, CA should load fast and make calling you obvious. Leads by RJ provides website development, Google Ads management, and Google Maps marketing in Stanton as a website designer serving Stanton businesses that want local leads.",
  },
  {
    city: "Tustin",
    heading: "Website developer in Tustin, CA",
    copy: "Need a website for contractors in Tustin—or a website developer for another local service? We build custom websites, then add local SEO and Google marketing. Leads by RJ is a website designer in Tustin, CA and a digital marketing partner for growing teams.",
  },
  {
    city: "Villa Park",
    heading: "Digital marketing agency serving Villa Park",
    copy: "Leads by RJ is a digital marketing agency serving Villa Park with website design, website development, and Google Maps marketing. Local customers should be able to find a Villa Park business quickly—we help with the website, local SEO, and Google marketing to make that happen.",
  },
  {
    city: "Westminster",
    heading: "Google Maps marketing in Westminster, CA",
    copy: "Online marketing in Westminster works best when your website, Google Business Profile, and local SEO all agree. We offer website design and development in Westminster, Google Business Profile optimization, and Google Maps marketing in Westminster, CA for local businesses.",
  },
  {
    city: "Yorba Linda",
    heading: "Website designer in Yorba Linda, CA",
    copy: "Hire a website designer in Yorba Linda, CA for a custom website that supports calls and quote requests. Leads by RJ also provides local SEO, Google Maps marketing in Yorba Linda, and digital marketing for North County businesses that want an SEO company focused on real inquiries.",
  },
] as const satisfies readonly CitySection[];

export const SERVICE_AREA_FAQS = [
  {
    question: "Do you offer website design in Irvine?",
    answer:
      "Yes. Leads by RJ is a website designer in Irvine, CA, and we provide website design and development, custom websites, local SEO, Google Ads management, and Google Maps marketing for Irvine businesses and the rest of Orange County.",
  },
  {
    question: "Can I hire a website designer in Newport Beach, CA?",
    answer:
      "Yes. Leads by RJ is based in Newport Beach and works as a website designer, website developer, and marketing agency for local service businesses. We build custom websites and handle Google marketing, including Google Maps marketing, for Newport Beach and all 34 Orange County cities.",
  },
  {
    question: "Do you provide Google Maps marketing in Huntington Beach?",
    answer:
      "Yes. Google Maps marketing in Huntington Beach includes Google Business Profile optimization, local SEO, and a website that converts map clicks into calls. We also offer the same Google Maps marketing and digital marketing support in every Orange County city we serve.",
  },
  {
    question: "Is Leads by RJ a digital marketing agency serving all of Orange County?",
    answer:
      "Yes. We are a digital marketing and online marketing agency serving every incorporated city in Orange County, CA—from Anaheim and Santa Ana to Laguna Beach and San Clemente. Services include website design, website development, SEO services, Google Ads management, and Google Business Profile optimization.",
  },
  {
    question: "Do you build custom websites and websites for contractors?",
    answer:
      "Yes. We build custom websites and small business websites for contractors and other local service companies. Website development includes mobile-first design, lead capture, and SEO-ready pages so a website for contractors can generate calls and quote requests—not just sit online.",
  },
  {
    question: "Do you offer SEO services, local SEO, and Google Ads management?",
    answer:
      "Yes. Leads by RJ offers SEO services, local SEO, and Google Ads management alongside website design and Google Business Profile optimization. As an SEO company and marketing agency for Orange County businesses, we focus on the Google searches and map results that bring in local customers.",
  },
] as const;

type SectionCity = (typeof CITY_SECTIONS)[number]["city"];
type MissingCitySection = Exclude<OrangeCountyCity, SectionCity>;
const _allCitiesHaveCopy: MissingCitySection extends never ? true : never =
  true;
void _allCitiesHaveCopy;

export function citySectionId(city: string) {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
