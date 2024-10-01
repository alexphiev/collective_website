import { TFunction } from "i18next";
import alexandre from "@/public/team/alexandre.jpeg";
import stefano from "@/public/team/stefano.jpeg";
import daan from "@/public/team/daan.jpeg";
import bernardo from "@/public/team/bernardo_compressed_squared.jpg";

import france from "@/public/flags/france.svg";
import italy from "@/public/flags/italy.svg";
import netherlands from "@/public/flags/netherlands.svg";
import portugal from "@/public/flags/portugal.svg";

import { StaticImageData } from "next/image";

interface TeamProps {
  imageUrl: string | StaticImageData;
  imageLinkUrl: string;
  flagIcon: string | StaticImageData;
  firstName: string;
  lastName: string;
  position: string;
  yearsOfExperience: number;
  nationality: string;
  languages: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}

export const getTeam = (t: TFunction): TeamProps[] => {
  return [
    {
      imageUrl: alexandre,
      imageLinkUrl: "https://www.linkedin.com/in/alexandrephiev/",
      flagIcon: france,
      firstName: "Alexandre",
      lastName: "Phiev",
      position: "Senior Full Stack Web Developer",
      yearsOfExperience: 8,
      nationality: "fr",
      languages: ["fr", "en", "es"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/alexandrephiev/",
        },
        {
          name: "Github",
          url: "https://github.com/alexphiev",
        },
      ],
    },
    {
      imageUrl: stefano,
      imageLinkUrl: "https://www.linkedin.com/in/stefano-ventrudo-64742783/",
      flagIcon: italy,
      firstName: "Stefano",
      lastName: "Ventrudo",
      position: "Senior Mobile & Full Stack Web Developer",
      yearsOfExperience: 10,
      nationality: "it",
      languages: ["it", "en", "es"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/stefano-ventrudo-64742783/",
        },
        {
          name: "Github",
          url: "https://github.com/stefanovnt",
        },
      ],
    },
    {
      imageUrl: daan,
      imageLinkUrl: "https://www.linkedin.com/in/daan-knoors/",
      flagIcon: netherlands,
      firstName: "Daan",
      lastName: "Knoors",
      position: "Senior Data Scientist & Privacy Engineer",
      yearsOfExperience: 8,
      nationality: "nl",
      languages: ["nl", "en", "es", "de"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/daan-knoors/",
        },
        {
          name: "Github",
          url: "https://github.com/daanknoors",
        },
      ],
    },
    {
      imageUrl: bernardo,
      imageLinkUrl: "https://www.linkedin.com/in/b-caetano/",
      flagIcon: portugal,
      firstName: "Bernardo",
      lastName: "Caetano",
      position: "Senior Backend Developer · AWS Specialist",
      yearsOfExperience: 7,
      nationality: "pt",
      languages: ["pt", "en"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/b-caetano/",
        },
        {
          name: "Github",
          url: "https://github.com/alexphiev",
        },
      ],
    },
  ];
};
