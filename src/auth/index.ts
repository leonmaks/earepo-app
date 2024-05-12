import NextAuth, { type DefaultSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { UserRole } from "@prisma/client"

import { AUTH_PFX } from "@/config"

import prisma from "@/db"
import providers from "@/auth/providers"
import { getUserById } from "@/db/model/user"
// import { getTwoFactorConfirmationByUserId } from "@/db/two-factor-confirmation"
// import { getAccountByUserId } from "@/db/account"

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      role: "ADMIN" | "USER"
      // /** The user's postal address. */
      // address: string
      // /**
      //  * By default, TypeScript merges new interface properties and overwrites existing ones.
      //  * In this case, the default session user properties will be overwritten,
      //  * with the new ones defined above. To keep the default session user properties,
      //  * you need to add them back into the newly declared interface.
      //  */
    } & DefaultSession["user"]
  }
}

// export const {
//   handlers: { GET, POST },
//   auth,
//   update,
// } = NextAuth({
//   // pages: {
//   //   signIn: "/auth/login",
//   //   error: "/auth/error",
//   // },

//   // events: {
//   //   async linkAccount({ user }) {
//   //     // await db.user.update({
//   //     //   where: { id: user.id },
//   //     //   data: { emailVerified: new Date() },
//   //     // })
//   //   },
//   // },

//   // callbacks: {

//   // },

//   adapter: PrismaAdapter(prisma),
//   providers: [],
//   // session: { strategy: "jwt" },
//   ...authConfig,
// })

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...providers,
  // basePath: AUTH_PFX,
  callbacks: {
    async signIn({ user, account }) {
      // // Allow OAuth without email verification
      // if (account?.provider !== "credentials") return true

      const existingUser = await getUserById(user.id)

      // Prevent sign in without email verification
      // if (!existingUser?.emailVerified) return false

      // if (existingUser.isTwoFactorEnabled) {
      //   const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
      //     existingUser.id
      //   )

      //   if (!twoFactorConfirmation) return false

      //   // Delete two factor confirmation for next sign in
      //   await db.twoFactorConfirmation.delete({
      //     where: { id: twoFactorConfirmation.id },
      //   })
      // }

      return true
    },

    async session({ token, session }) {
      // console.log({ sessionToken: token })

      if (token.sub && session.user) session.user.id = token.sub
      if (token.role && session.user) session.user.role = token.role as UserRole

      //   //   if (session.user) {
      //   //     session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
      //   //   }

      // if (session.user) {
      //   session.user.name = token.name
      //   session.user.email = token.email
      //   session.user.isOAuth = token.isOAuth as boolean
      // }

      return session
    },

    async jwt({ token }) {
      // console.log({ token })

      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token

      // const existingAccount = await getAccountByUserId(existingUser.id)

      // token.isOAuth = !!existingAccount
      token.name = existingUser.name
      // token.email = existingUser.email
      token.role = existingUser.role
      // token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled

      return token
    },
  },

  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
})
