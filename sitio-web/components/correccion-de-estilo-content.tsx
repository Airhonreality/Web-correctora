import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { JsonLd } from "@/components/json-ld";
import { EventsCarousel } from "@/components/events-carousel";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { serviceJsonLd } from "@/lib/seo";
import { getAllTestimonials } from "@/lib/db/queries";

const compromiso: Array<{ lead: string; rest?: string }> = [
  { lead: "Repeticiones, redundancias, localismos, ambigüedades, erratas y cacofonías." },
  {
    lead: "Oraciones confusas,",
    rest: "las reescribo en un lenguaje claro y estructurado (sintaxis).",
  },
  {
    lead: "Errores de puntuación, ortográficos, léxicos y gramaticales.",
    rest: "Uso correcto del vocabulario.",
  },
  {
    lead: "Ortotipografía:",
    rest: "comillas, guiones, rayas, paréntesis, voladitas, siglas, itálicas, versalitas.",
  },
  { lead: "Párrafos, sangrías y fuente." },
  { lead: "Normas APA:", rest: "para libros especializados." },
];

const novelas: Array<{ lead: string; rest?: string }> = [
  {
    lead: "Personajes tridimensionales:",
    rest: "lenguaje acorde, características físicas y personalidad.",
  },
  { lead: "Diálogos:", rest: "uso correcto de rayas, incisos y comillas." },
  { lead: "Continuidad lógica de la historia." },
  { lead: "Trama:", rest: "coherencia en los hechos. Situaciones inverosímiles." },
  { lead: "Uso correcto de tiempos verbales." },
  { lead: "Lectura crítica", rest: "y comentarios." },
];

