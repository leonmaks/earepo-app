import { AppHeader } from "@/widget/AppHeader"

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AppHeader variant="private" />
      {/* <AuthorizedGuard> */}
      {children}
      {/* </AuthorizedGuard> */}
    </>
  )
}
