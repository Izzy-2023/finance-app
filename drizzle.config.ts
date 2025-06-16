import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // ✅ REQUIRED
  // driver: "pg",         // ✅ This tells Drizzle you're using Neon
  dbCredentials: {
    url: process.env.DATABASE_URL!, // ✅ Uses your Neon URL
  },
  verbose: true,
  strict: true,
});
