import { CheckCircle, Globe, LucideIcon, MessageCircle } from "lucide-react";
import { TFunction } from "i18next";

export const getValues = (t: TFunction) => {
  return [
    {
      icon: CheckCircle,
      title: t("about.values.1.title"),
      description: t("about.values.1.description"),
    },
    {
      icon: Globe,
      title: t("about.values.2.title"),
      description: t("about.values.2.description"),
    },
    {
      icon: MessageCircle,
      title: t("about.values.3.title"),
      description: t("about.values.3.description"),
    },
  ];
};
