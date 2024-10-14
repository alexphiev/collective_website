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
import { SiSupabase as SupabaseIcon } from 'react-icons/si'
import { SiPostgresql as PostgresqlIcon } from 'react-icons/si'
import { MdForest as ForestAdminIcon } from 'react-icons/md'
import { FaNodeJs as NodeJsIcon } from 'react-icons/fa'
import { SiPython as PythonIcon } from 'react-icons/si'
import { SiPytorch as PyTorchIcon } from 'react-icons/si'
import { SiJupyter as JupyterIcon } from 'react-icons/si'

import BlueKomuneImage1 from '@/public/projects/bluekomune-1.png'
import BlueKomuneImage2 from '@/public/projects/bluekomune-2.png'
import BridgeImage1 from '@/public/projects/bridgeforbillions-1.png'
import EdumiamImage1 from '@/public/projects/edumiam-1.png'
import EdumiamImage2 from '@/public/projects/edumiam-2.png'
import CRNImage from '@/public/projects/crn-1.jpg'

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
      isNew: false,
      teamSize: 2,
    },
    {
      code: 'edumiam',
      images: [EdumiamImage1, EdumiamImage2],
      clientName: 'Edumiam',
      techList: [
        {
          name: 'Supabase',
          icon: SupabaseIcon,
        },
        {
          name: 'PostgreSQL',
          icon: PostgresqlIcon,
        },
        {
          name: 'Forest Admin',
          icon: ForestAdminIcon,
        },
        {
          name: 'Node.js',
          icon: NodeJsIcon,
        },
        {
          name: 'Python',
          icon: PythonIcon,
        },
      ],
      featured: true,
      isNew: false,
      teamSize: 2,
    },
    {
      code: 'crn',
      images: [CRNImage],
      clientName: 'Cancer Registry of Norway',
      techList: [
        {
          name: 'Python',
          icon: PythonIcon,
        },
        {
          name: 'PyTorch',
          icon: PyTorchIcon,
        },
        {
          name: 'Jupyter Notebook',
          icon: JupyterIcon,
        },
      ],
      featured: true,
      isNew: false,
      teamSize: 1,
    },
  ]
}
