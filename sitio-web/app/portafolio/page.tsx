import Image from "next/image";
import Link from "next/link";
import { Container, Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { whatsappHref } from "@/lib/site";
import { getAuthorizedPortfolioItems, getAllTestimonials } from "@/lib/db/queries";
import { FeaturedBookCarousel } from "@/components/featured-book-carousel";
import { pageMetadata } from "@/lib/seo";
import { genrePillClass } from "@/lib/portfolio";

export const metadata = pageMetadata({
  title: "Corrección de estilo literario — manuscritos corregidos",
  description: "Una muestra de manuscritos corregidos por Amparo Rozo.",
  path: "/portafolio",
});

export const dynamic = "force-dynamic";

type Testimonial = {
  id: number;
  clientName: string;
  bookTitle: string;
  quote: string;
};

function normalizeTitle(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ");
}

function excerpt(text: string, sentences: number) {
  const parts = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length <= sentences) return text;
  return `${parts.slice(0, sentences).join(" ")} …`;
}

function condensedSummary(summary: string) {
  const items = summary.split(/\s*,\s*/).filter(Boolean);
  return items.length > 3 ? `${items.slice(0, 3).join(", ")}…` : summary;
}

export default async function PortafolioPage() {
  const items = await getAuthorizedPortfolioItems();
  const testimonials = await getAllTestimonials();

  const testimonialByTitle = new Map<string, Testimonial>();
  for (const t of testimonials) {
    const key = normalizeTitle(t.bookTitle);
    if (!testimonialByTitle.has(key)) testimonialByTitle.set(key, t);
  }

  const featuredItem =
    items.find((item) => testimonialByTitle.has(normalizeTitle(item.bookTitle))) ?? items[0] ?? null;
  const restItems = items.filter((item) => item.id !== featuredItem?.id);

  return (
    <>
      {/* Bloque 1 — Encabezado sobre fondo rojizo */}
      <Band tone="rose" className="pt-16 pb-10 md:pt-20 md:pb-12">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:items-end">
            <div className="md:col-span-3">
              <span className="block h-px w-16 bg-ink/25" aria-hidden="true" />
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
                Una muestra de manuscritos que he corregido — de distintos
                géneros, todos con el mismo cuidado palabra por palabra.
              </p>
            </div>
            {testimonials.length > 0 && (
              <div className="md:col-span-2 md:text-right">
                <p className="font-display text-5xl italic leading-none text-ink">
                  {testimonials.length}
                </p>
                <p className="mt-2 text-sm italic text-ink/70">
                  Autores respaldan este trabajo
                </p>
              </div>
            )}
          </div>
        </Container>
      </Band>

      <Container className="py-10 md:py-14">
        {items.length === 0 ? (
          <p className="rounded-lg bg-bg-alt p-6 text-center text-muted">
            Portafolio en construcción — muy pronto vas a ver aquí los libros
            corregidos.
          </p>
        ) : (
          <FeaturedBookCarousel
            books={items.map((item) => ({
              id: item.id,
              bookTitle: item.bookTitle,
              authorName: item.authorName,
              genre: item.genre,
              summary: item.correctionSummary,
              coverImageUrl: item.coverImageUrl,
              testimonial: (() => {
                const t = testimonialByTitle.get(normalizeTitle(item.bookTitle));
                return t ? { clientName: t.clientName, quote: excerpt(t.quote, 2) } : null;
              })(),
            }))}
          />
        )}
      </Container>

      {/* Bloque 2 — Galería "Otras obras" sobre lino/arena */}
      {restItems.length > 0 && (
        <Band tone="sand" className="py-16 md:py-20">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-muted">
              Otras obras corregidas
            </p>
            <span
              aria-hidden="true"
              className="mx-auto mb-10 mt-4 block h-px w-[30px] bg-terracotta"
            />
            <div className="grid min-h-0 grid-cols-1 gap-8 md:grid-cols-3">
              {restItems.map((item) => {
                const testimonial =
                  testimonialByTitle.get(normalizeTitle(item.bookTitle)) ?? null;
                return (
                  <article
                    key={item.id}
                    className="flex min-h-0 min-w-0 flex-col justify-between overflow-hidden rounded-xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:border-terracotta hover:shadow-[0_24px_50px_-20px_rgba(189,109,94,0.4)]"
                  >
                    <div className="min-w-0">
                      <div className="flex justify-center">
                        {item.coverImageUrl ? (
                          <Image
                            src={item.coverImageUrl}
                            alt={`Portada de ${item.bookTitle}`}
                            width={192}
                            height={269}
                            className="aspect-[5/7] w-48 rounded object-cover shadow-sm"
                          />
                        ) : (
                          <div className="flex aspect-[5/7] w-48 items-center justify-center rounded bg-cream-soft text-center text-xs text-muted">
                            Portada próximamente
                          </div>
                        )}
                      </div>
                      <span
                        className={`mt-6 inline-block w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${genrePillClass(item.genre)}`}
                      >
                        {item.genre}
                      </span>
                      <h3 className="mt-2 font-display text-lg italic leading-snug">
                        {item.bookTitle}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{item.authorName}</p>
                      <p className="mt-4 break-words text-[0.85rem] leading-[1.4] text-ink/70 line-clamp-2">
                        {testimonial
                          ? `«${excerpt(testimonial.quote, 1)}»`
                          : condensedSummary(item.correctionSummary)}
                      </p>
                    </div>
                    <div className="mt-auto flex min-w-0 items-end pt-6 pb-1">
                      <Link
                        href="/correccion-de-estilo"
                        className="group inline-flex items-center gap-2 border-b border-ink/25 pb-0.5 text-[11px] font-bold uppercase tracking-widest text-muted transition-colors hover:border-terracotta hover:text-terracotta"
                      >
                        Ver detalles del trabajo
                        <span className="text-terracotta transition-transform duration-300 group-hover:translate-x-[3px]">
                          →
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Band>
      )}

      {/* Bloque 3 — Voces de autores sobre fondo cobalt */}
      <Band tone="cobalt" className="py-12 md:py-16">
        <Container>
          <div className="mb-8 flex flex-col items-center text-center">
            <h2 className="font-display text-2xl italic text-cream md:text-3xl">
              Lo que dicen los autores
            </h2>
            <span
              aria-hidden="true"
              className="mt-3 block h-px w-[30px] bg-cream/40"
            />
          </div>
          <figure className="mx-auto max-w-2xl text-center">
            <blockquote className="font-display text-xl leading-relaxed text-cream md:text-2xl">
              «Sorprendida con el trabajo de corrección. No me esperaba
              encontrarme con tantos problemas de incoherencias, situaciones
              inverosímiles y personajes mal perfilados. Gracias. Un gran
              abrazo.»
            </blockquote>
            <figcaption className="mt-6 text-sm italic text-cream/70">
              — Patricia Sánchez
            </figcaption>
          </figure>
        </Container>
      </Band>

      {/* Bloque 4 — Cierre cálido terracota */}
      <Band tone="terracotta" className="py-12 md:py-16">
        <Container className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl italic md:text-4xl">
              ¿Quieres que tu libro sea el próximo?
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink/75">
              Solicita una cotización sin compromiso, o envía una muestra gratis
              de tu manuscrito y reviso las primeras páginas.
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <WhatsAppButton
              variant="light"
              className="uppercase tracking-wider text-xs sm:text-sm"
              message="Hola Amparo, quiero una cotización de corrección de estilo."
            >
              Solicitar cotización
            </WhatsAppButton>
            <a
              href={whatsappHref(
                "Hola Amparo, quiero enviar una muestra gratis de mi manuscrito."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-cream/40 pb-0.5 font-semibold text-cream/90 transition-colors hover:border-cream hover:text-cream"
            >
              Enviar una muestra gratis <span>→</span>
            </a>
          </div>
        </Container>
      </Band>
    </>
  );
}