import { z, ZodObject, ZodRawShape, ZodType } from "zod"

export interface DynamicFeildDef {
  id: string
  name: string
  label: string
  type: "string" | "number"
}

export const createSchema = (fields: DynamicFeildDef[]) => {
  const schema: ZodRawShape = {}

  fields.forEach((field) => {
    schema[field.name] = z.string()
  })

  // return z.object(schema)
  // export const LoginSchema = z.object({
  //   email: z.string().email({
  //     message: "Email is required",
  //   }),
  //   password: z.string().min(1, {
  //     message: "Password is required",
  //   }),
  //   code: z.optional(z.string()),
  // })
  // export type LoginSchemaType = z.infer<typeof LoginSchema>
  return z.object(schema)
}
