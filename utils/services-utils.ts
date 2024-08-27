import { TFunction } from "i18next";
import webapp from "@/public/webapp.svg";
import website from "@/public/website.svg";
import data from "@/public/data.svg";
import mobile from "@/public/mobile.svg";

export interface Service {
  title: string;
  href: string;
  description: string;
  image: string;
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
      title: t("services.mobileapp.title"),
      href: "#mobileapp",
      description: t("services.mobileapp.description"),
      image: mobile,
    },
    {
      title: t("services.data.title"),
      href: "#data",
      description: t("services.data.description"),
      image: data,
    },
    {
      title: t("services.website.title"),
      href: "#website",
      description: t("services.website.description"),
      image: website,
    },
  ];
};
