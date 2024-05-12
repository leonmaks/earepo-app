export * from "./auth-routes"

export const DbUrl =
  process.env.DATABASE_URL || "postgres://api-user@localhost:5432/api-example"
