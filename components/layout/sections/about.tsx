import { useTranslation } from "@/app/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTeam } from "@/utils/team-utils";
import Image from "next/image";
import { SectionTitle } from "./section-title";
import { CheckCircle, Globe, MessageCircle } from "lucide-react";
import { getValues } from "@/utils/values-utils";
import { createElement } from "react";

export const AboutSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);
  const team = getTeam(t);
  const values = getValues(t); // Get the translated values

  return (
    <section id="about" className="py-16 gradient-background-bottom">
      <div className="container px-0">
        <SectionTitle title={t("about.section.title")} />

        <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold">
          {t("about.team.title")}
        </h2>
        <h3 className="mx-auto text-xl text-center text-muted-foreground mb-12">
          {t("about.team.description")}
        </h3>

        {/* Team */}
        <div className="px-0 grid grid-cols-2 lg:grid-cols-4 mb-16">
          {team.map(
            (
              { imageUrl, imageLinkUrl, firstName, lastName, position },
              index
            ) => (
              <Card
                key={index}
                className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg scroll-reveal-up"
              >
                <CardHeader className="p-0 gap-0">
                  <a
                    href={imageLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="h-full overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt="Profile Image"
                        width={300}
                        height={300}
                        className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                      />
                    </div>
                  </a>
                  <CardTitle className="flex flex-col p-4">
                    {firstName}
                    <span className="text-primary">{lastName}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent
                  key={index}
                  className={"text-muted-foreground pb-4 px-4"}
                >
                  {position}
                </CardContent>
              </Card>
            )
          )}
        </div>

        {/* Values */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold mb-6">{t("about.values.title")}</h3>
          <div className="flex flex-row gap-10">
            {values.map(({ icon, title, description }, index) => (
              <div key={index} className="flex items-start w-1/3">
                <div className="mr-4">{createElement(icon)}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{title}</h4>
                  <p className="text-foreground/70">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
