import { useTranslation } from "@/app/i18n";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TypewritterComponent } from "../typewritter-component";
import heroImageDark from "@/public/devices.svg";

export const HeroSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return (
    <section className="w-full gradient-background-bottom">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 lg:pt-28">
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

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              {t("hero.cta1")}
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button variant="secondary" className="w-5/6 md:w-1/4 font-bold">
              {t("hero.cta2")}
            </Button>
          </div>
        </div>

        <div className="relative group">
          {/* <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div> */}
          {/* <div className="absolute top-0 left-0 w-full h-20 md:h-28 bg-gradient-to-t from-background/0 via-background/50 to-background rounded-lg z-20"></div> */}
          <Image
            className="w-full md:w-[60%] pt-10 mx-auto rounded-lg relative leading-none flex items-center z-10"
            src={heroImageDark}
            alt="dashboard image"
          />
          {/* <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div> */}
          <div className="absolute bottom-0 lg:-bottom-8 left-1/2 transform -translate-x-1/2 w-[50%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
