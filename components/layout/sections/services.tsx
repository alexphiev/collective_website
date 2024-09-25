"use client";

import { useTranslation } from "@/app/i18n/client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getServiceList, Service } from "@/utils/services-utils";
import Image from "next/image";
import { SectionTitle } from "./section-title";
import { useState } from "react";

export const ServicesSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const serviceList = getServiceList(t);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-16 px-2 bg-card">
      <SectionTitle title={t("services.title")} />

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {t("services.section.title")}
      </h2>
      <h3
        id="service-list"
        className="mx-auto text-xl text-center text-muted-foreground mb-16"
      >
        {t("services.section.description")}
      </h3>

      <div className="container px-0 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {serviceList.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            isClicked={clickedIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({
  service,
  isClicked,
  onClick,
}: {
  service: Service;
  isClicked: boolean;
  onClick: () => void;
}) => {
  const { title, href, description, image } = service;

  return (
    <Card
      key={href}
      className="border-0 group relative overflow-hidden h-[300px] lg:h-[440px] cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          className="transition-all duration-500 ease-in-out group-hover:transform group-hover:scale-110 saturate-0 group-hover:saturate-100"
        />
      </div>
      <CardContent
        className={`relative z-20 h-full flex flex-col justify-end transition-all duration-500 ease-in-out ${
          isClicked
            ? "opacity-0 transform translate-y-4"
            : "opacity-100 transform translate-y-0"
        }`}
      >
        <CardTitle className="text-white mb-2">{title}</CardTitle>
      </CardContent>
      <div
        className={`absolute inset-0 bg-background/90 transition-all duration-300 ease-in-out ${
          isClicked ? "z-30 opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`absolute inset-x-0 bottom-0 overflow-y-auto text-white p-6 transition-all duration-300 ease-in-out z-30 ${
          isClicked ? "h-full" : "h-0 opacity-0"
        }`}
      >
        <CardTitle className="mb-4">{title}</CardTitle>
        <p>{description}</p>
      </div>
    </Card>
  );
};

/*

layout="fill"
objectFit="cover"
objectPosition="center top"
className="transition-all duration-500 ease-in-out group-hover:scale-110 saturate-100 group-hover:saturate-100"


        className={`absolute inset-x-0 bottom-0 text-white transition-all duration-300 ease-in-out z-30 ${

*/