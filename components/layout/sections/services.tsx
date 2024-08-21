"use client";

import { useTranslation } from "@/app/i18n/client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getServiceList, Service } from "@/utils/services";
import Image from "next/image";

export const ServicesSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const serviceList = getServiceList(t);

  return (
    <section id="services" className="pt-12 pb-24">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {t("services.title")}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {t("services.section.title")}
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-16">
        {t("services.section.description")}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      {/* First services line */}
      <div className="grid grid-rows-2 gap-6 w-full lg:w-[70%] xl:w-[60%] mx-auto mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {serviceList.slice(0, 2).map((service, index) => (
            <ServiceCard key={index} service={service} isFirstRow={true} />
          ))}
        </div>
        {/* Second services line */}
        <div className="grid grid-cols-2 gap-6 w-full">
          {serviceList.slice(2, 4).map((service, index) => (
            <ServiceCard key={index} service={service} isFirstRow={false} />
          ))}
        </div>
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
      className={`col-span-1 flex flex-col justify-center gap-6 p-6 w-full overflow-hidden group/hoverimg transition-all dur sation-200 ease-linear ${
        isFirstRow ? "gradient-background-top" : "gradient-background-bottom"
      }`}
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
