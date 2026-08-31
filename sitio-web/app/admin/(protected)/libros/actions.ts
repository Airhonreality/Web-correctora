"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { authorBooks } from "@/lib/db/schema";
import { uploadImageToR2 } from "@/lib/r2/upload";

async function resolveImageUrl(formData: FormData, fieldName: string, existingUrl?: string | null) {
  const file = formData.get(fieldName);
  if (file instanceof File && file.size > 0) {
    return uploadImageToR2(file, "libros");
  }
  return existingUrl ?? null;
}

export async function createBookAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const subtitle = String(formData.get("subtitle") ?? "").trim();
  const editorialNote = String(formData.get("editorialNote") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const purchaseLink = String(formData.get("purchaseLink") ?? "").trim();
  const purchasePlatform = String(formData.get("purchasePlatform") ?? "").trim();
  const publisherLogos = String(formData.get("publisherLogos") ?? "").trim();
  
  const preferenceOrder = parseInt(String(formData.get("preferenceOrder") ?? "0"), 10) || 0;
  const published = formData.get("published") === "on";

  if (!title || !description) {
    throw new Error("El título y la descripción son obligatorios.");
  }

  const coverImageUrl = await resolveImageUrl(formData, "cover");

  await db.insert(authorBooks).values({
    title,
    subtitle: subtitle || null,
    editorialNote: editorialNote || null,
    description,
    coverImageUrl,
    purchaseLink: purchaseLink || null,
    purchasePlatform: purchasePlatform || null,
    publisherLogos: publisherLogos || null,
    preferenceOrder,
    published,
  });

  revalidatePath("/escritora");
  revalidatePath("/admin/libros");
  redirect("/admin/libros");
}

export async function updateBookAction(id: number, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const subtitle = String(formData.get("subtitle") ?? "").trim();
  const editorialNote = String(formData.get("editorialNote") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const purchaseLink = String(formData.get("purchaseLink") ?? "").trim();
  const purchasePlatform = String(formData.get("purchasePlatform") ?? "").trim();
  const publisherLogos = String(formData.get("publisherLogos") ?? "").trim();
  const existingCoverUrl = String(formData.get("existingCoverUrl") ?? "");

  const preferenceOrder = parseInt(String(formData.get("preferenceOrder") ?? "0"), 10) || 0;
  const published = formData.get("published") === "on";

  if (!title || !description) {
    throw new Error("El título y la descripción son obligatorios.");
  }

  const coverImageUrl = await resolveImageUrl(formData, "cover", existingCoverUrl);

  await db
    .update(authorBooks)
    .set({
      title,
      subtitle: subtitle || null,
      editorialNote: editorialNote || null,
      description,
      coverImageUrl,
      purchaseLink: purchaseLink || null,
      purchasePlatform: purchasePlatform || null,
      publisherLogos: publisherLogos || null,
      preferenceOrder,
      published,
      updatedAt: new Date(),
    })
    .where(eq(authorBooks.id, id));

  revalidatePath("/escritora");
  revalidatePath("/admin/libros");
  redirect("/admin/libros");
}

export async function deleteBookAction(id: number) {
  await db.delete(authorBooks).where(eq(authorBooks.id, id));
  revalidatePath("/escritora");
  revalidatePath("/admin/libros");
}
