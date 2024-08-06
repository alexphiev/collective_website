import { TFunction } from "i18next";
import webapp from "@/public/webapp.svg";
import website from "@/public/website.svg";
import data from "@/public/data.svg";
import mobile from "@/public/mobile.svg";

export interface Service {
  title: string;
  href: string;
  description: string;
  col: string;
  image: string;
}

export const getServiceList = (t: TFunction): Service[] => {
  return [
    {
      title: t("services.webapp.title"),
      href: "#webapplication",
      description: t("services.webapp.description"),
      col: "3",
      image: webapp,
    },
    {
      title: t("services.mobileapp.title"),
      href: "#mobileapplications",
      description: t("services.mobileapp.description"),
      col: "2",
      image: mobile,
    },
    {
      title: t("services.data.title"),
      href: "#data",
      description: t("services.data.description"),
      col: "2",
      image: data,
    },
    {
      title: t("services.website.title"),
      href: "#website",
      description: t("services.website.description"),
      col: "3",
      image: website,
    },
  ];
};
