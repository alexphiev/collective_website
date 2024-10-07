'use client'

import { Linkedin } from 'lucide-react'
import { saEvent } from '@/utils/analytics-utils'

interface LinkedInLinkProps {
  url?: string
  firstName: string
}

const LinkedInLink: React.FC<LinkedInLinkProps> = ({ url, firstName }) => {
  return (
    <a
      className="absolute right-2 top-2"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        saEvent(`click_about_card_${firstName}`)
      }}
    >
      <div className="rounded-full bg-background/15 p-2 text-foreground/80 hover:bg-background/40 hover:text-foreground">
        <Linkedin className="h-6 w-6" />
      </div>
    </a>
  )
}

export default LinkedInLink
