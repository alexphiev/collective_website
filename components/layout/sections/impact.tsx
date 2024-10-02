"use client";

import Image from "next/image";
import { sdgs } from "@/utils/sdg-utils";
import { useTranslation } from "@/app/i18n";
import { clients } from "@/utils/clients-utils";
import { ClientsSection } from "./clients";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { SectionTitle } from "./section-title";
import { saEvent } from "@/utils/analytics-utils";

export const ImpactSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);
  const cardData = [
    { value: 8, label: t("impact.years") },
    { value: clients.length, label: t("impact.clients") },
    { value: sdgs.length, label: t("impact.sdgs") },
  ];

  return (
    <section id="impact" className="pt-[120px] gradient-background-top">
      <SectionTitle title={t("impact.title")} />
      <ClientsSection />
      <div className="container grid sm:grid-cols-1 lg:grid-cols-2 pt-6">
        {/* Left */}
        <div className="flex flex-col justify-start w-full lg:pr-6 gap-6">
          <div className="grid grid-cols-3 w-full">
            {cardData.map((data, index) => (
              <Card
                key={index}
                className="flex flex-col justify-center items-center text-center p-4 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20"
              >
                <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-bl from-accent to-primary">
                  {data.value}
                </h1>
                <h2>{data.label}</h2>
              </Card>
            ))}
          </div>

          <p className="mx-auto text-muted-foreground">
            {t("impact.description")}
          </p>
        </div>

        {/* Right */}
        <div className="grid grid-cols-3 lg:grid-cols-5 h-min relative">
          {sdgs.map(({ icon, name, url }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              onClick={() => {
                saEvent(`click_impact_${icon}}`);
              }}
            >
              <Image
                key={name}
                className="rounded-lg filter opacity-85 saturate-[0.65] transform transition-all duration-300 ease-linear hover:scale-110 hover:saturate-100 hover:opacity-100 shadow-lg"
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
