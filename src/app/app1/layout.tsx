import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google"

import { cn } from "@/shared/utils"
import { Toaster } from "@/shared/ui/sonner"

import { auth } from "@/auth"

import "@/styles/globals.css"

const fontSans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "EA Repo",
  description: "Enterprise Architecture Repository",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