export async function CorreccionDeEstiloContent() {
  const testimonials = await getAllTestimonials();

  return (
    <>
      <JsonLd data={serviceJsonLd()} />

      {/* A. Hero: full bleed azul pastel, composición editorial en 2 columnas */}
      <section className="relative overflow-hidden bg-blue-pastel">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/40 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative z-10 max-w-6xl py-20 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
                Corrección de estilo literario
              </h1>
              <p className="mt-6 font-display text-2xl leading-snug text-ink sm:text-3xl">
                Su texto está en buenas manos
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
                Corrección de estilo —sin inteligencia artificial— de novelas,
                memorias, crónicas, libros de crecimiento personal, etc.
              </p>
              <p className="mt-4 max-w-xl font-display text-lg leading-relaxed text-ink/75">
                La corrección de estilo dota a tu manuscrito de claridad,
                precisión, expresividad y tono adecuado, para que la lectura sea
                fluida, armónica y entretenida.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <WhatsAppButton
                  message="Hola Amparo, quiero información sobre corrección de estilo."
                  variant="terracotta"
                  className="shadow-lg uppercase tracking-wider text-xs sm:text-sm h-12 px-8"
                >
                  Escríbeme por WhatsApp
                </WhatsAppButton>
                <Link
                  href="/cuanto-cuesta-corregir-un-libro"
                  className="inline-flex h-12 items-center justify-center rounded-md border-2 border-ink bg-transparent px-8 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-cream sm:text-sm"
                >
                  Ver inversión
                </Link>
              </div>
              <ul className="mt-11 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-ink/75">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-dark" aria-hidden="true" />
                  Corrección palabra por palabra
                </li>
                
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-dark" aria-hidden="true" />
                  Sin inteligencia artificial
                </li>
              </ul>
            </div>

            {/* Composición visual: arco de eventos + cameo de Amparo */}
            <div className="relative hidden lg:col-span-5 lg:block">
              <div className="relative z-0 mx-auto aspect-[3/4] w-full max-w-[85%] overflow-hidden rounded-tr-full rounded-tl-full border-8 border-white bg-white shadow-2xl">
                <EventsCarousel />
              </div>
              <div className="absolute -left-6 bottom-14 flex flex-col items-center gap-3">
                <div className="relative z-10 h-36 w-36 overflow-hidden rounded-full border-[6px] border-cream shadow-2xl">
                  <img
                    src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/web/amparo-rozo-correctora-estilo.jpg"
                    alt="Amparo Rozo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="max-w-[240px] rounded-2xl border border-ink/5 bg-white/95 px-4 py-3 text-center shadow-md backdrop-blur-md">
                  <p className="text-[11px] font-semibold leading-snug text-ink">
                    Comunicadora social-periodista / Universidad Externado de
                    Colombia / Correctora profesional de estilo y autora de dos
                    novelas publicadas por editoriales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          </Container>
      </section>

      {/* C. Mi compromiso: grilla 2x2 de cards */}
      <section className="bg-cream">
        <Container className="max-w-6xl py-24 sm:py-28">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-dark">
              Alcance del servicio
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Mi compromiso
            </h2>
            <div className="mt-8 h-px w-24 bg-teal"></div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Card 1: blanco puro */}
            <article className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 shadow-sm sm:p-10">
              <div
                className="pointer-events-none absolute -right-3 -top-7 font-display text-7xl italic text-teal/15"
                aria-hidden="true"
              >
                01
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
                Corrección ortotipográfica y gramatical
              </h3>
              <p className="mt-3 text-sm text-muted">
                Pulido integral del lenguaje: desde la claridad estructural de
                cada oración hasta el detalle tipográfico.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {compromiso.map((item) => (
                  <li key={item.lead} className="flex items-start gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-[0_10px_22px_-10px_rgba(78,192,176,0.85)] md:h-10 md:w-10">
                      <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <p className="text-[15px] leading-relaxed text-ink/90 md:text-base">
                      <span className="font-bold text-ink">{item.lead}</span>
                      {item.rest ? ` ${item.rest}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            {/* Card 2: rosa suave */}
            <article className="relative overflow-hidden rounded-3xl bg-rose-light p-8 shadow-sm sm:p-10">
              <div
                className="pointer-events-none absolute -right-3 -top-7 font-display text-7xl italic text-ink/10"
                aria-hidden="true"
              >
                02
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
                Edición de estilo para novelas y narrativa
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                El trabajo fino del narrador: personajes, ritmo y coherencia de
                la historia, con lectura crítica y comentarios.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {novelas.map((item) => (
                  <li key={item.lead} className="flex items-start gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-terracotta text-cream shadow-[0_10px_22px_-10px_rgba(189,109,94,0.9)] md:h-10 md:w-10">
                      <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <p className="text-[15px] leading-relaxed text-ink/90 md:text-base">
                      <span className="font-bold text-ink">{item.lead}</span>
                      {item.rest ? ` ${item.rest}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          </Container>
      </section>

      {/* D. Opiniones de mis clientes: carrusel editorial + mini grilla */}
      {testimonials.length > 0 && (
        <section className="bg-olive-soft py-20 sm:py-24">
          <Container className="max-w-6xl">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Opiniones de mis clientes
              </h2>
              <div className="mt-8 h-px w-24 bg-teal"></div>
            </div>
            <div className="mt-12">
              <TestimonialCarousel testimonials={testimonials} variant="editorial" />
            </div>
          </Container>
        </section>
      )}

      {/* E. Sección IA: humano vs IA */}
      <section className="bg-cream py-24 sm:py-28">
        <Container className="max-w-6xl">
          <div className="mx-auto max-w-3xl rounded-3xl border-2 border-teal bg-white p-8 shadow-sm sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-dark">
              Humano vs. Inteligencia artificial
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              ¿Por qué un corrector humano y no una IA?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/85">
              El software no diferencia el uso de la tilde diacrítica en
              palabras como <em>cuánto/cuanto</em>, <em>qué/que</em> o{" "}
              <em>dónde/donde</em>, cuya aplicación cambia el significado de la
              frase. Tampoco reconoce expresiones coloquiales, ni detecta
              incoherencias de la trama, situaciones inverosímiles o errores de
              contenido como fechas y lugares que no cuadran.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}