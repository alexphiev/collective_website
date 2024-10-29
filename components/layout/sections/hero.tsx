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

      <div className="container relative z-10 mx-auto flex w-full max-w-screen-xl items-center justify-center px-0 lg:px-4">
        <div className="flex flex-col items-start justify-start space-y-4 text-start sm:space-y-4">
          <div className="mx-auto max-w-screen-xl text-start text-4xl font-semibold md:text-6xl">
            <div className="pb-3 text-3xl md:text-6xl">{t('hero.title.1')}</div>
            <div>
              <span className="text-gradient text-xl md:text-6xl">
                <TypewritterComponent
                  words={[1, 2, 3, 4].map((i) => t(`hero.title.2.${i}`))}
                />
              </span>
            </div>
          </div>
          <h1 className="text-md w-full max-w-screen-sm text-start text-muted-foreground md:text-xl">
            {t('hero.subtitle')}
          </h1>
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
