import { AppHeader } from "@/widget/AppHeader"

export default function PublicLayout({
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
