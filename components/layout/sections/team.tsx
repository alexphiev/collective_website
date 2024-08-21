import { useTranslation } from "@/app/i18n";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTeam } from "@/utils/team";
import Image from "next/image";
import Link from "next/link";

export const TeamSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);
  const team = getTeam(t);

  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[90%] xl:w-[80%] py-24">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          {t("team.section.title")}
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          {t("team.title")}
        </h2>
        <span className="text-muted-foreground">{t("team.description")}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {team.map(
          (
            { imageUrl, firstName, lastName, position, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="flex flex-col py-6 pb-4 px-4">
                  {firstName}
                  <span className="text-primary">{lastName}</span>
                </CardTitle>
              </CardHeader>
              <CardContent
                key={index}
                className={"text-muted-foreground pb-6 px-4"}
              >
                {position}
              </CardContent>

              <CardFooter className="space-x-4 mt-auto px-4">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
