"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { testimonials } from "@/lib/db/schema";

function parsePortfolioItemId(formData: FormData) {
  const raw = String(formData.get("portfolioItemId") ?? "");
  return raw ? Number(raw) : null;
}

export async function createTestimonialAction(formData: FormData) {
  const clientName = String(formData.get("clientName") ?? "").trim();
  const bookTitle = String(formData.get("bookTitle") ?? "").trim();
  const quote = String(formData.get("quote") ?? "").trim();
  const featuredOnHome = formData.get("featuredOnHome") === "on";
  const portfolioItemId = parsePortfolioItemId(formData);

  if (!clientName || !bookTitle || !quote) {
    throw new Error("Nombre, libro y cita son obligatorios.");
  }

  await db.insert(testimonials).values({
    clientName,
    bookTitle,
    quote,
    featuredOnHome,
    portfolioItemId,
  });

  revalidatePath("/");
  revalidatePath("/admin/testimonios");
  redirect("/admin/testimonios");
}

export async function updateTestimonialAction(id: number, formData: FormData) {
  const clientName = String(formData.get("clientName") ?? "").trim();
  const bookTitle = String(formData.get("bookTitle") ?? "").trim();
  const quote = String(formData.get("quote") ?? "").trim();
  const featuredOnHome = formData.get("featuredOnHome") === "on";
  const portfolioItemId = parsePortfolioItemId(formData);

  if (!clientName || !bookTitle || !quote) {
    throw new Error("Nombre, libro y cita son obligatorios.");
  }

  await db
    .update(testimonials)
    .set({ clientName, bookTitle, quote, featuredOnHome, portfolioItemId })
    .where(eq(testimonials.id, id));

  revalidatePath("/");
  revalidatePath("/admin/testimonios");
  redirect("/admin/testimonios");
}

export async function deleteTestimonialAction(id: number) {
  await db.delete(testimonials).where(eq(testimonials.id, id));
  revalidatePath("/");
  revalidatePath("/admin/testimonios");
}
