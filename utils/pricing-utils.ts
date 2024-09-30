import { TFunction } from 'i18next'

interface PlanProps {
  code: string
  popular: boolean
  isNew: boolean
  price: number
  benefitSize: number
}

export const getPlans = (t: TFunction): PlanProps[] => {
  return [
    {
      code: 'nonprofit',
      popular: false,
      isNew: false,
      price: 400,
      benefitSize: 3,
    },
    {
      code: 'pro',
      popular: true,
      isNew: false,
      price: 550,
      benefitSize: 4,
    },
    {
      code: 'support',
      popular: false,
      isNew: true,
      price: 500,
      benefitSize: 4,
    },
  ]
}
