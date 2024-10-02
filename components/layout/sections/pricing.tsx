import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'
import { getPlans } from '@/utils/pricing-utils'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from '@/app/i18n'
import { createNumberArray } from '@/lib/utils'
import { SectionTitle } from './section-title'

export const PricingSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)
  const plans = getPlans(t)
  return (
    <section id="pricing" className="gradient-background py-24 sm:py-32">
      <SectionTitle title={t('pricing.title')} />

      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
        {t('pricing.subtitle')}
      </h2>

      <h3 className="mx-auto pb-24 text-center text-xl text-muted-foreground md:w-1/2">
        {t('pricing.description')}
      </h3>

      <div className="container grid w-[85%] gap-8 px-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {plans.map(({ code, popular, isNew, price, benefitSize }) => (
          <Card
            key={code}
            className={
              popular
                ? 'border-[1.5px] border-primary shadow-black/10 drop-shadow-xl dark:shadow-white/10 lg:scale-[1.1]'
                : ''
            }
          >
            <CardHeader>
              <div className="flex flex-row gap-4">
                <CardTitle className="pb-2">
                  {t(`pricing.${code}.title`)}
                </CardTitle>
                {isNew && (
                  <span className="mr-2 text-primary">
                    <Badge>NEW</Badge>
                  </span>
                )}
              </div>

              <CardDescription className="pb-4">
                {t(`pricing.${code}.description`)}
              </CardDescription>

              <div>
                <span className="text-3xl font-bold">${price}</span>
                <span className="text-muted-foreground">
                  {' '}
                  /{t(`pricing.${code}.unit`)}
                </span>
              </div>
            </CardHeader>

            <CardContent className="flex">
              <div className="space-y-4">
                {createNumberArray(benefitSize).map((index) => (
                  <span key={`${code}-${index}`} className="flex">
                    <Check className="mr-2 text-primary" />
                    <h3>{t(`pricing.${code}.benefits.${index}`)}</h3>
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button
                variant={popular ? 'default' : 'secondary'}
                className="w-full"
              >
                {t(`pricing.cta`)}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
