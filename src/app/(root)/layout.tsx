import { Metadata, Viewport } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"

import { cn } from "@/shared/utils"

import { AppProvider } from "./_provider/AppProvider"

// import { Analytics } from "@/components/analytics"
// import { SiteFooter } from "@/components/site-footer"
// import { SiteHeader } from "@/components/site-header"
// import { TailwindIndicator } from "@/components/tailwind-indicator"
// import { ThemeSwitcher } from "@/components/theme-switcher"
// import { Toaster as DefaultToaster } from "@/shared/ui/toaster"
// import { Toaster as NewYorkSonner } from "@/shared/ui/sonner"
// import { Toaster as NewYorkToaster } from "@/shared/ui/toaster"
// import { AppHeader } from "@/widget/AppHeader"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // metadataBase: new URL(siteConfig.url),
  // keywords: [
  //   "Next.js",
  //   "React",
  //   "Tailwind CSS",
  //   "Server Components",
  //   "Radix UI",
  // ],
  // authors: [
  //   {
  //     name: "shadcn",
  //     url: "https://shadcn.com",
  //   },
  // ],
  // creator: "shadcn",
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   siteName: siteConfig.name,
  //   images: [
  //     {
  //       url: siteConfig.ogImage,
  //       width: 1200,
  //       height: 630,
  //       alt: siteConfig.name,
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [siteConfig.ogImage],
  //   creator: "@shadcn",
  // },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <AppProvider>
            {/* <div vaul-drawer-wrapper=""> */}
            {/* <div className="relative flex min-h-screen flex-col bg-background"> */}
            {/* <SiteHeader /> */}
            {/* <main className="flex-1"> */}
            {/* <AppHeader /> */}
            {children}
            {/* </main> */}
            {/* <SiteFooter /> */}
            {/* </div> */}
            {/* </div> */}
            {/* <TailwindIndicator /> */}
            {/* <ThemeSwitcher /> */}
            {/* <Analytics /> */}
            {/* <NewYorkToaster /> */}
            {/* <DefaultToaster /> */}
            {/* <NewYorkSonner /> */}
          </AppProvider>
        </body>
      </html>
    </>
  )
}

// <html
// // className={`${fontSans.variable} ${fontMono.variable}`}
// lang="en"
// // suppressHydrationWarning
// >
