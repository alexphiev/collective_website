'use client'

import { useTranslation } from '@/app/i18n/client'
import { saEvent } from '@/utils/analytics-utils'
import { getServiceList } from '@/utils/services-utils'
import { Linkedin, Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu'
import { Separator } from '../ui/separator'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { ToggleLanguage } from './toogle-language'

interface RouteProps {
  href: string
  label: string
}

export const Navbar = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  const serviceList = getServiceList(t)

  const routeList: RouteProps[] = [
    {
      href: '#impact',
      label: t('impact.section.title'),
    },
    {
      href: '#services',
      label: t('services.title'),
    },
    {
      href: '#projects',
      label: t('projects.title'),
    },
    {
      href: '#about',
      label: t('about.section.title'),
    },
    {
      href: '#contact',
      label: t('contact.title'),
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setHasScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 mx-auto flex w-full items-center justify-between bg-opacity-15 px-4 py-2 transition-all duration-500 lg:px-10 ${
        hasScrolled
          ? 'border-b bg-gradient-to-b from-secondary to-transparent backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <Link href="/" className="hidden items-center text-lg font-bold lg:flex">
        Dev For Good
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex w-52 flex-col justify-between rounded-br-2xl rounded-tr-2xl border-secondary bg-card"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    Dev For Good
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col items-start justify-start sm:flex-col">
              <Separator className="mb-2" />
              <ToggleLanguage lng={lng} />
              {/*<ToggleTheme lng={lng} />*/}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="mx-auto hidden lg:block">
        <NavigationMenuList>
          {/* Simple navigation links */}
          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={label}>
              <NavigationMenuLink
                href={href}
                className={`w-24 bg-transparent hover:bg-transparent/20 ${navigationMenuTriggerStyle()}`}
                onClick={() => saEvent(`click_navbar_${href}}`)}
              >
                {label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleLanguage lng={lng} />
        {/*<ToggleTheme lng={lng} />*/}

        <Button
          asChild
          size="sm"
          variant="ghost"
          aria-label="LinkedIn"
          className="hover:bg-transparent/20"
        >
          <Link
            aria-label="LinkedIn"
            href="https://www.linkedin.com/company/dev-for-good/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => saEvent('click_navbar_linkedin')}
          >
            <Linkedin className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  )
}
