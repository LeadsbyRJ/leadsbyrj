import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Comparison } from "@/components/home/Comparison";
import { Process } from "@/components/home/Process";
import { RankingAudit } from "@/components/home/RankingAudit";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FAQ } from "@/components/home/FAQ";
import { CtaLeadForm } from "@/components/home/CtaLeadForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChoose />
      <Comparison />
      <Process />
      <RankingAudit />
      <FeaturedProjects />
      <FAQ />
      <CtaLeadForm />
    </>
  );
}
