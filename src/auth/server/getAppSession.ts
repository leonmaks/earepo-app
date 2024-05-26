import { getServerSession as getNextAuthServerSession } from "next-auth"

import { authOptions } from "@/auth"

export const getServerSession = () => getNextAuthServerSession(authOptions)
