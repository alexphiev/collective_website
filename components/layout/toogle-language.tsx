"use client";

import { useTranslation } from "@/app/i18n/client";
import { languages } from "@/app/i18n/settings";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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
        const newPath = pathname.replace(/\/[a-z]{2}\/?/, `/${value}/`);
        router.push(newPath);
      }}
    >
      <SelectTrigger className="px-2 border-none focus:ring-0 focus:ring-offset-0 h-[36px] w-[55px] m-0">
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <SelectValue placeholder="Select a language">
            {t(`nav.lang.${lng}.code`)}
          </SelectValue>
        </Button>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map((language) => (
            <SelectItem key={language} value={language}>
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
