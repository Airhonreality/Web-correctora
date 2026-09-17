import Link from "next/link";
import Image from "next/image";
import { Container, Band } from "@/components/container";
import { JsonLd } from "@/components/json-ld";
import { bookJsonLd, pageMetadata } from "@/lib/seo";
import { getPublishedAuthorBooks } from "@/lib/db/queries";

export const revalidate = 60; // Actualizar caché cada 60 segundos

export const metadata = pageMetadata({
  title: "Como escritora",
  description:
    "Amparo Rozo, autora de Marcianos hijos de p... (Grupo Editorial Ibáñez) y Juro por mis orejas (Editorial Oveja Negra).",
  path: "/escritora",
});

const marcianos = bookJsonLd({
  name: "Marcianos hijos de p...",
  description:
    "La sátira mística que la crítica editorial no pudo ignorar. Historia de una familia tradicional colombiana alterada por el regreso del tío Marco, quien ahora hace milagros.",
  datePublished: "2025",
  publisher: "Grupo Editorial Ibáñez (Sképsi)",
});

const juroPorMisOrejas = bookJsonLd({
  name: "Juro por mis orejas",
  description:
    "Novela de ficción histórica donde los espantos, los duendes y hasta el mismo diablo cobran vida en los campos colombianos, en medio de guerras y amores prohibidos.",
  datePublished: "2016",
  publisher: "Editorial Oveja Negra",
});

export default async function EscritoraPage() {
  const books = await getPublishedAuthorBooks();

  return (
    <>
      <JsonLd data={marcianos} />
      <JsonLd data={juroPorMisOrejas} />
      <Band tone="rose" className="py-16">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight">Como escritora</h1>
        </Container>
      </Band>

      <Container className="flex flex-col gap-16 py-16">
        {books.map((book) => {
          const paragraphs = book.description.split("\n").filter((p) => p.trim());
          // We will heuristically put the shortest paragraph (or the last one if it's "En un mercado...") on the right, 
          // or just put all text in a bottom "Sinopsis" section to keep the top clean.
          // Let's put the Title, Subtitle, and Publisher Logos in the top white box.
          // The description goes below in the "Sinopsis" section to avoid cramming!
          return (
            <article key={book.id} className="flex flex-col gap-8 mb-24 last:mb-0">
              {/* White Box Container */}
              <div className="bg-white shadow-xl flex flex-col md:flex-row items-stretch">
                {/* Left: Full bleed image */}
                <div className="w-full md:w-1/2 relative min-h-[400px]">
                  {book.coverImageUrl ? (
                    <Image
                      src={book.coverImageUrl}
                      alt={`Portada de ${book.title}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-ink/5 flex items-center justify-center text-muted italic">
                      Sin portada
                    </div>
                  )}
                </div>

                {/* Right: Info */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="font-display text-4xl text-ink/90 mb-6">{book.title}</h2>
                  {book.subtitle && (
                    <p className="font-display italic text-2xl text-ink/70 leading-relaxed mb-6">
                      &ldquo;{book.subtitle}&rdquo;
                    </p>
                  )}
                  
                  {book.editorialNote && (
                    <div className="text-ink/80 leading-relaxed italic text-lg mb-6">
                      <p>{book.editorialNote}</p>
                    </div>
                  )}
                  
                  {book.publisherLogos && (
                    <div className="flex flex-wrap items-center justify-end gap-4 mt-12 pt-6 border-t border-ink/10">
                      {book.publisherLogos.split(",").map((logo, idx) => (
                        // eslint-disable-next-line @next/next/no-img-element -- URL de sello editorial en dominio arbitrario, fuera de remotePatterns
                        <img
                          key={idx}
                          src={logo.trim()}
                          alt="Sello editorial"
                          className="h-16 object-contain"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Purchase Button Centered Below Card */}
              {book.purchaseLink && (
                <div className="flex flex-col items-center mt-[-2rem] relative z-10">
                  <a
                    href={book.purchaseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto text-center rounded-sm border-2 border-magenta bg-magenta px-16 py-4 font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-magenta shadow-lg"
                  >
                    COMPRAR EJEMPLAR
                  </a>
                  {book.purchasePlatform && (
                    <span className="mt-2 text-sm italic text-muted">
                      ({book.purchasePlatform})
                    </span>
                  )}
                </div>
              )}

              {/* Full-width Synopsis below */}
              <div className="max-w-3xl mx-auto mt-8">
                <h3 className="font-bold text-3xl text-magenta mb-6 tracking-tight">Sinopsis</h3>
                <div className="space-y-4 text-ink/80 leading-relaxed text-lg">
                  {paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          );
        })}

        <p>
          ¿Quieres conocer mi trayectoria como correctora?{" "}
          <Link href="/perfil" className="font-semibold text-teal underline">
            Ver mi perfil →
          </Link>
        </p>
      </Container>
    </>
  );
}
