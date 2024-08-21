import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { languages } from "../i18n/settings";
import { ClientsSection } from "@/components/layout/sections/clients";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      <HeroSection lng={lng} />
      <ClientsSection />
      <ServicesSection lng={lng} />
      <TeamSection lng={lng} />
      <BenefitsSection lng={lng} />
      <FeaturesSection lng={lng} />
      <TestimonialSection lng={lng} />
      <PricingSection lng={lng} />
      <FAQSection lng={lng} />
      <FooterSection lng={lng} />
    </>
  );
}
