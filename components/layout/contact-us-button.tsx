"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

export const ContactUsButton = ({
  lng,
  code,
  startAlignment,
}: {
  lng: string;
  code: string;
  startAlignment?: boolean;
}) => {
  const { t } = useTranslation(lng);
  const router = useRouter();
  return (
    <div
      className={`w-full flex ${
        startAlignment
          ? "py-4 justify-start items-start"
          : "mt-0 justify-center items-center"
      }`}
    >
      <div className="relative inline-block group">
        {/* <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-secondary via-primary to-secondary blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div> */}
        <Button
          variant="default"
          className="p-8 text-lg relative group/arrow"
          onClick={() => router.push("/#contact")}
        >
          {t(code)}
          <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};
