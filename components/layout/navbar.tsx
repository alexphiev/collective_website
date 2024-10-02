'use client'
import { useTranslation } from '@/app/i18n/client'
import { getServiceList } from '@/utils/services-utils'
import { ChevronRight, Linkedin, Menu, Sprout } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
import { ToggleTheme } from './toogle-theme'
import { saEvent } from "@/utils/analytics-utils";

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
      href: "#impact",
      label: t("impact.section.title"),
    },
    {
      href: "#services",
      label: t("services.title"),
    },
    {
      href: '#projects',
      label: t('projects.title'),
    },
    {
      href: '#about',
      label: t("about.section.title"),
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
      className={`sticky top-0 z-40 mx-auto flex w-full items-center justify-between bg-opacity-15 px-10 py-2 transition-all duration-500 ${
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
              <ToggleTheme lng={lng} />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="mx-auto hidden lg:block">
        <NavigationMenuList>
          {/* Advanced navigation item 
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent/20 focus:bg-transparent/20">
            {t("services.title")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-accent/50 to-primary/50 p-6 no-underline outline-none focus:shadow-md"
                      href="#services"
                    >
                      <Sprout className="h-6 w-6 text-accent-foreground" />
                      <div className="mb-2 mt-4 text-lg font-medium text-accent-foreground">
                        {t("services.section.title")}
                      </div>
                      <p className="text-sm leading-tight text-accent-foreground/80">
                        {t("services.section.description")}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <ul className="flex flex-col flex-1 justify-between">
                    {serviceList.map(({ title, description }) => (
                      <>
                        <li
                          key={title}
                          className="rounded-md p-3 text-sm hover:bg-muted hover:cursor-pointer"
                        >
                          <Link href={"#service-list"} className="flex items-center justify-between">
                            <p className="font-semibold text-foreground">
                              {title}
                            </p>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </Link>
                        </li>
                        <Separator className="my-2" />
                      </>
                    ))}
                  </ul>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          */}
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
            onClick={() => saEvent(`click_navbar_linkedin}`)}
          >
            <Linkedin className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  )
}
