import { useTranslation } from "@/app/i18n";
import { ContactUsButton } from "../contact-us-button";
import { TypewritterComponent } from "../typewritter-component";
import heroBackground from "@/public/hero-background.jpg";
import Image from "next/image";

export const HeroSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return (
    <section className="relative flex items-center justify-center w-full h-screen">
      {/* Background Image */}
      <div className="absolute top-[-56px] inset-0 z-2" z-index="0">
        <Image
          src={heroBackground}
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className="opacity-40"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>

      <div className="flex relative z-10 w-full max-w-screen-xl mx-auto px-4 items-center justify-center">
        <div className="flex flex-col text-start space-y-8 items-start justify-start">
          <div className="max-w-screen-xl mx-auto text-start text-4xl md:text-6xl font-semibold">
            <h1 className="pb-3">{t("hero.title.1")}</h1>
            <h1>
              <span className="text-transparent bg-gradient-to-tr from-primary to-accent bg-clip-text">
                <TypewritterComponent
                  words={[1, 2, 3, 4].map((i) => t(`hero.title.2.${i}`))}
                />
              </span>
            </h1>
          </div>
          <p className="max-w-screen-sm w-full text-xl text-muted-foreground text-start">
            {t("hero.subtitle")}
          </p>
          <ContactUsButton
            lng={lng}
            code="getintouch"
            startAlignment={true}
            background={""}
          />
        </div>
      </div>
    </section>
  );
};
