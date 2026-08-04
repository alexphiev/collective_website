'use client'

import { CookiesProvider as ReactCookiesProvider } from 'react-cookie'

export function CookiesProvider({ children }: { children: React.ReactNode }) {
  return <ReactCookiesProvider>{children}</ReactCookiesProvider>
}
