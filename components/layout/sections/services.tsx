"use client";

import { useTranslation } from "@/app/i18n/client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getServiceList, Service } from "@/utils/services";
import Image from "next/image";

export const ServicesSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const serviceList = getServiceList(t);

  return (
    <section id="services" className="container py-24">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {t("services.title")}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {t("services.section.title")}
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {t("services.section.description")}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      {/* First services line */}
      <div className="grid grid-rows-2 gap-6 w-full lg:w-[80%] xl:w-[70%] mx-auto mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {serviceList.slice(0, 2).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        {/* Second services line */}
        <div className="grid grid-cols-2 gap-6 w-full">
          {serviceList.slice(2, 4).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: Service }) => {
  const { title, href, description, image } = service;
  return (
    <Card
      key={href}
      className={`col-span-1 flex flex-col relative justify-end p-6 w-full bg-gradient-to-t from-transparent to-slate-800 dark:bg-card h-[350px] overflow-hidden group/hoverimg transition-all dur sation-200 ease-linear`}
    >
      <div className="absolute top-6 w-full h-full overflow-hidden z-0 flex items-start justify-center">
        <Image
          src={image}
          alt=""
          height={150}
          className="saturate-0 transition-all duration-200 ease-linear group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
        />
      </div>
      <CardTitle className="line-clamp-1 z-10 pb-3">{title}</CardTitle>
      <CardContent
        key={href}
        className={`line-clamp-3 p-0 text-muted-foreground z-10`}
      >
        {description}
      </CardContent>
    </Card>
  );
};
