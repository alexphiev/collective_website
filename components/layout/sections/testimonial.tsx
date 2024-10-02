'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useTranslation } from '@/app/i18n/client'
import { getTestimonials } from '@/utils/testimonials-utils'
import Image from 'next/image'
import { SectionTitle } from './section-title'
import { SectionDivider } from './section-divider'

export const TestimonialSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)
  return (
    <section className="gradient-background-top">
      <SectionDivider id="testimonials" />
      <SectionTitle title={t('testimonials.subtitle')} className="mb-8" />

      <Carousel
        opts={{
          align: 'start',
        }}
        className="relative mx-auto w-[85%] lg:max-w-screen-xl"
      >
        <CarouselContent>
          {getTestimonials(t).map(({ name, comment, title, image }) => (
            <CarouselItem key={name} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative h-[295px] w-full overflow-hidden rounded-xl bg-transparent drop-shadow-xl">
                <Card className="absolute inset-[1px] z-[1] flex flex-col rounded-xl bg-card opacity-90">
                  <CardContent className="h-[195px] overflow-auto text-ellipsis pb-0 pt-6">
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
                          style={{ objectFit: 'cover' }}
                        />
                        <AvatarFallback>{name.split(' ')[0][0]}</AvatarFallback>
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
                <div className="absolute -left-1/2 -top-1/2 h-full w-full bg-accent/50 blur-[50px]"></div>
                <div className="absolute left-1/2 top-1/2 h-full w-full bg-accent/50 blur-[50px]"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
