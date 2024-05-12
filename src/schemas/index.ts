export * from "./dynamic"

import * as z from "zod"
import { UserRole } from "@prisma/client"

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false
      }

      return true
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false
      }

      return true
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  )
export type SettingsSchemaType = z.infer<typeof SettingsSchema>

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
})
export type NewPasswordSchemaType = z.infer<typeof NewPasswordSchema>

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
})
export type ResetSchemaType = z.infer<typeof ResetSchema>

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
})
export type LoginSchemaType = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(3, {
    message: "Minimum 3 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
})
export type RegisterSchemaType = z.infer<typeof RegisterSchema>
