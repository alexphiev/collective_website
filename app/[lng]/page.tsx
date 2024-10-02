import { AboutSection } from "@/components/layout/sections/about";
import ContactSection from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ImpactSection } from "@/components/layout/sections/impact";
import { ServicesSection } from "@/components/layout/sections/services";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      <HeroSection lng={lng} />
      <ImpactSection lng={lng} />
      <ServicesSection lng={lng} />
      <TestimonialSection lng={lng} />
      <AboutSection lng={lng} />
      {/* <PricingSection lng={lng} /> */}

      {/* <BenefitsSection lng={lng} />
      <FeaturesSection lng={lng} />
      <FAQSection lng={lng} /> */}
      <ContactSection lng={lng} />
      <FooterSection lng={lng} />
    </>
  );
}
