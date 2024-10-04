'use client'

import { useTranslation } from '@/app/i18n/client'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Project } from '@/utils/projects-utils'
import { Users } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import placeholderImage from '/public/projects/placeholder.jpg'
import { TechList } from './tech-list'

export default function ProjectDetails({
  project,
  lng,
}: {
  project: Project
  lng: string
}) {
  const { t } = useTranslation(lng)
  const { images, techList, teamSize } = project
  return (
    <div className="flex h-full w-full flex-col items-center justify-start overflow-y-auto">
      <div className="relative max-h-[400px] w-full">
        {images.length > 0 ? (
          <div className="relative mx-auto w-full">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((src: StaticImageData, index: number) => (
                  <CarouselItem key={index}>
                    <Image
                      src={src}
                      alt={`Project screenshot ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        ) : (
          <Image
            src={placeholderImage}
            alt={t('project placeholder image')}
            className="h-full w-full object-contain"
            layout="fill"
          />
        )}
      </div>

      <div className="w-full space-y-0 p-4">
        <div className="align-center flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-[200px] flex-1">
            <h2 className="break-words text-2xl font-bold">
              {t(`projects.${project.code}.title`)}
            </h2>
          </div>
          <div className="flex flex-shrink-0 items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {t('projects.teamSize', { count: teamSize })}
            </span>
          </div>
        </div>
        <p className="pb-4 text-primary">
          {t(`projects.${project.code}.company`)}
        </p>

        <TechList techList={techList} />

        <Tabs defaultValue="description" className="w-full pt-6">
          <TabsList className="grid w-[100%] grid-cols-4 bg-card">
            <TabsTrigger value="description">
              {t('projects.overview')}
            </TabsTrigger>
            <TabsTrigger value="features">{t('projects.features')}</TabsTrigger>
            <TabsTrigger value="challenges">
              {t('projects.challenges')}
            </TabsTrigger>
            <TabsTrigger value="solutions">
              {t('projects.solutions')}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-2">
            {t(`projects.${project.code}.description`)}
          </TabsContent>
          <TabsContent value="features" className="p-2">
            {t(`projects.${project.code}.features`)}
          </TabsContent>
          <TabsContent value="challenges" className="p-2">
            {t(`projects.${project.code}.challenges`)}
          </TabsContent>
          <TabsContent value="solutions" className="p-2">
            {t(`projects.${project.code}.solutions`)}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
