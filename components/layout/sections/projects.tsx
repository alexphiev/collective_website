'use client'

import { useTranslation } from '@/app/i18n/client'
import { SectionTitle } from '@/components/layout/sections/section-title'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { getProjects } from '@/utils/projects-utils'
import Autoplay from 'embla-carousel-autoplay'
import { InfoIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import ProjectDetails from './project-details'
import { SectionDivider } from './section-divider'
import { TechList } from './tech-list'
import placeholderImage from '/public/projects/placeholder.jpg'

export const ProjectSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)
  const projects = getProjects(t)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section>
      <SectionDivider id="projects" />
      <div className="container flex flex-col gap-4 px-0 lg:gap-16">
        <SectionTitle title={t('projects.subtitle')} />
        <div className="grid w-full grid-cols-1 lg:grid-cols-2">
          {/* Left Section: Project Message */}
          <div className="col-span-1 mb-10 flex w-full flex-col justify-start gap-6 lg:mb-0 lg:pr-6">
            <div>
              <p className="whitespace-pre-line text-lg text-muted-foreground">
                {t('projects.description')}
              </p>
            </div>
          </div>

          {/* Right Section: Projects Carousel */}
          <div className="col-span-1 w-full">
            <Carousel
              className="w-full"
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnMouseEnter: true,
                }) as any,
              ]}
            >
              <CarouselContent>
                {projects.map(({ code, techList, images }, index) => (
                  <CarouselItem key={code}>
                    <div
                      className="group relative flex w-full cursor-pointer flex-col"
                      onClick={() => setSelectedProject(index)}
                    >
                      <InfoIcon className="absolute right-4 top-4 z-10 h-6 w-6 text-transparent transition-all duration-300 ease-in-out group-hover:text-foreground/80" />
                      <Image
                        src={images.length > 0 ? images[0] : placeholderImage}
                        alt={`Project image for ${t(`projects.${code}.title`)}`}
                        width={500}
                        height={400}
                        className="h-[200px] w-full rounded-md object-cover transition-all duration-300 hover:scale-105 lg:h-[400px]"
                      />
                      <div className="flex flex-col gap-0 pt-4">
                        <h3 className="text-xl font-semibold">
                          {t(`projects.${code}.title`)}
                        </h3>
                        <p className="pb-2 text-lg text-primary">
                          {t(`projects.${code}.company`)}
                        </p>
                        <TechList techList={techList} limit={5} />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-2" />
              <CarouselNext className="mr-2" />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Modal for displaying project details */}
      {selectedProject !== null && (
        <Dialog
          open={selectedProject !== null}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setSelectedProject(null)
            }
          }}
        >
          <DialogContent className="gradient-background-top h-[95vh] w-[95vw] max-w-[95vw] overflow-hidden rounded-lg p-0 sm:max-w-[90vw] md:max-w-[80vw] lg:h-[90vh] lg:max-h-[700px] lg:w-[70vw] lg:max-w-[600px]">
            <div className="h-full overflow-y-auto">
              <ProjectDetails project={projects[selectedProject]} lng={lng} />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

export default ProjectSection
