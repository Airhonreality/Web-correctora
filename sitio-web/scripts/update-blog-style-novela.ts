/**
 * Actualiza el post "Cómo mejorar el estilo de mi novela" en Neon con los
 * reemplazos de wording solicitados, sin re-crear el registro.
 *
 * Uso: pnpx tsx scripts/update-blog-style-novela.ts  (con DATABASE_URL cargada)
 */
import { eq } from "drizzle-orm";
import { db } from "../lib/db";
import { blogPosts } from "../lib/db/schema";

const SLUG = "como-mejorar-el-estilo-de-mi-novela";

const replacements: Array<{ from: string; to: string }> = [
  {
    from: "Revisa la continuidad. ",
    to: "Revisa la coherencia. ",
  },
  {
    from: "sin explicación?",
    to: "sin ninguna explicación?",
  },
  {
    from: "Escríbeme por WhatsApp cuando tu manuscrito esté listo.",
    to: "Envía dos páginas de tu manuscrito y te respondo con una primera lectura personalizada.",
  },
];

async function main() {
  const rows = await db.select().from(blogPosts).where(eq(blogPosts.slug, SLUG)).limit(1);
  if (rows.length === 0) {
    throw new Error(`No se encontró el post con slug "${SLUG}".`);
  }
  const post = rows[0];
  let body = post.body ?? "";
  const applied: string[] = [];
  for (const { from, to } of replacements) {
    if (body.includes(from)) {
      body = body.replace(from, to);
      applied.push(from);
    }
  }
  if (applied.length === 0) {
    throw new Error("Ningún reemplazo aplicó: el body ya está actualizado o cambió.");
  }
  await db
    .update(blogPosts)
    .set({ body, updatedAt: new Date() })
    .where(eq(blogPosts.slug, SLUG));
  console.log(`Post "${SLUG}" actualizado (${applied.length} reemplazo(s) aplicado(s)).`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });