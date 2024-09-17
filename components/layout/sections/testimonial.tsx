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
import { Star } from "lucide-react";
import { SectionTitle } from "./section-title";
import { useTranslation } from "@/app/i18n/client";

interface ReviewProps {
  image: string;
  name: string;
  title: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image:
      "https://i0.wp.com/www.bridgeforbillions.org/wp-content/uploads/2022/04/JAIME.jpg?w=1080&ssl=1",
    name: "Jaime Mateo",
    title: "CTO · Bridge for Billions",
    comment:
      "I would highlight the communication and accountability from their side which helped us to always know the status of the project.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophia Collins",
    title: "Cybersecurity Analyst",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Adam Johnson",
    title: "Chief Technology Officer",
    comment:
      "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ethan Parker",
    title: "Data Scientist",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ava Mitchell",
    title: "IT Project Manager",
    comment:
      "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud incididunt consectetur adipiscing elit.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isabella Reed",
    title: "DevOps Engineer",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4.9,
  },
];

export const TestimonialSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  return (
    <section id="testimonials" className="py-16 gradient-background">
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
          {reviewList.map(({ name, comment, title, image }) => (
            <CarouselItem
              key={name}
              className="md:basis-1/2 lg:basis-1/3 gap-[1.2rem] xl:gap-[1.5rem]"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0 h-[130px] text-ellipsis">
                  {/* <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div> */}
                  {`"${comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={image} alt="radix" />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{name}</CardTitle>
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
