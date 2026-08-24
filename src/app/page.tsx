import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Comparison } from "@/components/home/Comparison";
import { Testimonials } from "@/components/home/Testimonials";
import { Process } from "@/components/home/Process";
import { RankingAudit } from "@/components/home/RankingAudit";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FAQ } from "@/components/home/FAQ";
import { CtaLeadForm } from "@/components/home/CtaLeadForm";

export const metadata: Metadata = {
  title: {
    absolute:
      "Leads by RJ | Google Ads, SEO & Google Business Profile | Orange County",
  },
  description:
    "Get more local leads with conversion-focused websites, Google Ads, SEO, and Google Business Profile management. Orange County roots. Free ranking audit available.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Leads by RJ | Custom Coded Websites, SEO, and Google Marketing",
    description:
      "Leads by RJ | Custom Coded Websites, SEO, and Google Marketing",
    url: "/",
    type: "website",
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
    title: "Leads by RJ | Custom Coded Websites, SEO, and Google Marketing",
    description:
      "Leads by RJ | Custom Coded Websites, SEO, and Google Marketing",
    images: ["https://www.leadsbyrj.com/photos/website-link-preview.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChoose />
      <Comparison />
      <Testimonials />
      <Process />
      <RankingAudit />
      <FeaturedProjects />
      <FAQ />
      <CtaLeadForm />
    </>
  );
}
