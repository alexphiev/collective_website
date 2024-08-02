"use client";
import { ChevronsDown, Github, Handshake, Menu, Sprout } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface ServiceProps {
  title: string;
  href: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#Serices",
    label: "Services",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#projects",
    label: "Projects",
  },
];

const serviceList: ServiceProps[] = [
  {
    title: "Beautiful and lightning-fast Web application from zero",
    href: "#webapplication",
    description:
      "Since 8 years, we build Web applications and use the best available technology to make it performant and attractive.",
  },
  {
    title: "Fully responsive and SEO-optimized Website",
    href: "#website",
    description:
      "From no-code to full-code websites, depending on your needs and budget, and always with the smoothest user experience and best SEO possible.",
  },
  {
    title: "Mobile applications for iOS and Android",
    href: "#mobileapplications",
    description:
      "User centric design and development for mobile applications, using hybrid and native technologies based on your needs.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-40 rounded-2xl flex justify-between items-center p-2">
      <Link href="/" className="font-bold text-lg flex items-center">
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
            side="right"
            className="flex flex-col justify-between w-52 rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    Shadcn
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

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {/* Advanced navigation item */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="#services"
                    >
                      <Sprout className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Digital products a better world
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        We use the best available technology to empower your
                        ideas.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <div className="h-full flex flex-col">
                  <ul className="flex flex-col flex-1 justify-between">
                    {serviceList.map(({ title, href, description }) => (
                      <li
                        key={title}
                        className="rounded-md p-3 text-sm hover:bg-muted hover:cursor-pointer"
                      >
                        <Link href={href}>
                          <p className="mb-1 font-semibold text-foreground ">
                            {title}
                          </p>
                          <p className="line-clamp-2 text-muted-foreground">
                            {description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Simple navigation links */}
          <NavigationMenuItem>
            {routeList.slice(1).map(({ href, label }) => (
              <Link key={label} href={href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {label}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
