"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

export const ContactUsButton = ({
  lng,
  code,
  background,
}: {
  lng: string;
  code: string;
  background: string;
}) => {
  const { t } = useTranslation(lng);
  const router = useRouter();
  return (
    <div
      className={`w-full py-16 flex justify-center items-center ${background}`}
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
