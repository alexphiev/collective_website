import { TFunction } from "i18next";
import data from "@/public/data.jpg";
import mobile from "@/public/mobile.jpg";
import webapp from "@/public/web.jpg";
import backend from "@/public/backend.jpg";
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
