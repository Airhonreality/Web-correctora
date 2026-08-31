import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

type Db = ReturnType<typeof drizzle<typeof schema>>;

let cached: Db | null = null;

function getDb(): Db {
  if (cached) return cached;
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL no está configurada. Ver .env.example.");
  }
  const sql = neon(process.env.DATABASE_URL);
  cached = drizzle(sql, { schema });
  return cached;
}

// Proxy: no toca DATABASE_URL hasta que de verdad se use `db.algo(...)`,
// así los módulos que importan `db` se pueden cargar en build sin credenciales.
export const db: Db = new Proxy({} as Db, {
  get(_target, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver);
  },
});
