import { TFunction } from "i18next";
import { Handshake, Sprout, Users } from "lucide-react";

export const getValues = (t: TFunction) => {
  return [
    {
      icon: Users,
      title: t("about.values.1.title"),
      description: t("about.values.1.description"),
    },
    {
      icon: Sprout,
      title: t("about.values.2.title"),
      description: t("about.values.2.description"),
    },
    {
      icon: Handshake,
      title: t("about.values.3.title"),
      description: t("about.values.3.description"),
    },
  ];
};
