"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { uploadImageToR2 } from "@/lib/r2/upload";

async function resolveImageUrl(formData: FormData, fieldName: string, existingUrl?: string | null) {
  const file = formData.get(fieldName);
  if (file instanceof File && file.size > 0) {
    return uploadImageToR2(file, "blog");
  }
  return existingUrl ?? null;
}

const ACCENTS: Record<string, string> = {
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u",
  ñ: "n",
  ü: "u",
};

function slugify(title: string) {
  const withoutAccents = title
    .toLowerCase()
    .split("")
    .map((char) => ACCENTS[char] ?? char)
    .join("");

  return withoutAccents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function createPostAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const published = formData.get("published") === "on";
  const preferenceOrder = parseInt(String(formData.get("preferenceOrder") ?? "0"), 10) || 0;

  if (!title || !excerpt || !body) {
    throw new Error("Título, resumen y cuerpo son obligatorios.");
  }

  const coverImageUrl = await resolveImageUrl(formData, "cover");

  await db.insert(blogPosts).values({
    slug: `${slugify(title)}-${Date.now().toString(36)}`,
    title,
    excerpt,
    body,
    coverImageUrl,
    published,
    preferenceOrder,
  });

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function updatePostAction(id: number, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const published = formData.get("published") === "on";
  const preferenceOrder = parseInt(String(formData.get("preferenceOrder") ?? "0"), 10) || 0;
  const existingCoverUrl = String(formData.get("existingCoverUrl") ?? "");

  if (!title || !excerpt || !body) {
    throw new Error("Título, resumen y cuerpo son obligatorios.");
  }

  const coverImageUrl = await resolveImageUrl(formData, "cover", existingCoverUrl);

  await db
    .update(blogPosts)
    .set({ title, excerpt, body, coverImageUrl, published, preferenceOrder, updatedAt: new Date() })
    .where(eq(blogPosts.id, id));

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function deletePostAction(id: number) {
  await db.delete(blogPosts).where(eq(blogPosts.id, id));
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}
