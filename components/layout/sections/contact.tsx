import { useTranslation } from '@/app/i18n'
import dynamic from 'next/dynamic'
import { SectionDivider } from './section-divider'
import { SectionTitle } from './section-title'

const ContactForm = dynamic(() => import('../contact-form'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

export default async function ContactSection({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng)
  return (
    <section className="gradient-background-top w-full px-0 pb-12 md:pb-16">
      <SectionDivider id="contact" />
      <div className="container max-w-4xl px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <SectionTitle title={t('contact.getInTouch')} textAlign="left" />
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('contact.contactDescription')}
            </p>
          </div>
          <ContactForm lng={lng} />
        </div>
      </div>
    </section>
  )
}
