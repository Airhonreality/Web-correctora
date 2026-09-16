import Link from "next/link";
import { Container, Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { pageMetadata } from "@/lib/seo";
import { getPublishedAuthorBooks } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export const metadata = pageMetadata({
  title: "Mi perfil",
  description:
    "Amparo Rozo — Comunicadora social y periodista, correctora profesional de estilo y escritora.",
  path: "/perfil",
});

const trayectoria = [
  "Revista Institucional Kminos, Instituto Nacional de Vías (Ministerio del Interior).",
  "Fundación Universitaria Cafam, en convenio con el Ministerio de Comercio, Industria y Turismo: corrección de planes de desarrollo turístico.",
  "Fundación Escuela Nueva Vida: producción de cartillas, periódicos, revistas y folletos.",
  "Revista cultural La Ruta.",
  "Revista Institucional del municipio de Subachoque.",
  "Novelas y textos de autores independientes.",
];

export default async function PerfilPage() {
  const books = await getPublishedAuthorBooks();

  return (
    <>
      {/* Hero / Bio de Autoridad */}
      <Band tone="cream-soft" className="py-24 border-b border-ink/5">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h1 className="font-display text-4xl sm:text-5xl italic text-ink">Mi perfil</h1>
              <p className="text-xl text-teal-dark font-medium leading-relaxed">
                Profesional en Comunicación Social y Periodismo de la Universidad Externado de Colombia (1998).
              </p>
              <p className="font-display text-2xl lg:text-3xl leading-snug text-ink italic border-l-4 border-ink/20 pl-6">
                &ldquo;La corrección de estilo dota a tu manuscrito de claridad, precisión,
                expresividad y el tono adecuado, para que la lectura sea fluida,
                armónica y entretenida.&rdquo;
              </p>
              <p className="text-lg text-ink/80 leading-relaxed">
                Amplia experiencia en corrección de estilo de textos literarios,
                memorias, libros de crecimiento personal y especializados.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed">
                Reviso tu manuscrito palabra por palabra: sintaxis, ortotipografía,
                coherencia narrativa y mucho más.
              </p>
              <div className="pt-1">
                <Link href="/correccion-de-estilo" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-ink border-b-2 border-ink pb-1 hover:text-muted hover:border-muted transition-colors">
                  Ver todo lo que incluye <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="relative aspect-[4/5] w-full max-w-sm bg-ink/5 rounded-xl overflow-hidden shadow-2xl border border-ink/10">
                <img 
                  src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/web/amparo-rozo-filbo-2022.avif" 
                  alt="Amparo Rozo firmando libros en la Feria Internacional del Libro (Filbo) 2022" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <p className="text-center text-sm text-muted mt-3 italic">
                Firma de libros, Feria Internacional del Libro (Filbo) 2022.
              </p>
            </div>
          </div>
        </Container>
      </Band>

      <Container className="py-20 flex flex-col gap-24">
        
        {/* Validación en Medios / Social Proof */}
        <section>
          <h2 className="font-display text-3xl italic mb-10 text-center text-ink">En los medios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Canal UNO */}
            <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-sm border border-ink/5 hover:shadow-md transition-shadow">
              <div className="aspect-video w-full rounded-md overflow-hidden bg-ink/5 shadow-inner">
                <video 
                  controls 
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/web/amparo-rozo-canal-uno-gps.mp4" type="video/mp4" />
                  Tu navegador no soporta el formato de video.
                </video>
              </div>
              <div>
                <h3 className="font-bold text-xl text-ink">Canal UNO - Espacio GPS</h3>
                <p className="mt-4 text-ink/80 leading-relaxed">
                  El escritor y columnista colombiano Juan Esteban Constaín reseñó mi novela <em>Juro por mis orejas</em>. Resaltó su carácter histórico y fantástico. Un género al que pocos escritores le apuestan.
                </p>
              </div>
            </div>

            {/* Revista DC */}
            <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-sm border border-ink/5 hover:shadow-md transition-shadow">
              <div className="flex gap-3 overflow-x-auto pb-4 snap-x smooth-scroll">
                <img 
                  src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/web/revista-dc-portada.jpg" 
                  alt="Portada Revista DC"
                  className="h-56 w-auto object-contain rounded-md shadow-sm snap-center border border-ink/10"
                />
                <img 
                  src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/web/revista-dc-articulo-1.jpg" 
                  alt="Artículo Revista DC Parte 1"
                  className="h-56 w-auto object-contain rounded-md shadow-sm snap-center border border-ink/10"
                />
                <img 
                  src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/web/revista-dc-articulo-2.jpg" 
                  alt="Artículo Revista DC Parte 2"
                  className="h-56 w-auto object-contain rounded-md shadow-sm snap-center border border-ink/10"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-ink">Revista Cultural DC</h3>
                <p className="mt-4 text-ink/80 leading-relaxed">
                  La revista cultural DC, en la sección de Libros Recomendados, destacó el carácter histórico y mágico de mi novela. Un género al que pocos escritores colombianos le apuestan en la actualidad.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Vitrina de Publicaciones (Referencias) */}
        {books && books.length > 0 && (
          <section className="bg-bg-alt -mx-6 px-6 md:-mx-12 md:px-12 py-16 rounded-3xl border border-ink/5">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="font-display text-3xl italic mb-6 text-ink">Mis Novelas</h2>
              <p className="text-lg text-ink/80 leading-relaxed max-w-2xl mx-auto">
                Además de corregir, escribo. Soy autora de{" "}
                <em>Marcianos hijos de p...</em> (Grupo Editorial Ibáñez, 2025) y{" "}
                <em>Juro por mis orejas</em> (Editorial Oveja Negra, 2016).{" "}
                <Link href="/escritora" className="font-semibold text-teal underline">
                  Conoce mis novelas →
                </Link>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {books.map((book) => (
                <div key={book.id} className="flex flex-col items-center text-center gap-6">
                  {book.coverImageUrl ? (
                    <img
                      src={book.coverImageUrl}
                      alt={`Portada de ${book.title}`}
                      className="w-full max-w-[200px] rounded-md shadow-xl object-cover hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full max-w-[200px] aspect-[2/3] bg-ink/10 rounded-md flex items-center justify-center text-muted italic shadow-inner">
                      Sin portada
                    </div>
                  )}
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink">{book.title}</h3>
                    <p className="mt-3 text-sm text-ink/70 line-clamp-3 leading-relaxed max-w-xs mx-auto">
                      {book.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-14 text-center">
              <Link
                href="/escritora"
                className="inline-flex h-12 items-center justify-center rounded-md border-2 border-anchor px-8 font-semibold text-anchor transition-colors hover:bg-anchor hover:text-cream"
              >
                Conocer más o adquirir mis libros
              </Link>
            </div>
          </section>
        )}

        {/* Trayectoria Editorial */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl italic text-ink">Trayectoria editorial</h2>
            <p className="text-muted mt-2">Instituciones y proyectos con los que he colaborado</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trayectoria.map((item, index) => (
              <div key={index} className="bg-cream-soft p-6 rounded-xl border border-ink/5 hover:border-ink/10 transition-colors flex items-center">
                <p className="text-sm text-ink/80 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

      </Container>

      {/* CTA: ¿Tienes un manuscrito listo para publicar? */}
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
