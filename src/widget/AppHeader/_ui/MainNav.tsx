import Link from "next/link"

export function MainNav() {
  return (
    <nav className="flex flex-col items-start gap-6 text-sm font-medium md:flex-row md:items-center ">
      <Link
        className="text-foreground/60 transition-colors hover:text-foreground/80"
        href="/map"
      >
        Карта
      </Link>
      <Link
        className="text-foreground/60 transition-colors hover:text-foreground/80"
        href="/learn"
      >
        Обучение
      </Link>
    </nav>
  )
}
