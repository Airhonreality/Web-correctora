import Link from "next/link";
import { Container, Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { JsonLd } from "@/components/json-ld";
import { getAllTestimonials } from "@/lib/db/queries";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { EventsCarousel } from "@/components/events-carousel";
import { pageMetadata, reviewJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = pageMetadata({
  title: "Amparo Rozo — Corrección de estilo literario",
  description:
    "Corrección de estilo para novelas, memorias, crónicas y libros de crecimiento personal. Hecha a mano, palabra por palabra, sin inteligencia artificial.",
  path: "/",
});

export default async function Home() {
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
      <div className="bg-cream py-24 sm:py-32 lg:py-40 overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Bloque de Texto (7 Columnas) */}
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center gap-6 text-left bg-blue-pastel px-10 lg:px-12 py-12 lg:py-14 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <h1 className="font-display text-5xl font-bold tracking-tight text-ink leading-[1.15] sm:text-7xl">
                Su texto está en buenas manos.
              </h1>
              <p className="max-w-xl text-xl font-medium leading-relaxed text-ink">
                Corrección de estilo para novelas, memorias, crónicas y libros de
                crecimiento personal — hecha a mano, palabra por palabra, por una
                escritora y periodista. Sin inteligencia artificial.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-1">
                <WhatsAppButton 
                  message="Hola Amparo, quiero información sobre corrección de estilo."
                  className="shadow-sm uppercase tracking-wider text-xs sm:text-sm h-12 px-8"
                >
                  Escríbeme por WhatsApp
                </WhatsAppButton>
                <Link
                  href="/portafolio"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-ink border-b-2 border-ink pb-1 transition-colors hover:text-muted hover:border-muted"
                >
                  Ver portafolio <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Composición Visual: Arco + Cameo (5 Columnas) */}
            <div className="col-span-1 lg:col-span-5 relative hidden lg:block">
               {/* 1. El Arco (Carrusel de eventos) */}
               <div className="aspect-[3/4] w-full max-w-[85%] ml-auto rounded-tr-full rounded-tl-full overflow-hidden shadow-xl border-4 border-white/50 bg-white">
                  <EventsCarousel />
               </div>

               {/* 2. El Cameo (Retrato superpuesto) */}
               <div className="absolute -left-6 bottom-12 flex flex-col items-center gap-3">
                  <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden shadow-2xl border-[6px] border-cream relative z-10">
                    <img 
                      src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/web/amparo-rozo-correctora-estilo.jpg" 
                      alt="Amparo Rozo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Etiqueta flotante */}
                  <div className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm border border-ink/5">
                    <p className="text-[10px] font-bold text-ink uppercase tracking-widest whitespace-nowrap">Amparo Rozo</p>
                  </div>
               </div>
            </div>

          </div>
        </Container>
      </div>

      <Container className="mx-auto max-w-5xl py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Columna Izquierda: Imagen */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto overflow-hidden rounded-sm">
            <img 
              src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/web/amparo-rozo-correctora-estilo.jpg" 
              alt="Amparo Rozo, correctora de estilo literario profesional" 
              className="object-cover w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Columna Derecha: Texto */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-6">
                Amparo Rozo
              </h2>
              <p className="font-display text-2xl lg:text-3xl leading-snug text-ink italic border-l-4 border-ink/20 pl-6">
                "La corrección de estilo dota a tu manuscrito de claridad, precisión,
                expresividad y el tono adecuado, para que la lectura sea fluida,
                armónica y entretenida."
              </p>
            </div>
            
            <div className="flex flex-col gap-4 text-muted text-lg">
              <p>
                Comunicadora social y periodista (Universidad Externado de
                Colombia), correctora profesional de estilo y escritora. Autora de
                dos novelas publicadas por editorial.
              </p>
              <p>
                Reviso tu manuscrito palabra por palabra: sintaxis, ortotipografía,
                coherencia narrativa y mucho más.
              </p>
            </div>
            <div className="pt-2">
              <Link href="/correccion-de-estilo" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-ink border-b-2 border-ink pb-1 hover:text-muted hover:border-muted transition-colors">
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
