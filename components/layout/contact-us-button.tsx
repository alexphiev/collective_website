import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "@/app/i18n";

export const ContactUsButton = async ({
  lng,
  code,
  startAlignment,
}: {
  lng: string;
  code: string;
  startAlignment?: boolean;
}) => {
  const { t } = await useTranslation(lng);
  return (
    <div className={`w-full flex ${startAlignment ? "py-4 justify-start items-start" : "container py-4 justify-center items-center"}`}>
      <div className="relative inline-block group">
        {/* <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-secondary via-primary to-secondary blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div> */}
        <Button
          variant="default"
          className="p-8 text-xl semibold relative z-10 group/arrow"
        >
          {t(code)}
          <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};
