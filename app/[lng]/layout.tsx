import { Navbar } from '@/components/layout/navbar'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { dir } from 'i18next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../globals.css'
import { languages } from '../i18n/settings'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string }
}): Promise<Metadata> {
  const title = {
    en: 'Dev For Good - Developer collective for positive impact',
    fr: 'Dev For Good - Collectif de développeurs à impact positif',
    es: 'Dev For Good - Colectivo de desarrolladores para impacto positivo',
  }[lng]

  const description = {
    en: 'We are a collective of skilled senior freelance developers dedicated to creating innovative solutions for environmental and social impact.',
    fr: 'Nous sommes un collectif de développeurs freelance seniors qualifiés dédiés à la création de solutions innovantes pour un impact environnemental et social.',
    es: 'Somos un colectivo de desarrolladores freelance senior calificados dedicados a crear soluciones innovadoras para el impacto ambiental y social.',
  }[lng]

  const keywords = [
    'Dev For Good',
    'freelance developers',
    'positive impact',
    'environmental impact',
    'social impact',
    'sustainable technology',
    'Tech For Good',
    'developer for good',
  ]

  const alternateLanguages = languages.reduce(
    (acc, lang) => {
      acc[lang] = `https://devforgoodcollective.com/${lang}`
      return acc
    },
    {} as Record<string, string>
  )

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://devforgoodcollective.com`,
      languages: alternateLanguages,
    },
    openGraph: {
      title,
      description,
      url: `https://devforgoodcollective.com/${lng}`,
      siteName: 'Dev For Good',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: 'Dev For Good - Developers for Positive Impact',
        },
      ],
      locale: lng,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${process.env.NEXT_PUBLIC_URL}/opengraph-image.png`],
    },
    other: {
      'google-site-verification': 'your-google-site-verification-code',
    },
  }
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode
  params: { lng: string }
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dev For Good',
    url: 'https://devforgoodcollective.com',
    logo: `${process.env.NEXT_PUBLIC_URL}/logo.png`,
    sameAs: [
      'https://www.linkedin.com/company/dev-for-good',
      'https://github.com/devforgoodcollective',
    ],
    description:
      'A collective of skilled senior freelance developers dedicated to creating innovative solutions for environmental and social impact.',
  }

  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <head>
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${process.env.NEXT_PUBLIC_URL}/favicon-48x48.png`}
          sizes="48x48"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${process.env.NEXT_PUBLIC_URL}/favicon.svg`}
        />
        <link
          rel="shortcut icon"
          href={`${process.env.NEXT_PUBLIC_URL}/favicon.ico`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_URL}/apple-touch-icon.png`}
        />
        <meta name="apple-mobile-web-app-title" content="Dev For Good" />
        <link
          rel="manifest"
          href={`${process.env.NEXT_PUBLIC_URL}/site.webmanifest`}
        />
      </head>
      <body className={cn('min-h-screen bg-background', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Navbar lng={lng} />
          {children}
          <Toaster />
          <SpeedInsights />
        </ThemeProvider>
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  )
}
