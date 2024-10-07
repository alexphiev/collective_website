import { useTranslation } from '@/app/i18n'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getTeam } from '@/utils/team-utils'
import { getValues } from '@/utils/values-utils'
import Image from 'next/image'
import { createElement } from 'react'
import { Linkedin } from 'lucide-react'
import { SectionDivider } from './section-divider'
import { SectionTitle } from './section-title'
import { saEvent } from '@/utils/analytics-utils'
import LinkedInLink from './team-linkedin-link'

export const AboutSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)
  const team = getTeam(t)
  const values = getValues(t) // Get the translated values

  return (
    <section className="gradient-background-bottom">
      <SectionDivider id="about" />
      <div className="container px-0">
        <SectionTitle title={t('about.team.title')} />
        <h3 className="mx-auto mb-12 text-center text-xl text-muted-foreground">
          {t('about.team.description')}
        </h3>

        {/* Team */}
        <div className="mb-16 grid grid-cols-1 gap-6 px-0 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(
            (
              {
                imageUrl,
                imageLinkUrl,
                firstName,
                lastName,
                position,
                flagIcon,
                socialNetworks,
              },
              index
            ) => (
              <div
                key={index}
                className="group/hoverimg scroll-reveal-up relative h-full w-full overflow-hidden rounded-xl bg-transparent drop-shadow-xl"
              >
                {/* Blur effect layers */}
                <div className="absolute -left-1/2 -top-1/2 h-full w-full bg-accent/50 blur-[50px]"></div>
                <div className="absolute left-1/2 top-1/2 h-full w-full bg-accent/50 blur-[50px]"></div>

                <Card className="relative inset-[1px] flex h-[calc(100%-2px)] w-[calc(100%-2px)] flex-col overflow-hidden rounded-xl bg-card opacity-90 drop-shadow-xl">
                  <CardHeader className="relative gap-0 p-0">
                    <div className="h-full overflow-hidden">
                      <a
                        href={imageLinkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={imageUrl}
                          alt={`${firstName} ${lastName} profile image`}
                          width={300}
                          height={300}
                          className="aspect-square size-full w-full object-cover transition-all duration-200 ease-linear group-hover/hoverimg:scale-[1.05]"
                        />
                      </a>
                      {socialNetworks.find(
                        (network) => network.name === 'LinkedIn'
                      ) && (
                        <LinkedInLink
                          url={
                            socialNetworks.find(
                              (network) => network.name === 'LinkedIn'
                            )?.url
                          }
                          firstName={firstName}
                        />
                      )}
                    </div>
                    <div className="relative flex items-center justify-between p-4">
                      <CardTitle className="relative flex w-full flex-col">
                        {firstName}
                        <span className="text-primary">{lastName}</span>
                        <div className="absolute right-0 top-0">
                          <Image
                            src={flagIcon}
                            alt={`${firstName} ${lastName}'s flag`}
                            width={32}
                            height={24}
                            className="object-cover"
                          />
                        </div>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent
                    key={index}
                    className={'px-4 pb-4 text-muted-foreground'}
                  >
                    {position}
                  </CardContent>
                </Card>
              </div>
            )
          )}
        </div>

        {/* Values */}
        <div className="flex flex-col gap-6">
          <h3 className="mb-6 text-2xl font-bold text-foreground">
            {t('about.values.title')}
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Change here */}
            {values.map(({ icon, title, description }, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4">{createElement(icon)}</div>
                <div>
                  <h4 className="mb-2 text-xl font-semibold">{title}</h4>
                  <p className="text-foreground/70">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
