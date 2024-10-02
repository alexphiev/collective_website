"use client";

import { useTranslation } from "@/app/i18n/client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getServiceList, Service } from "@/utils/services-utils";
import Image from "next/image";
import { useState } from "react";
import { SectionTitle } from "./section-title";
import { SectionDivider } from "./section-divider";
import { ContactUsButton } from "../contact-us-button";
import { InfoIcon } from "lucide-react";
import { saEvent } from "@/utils/analytics-utils";

export const ServicesSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const serviceList = getServiceList(t);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <section className="gradient-background-bottom text-accent">
      <SectionDivider id="services" />
      <SectionTitle title={t("services.section.title")} />
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
            onClick={() => {
              saEvent(`click_services_${service.href}}`);
              handleCardClick(index);
            }}
          />
        ))}
      </div>
      <div className="pt-[80px]">
        <ContactUsButton lng={lng} code="explainyourneeds" />
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
      className="border-0 group relative overflow-hidden h-[300px] lg:h-[440px] cursor-pointer group/hoverimg scroll-reveal-up"
      onClick={onClick}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            className="saturate-[0.6] transition-all duration-500 ease-in-out group-hover:transform group-hover:scale-110 group-hover:saturate-100"
          />
        </div>
      </div>
      <CardContent
        className={`relative z-20 h-full flex flex-col justify-end transition-all duration-500 ease-in-out ${
          isClicked
            ? "opacity-0 transform translate-y-4"
            : "opacity-100 transform translate-y-0"
        }`}
      >
        <InfoIcon
          onClick={onClick}
          className="w-6 h-6 absolute top-2 right-2 text-transparent transition-all duration-500 ease-in-out group-hover/hoverimg:text-foreground"
        />
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
