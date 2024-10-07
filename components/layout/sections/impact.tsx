import { useTranslation } from '@/app/i18n'
import { Card } from '@/components/ui/card'
import { clients } from '@/utils/clients-utils'
import { sdgs } from '@/utils/sdg-utils'
import { ClientsSection } from './clients'
import { ImpactLink } from './impact-sdg-link'
import { SectionTitle } from './section-title'

export const ImpactSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)
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
      <div className="container grid px-0 pt-6 sm:grid-cols-1 lg:grid-cols-2">
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
        <div className="relative grid h-min grid-cols-3 justify-items-center lg:grid-cols-5">
          {sdgs.map(({ icon, name, url }) => (
            <ImpactLink key={name} icon={icon} name={name} url={url} />
          ))}
        </div>
      </div>
    </section>
  )
}
