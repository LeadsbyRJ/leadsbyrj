export const SITE = {
  name: "Leads by RJ",
  url: "https://www.leadsbyrj.com",
  email: "rj@leadsbyrj.com",
  phone: "(949) 264-2559",
  phoneHref: "tel:+19492642559",
  xUrl: "https://x.com/LeadsbyRJ",
  tagline: "Websites, Google Ads & SEO that generate real local leads.",
  since: 2014,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "web",
    title: "Website Design & Development",
    description:
      "Conversion-focused, mobile-first websites that turn visitors into calls, form fills, and booked jobs—not just pretty pages.",
    points: ["Mobile-first UI", "Speed & SEO-ready", "Lead capture forms"],
  },
  {
    id: "ads",
    title: "Google Ads Management",
    description:
      "Local Search and Local Services Ads managed for qualified leads—tight targeting, clean creative, and waste cut ruthlessly.",
    points: ["Search & LSA", "Budget control", "Lead quality focus"],
  },
  {
    id: "seo",
    title: "SEO (Search Engine Optimization)",
    description:
      "On-page, local, and technical SEO so the customers ready to buy find you on Google—and keep finding you.",
    points: ["Local SEO", "On-page & technical", "Content that ranks"],
  },
  {
    id: "gbp",
    title: "Google Business Profile Optimization",
    description:
      "Stand out in Maps and the local pack with full profile optimization, posts, reviews strategy, and ongoing management.",
    points: ["Maps visibility", "Reviews & posts", "Category & NAP setup"],
  },
] as const;

export const SERVICE_TAGS = [
  "Website Design",
  "SEO",
  "Google Ads",
  "Local Services Ads",
  "Google Business Profile",
  "Landing Pages",
  "Local Lead Gen",
  "Maintenance",
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We audit your online presence, competitors, and goals so every dollar has a job.",
  },
  {
    step: "02",
    title: "Build & Launch",
    description:
      "Website, ads, SEO, and Google Business Profile—wired together for lead flow.",
  },
  {
    step: "03",
    title: "Optimize & Scale",
    description:
      "Track what works, cut waste, and grow the channels that fill your calendar.",
  },
] as const;

export const INDIVIDUAL_PRICING = [
  {
    name: "Google Business Profile Optimization",
    price: "$350",
    period: "one-time",
    description: "Full setup and optimization so your profile is ready to rank and convert.",
  },
  {
    name: "Google Business Profile Monthly Management",
    price: "$200",
    period: "/mo",
    description: "Posts, updates, review responses, and ongoing profile health.",
  },
  {
    name: "Google Ads / Local Services Ads Management",
    price: "$500",
    period: "/mo",
    description: "Campaign setup, bidding, creative, and lead quality optimization.",
  },
  {
    name: "Landing Page",
    price: "$400",
    period: "one-time",
    description: "High-converting single page for ads or a focused offer.",
  },
  {
    name: "Essentials Website",
    price: "$750",
    period: "one-time",
    description: "Up to 5 pages—clean, fast, and built to generate leads.",
  },
  {
    name: "Professional Website",
    price: "$2,000",
    period: "one-time",
    description: "Up to 10 pages plus e-commerce when you need more room to grow.",
  },
  {
    name: "SEO & Maintenance Retainer",
    price: "$200",
    period: "/mo",
    description: "Ongoing SEO, updates, and site care so performance doesn’t drift.",
  },
] as const;

export const PACKAGE_PRICING = [
  {
    name: "Starter",
    oneTime: "$600",
    monthly: "$320",
    popular: false,
    includes: [
      "Google Business Profile Optimization",
      "Essentials Website (up to 5 pages)",
      "GBP Monthly Management",
      "SEO & Maintenance Retainer",
    ],
    savings: "20% savings vs. à la carte",
  },
  {
    name: "Growth",
    oneTime: "$880",
    monthly: "$320",
    popular: true,
    includes: [
      "Google Business Profile Optimization",
      "Landing Page",
      "Essentials Website foundation",
      "GBP Monthly Management",
      "SEO & Maintenance Retainer",
    ],
    savings: "20% savings · Most Popular",
  },
  {
    name: "Scale & Dominate",
    oneTime: "$1,880",
    monthly: "$320",
    popular: false,
    includes: [
      "Google Business Profile Optimization",
      "Professional Website (up to 10 pages + ecom)",
      "GBP Monthly Management",
      "SEO & Maintenance Retainer",
    ],
    savings: "20% savings vs. à la carte",
  },
] as const;

export const PROJECTS = [
  {
    slug: "lobato-landscaping",
    name: "Lobato Landscaping",
    url: "https://www.lobatolandscaping.com",
    location: "South Orange County, CA",
    summary:
      "Local landscaping and hardscaping site with before/after project galleries, quote form, and strong local trust signals including a 5.0 Yelp rating.",
    tags: ["Website", "Local SEO", "Lead Forms"],
    image: "/projects/lobato-landscaping.jpg",
  },
  {
    slug: "vseeboxus",
    name: "vSeeBoxUS",
    url: "https://www.vseeboxus.tv",
    location: "National",
    summary:
      "Authorized streaming box product site built for retail and wholesale lead generation—clear catalog, trust, and conversion paths.",
    tags: ["E-commerce", "Product Site", "Wholesale Leads"],
    image: "/projects/vseeboxus.jpg",
  },
] as const;
