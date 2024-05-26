"use server"
import prisma from "@/db"

export const getUserByEmail = async (email: string) => {
  console.log("getUserByEmail: email=", email)

  try {
    const user = await prisma.user.findUnique({ where: { email } })

    console.log("getUserByEmail: found user=", user)

    return user
  } catch (error) {
    // TODO: +Error processing
    console.log("getUserByEmail: error=", error)

    return null
  }
}

export const getUserById = async (id: string | undefined) => {
  console.log("getUserById: id=", id)

  try {
    return id ? await prisma.user.findUnique({ where: { id } }) : null
  } catch {
    // TODO: +Error processing
    return null
  }
}
