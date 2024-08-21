import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { getPlans } from "@/utils/pricing";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/app/i18n";
import { createNumberArray } from "@/lib/utils";

export const PricingSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);
  const plans = getPlans(t);
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {t("pricing.title")}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {t("pricing.subtitle")}
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-24">
        {t("pricing.description")}
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(({ code, popular, isNew, price, benefitSize }) => (
          <Card
            key={code}
            className={
              popular
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                : ""
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
                  {" "}
                  /{t(`pricing.${code}.unit`)}
                </span>
              </div>
            </CardHeader>

            <CardContent className="flex">
              <div className="space-y-4">
                {createNumberArray(benefitSize).map((index) => (
                  <span key={`${code}-${index}`} className="flex">
                    <Check className="text-primary mr-2" />
                    <h3>{t(`pricing.${code}.benefits.${index}`)}</h3>
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button
                variant={popular ? "default" : "secondary"}
                className="w-full"
              >
                {t(`pricing.cta`)}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
