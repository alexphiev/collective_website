import { useTranslation } from "@/app/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTeam } from "@/utils/team-utils";
import { getValues } from "@/utils/values-utils";
import Image from "next/image";
import { createElement } from "react";
import { Separator } from "@/components/ui/separator";
import { Linkedin } from "lucide-react";
import { SectionDivider } from "./section-divider";
import { SectionTitle } from "./section-title";
import Link from "next/link";

export const AboutSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);
  const team = getTeam(t);
  const values = getValues(t); // Get the translated values

  return (
    <section className="gradient-background-bottom">
      <SectionDivider id="about" />
      <div className="container px-0">
        <SectionTitle title={t("about.team.title")} />
        <h3 className="mx-auto text-xl text-center text-muted-foreground mb-12">
          {t("about.team.description")}
        </h3>

        {/* Team */}
        <div className="px-0 grid grid-cols-2 lg:grid-cols-4 mb-16 gap-6">
          {team.map(
            (
              {
                imageUrl,
                imageLinkUrl,
                firstName,
                lastName,
                position,
                flagIcon,
                socialNetworks,
              },
              index
            ) => (
              <div
                key={index}
                className="relative drop-shadow-xl w-full h-full overflow-hidden rounded-xl bg-transparent group/hoverimg scroll-reveal-up"
              >
                {/* Blur effect layers */}
                <div className="absolute w-full h-full bg-accent/50 blur-[50px] -left-1/2 -top-1/2"></div>
                <div className="absolute w-full h-full bg-accent/50 blur-[50px] left-1/2 top-1/2"></div>

                <Card className="flex flex-col relative w-[calc(100%-2px)] h-[calc(100%-2px)] drop-shadow-xl overflow-hidden bg-card opacity-90 rounded-xl inset-[1px]">
                  <CardHeader className="p-0 gap-0">
                    <div className="h-full overflow-hidden">
                      <a
                        href={imageLinkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={imageUrl}
                          alt="Profile Image"
                          width={300}
                          height={300}
                          className="w-full aspect-square object-cover transition-all duration-200 ease-linear size-full group-hover/hoverimg:scale-[1.05]"
                        />
                      </a>
                    </div>
                    <div className="flex justify-between relative items-center p-4">
                      <CardTitle className="flex flex-col">
                        {firstName}
                        <span className="text-primary">{lastName}</span>
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Image
                          src={flagIcon}
                          alt={`${firstName} ${lastName}'s flag`}
                          width={32}
                          height={24}
                          className="object-cover"
                        />
                        {socialNetworks.find(network => network.name === "LinkedIn") && (
                          <a
                            href={socialNetworks.find(network => network.name === "LinkedIn")?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent
                    key={index}
                    className={"text-muted-foreground pb-4 px-4"}
                  >
                    {position}
                  </CardContent>
                </Card>
              </div>
            )
          )}
        </div>

        {/* Values */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            {t("about.values.title")}
          </h3>
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
