export const BLOG_CATEGORIES = [
  {
    label: "Consejos de Redacción",
    slug: "consejos-de-redaccion",
    pill: "bg-rose-light/40 text-terracotta",
    accent: "bg-rose",
  },
  {
    label: "Normas RAE",
    slug: "normas-rae",
    pill: "bg-blue-pastel/60 text-cobalt",
    accent: "bg-cobalt",
  },
  {
    label: "Oficio del Corrector",
    slug: "oficio-del-corrector",
    pill: "bg-teal/20 text-teal-dark",
    accent: "bg-teal",
  },
  {
    label: "Gramática",
    slug: "gramatica",
    pill: "bg-olive-soft text-olive",
    accent: "bg-olive",
  },
  {
    label: "Ortografía",
    slug: "ortografia",
    pill: "bg-terracotta/15 text-teja",
    accent: "bg-teja",
  },
  {
    label: "Estilo Narrativo",
    slug: "estilo-narrativo",
    pill: "bg-coral/15 text-terracotta",
    accent: "bg-coral",
  },
  {
    label: "Guía para autores",
    slug: "guia-para-autores",
    pill: "bg-terracotta text-cream",
    accent: "bg-terracotta",
  },
] as const;

export type BlogCategorySlug = (typeof BLOG_CATEGORIES)[number]["slug"];

export function categoryBySlug(slug: string | undefined) {
  return BLOG_CATEGORIES.find((category) => category.slug === slug) ?? null;
}

export function categoryByLabel(label: string | null | undefined) {
  return BLOG_CATEGORIES.find((category) => category.label === label) ?? null;
}

export function categoryPillClass(category: string | null | undefined) {
  return categoryByLabel(category)?.pill ?? "bg-bg-alt text-muted";
}

export function categoryAccent(category: string | null | undefined) {
  return categoryByLabel(category)?.accent ?? "bg-terracotta";
}

export function formatBlogDate(value: Date | string) {
  const date = typeof value === "string" ? new Date(value) : value;
  return new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function readingTimeMinutes(body: string) {
  const words = body.replace(/[#*`>_\[\]\(\)\-—]/g, " ").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function readingTimeLabel(body: string) {
  const minutes = readingTimeMinutes(body);
  return `${minutes} min de lectura`;
}