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
import { SectionTitle } from "./section-title";
import { useTranslation } from "@/app/i18n/client";
import { getTestimonials } from "@/utils/testimonials-utils";
import Image from "next/image";

export const TestimonialSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  return (
    <section id="testimonials" className="py-16 pt-36 gradient-background-top">
      <div className="text-center mb-8">
        <SectionTitle title={t("testimonials.title")} />

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          {t("testimonials.subtitle")}
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[85%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {getTestimonials(t).map(({ name, comment, title, image }) => (
            <CarouselItem
              key={name}
              className="md:basis-1/2 lg:basis-1/3 gap-[1.2rem] xl:gap-[1.5rem]"
            >
              <Card className="bg-background">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
