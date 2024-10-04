import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/layout/navbar'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { Toaster } from '@/components/ui/toaster'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
  title: 'Dev For Good collective',
  description:
    'Freelance collective of developers working for projects with positive impact on the environment and society.',
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode
  params: { lng: string }
}>) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
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
