'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/app/i18n/client'

export const ContactUsButton = ({
  lng,
  code,
  startAlignment,
}: {
  lng: string
  code: string
  startAlignment?: boolean
}) => {
  const { t } = useTranslation(lng)
  const router = useRouter()
  return (
    <div
      className={`flex w-full ${
        startAlignment
          ? 'items-start justify-start py-4'
          : 'mt-0 items-center justify-center'
      }`}
    >
      <div className="group relative inline-block">
        {/* <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-secondary via-primary to-secondary blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div> */}
        <Button
          variant="default"
          className="group/arrow relative p-8 text-lg"
          onClick={() => router.push('/#contact')}
        >
          {t(code)}
          <ArrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
        </Button>
      </div>
    </div>
  )
}
