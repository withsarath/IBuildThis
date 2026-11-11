import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env" }); // or .env.local

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE URL IS NOT SET!");
}
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });
