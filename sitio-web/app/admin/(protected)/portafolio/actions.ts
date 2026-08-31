"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { portfolioItems } from "@/lib/db/schema";
import { uploadImageToR2 } from "@/lib/r2/upload";

async function resolveCoverUrl(formData: FormData, existingUrl?: string | null) {
  const file = formData.get("cover");
  if (file instanceof File && file.size > 0) {
    return uploadImageToR2(file, "portafolio");
  }
  return existingUrl ?? null;
}

export async function createPortfolioItemAction(formData: FormData) {
  const bookTitle = String(formData.get("bookTitle") ?? "").trim();
  const authorName = String(formData.get("authorName") ?? "").trim();
  const genre = String(formData.get("genre") ?? "").trim();
  const correctionSummary = String(formData.get("correctionSummary") ?? "").trim();
  const authorized = formData.get("authorized") === "on";

  if (!bookTitle || !authorName || !genre || !correctionSummary) {
    throw new Error("Todos los campos son obligatorios.");
  }

  const coverImageUrl = await resolveCoverUrl(formData);

  await db.insert(portfolioItems).values({
    bookTitle,
    authorName,
    genre,
    correctionSummary,
    coverImageUrl,
    authorized,
  });

  revalidatePath("/portafolio");
  revalidatePath("/admin/portafolio");
  redirect("/admin/portafolio");
}

export async function updatePortfolioItemAction(id: number, formData: FormData) {
  const bookTitle = String(formData.get("bookTitle") ?? "").trim();
  const authorName = String(formData.get("authorName") ?? "").trim();
  const genre = String(formData.get("genre") ?? "").trim();
  const correctionSummary = String(formData.get("correctionSummary") ?? "").trim();
  const authorized = formData.get("authorized") === "on";
  const existingUrl = String(formData.get("existingCoverUrl") ?? "");

  if (!bookTitle || !authorName || !genre || !correctionSummary) {
    throw new Error("Todos los campos son obligatorios.");
  }

  const coverImageUrl = await resolveCoverUrl(formData, existingUrl);

  await db
    .update(portfolioItems)
    .set({ bookTitle, authorName, genre, correctionSummary, coverImageUrl, authorized })
    .where(eq(portfolioItems.id, id));

  revalidatePath("/portafolio");
  revalidatePath("/admin/portafolio");
  redirect("/admin/portafolio");
}

export async function deletePortfolioItemAction(id: number) {
  await db.delete(portfolioItems).where(eq(portfolioItems.id, id));
  revalidatePath("/portafolio");
  revalidatePath("/admin/portafolio");
}
