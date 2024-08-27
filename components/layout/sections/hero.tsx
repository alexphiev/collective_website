import { useTranslation } from "@/app/i18n";
import { Badge } from "@/components/ui/badge";
import { ContactUsButton } from "../contact-us-button";
import { TypewritterComponent } from "../typewritter-component";

export const HeroSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return (
    <section className="w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto pt-20 lg:pt-28 pb-8">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2 px-3">
            <span className="mr-2 text-primary">
              <Badge>{t("hero.badge.label")}</Badge>
            </span>
            <span> {t("hero.badge.title")} </span>
          </Badge>

          <div className="max-w-screen-xl mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1 className="pb-3">{t("hero.title.1")}</h1>
            <h1>
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
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

        {/* <div className="relative group">
          <Image
            className="w-full md:w-[60%] pt-10 mx-auto rounded-lg relative leading-none flex items-center z-10"
            src={heroImageDark}
            alt="dashboard image"
          />
          <div className="absolute bottom-0 lg:-bottom-8 left-1/2 transform -translate-x-1/2 w-[50%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
        </div> */}
      </div>
    </section>
  );
};
