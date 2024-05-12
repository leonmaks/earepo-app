import { auth } from "@/auth"

export const currentUser = async () => (await auth())?.user

export const currentRole = async () => (await auth())?.user?.role
