import Link from "next/link";
import { Container, Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { JsonLd } from "@/components/json-ld";
import { getAllTestimonials } from "@/lib/db/queries";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { pageMetadata, reviewJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = pageMetadata({
  title: "Opción 2: Cameo Editorial",
  description: "Boceto 2",
  path: "/opcion-2",
});

export default async function Opcion2() {
  const testimonials = await getAllTestimonials();

  return (
    <>
      {testimonials.map((testimonial) => (
        <JsonLd
          key={testimonial.id}
          data={reviewJsonLd({
            clientName: testimonial.clientName,
            quote: testimonial.quote,
            bookTitle: testimonial.bookTitle,
          })}
        />
      ))}
      <div className="bg-cream py-24 sm:py-32 lg:py-48 overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-5xl text-left">
            <h1 className="font-display text-5xl font-bold tracking-tight text-ink sm:text-7xl max-w-3xl">
              Su texto está en buenas manos.
            </h1>
            
            <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
              {/* Párrafo principal */}
              <p className="text-xl leading-relaxed text-muted font-normal max-w-xl">
                Corrección de estilo para novelas, memorias, crónicas y libros de
                crecimiento personal — hecha a mano, palabra por palabra, por una
                escritora y periodista. Sin inteligencia artificial.
              </p>
              
              {/* El Cameo de Autor */}
              <div className="flex items-center gap-4 border-l-2 border-ink/10 pl-6 hidden md:flex">
                <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden shadow-lg border-2 border-white">
                  <img 
                    src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/web/amparo-rozo-correctora-estilo.jpg" 
                    alt="Amparo Rozo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink uppercase tracking-widest">Amparo Rozo</p>
                  <p className="text-xs text-muted">Correctora & Escritora</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
              <WhatsAppButton 
                message="Hola Amparo, quiero información sobre corrección de estilo."
                className="shadow-sm uppercase tracking-wider text-xs sm:text-sm h-12 px-8"
              >
                Escríbeme por WhatsApp
              </WhatsAppButton>
              <Link
                href="/portafolio"
                className="inline-flex h-12 items-center justify-center rounded-md border border-ink bg-transparent px-8 text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                Ver portafolio
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container className="mx-auto max-w-5xl py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda: Imagen */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/web/amparo-rozo-correctora-estilo.jpg" 
              alt="Amparo Rozo, correctora de estilo literario profesional" 
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Columna Derecha: Texto */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-4xl font-bold tracking-wide text-ink">
              Amparo Rozo
            </h2>
            <p className="text-xl leading-relaxed text-teal-dark italic">
              "La corrección de estilo dota a tu manuscrito de claridad, precisión,
              expresividad y el tono adecuado, para que la lectura sea fluida,
              armónica y entretenida."
            </p>
            <div className="pt-6 border-t border-anchor/10">
              <p className="text-muted text-lg mb-4">
                Comunicadora social y periodista (Universidad Externado de
                Colombia), correctora profesional de estilo y escritora. Autora de
                dos novelas publicadas por editorial.
              </p>
              <p className="text-muted">
                Reviso tu manuscrito palabra por palabra: sintaxis, ortotipografía,
                coherencia narrativa y mucho más.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/correccion-de-estilo" className="inline-flex items-center font-semibold text-teal hover:text-teal-dark transition-colors">
                Ver todo lo que incluye <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {testimonials && testimonials.length > 0 && (
        <Band tone="bg-alt" className="py-20 overflow-hidden">
          <Container>
            <TestimonialCarousel testimonials={testimonials} />
          </Container>
        </Band>
      )}

      <Container className="flex flex-col gap-4 py-16">
        <h2 className="font-display text-2xl italic">Como escritora</h2>
        <p>
          Además de corregir, escribo. Soy autora de{" "}
          <em>Marcianos hijos de p...</em> (Grupo Editorial Ibáñez, 2025) y{" "}
          <em>Juro por mis orejas</em> (Editorial Oveja Negra, 2016).{" "}
          <Link href="/perfil" className="font-semibold text-teal underline">
            Conoce mis novelas →
          </Link>
        </p>
      </Container>

      <Band tone="cream" className="py-16">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl italic">
            ¿Tienes un manuscrito listo para publicar?
          </h2>
          <WhatsAppButton message="Hola Amparo, quiero información sobre corrección de estilo.">
            Escríbeme por WhatsApp
          </WhatsAppButton>
        </Container>
      </Band>
    </>
  );
}
