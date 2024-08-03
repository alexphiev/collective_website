"use client";
import {
  ChevronsDown,
  Github,
  Handshake,
  Linkedin,
  Menu,
  Sprout,
} from "lucide-react";
import React, { useEffect, useState } from "react";
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
    title: "Impactful Web Applications",
    href: "#webapplication",
    description:
      "Crafting beautiful, lightning-fast web solutions that empower positive change. 8 years of expertise in UI/UX and performance optimization for social impact.",
  },
  {
    title: "Beautiful Websites for Every Cause",
    href: "#website",
    description:
      "From grassroots no-code to enterprise full-code: SEO-optimized, responsive websites that amplify your mission and resonate with your audience.",
  },
  {
    title: "Mobile Apps for Positive Change",
    href: "#mobileapplications",
    description:
      "User-centric iOS and Android apps that drive engagement and create meaningful connections. Leveraging technology to make a difference, one tap at a time.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-opacity-15 w-full top-0 mx-auto sticky z-40 flex justify-between items-center py-2 px-10 ${
        hasScrolled
          ? "bg-gradient-to-b from-gray-900/80 to-transparent backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <Link href="/" className="hidden lg:flex font-bold text-lg items-center">
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
            className="flex flex-col justify-between w-52 rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
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
            <NavigationMenuTrigger className="bg-transparent">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="#services"
                    >
                      <Sprout className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Digital products for a better world
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        We use the best available technology to help your ideas
                        have the impact they deserve.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <ul className="flex flex-col flex-1 justify-between space-y-2">
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
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Simple navigation links */}
          {routeList.slice(1).map(({ href, label }) => (
            <NavigationMenuItem key={label}>
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`bg-transparent ${navigationMenuTriggerStyle()}`}
                >
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label="View on LinkedIn">
          <Link
            aria-label="View on LinkedIn"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
