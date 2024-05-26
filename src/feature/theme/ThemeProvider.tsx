"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
// import { ThemeProviderProps } from "next-themes/dist/types"

// import { TooltipProvider } from "@/shared/ui/tooltip"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* <TooltipProvider> */}
      {children}
      {/* </TooltipProvider> */}
    </NextThemesProvider>
  )
}
