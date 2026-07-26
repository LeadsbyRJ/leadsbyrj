export const SITE = {
  name: "Leads by RJ",
  url: "https://www.leadsbyrj.com",
  email: "rj@leadsbyrj.com",
  phone: "(949) 264-2559",
  phoneHref: "tel:+19492642559",
  xUrl: "https://x.com/LeadsbyRJ",
  tagline:
    "Websites, SEO, Google Maps Marketing & Google Ads that generate real local leads.",
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

/** Individual services — match Framer site copy */
export const PRICING_CATEGORIES = [
  {
    id: "google-marketing",
    title: "Google Marketing",
    services: [
      {
        name: "Google Business Profile Optimization",
        price: "$350",
        period: "one-time",
        features: [
          "Google Business Profile setup, photos, posts & review strategy",
          "Full citation audit & cleanup",
          "Manual citation creation on all major directories",
          "Listings across top search engines (Google, Apple Maps, Bing, Yahoo)",
          "NAP consistency across every platform",
          "Local category & keyword optimization",
        ],
      },
      {
        name: "Google Business Profile Monthly Management",
        price: "$200",
        period: "/mo",
        features: [
          "Ongoing posts, review responses, changes, updates and optimization",
          "Citation consistency monitoring",
          "Quarterly NAP audits",
          "New directory submissions & citation building each month",
          "Monthly performance reporting with insights & recommendations",
          "Competitor tracking & local ranking monitoring",
        ],
      },
      {
        name: "Google Ads and/or Google Local Service Ads Management",
        price: "$500",
        period: "/mo",
        features: [
          "Full campaign setup, optimization, and management for Google Search, Performance Max, and Local Services Ads",
        ],
      },
    ],
  },
  {
    id: "website-seo",
    title: "Website Design & SEO",
    services: [
      {
        name: "Landing Page",
        price: "$400",
        period: "one-time",
        features: [
          "1-page high-converting site",
          "Lead capture & opt-in form",
          "Mobile, tablet & desktop responsive",
          "SEO setup & speed optimization",
          "Hosting setup + social icons",
          "Unlimited revisions • 3-day delivery",
        ],
      },
      {
        name: "Essentials Website",
        price: "$750",
        period: "one-time",
        features: [
          "Up to 5 custom-coded pages",
          "Gallery, projects & blog",
          "Lead forms + opt-in on every page",
          "Advanced SEO & speed optimization",
          "Hosting setup + social icons",
          "Unlimited revisions • 5-day delivery",
        ],
      },
      {
        name: "Professional Website",
        price: "$2,000",
        period: "one-time",
        features: [
          "Up to 10 custom-coded pages",
          "Full e-commerce store (up to 50 products)",
          "Secure payment integration",
          "Email autoresponder & automation",
          "Advanced integrations & SEO",
          "Unlimited revisions • 7-day delivery",
        ],
      },
      {
        name: "SEO & Maintenance Retainer",
        price: "$200",
        period: "/mo",
        features: [
          "Ongoing SEO, monthly website updates & minor changes, performance reporting (only available for websites I build)",
        ],
      },
    ],
  },
] as const;

/**
 * Packages = 20% savings vs. à la carte
 * Starter: GBP Opt + Landing ($750 → $600) + $320/mo (GBP Monthly + SEO)
 * Growth: GBP Opt + Essentials ($1,100 → $880) + $320/mo
 * Scale: GBP Opt + Professional ($2,350 → $1,880) + $320/mo
 */
export const PACKAGE_PRICING = [
  {
    name: "Starter",
    oneTime: "$600",
    monthly: "$320",
    popular: false,
    savings: "20% savings vs. à la carte",
    includes: [
      "Google Business Profile Optimization ($350 value)",
      "Landing Page — 1-page high-converting site ($400 value)",
      "Google Business Profile Monthly Management",
      "SEO & Maintenance Retainer",
      "Lead capture form, mobile-ready, SEO & speed setup",
      "Ongoing posts, reviews, citations & monthly reporting",
    ],
  },
  {
    name: "Growth",
    oneTime: "$880",
    monthly: "$320",
    popular: true,
    savings: "20% savings · Most Popular",
    includes: [
      "Google Business Profile Optimization ($350 value)",
      "Essentials Website — up to 5 custom-coded pages ($750 value)",
      "Google Business Profile Monthly Management",
      "SEO & Maintenance Retainer",
      "Gallery, projects & blog + lead forms on every page",
      "Advanced SEO, speed optimization & unlimited revisions",
    ],
  },
  {
    name: "Scale & Dominate",
    oneTime: "$1,880",
    monthly: "$320",
    popular: false,
    savings: "20% savings vs. à la carte",
    includes: [
      "Google Business Profile Optimization ($350 value)",
      "Professional Website — up to 10 pages + e-commerce ($2,000 value)",
      "Google Business Profile Monthly Management",
      "SEO & Maintenance Retainer",
      "Full store (up to 50 products), payments & email automation",
      "Advanced integrations, SEO & unlimited revisions",
    ],
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
