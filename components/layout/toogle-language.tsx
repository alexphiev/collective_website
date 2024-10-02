"use client";

import { useTranslation } from "@/app/i18n/client";
import { languages } from "@/app/i18n/settings";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "../ui/select";
import { saEvent } from "@/utils/analytics-utils";

const languageNames: { [key in (typeof languages)[number]]: string } = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export const ToggleLanguage = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Select
      defaultValue={lng}
      onValueChange={(value: string) => {
        saEvent(`click_language_${value}}`);
        const newPath = pathname.replace(/\/[a-z]{2}\/?/, `/${value}/`);
        router.push(newPath);
      }}
    >
      <SelectTrigger className="relative px-2 font-bold text-xs border-none focus:ring-0 focus:ring-offset-0 h-[36px] w-[55px] m-0 hover:bg-transparent/20 hover:text-accent-foreground">
        {t(`lang.${lng}.code`)}
      </SelectTrigger>
      <SelectContent className="relative bg-muted text-accent-foreground">
        <SelectGroup>
          {languages.map((language) => (
            <SelectItem
              key={language}
              value={language}
              className="focus:bg-transparent/20"
            >
              <div className="flex items-center gap-2">
                {languageNames[language]}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
