import { AuthOptions, type DefaultSession } from "next-auth"
// import NextAuth, { NextAuthConfig, type DefaultSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

import { db } from "@/db"
import { compact } from "lodash-es"
import { envPrivate } from "@/config/env-private"

// import { UserRole } from "@prisma/client"

// import { AUTH_PFX } from "@/config"

// import providers from "./providers"
// import { getUserById } from "@/db/dao/user"
// import { getTwoFactorConfirmationByUserId } from "@/db/two-factor-confirmation"
// import { getAccountByUserId } from "@/db/account"

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      email: string
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

  // interface User {
  //     id: string
  //     email: string
  // } & DefaultUser["user"]
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

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as AuthOptions["adapter"],

  providers: compact([
    envPrivate.GOOGLE_CLIENT_ID &&
      envPrivate.GOOGLE_CLIENT_SECRET &&
      GoogleProvider({
        clientId: envPrivate.GOOGLE_CLIENT_ID,
        clientSecret: envPrivate.GOOGLE_CLIENT_SECRET,
      }),
    envPrivate.GITHUB_CLIENT_ID &&
      envPrivate.GITHUB_CLIENT_SECRET &&
      GithubProvider({
        clientId: envPrivate.GITHUB_CLIENT_ID,
        clientSecret: envPrivate.GITHUB_CLIENT_SECRET,
      }),
  ]),
}

// const authConfig: NextAuthConfig = {
//   adapter: PrismaAdapter(db),
//   providers: compact([
//     envPrivate.GOOGLE_CLIENT_ID &&
//       envPrivate.GOOGLE_CLIENT_SECRET &&
//       Google({
//         clientId: envPrivate.GOOGLE_CLIENT_ID,
//         clientSecret: envPrivate.GOOGLE_CLIENT_SECRET,
//       }),
//     envPrivate.GITHUB_CLIENT_ID &&
//       envPrivate.GITHUB_CLIENT_SECRET &&
//       Github({
//         clientId: envPrivate.GITHUB_CLIENT_ID,
//         clientSecret: envPrivate.GITHUB_CLIENT_SECRET,
//       }),
//   ]),
// }

// export const {
//   // auth,
//   // handlers,
//   // signIn,
//   // signOut,
//   handlers: { GET, POST },
// } = NextAuth(authConfig)

// export const {
//   adapter: PrismaAdapter(db),
//   handlers: { GET, POST },
//   // auth,
//   // signIn,
//   // signOut,
// } = NextAuth({
//   // ...providers,
//   // // basePath: AUTH_PFX,
//   // callbacks: {
//   //   async signIn({ user, account }) {
//   //     // // Allow OAuth without email verification
//   //     // if (account?.provider !== "credentials") return true

//   //     const existingUser = await getUserById(user.id)

//   //     // Prevent sign in without email verification
//   //     // if (!existingUser?.emailVerified) return false

//   //     // if (existingUser.isTwoFactorEnabled) {
//   //     //   const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
//   //     //     existingUser.id
//   //     //   )

//   //     //   if (!twoFactorConfirmation) return false

//   //     //   // Delete two factor confirmation for next sign in
//   //     //   await db.twoFactorConfirmation.delete({
//   //     //     where: { id: twoFactorConfirmation.id },
//   //     //   })
//   //     // }

//   //     return true
//   //   },

//   //   async session({ token, session }) {
//   //     // console.log({ sessionToken: token })

//   //     if (token.sub && session.user) session.user.id = token.sub
//   //     if (token.role && session.user) session.user.role = token.role as UserRole

//   //     //   //   if (session.user) {
//   //     //   //     session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
//   //     //   //   }

//   //     // if (session.user) {
//   //     //   session.user.name = token.name
//   //     //   session.user.email = token.email
//   //     //   session.user.isOAuth = token.isOAuth as boolean
//   //     // }

//   //     return session
//   //   },

//   //   async jwt({ token }) {
//   //     // console.log({ token })

//   //     if (!token.sub) return token

//   //     const existingUser = await getUserById(token.sub)
//   //     if (!existingUser) return token

//   //     // const existingAccount = await getAccountByUserId(existingUser.id)

//   //     // token.isOAuth = !!existingAccount
//   //     token.name = existingUser.name
//   //     // token.email = existingUser.email
//   //     token.role = existingUser.role
//   //     // token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled

//   //     return token
//   //   },
//   // },

//   // adapter: PrismaAdapter(prisma),
//   // session: { strategy: "jwt" },
// })

//
// Providers
//

// import type { NextAuthConfig } from "next-auth"
// import Credentials from "next-auth/providers/credentials"
// import bcrypt from "bcryptjs"

// import Github from "next-auth/providers/github"
// import Google from "next-auth/providers/google"

// import { LoginSchema } from "@/schemas"
// import { getUserByEmail } from "@/db/dao/user"

// const Auth

// export default {
//   providers: [
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     Github({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     }),
//     // Credentials({
//     //   name: "Credentials",
//     //   credentials: {
//     //     email: {
//     //       label: "Email",
//     //       type: "email",
//     //       placeholder: "jogn.doe@example.com",
//     //     },
//     //     password: {
//     //       label: "Password",
//     //       type: "password",
//     //       placeholder: "******",
//     //     },
//     //   },
//     //   async authorize(credentials) {
//     //     console.log("Credentials.authorize:", { credentials })

//     //     const validatedFields = LoginSchema.safeParse(credentials)
//     //     if (validatedFields.success) {
//     //       const { email, password } = validatedFields.data
//     //       const user = await getUserByEmail(email)
//     //       if (
//     //         user &&
//     //         user.password &&
//     //         (await bcrypt.compare(password, user.password))
//     //       )
//     //         return user
//     //     }

//     //     return null
//     //   },
//     // }),
//   ],
// } satisfies NextAuthConfig
