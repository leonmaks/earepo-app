import Link from "next/link"

import { LogoIcon } from "@/shared/icon"

export function Logo() {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <LogoIcon className="h-6 w-6" />
      <span className="inline-block font-bold">Micro courses</span>
    </Link>
  )
}
