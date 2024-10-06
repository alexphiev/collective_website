import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://devforgoodcollective.com',
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'weekly',
      alternates: {
        languages: {
          en: 'https://devforgoodcollective.com/en',
          es: 'https://devforgoodcollective.com/es',
          fr: 'https://devforgoodcollective.com/fr',
        },
      },
    },
  ]
}
