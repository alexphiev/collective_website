import { TFunction } from "i18next";
import data from "@/public/services/data-primary.jpg";
import mobile from "@/public/services/mobile-primary.jpg";
import webapp from "@/public/services/web-primary.jpg";
import backend from "@/public/services/backend-primary.jpg";
import { StaticImageData } from "next/image";

export interface Service {
  title: string;
  href: string;
  description: string;
  image: StaticImageData;
}

export const getServiceList = (t: TFunction): Service[] => {
  return [
    {
      title: t("services.webapp.title"),
      href: "#webapp",
      description: t("services.webapp.description"),
      image: webapp,
    },
    {
      title: t("services.data.title"),
      href: "#data",
      description: t("services.data.description"),
      image: data,
    },
    {
      title: t("services.mobileapp.title"),
      href: "#mobileapp",
      description: t("services.mobileapp.description"),
      image: mobile,
    },
    // {
    //   title: t("services.website.title"),
    //   href: "#website",
    //   description: t("services.website.description"),
    //   image: website,
    //   gradient: "from-primary to-accent",
    // },
    {
      title: t("services.backend.title"),
      href: "#backend",
      description: t("services.backend.description"),
      image: backend,
    },
  ];
};
