import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|sitemap.xml|sitemap-*.xml|robots.txt).*)',
  ],
}

const cookieName = 'i18next'

function shouldExcludePath(pathname: string): boolean {
  const excludedPatterns = [
    /^\/api\//,
    /^\/_next\//,
    /^\/assets\//,
    /^\/favicon\.ico$/,
    /^\/favicon\.svg$/,
    /^\/site\.webmanifest$/,
    /^\/sw\.js$/,
    /^\/sitemap(-\d+)?\.xml$/,
    /^\/sitemap\.xml$/,
    /^\/robots\.txt$/,
    /^\/opengraph-image\.png$/,
  ]
  return excludedPatterns.some((pattern) => pattern.test(pathname))
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname

  if (shouldExcludePath(pathname)) {
    return NextResponse.next()
  }

  let lng
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  // Check if the path starts with a locale
  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(
        `/${lng}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        req.url
      )
    )
  }

  // Check if the locale in the path is supported
  const currentLng = pathname.split('/')[1]
  if (!languages.includes(currentLng)) {
    // Redirect to fallback language
    return NextResponse.redirect(
      new URL(
        `/${fallbackLng}${
          pathname.startsWith('/') ? '' : '/'
        }${pathname.substring(3)}`,
        req.url
      )
    )
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer')!)
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    )
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}
