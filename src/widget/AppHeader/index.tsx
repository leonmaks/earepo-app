import { ThemeToggle } from "@/feature/theme"
import { Layout } from "./_ui/Layout"
import { Logo } from "./_ui/Logo"
import { MainNav } from "./_ui/MainNav"
import { Profile } from "./_ui/Profile"

export function AppHeader({
  variant = "auth",
}: {
  variant?: "auth" | "private" | "public"
}) {
  const showProfile = variant !== "auth"
  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={showProfile && <Profile />}
      actions={<ThemeToggle />}
    />
  )
}
