'use client'

import { useTranslation } from '@/app/i18n/client'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { getServiceList, Service } from '@/utils/services-utils'
import Image from 'next/image'
import { useState } from 'react'
import { SectionTitle } from './section-title'
import { SectionDivider } from './section-divider'
import { ContactUsButton } from '../contact-us-button'
import { InfoIcon } from 'lucide-react'
import { saEvent } from '@/utils/analytics-utils'

export const ServicesSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)
  const serviceList = getServiceList(t)
  const [clickedIndex, setClickedIndex] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index)
  }

  return (
    <section className="gradient-background-bottom text-accent">
      <SectionDivider id="services" />
      <SectionTitle title={t('services.section.title')} />
      <h3
        id="service-list"
        className="mx-auto mb-16 text-center text-xl text-muted-foreground"
      >
        {t('services.section.description')}
      </h3>

      <div className="container grid grid-cols-1 gap-4 px-0 lg:grid-cols-4">
        {serviceList.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            isClicked={clickedIndex === index}
            onClick={() => {
              saEvent(`click_services_${service.href}}`);
              handleCardClick(index);
            }}
          />
        ))}
      </div>
      <div className="pt-[80px]">
        <ContactUsButton lng={lng} code="explainyourneeds" />
      </div>
    </section>
  )
}

const ServiceCard = ({
  service,
  isClicked,
  onClick,
}: {
  service: Service
  isClicked: boolean
  onClick: () => void
}) => {
  const { title, href, description, image } = service

  return (
    <Card
      key={href}
      className="group/hoverimg scroll-reveal-up group relative h-[300px] cursor-pointer overflow-hidden border-0 lg:h-[440px]"
      onClick={onClick}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            className="saturate-[0.6] transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:transform group-hover:saturate-100"
          />
        </div>
      </div>
      <CardContent
        className={`relative z-20 flex h-full flex-col justify-end transition-all duration-500 ease-in-out ${
          isClicked
            ? 'translate-y-4 transform opacity-0'
            : 'translate-y-0 transform opacity-100'
        }`}
      >
        <InfoIcon
          onClick={onClick}
          className="absolute right-2 top-2 h-6 w-6 text-transparent transition-all duration-500 ease-in-out group-hover/hoverimg:text-foreground"
        />
        <CardTitle className="mb-2 text-white">{title}</CardTitle>
      </CardContent>
      <div
        className={`absolute inset-0 bg-background/90 transition-all duration-300 ease-in-out ${
          isClicked ? 'z-30 opacity-100' : 'pointer-events-none opacity-0'
        }`}
      ></div>
      <div
        className={`absolute inset-x-0 bottom-0 z-30 overflow-y-auto p-6 text-white transition-all duration-300 ease-in-out ${
          isClicked ? 'h-full' : 'h-0 opacity-0'
        }`}
      >
        <CardTitle className="mb-4">{title}</CardTitle>
        <p>{description}</p>
      </div>
    </Card>
  )
}
