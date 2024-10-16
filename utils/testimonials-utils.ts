import { TFunction } from 'i18next'
import jaime from '@/public/testimonials/jaime.jpeg'
import henrik from '@/public/testimonials/henrik.jpeg'
import kyrre from '@/public/testimonials/kyrre.jpeg'
import vincent from '@/public/testimonials/vincent.jpeg'
import { StaticImageData } from 'next/image'

export interface ReviewProps {
  image: StaticImageData
  name: string
  title: string
  comment: string
}

export const getTestimonials = (t: TFunction): ReviewProps[] => {
  return [
    {
      image: kyrre,
      name: 'Kyrre Wathne',
      title: 'CTO · Viva Labs',
      comment: t('testimonials.kyrre'),
    },
    {
      image: vincent,
      name: 'Vincent Colbert',
      title: 'Co-founder · Blue Komune',
      comment: t('testimonials.vincent'),
    },
    {
      image: jaime,
      name: 'Jaime Mateo',
      title: 'CTO · Bridge for Billions',
      comment: t('testimonials.jaime'),
    },
    {
      image: henrik,
      name: 'Henrik Holen',
      title: 'CEO · Viva Labs',
      comment: t('testimonials.henrik'),
    },
  ]
}
