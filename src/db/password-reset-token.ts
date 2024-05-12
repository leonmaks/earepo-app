import { db } from "@/db/knex-db"

export const getPasswordResetTokenByToken = async (token: string) => {
  return null
  // try {
  //   const passwordResetToken = await db.passwordResetToken.findUnique({
  //     where: { token },
  //   })

  //   return passwordResetToken
  // } catch {
  //   return null
  // }
}

export const getPasswordResetTokenByEmail = async (email: string) => {
  return null
  // try {
  //   const passwordResetToken = await db.passwordResetToken.findFirst({
  //     where: { email },
  //   })

  //   return passwordResetToken
  // } catch {
  //   return null
  // }
}
