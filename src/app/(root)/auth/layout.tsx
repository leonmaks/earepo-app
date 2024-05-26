import { AppHeader } from "@/widget/AppHeader"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AppHeader variant="public" />
      {children}
    </>
  )
}
