import { useTranslation } from "@/app/i18n";
import { Badge } from "@/components/ui/badge";
import { ContactUsButton } from "../contact-us-button";
import { TypewritterComponent } from "../typewritter-component";
import heroBackground from "@/public/hero-background.png";
import Image from "next/image";

export const HeroSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-[calc(100vh-4rem)] relative flex items-center justify-center">
        <Image
          src={heroBackground}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        <div className="relative px-2 z-10 grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 lg:py-28">
          <div className="text-center space-y-8">
            <div className="max-w-screen-xl mx-auto text-center text-4xl md:text-6xl font-bold">
              <h1 className="pb-3">{t("hero.title.1")}</h1>
              <h1>
                <span className="text-transparent px-2 bg-gradient-to-tr from-accent to-primary bg-clip-text">
                  <TypewritterComponent
                    words={[1, 2, 3].map((i) => t(`hero.title.2.${i}`))}
                  />
                </span>
              </h1>
            </div>

            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              {t("hero.subtitle")}
            </p>
          </div>
          <ContactUsButton lng={lng} code="getintouch" background={""} />
        </div>
      </div>
    </section>
  );
};
