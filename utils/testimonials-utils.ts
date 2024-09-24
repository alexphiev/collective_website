import { TFunction } from "i18next";
import jaime from "@/public/jaime.jpeg";
import henrik from "@/public/henrik.jpeg";
import { StaticImageData } from "next/image";

export interface ReviewProps {
  image: StaticImageData;
  name: string;
  title: string;
  comment: string;
  rating: number;
}

export const getTestimonials = (t: TFunction): ReviewProps[] => {
  return [
    {
      image: jaime,
      name: "Jaime Mateo",
      title: "CTO · Bridge for Billions",
      comment: t("testimonials.jaime"),
      rating: 5.0,
    },
    {
      image: henrik,
      name: "Henrik Holen",
      title: "CEO · Viva Labs",
      comment: t("testimonials.henrik"),
      rating: 5.0,
    },
  ];
};
