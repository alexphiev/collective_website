import Image from 'next/image'
import { sdgs } from '@/utils/sdg-utils'
import { useTranslation } from '@/app/i18n'
import { clients } from '@/utils/clients-utils'
import { ClientsSection } from './clients'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { SectionTitle } from './section-title'

export const ImpactSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)
  const cardData = [
    { value: 8, label: t('impact.years') },
    { value: clients.length, label: t('impact.clients') },
    { value: sdgs.length, label: t('impact.sdgs') },
  ]

  return (
    <section
      id="impact"
      className="gradient-background-top pt-[40px] md:pt-[120px]"
    >
      <SectionTitle title={t('impact.title')} />
      <ClientsSection />
      <div className="container grid pt-6 sm:grid-cols-1 lg:grid-cols-2">
        {/* Left */}
        <div className="flex w-full flex-col justify-start gap-6 lg:pr-6">
          <div className="grid w-full grid-cols-1 sm:grid-cols-3">
            {cardData.map((data, index) => (
              <Card
                key={index}
                className="flex flex-col items-center justify-center rounded-lg border border-white border-opacity-20 bg-white bg-opacity-5 p-4 text-center shadow-lg backdrop-blur-lg backdrop-filter"
              >
                <h1 className="bg-gradient-to-bl from-accent to-primary bg-clip-text text-6xl text-transparent">
                  {data.value}
                </h1>
                <h2>{data.label}</h2>
              </Card>
            ))}
          </div>

          <p className="mx-auto text-muted-foreground">
            {t('impact.description')}
          </p>
        </div>

        {/* Right */}
        <div className="relative grid h-min grid-cols-3 lg:grid-cols-5">
          {sdgs.map(({ icon, name, url }) => (
            <Link key={name} href={url} target="_blank">
              <Image
                key={name}
                className="transform rounded-lg opacity-85 shadow-lg saturate-[0.65] filter transition-all duration-300 ease-linear hover:scale-110 hover:opacity-100 hover:saturate-100"
                src={icon}
                alt={name}
                width={100}
                height={100}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
