export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573133631715";

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/correccion-de-estilo", label: "Corrección de estilo" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/perfil", label: "Perfil" },
  { href: "/escritora", label: "Escritora" },
  { href: "/blog", label: "Blog" },
] as const;

export const siteInfo = {
  name: "Amparo Rozo",
  tagline: "Corrección, redacción y estilo",
  email: "amparorozo21@hotmail.com",
  phone: "313 3631715",
  address: "Cra 72 No 22 D 54 Int. 33 Apto 1001, Ciudad Salitre - Bogotá (Colombia)",
  // Perfiles externos verificables (Google Business Profile, LinkedIn, Amazon Author
  // Central, Goodreads, etc.). Vacío hasta que existan cuentas reales — no inventar URLs.
  sameAs: [] as string[],
} as const;

// Se define vía NEXT_PUBLIC_SITE_URL una vez exista el dominio de producción.
// Sin esa variable, cae al dominio de Vercel del despliegue o a localhost en dev.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

export function absoluteUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
