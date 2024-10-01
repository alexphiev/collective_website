"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "@/app/i18n/client";
import { getTestimonials } from "@/utils/testimonials-utils";
import Image from "next/image";
import { SectionTitle } from "./section-title";
import { SectionDivider } from "./section-divider";

export const TestimonialSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  return (
    <section className="gradient-background-top">
      <SectionDivider id="testimonials" />
      <SectionTitle title={t("testimonials.subtitle")} className="mb-8" />

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[85%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {getTestimonials(t).map(({ name, comment, title, image }) => (
            <CarouselItem key={name} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative drop-shadow-xl w-full h-[295px] overflow-hidden rounded-xl bg-transparent">
                <Card className="absolute flex flex-col z-[1] opacity-90 rounded-xl inset-[1px] bg-card">
                  <CardContent className="pt-6 pb-0 h-[195px] text-ellipsis overflow-auto">
                    {`"${comment}"`}
                  </CardContent>

                  <CardHeader>
                    <div className="flex flex-row items-center gap-4">
                      <Avatar>
                        <Image
                          src={image}
                          alt="radix"
                          fill
                          quality={10}
                          style={{ objectFit: "cover" }}
                        />
                        <AvatarFallback>{name.split(" ")[0][0]}</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col">
                        <CardTitle className="text-lg text-primary">
                          {name}
                        </CardTitle>
                        <CardDescription>{title}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                <div className="absolute w-full h-full bg-accent/50 blur-[50px] -left-1/2 -top-1/2"></div>
                <div className="absolute w-full h-full bg-accent/50 blur-[50px] left-1/2 top-1/2"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
