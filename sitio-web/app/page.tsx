import Link from "next/link";
import { Check, Heart, Mail } from "lucide-react";
import { Container } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { JsonLd } from "@/components/json-ld";
import { EventsCarousel } from "@/components/events-carousel";
import { PortfolioSlider } from "@/components/portfolio-slider";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import {
  getAllTestimonials,
  getAuthorizedPortfolioItems,
} from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export const metadata = pageMetadata({
  title: "Su texto está en buenas manos.",
  description:
    "En mi trabajo de corrección de estilo, respeto fielmente tu voz y tu sello personal como autor. Además, aporto a tu manuscrito la claridad, la expresividad y el tono preciso que necesita para que la lectura sea fluida, armónica y entretenida.",
  path: "/",
});

export default async function Home() {
  const testimonials = await getAllTestimonials();
  const portfolioItems = await getAuthorizedPortfolioItems();

  return (
    <>
      <JsonLd data={serviceJsonLd()} />

      {/* A. Hero: franja de media página, composición editorial en 2 columnas */}
      <section className="relative overflow-hidden bg-fondo-hero">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/40 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative z-10 max-w-7xl py-12 sm:py-16 lg:py-20 px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink text-center sm:text-4xl lg:text-[3.5rem]">
                Su texto está en buenas manos
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/80">
                En mi trabajo de corrección de estilo, respeto fielmente tu voz
                y tu sello personal como autor. Además, aporto a tu manuscrito
                la claridad, la expresividad y el tono preciso que necesita para
                que la lectura sea fluida, armónica y entretenida.
              </p>
            </div>

            {/* Composición Visual: Arco + Cameo (5 Columnas) */}
            <div className="col-span-1 lg:col-span-5 relative hidden lg:block flex flex-col items-end">
               {/* 1. El Arco (Carrusel de eventos) */}
               <div className="aspect-[3/4] w-full max-w-[85%] rounded-tr-full rounded-tl-full overflow-hidden shadow-xl border-4 border-white/50 bg-white">
                  <EventsCarousel />
               </div>

               {/* 2. El Cameo (Retrato superpuesto) */}
               <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
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

               {/* Texto de credenciales como pie de foto del arco */}
               <div className="mt-4 text-right max-w-[85%]">
                 <p className="text-sm font-medium text-ink leading-relaxed">
                   Comunicadora social-periodista
                 </p>
                 <p className="text-sm font-medium text-ink leading-relaxed">
                   Universidad Externado de Colombia
                 </p>
                 <p className="text-sm font-medium text-ink leading-relaxed">
                   Escritora
                 </p>
                 <p className="text-sm font-medium text-ink leading-relaxed">
                   Correctora profesional de estilo
                 </p>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Nueva franja: servicio integral */}
      <section className="bg-cream py-10 sm:py-14 lg:py-16 border-b border-ink/10">
        <Container className="max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-dark mb-3">
            Servicio integral de corrección de estilo
          </p>
          <p className="font-display text-xl sm:text-2xl text-ink leading-relaxed max-w-2xl mx-auto">
            Novelas · Memorias · Crónicas · Libros especializados · Maestrías · Crecimiento
            personal
          </p>
        </Container>
      </section>

      {/* C. Mi compromiso: título + lista en dos columnas */}
      <section className="bg-white py-20 sm:py-24 border-b border-ink/10">
        <Container className="max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-dark mb-2">
              Alcance del servicio
            </p>
            <h2 className="mt-0 font-display text-3xl italic text-ink sm:text-4xl">
              Mi compromiso
            </h2>
          </div>

          {/* Encabezado principal: ancho completo */}
          <div className="mt-14 mb-10 text-center">
            <p className="font-semibold text-ink leading-relaxed max-w-2xl mx-auto">
              Corregir tu manuscrito sin recurrir a herramientas de IA ni a
              correctores automáticos que sustituyan el análisis lingüístico;
              de este modo, preservar los matices, el lenguaje y las
              expresiones propias del castellano.
            </p>
          </div>

          {/* Dos columnas de compromisos */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Columna 1 */}
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-ink/90">
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-teal-dark" aria-hidden="true" />
                <span>
                  Corregir repeticiones, redundancias, localismos, ambigüedades,
                  erratas y cacofonías.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-teal-dark" aria-hidden="true" />
                <span>
                  Reescribir oraciones confusas, en un lenguaje claro y
                  estructurado (sintaxis).
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-teal-dark" aria-hidden="true" />
                <span>
                  Detectar y enmendar errores de puntuación, ortográficos,
                  léxicos y gramaticales. Uso correcto del vocabulario.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-teal-dark" aria-hidden="true" />
                <span>
                  Ortotipografía: comillas, guiones, rayas, paréntesis,
                  voladitas, siglas, itálicas, versalitas.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-teal-dark" aria-hidden="true" />
                <span>Párrafos, sangrías, fuente.</span>
              </div>
            </div>

            {/* Columna 2 */}
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-ink/90">
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-teal-dark" aria-hidden="true" />
                <span>Aplicación de Normas APA (libros especializados).</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-teal-dark" aria-hidden="true" />
                <span className="font-semibold text-ink">
                  Además, en el caso de Novelas:
                </span>
              </div>
              <ul className="mt-2 pl-6 list-disc space-y-2 text-lg leading-relaxed text-ink/85">
                <li>
                  Construcción de personajes tridimensionales, lenguaje acorde,
                  características físicas y personalidad.
                </li>
                <li>
                  Diálogos: uso correcto de rayas, incisos y comillas.
                </li>
                <li>Continuidad lógica de la historia.</li>
                <li>Trama: coherencia en los hechos.</li>
                <li>Uso correcto de tiempos verbales.</li>
                <li>Comentarios. Lectura crítica.</li>
              </ul>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-teal-dark" aria-hidden="true" />
                <span className="uppercase tracking-wide font-bold text-teal-dark">
                  Humanización y corrección de textos generados por IA.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-teal-dark" aria-hidden="true" />
                <span>
                  Otros servicios: diagramación del libro y diseño de portada
                  (realizados por un diseñador gráfico).
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA: servicio de corrección */}
      <section className="bg-white py-16 sm:py-20 text-center border-b border-ink/10">
        <Container className="max-w-2xl mx-auto">
          <WhatsAppButton
            message="Hola Amparo, requiero un servicio de corrección de estilo para mi manuscrito."
            className="uppercase tracking-wider text-xs sm:text-sm h-12 px-8"
          >
            Requiero un servicio de corrección
          </WhatsAppButton>
        </Container>
      </section>

      {/* Sección dividida: Opiniones de clientes (izquierda) + Mi Perfil (derecha) */}
      <section className="bg-fondo-hero py-20 sm:py-24 border-t border-ink/10">
        <Container className="max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Columna izquierda: slider de testimonios */}
            <div className="flex flex-col">
              <TestimonialSlider testimonials={testimonials} />
            </div>

            {/* Columna derecha: Mi Perfil */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-3xl italic text-ink sm:text-4xl">
                Mi Perfil
              </h2>
              <p className="text-lg leading-relaxed text-ink/85">
                En mi recorrido profesional he trabajado como correctora de
                textos literarios, libros especializados, crecimiento personal y
                revistas culturales.
              </p>
              <ul className="flex flex-col gap-3 text-lg leading-relaxed text-ink/80 space-y-3">
                <li>
                  Editorial COMCOSUR (corrección de clásicos).
                </li>
                <li>
                  Revista Institucional Kminos, Instituto Nacional de Vías
                  (Ministerio del Interior).
                </li>
                <li>
                  Fundación Escuela Nueva Vida: producción de cartillas,
                  periódicos, revistas y folletos.
                </li>
                <li>Revista cultural La Ruta.</li>
                <li>
                  Revista Institucional del municipio de Subachoque.
                </li>
                <li>Novelas y textos de autores independientes.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* F. Algunos de mis clientes: slider de libros corregidos */}
      <section className="overflow-hidden bg-sand py-20 sm:py-24 border-t border-ink/10">
        <Container className="max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-dark mb-4">
            Algunos de mis clientes
          </p>
          <h2 className="font-display text-4xl italic text-ink sm:text-5xl mb-10">
            Libros que he corregido
          </h2>
        </Container>
        <PortfolioSlider items={portfolioItems} testimonials={testimonials} showHeader={false} />
      </section>

      {/* D. Banner de confidencialidad + sección IA */}
      <section className="bg-cream py-24 sm:py-32">
        <Container className="max-w-6xl">

          {/* Banner confidencialidad */}
          <section className="bg-terracotta rounded-3xl p-6 sm:p-10 text-cream mb-10 sm:mb-16 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="flex-shrink-0 sm:flex-shrink-0">
              <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-terracotta/20 border border-cream/30">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-cream" aria-hidden="true" />
                <Heart className="absolute -right-1 -bottom-1 h-4 w-4 sm:h-5 sm:w-5 text-gold" aria-hidden="true" />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-display text-base sm:text-lg leading-relaxed">
                Firmamos un <strong className="text-cream font-bold italic">acuerdo de confidencialidad</strong> del material a corregir, con la certeza de que este no pasará a terceros ni será divulgado sin tu autorización.
              </p>
            </div>
          </section>

          {/* Sección IA compacta */}
          <article className="flex flex-col rounded-3xl border-2 border-teal bg-white p-8 shadow-sm sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-dark">
              Humano vs. Inteligencia artificial
            </p>
            <h2 className="mt-4 font-display text-3xl italic leading-snug text-ink sm:text-4xl">
              ¿Por qué un corrector humano y no una IA?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/85">
              El software no diferencia el uso de la tilde diacrítica en
              palabras como <em>cuánto/cuanto</em>, <em>qué/que</em> o{" "}
              <em>dónde/donde</em>, cuya aplicación cambia el significado de
              la frase. Tampoco reconoce expresiones coloquiales, ni detecta
              incoherencias de la trama, situaciones inverosímiles o errores
              de contenido como fechas y lugares que no cuadran.
            </p>
          </article>

        </Container>
      </section>

      {/* G. Cierre: inversión y CTA final sobre crema */}
      <section className="bg-cream">
        <Container className="max-w-4xl py-20 text-center sm:py-24">
          <div id="inversion" className="scroll-mt-24">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-dark">
              Inversión clara, sin sorpresas
            </p>
            <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">
              Inversión
            </h2>
            <dl className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm">
                <dt className="text-sm font-bold uppercase tracking-widest text-muted">
                  Por palabra
                </dt>
                <dd className="mt-3 font-display text-5xl font-bold text-ink">
                  $23
                </dd>
                <dd className="mt-1 text-sm text-muted">COP · sin paquetes cerrados</dd>
              </div>
              <div className="rounded-3xl bg-navy p-8 text-cream">
                <dt className="text-sm font-bold uppercase tracking-widest text-cream/70">
                  Ejemplo · novela de 70.000 palabras
                </dt>
                <dd className="mt-3 font-display text-4xl font-bold text-gold">
                  $1.610.000
                </dd>
                <dd className="mt-1 text-sm text-cream/70">
                  COP · sobre el conteo exacto de tu manuscrito
                </dd>
              </div>
            </dl>
            <Link
              href="/cuanto-cuesta-corregir-un-libro"
              className="mt-10 inline-block font-semibold text-teal underline decoration-teal/40 underline-offset-4 transition-colors hover:text-teal-dark"
            >
              Ver el detalle completo de precios →
            </Link>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton
                message="Hola Amparo, quiero enviarte mi manuscrito para que lo corrijas."
                className="uppercase tracking-wider text-xs sm:text-sm h-12 px-8"
              >
                Escríbeme por WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-xl border-t border-ink/10 pt-16">
            <h3 className="font-display text-3xl italic text-ink sm:text-4xl">
              ¿Tienes un manuscrito listo para publicar?
            </h3>
            <p className="mt-3 text-base text-muted">
              Envía tus primeros capítulos y recibe una primera lectura
              personalizada.
            </p>
            <div className="mt-7 flex justify-center">
              <WhatsAppButton
                message="Hola Amparo, quiero información sobre corrección de estilo."
                variant="outline"
              >
                Escríbeme por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
