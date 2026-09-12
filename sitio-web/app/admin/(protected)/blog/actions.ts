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

function parsePublishedAt(value: string) {
  const trimmed = value.trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return null;
  const [year, month, day] = trimmed.split("-").map(Number);
  const date = new Date(year, month - 1, day, 12, 0, 0);
  return Number.isNaN(date.getTime()) ? null : date;
}

export async function createPostAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim() || null;
  const featured = formData.get("featured") === "on";
  const publishedAt = parsePublishedAt(String(formData.get("publishedAt") ?? ""));
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
    category,
    featured,
    publishedAt,
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
  const category = String(formData.get("category") ?? "").trim() || null;
  const featured = formData.get("featured") === "on";
  const publishedAt = parsePublishedAt(String(formData.get("publishedAt") ?? ""));
  const published = formData.get("published") === "on";
  const preferenceOrder = parseInt(String(formData.get("preferenceOrder") ?? "0"), 10) || 0;
  const existingCoverUrl = String(formData.get("existingCoverUrl") ?? "");

  if (!title || !excerpt || !body) {
    throw new Error("Título, resumen y cuerpo son obligatorios.");
  }

  const coverImageUrl = await resolveImageUrl(formData, "cover", existingCoverUrl);

  await db
    .update(blogPosts)
    .set({
      title,
      excerpt,
      body,
      coverImageUrl,
      category,
      featured,
      publishedAt,
      published,
      preferenceOrder,
      updatedAt: new Date(),
    })
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
