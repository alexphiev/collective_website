import { TFunction } from 'i18next'
import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons/lib'
import { RiReactjsLine as NextJsIcon } from 'react-icons/ri'
import { TbBrandTailwind as TailwindIcon } from 'react-icons/tb'
import { SiTypescript as TypeScriptIcon } from 'react-icons/si'
import { SiAlgolia as AlgoliaIcon } from 'react-icons/si'
import { SiStrapi as StrapiIcon } from 'react-icons/si'
import { SiReact as ReactIcon } from 'react-icons/si'
import { SiAntdesign as AntDesignIcon } from 'react-icons/si'
import { SiHtml5 as Html5Icon } from 'react-icons/si'
import { SiCss3 as Css3Icon } from 'react-icons/si'

import BlueKomuneImage1 from '@/public/projects/bluekomune-1.png'
import BlueKomuneImage2 from '@/public/projects/bluekomune-2.png'
import BridgeImage1 from '@/public/projects/bridgeforbillions-1.png'

export interface Tech {
  name: string
  icon: IconType
}

export interface Project {
  code: string
  images: StaticImageData[]
  clientName: string
  techList: Tech[]
  featured: boolean
  isNew: boolean
  teamSize: number
}

export const getProjects = (t: TFunction): Project[] => {
  return [
    {
      code: 'bluekomune',
      images: [BlueKomuneImage1, BlueKomuneImage2],
      clientName: 'Blue Komune',
      techList: [
        {
          name: 'Next.js',
          icon: NextJsIcon,
        },
        {
          name: 'Tailwind CSS',
          icon: TailwindIcon,
        },
        {
          name: 'TypeScript',
          icon: TypeScriptIcon,
        },
        {
          name: 'Algolia',
          icon: AlgoliaIcon,
        },
        {
          name: 'Strapi',
          icon: StrapiIcon,
        },
      ],
      featured: true,
      isNew: true,
      teamSize: 2,
    },
    {
      code: 'bridgeforbillions',
      images: [BridgeImage1],
      clientName: 'Bridge For Billions',
      techList: [
        {
          name: 'React',
          icon: ReactIcon,
        },
        {
          name: 'Ant Design',
          icon: AntDesignIcon,
        },
        {
          name: 'HTML5',
          icon: Html5Icon,
        },
        {
          name: 'CSS3',
          icon: Css3Icon,
        },
      ],
      featured: true,
      isNew: true,
      teamSize: 4,
    },
  ]
}
