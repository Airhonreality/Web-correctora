/**
 * Reemplazo puntual en el post "Cómo mejorar el estilo de mi novela" (Neon):
 * "Cuida los tiempos verbales. Cambiar de pasado a presente sin intención rompe
 * la inmersión del lector."
 * →
 * "Cuida los tiempos verbales. Cambiar de pasado a presente sin un propósito
 * claro altera la fluidez de la lectura."
 */
import { eq } from "drizzle-orm";
import { db } from "../lib/db";
import { blogPosts } from "../lib/db/schema";

const SLUG = "como-mejorar-el-estilo-de-mi-novela";

const FROM =
  "Cuida los tiempos verbales. Cambiar de pasado a presente sin intención rompe la inmersión del lector.";
const TO =
  "Cuida los tiempos verbales. Cambiar de pasado a presente sin un propósito claro altera la fluidez de la lectura.";

async function main() {
  const rows = await db.select().from(blogPosts).where(eq(blogPosts.slug, SLUG)).limit(1);
  if (rows.length === 0) {
    throw new Error(`No se encontró el post con slug "${SLUG}".`);
  }
  const post = rows[0];
  const body = post.body ?? "";
  if (!body.includes(FROM)) {
    throw new Error("El texto a reemplazar no está en el body: ya está actualizado o cambió.");
  }
  await db
    .update(blogPosts)
    .set({ body: body.replace(FROM, TO), updatedAt: new Date() })
    .where(eq(blogPosts.slug, SLUG));
  console.log(`Post "${SLUG}" actualizado: frase de tiempos verbales reemplazada.`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });