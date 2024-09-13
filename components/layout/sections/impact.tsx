import Image from "next/image";
import { sdgs } from "@/utils/sdg-utils";
import { useTranslation } from "@/app/i18n";
import { clients } from "@/utils/clients-utils";
import { ClientsSection } from "./clients";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const ImpactSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);
  return (
    <section id="impact" className="py-16 gradient-background">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {t("impact.title")}
      </h2>
      <ClientsSection />
      <div className="container grid sm:grid-cols-1 lg:grid-cols-2 pt-6">
        {/* Left */}
        <div className="flex flex-col justify-start w-full pr-6 gap-6">
          <div className="grid grid-cols-3 w-full">
            <Card className="flex flex-col justify-center items-center text-center p-4 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20">
              <h1 className="text-6xl text-primary">{8}</h1>
              <h2>{t("impact.years")}</h2>
            </Card>
            <Card className="flex flex-col justify-center items-center text-center p-4 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20">
              <h1 className="text-6xl text-primary">{clients.length}</h1>
              <h2>{t("impact.clients")}</h2>
            </Card>
            <Card className="flex flex-col justify-center items-center text-center p-4 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20">
              <h1 className="text-6xl text-primary">{sdgs.length}</h1>
              <h2>{t("impact.sdgs")}</h2>
            </Card>
          </div>

          <h3 className="mx-auto text-xl text-muted-foreground">
            {t("impact.description")}
          </h3>
        </div>
        {/* Right */}
        <div className="grid grid-cols-5 h-min relative">
          {sdgs.map(({ icon, name, url }) => (
            <Link key={name} href={url} target="_blank">
              <Image
                key={name}
                className="rounded-lg filter grayscale hover:filter-none transform transition-transform duration-300 ease-linear hover:scale-125  shadow-lg"
                src={icon}
                alt={name}
                width={100}
                height={100}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
