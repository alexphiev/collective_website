import { useTranslation } from '@/app/i18n'
import { ContactUsButton } from '../contact-us-button'
import { TypewritterComponent } from '../typewritter-component'
import heroBackground from '@/public/hero-background.avif'
import Image from 'next/image'
import ScrollDownArrow from '../scroll-down-arrow'

export const HeroSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)

  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      {/* Background Image */}
      <div className="z-2 absolute inset-0 top-[-56px]" z-index="0">
        <Image
          src={heroBackground}
          alt="Hero Background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={50}
          className="opacity-40"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>

      <div className="container relative z-10 mx-auto flex w-full max-w-screen-xl items-center justify-center lg:px-4">
        <div className="flex flex-col items-start justify-start space-y-8 text-start">
          <div className="mx-auto max-w-screen-xl text-start text-4xl font-semibold md:text-6xl">
            <h1 className="pb-3">{t('hero.title.1')}</h1>
            <h1>
              <span className="text-gradient">
                <TypewritterComponent
                  words={[1, 2, 3, 4].map((i) => t(`hero.title.2.${i}`))}
                />
              </span>
            </h1>
          </div>
          <p className="w-full max-w-screen-sm text-start text-xl text-muted-foreground">
            {t('hero.subtitle')}
          </p>
          <ContactUsButton
            lng={lng}
            code="contact.getInTouch"
            startAlignment={true}
          />
        </div>
      </div>
      {/* Scroll down arrow */}
      <ScrollDownArrow />
    </section>
  )
}
