import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => new PrismaClient()

declare const globalThis: {
  dbGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

export const db = globalThis.dbGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== "production") globalThis.dbGlobal = db
