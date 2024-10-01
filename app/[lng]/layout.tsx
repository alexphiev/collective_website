import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { languages } from "../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "Dev For Good Collective",
  description:
    "Freelance collective of developers working for projects with positive impact on the environment and society.",
};

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar lng={lng} />
          {children}
          <Toaster />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
