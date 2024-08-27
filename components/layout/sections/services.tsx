"use client";

import { useTranslation } from "@/app/i18n/client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getServiceList, Service } from "@/utils/services-utils";
import Image from "next/image";
import { ContactUsButton } from "../contact-us-button";

export const ServicesSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const serviceList = getServiceList(t);

  return (
    <section id="services" className="py-16">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {t("services.title")}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {t("services.section.title")}
      </h2>
      <h3
        id="service-list"
        className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-16"
      >
        {t("services.section.description")}
      </h3>

      <div className="container px-0 grid grid-cols-1 lg:grid-cols-2">
        {serviceList.map((service, index) => (
          <ServiceCard key={index} service={service} isFirstRow={index <= 1} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({
  service,
  isFirstRow,
}: {
  service: Service;
  isFirstRow: boolean;
}) => {
  const { title, href, description, image } = service;
  const saturation =
    "saturate-0 transition-all duration-200 ease-linear group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]";
  return (
    <Card
      key={href}
      className={`col-span-1 flex flex-col justify-center gap-6 p-6 w-full overflow-hidden scroll-reveal-up group/hoverimg transition-all dur sation-200 ease-linear ${
        isFirstRow ? "gradient-background-top" : "gradient-background-bottom"
      }
        `}
    >
      <div className="w-full overflow-hidden z-0 flex items-start justify-center">
        <Image src={image} alt="" height={150} className={saturation} />
      </div>
      <div>
        <CardTitle className={`line-clamp-2 z-10 pb-2`}>{title}</CardTitle>
        <CardContent key={href} className={` p-0 text-muted-foreground z-10`}>
          {description}
        </CardContent>
      </div>
    </Card>
  );
};
