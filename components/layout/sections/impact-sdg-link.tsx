'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { saEvent } from '@/utils/analytics-utils'

interface ImpactLinkProps {
  icon: StaticImageData
  name: string
  url: string
}

export const ImpactLink: React.FC<ImpactLinkProps> = ({ icon, name, url }) => {
  return (
    <Link
      key={name}
      href={url}
      target="_blank"
      onClick={() => {
        saEvent(`click_impact_${icon}`)
      }}
    >
      <Image
        key={name}
        className="transform rounded-lg opacity-85 shadow-lg saturate-[0.65] filter transition-all duration-300 ease-linear hover:scale-110 hover:opacity-100 hover:saturate-100"
        src={icon}
        alt={name}
        width={100}
        height={100}
      />
    </Link>
  )
}
