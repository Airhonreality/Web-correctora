import type { Metadata } from "next";
import { absoluteUrl, siteInfo, siteUrl } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

const personId = `${siteUrl}/#persona`;
const serviceId = `${siteUrl}/#servicio`;

export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": personId,
    name: siteInfo.name,
    jobTitle: "Correctora de estilo y escritora",
    description:
      "Comunicadora social y periodista (Universidad Externado de Colombia), correctora profesional de estilo y escritora.",
    url: siteUrl,
    email: `mailto:${siteInfo.email}`,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Externado de Colombia",
    },
    knowsAbout: [
      "Corrección de estilo",
      "Corrección ortotipográfica",
      "Edición literaria",
      "Redacción narrativa",
    ],
    knowsLanguage: "es",
    ...(siteInfo.sameAs.length > 0 ? { sameAs: siteInfo.sameAs } : {}),
  };
}

export function serviceJsonLd() {
  return {
    "@type": "Service",
    "@id": serviceId,
    serviceType: "Corrección de estilo literario",
    name: "Corrección de estilo literario",
    description:
      "Corrección de estilo para novelas, memorias, crónicas y libros de crecimiento personal, hecha a mano, palabra por palabra, sin inteligencia artificial.",
    provider: { "@id": personId },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/correccion-de-estilo"),
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "23",
        priceCurrency: "COP",
        unitText: "palabra",
      },
    },
  };
}

export function rootJsonLdGraph() {
  // Solo la identidad de la persona va en todas las páginas. El Service vive
  // en /correccion-de-estilo, su página canónica, para no repetir el bloque
  // completo (con Offer) en cada página del sitio.
  return {
    "@context": "https://schema.org",
    "@graph": [personJsonLd()],
  };
}

export function bookJsonLd({
  name,
  description,
  datePublished,
  publisher,
}: {
  name: string;
  description: string;
  datePublished: string;
  publisher: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name,
    description,
    inLanguage: "es",
    author: { "@id": personId },
    datePublished,
    publisher: { "@type": "Organization", name: publisher },
  };
}

export function blogPostingJsonLd({
  title,
  excerpt,
  slug,
  datePublished,
  dateModified,
}: {
  title: string;
  excerpt: string;
  slug: string;
  datePublished: string | Date;
  dateModified: string | Date;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    url: absoluteUrl(`/blog/${slug}`),
    mainEntityOfPage: absoluteUrl(`/blog/${slug}`),
    author: { "@id": personId },
    datePublished: new Date(datePublished).toISOString(),
    dateModified: new Date(dateModified).toISOString(),
    inLanguage: "es",
  };
}

export function reviewJsonLd({
  clientName,
  quote,
  bookTitle,
}: {
  clientName: string;
  quote: string;
  bookTitle: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": serviceId },
    author: { "@type": "Person", name: clientName },
    reviewBody: quote,
    name: `Reseña sobre la corrección de ${bookTitle}`,
  };
}
