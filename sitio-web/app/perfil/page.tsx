import Link from "next/link";
import { Container, Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = pageMetadata({
  title: "Mi perfil",
  description:
    "Amparo Rozo — Comunicadora social y periodista, correctora profesional de estilo y escritora. Autora de Marcianos hijos de p... y Juro por mis orejas.",
  path: "/perfil",
});

const trayectoria = [
  "Revista Institucional Kminos, Instituto Nacional de Vías (Ministerio del Interior).",
  "Fundación Universitaria Cafam en convenio con el Ministerio de Comercio, Industria y Turismo: corrección de planes de desarrollo turístico.",
  "Fundación Escuela Nueva Vida: producción de cartillas, periódicos, revistas y folletos.",
  "Revista cultural La Ruta.",
  "Revista Institucional del municipio de Subachoque.",
  "Novelas y textos de autores independientes.",
];

export default function PerfilPage() {
  return (
    <>
      {/* Hero / Bio de Autoridad */}
      <Band tone="cream-soft" className="py-24 border-b border-ink/5">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h1 className="font-display text-4xl sm:text-5xl italic text-ink">Mi perfil</h1>
              <h2 className="font-display text-3xl italic text-ink mt-2">Amparo Rozo</h2>
              <p className="text-xl text-teal-dark font-medium leading-relaxed">
                Profesional en Comunicación Social y Periodismo de la Universidad Externado de Colombia (1998). Amplia experiencia en corrección de estilo de textos literarios, memorias, libros de crecimiento personal, especializados, etc.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed">
                Autora de la novela de ficción Marcianos hijos de p... publicada por el Grupo Editorial Ibáñez, bajo el sello Sképsi (2025); y de la novela Juro por mis orejas, publicada por la Editorial Oveja Negra (2016), una historia con tintes de realismo mágico, en la que se conjugan hechos reales y míticos colombianos.
              </p>
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

      {/* Vitrina de Publicaciones */}
      <Container className="py-20">
        <h2 className="font-display text-3xl italic mb-12 text-center text-ink">Mis Novelas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Marcianos hijos de p... */}
          <div className="flex flex-col items-center text-center gap-4">
            <img
              src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/libros/34db07cd-39fc-494e-9597-8d0a175d5974.jpg"
              alt="Portada de Marcianos hijos de p..."
              className="w-full max-w-[240px] rounded-md shadow-xl object-cover hover:scale-105 transition-transform"
            />
            <h3 className="font-display text-2xl font-bold text-ink">Marcianos hijos de p...</h3>
            <p className="text-sm text-ink/70 leading-relaxed max-w-xs">
              Novela de ficción publicada por el Grupo Editorial Ibáñez, sello Sképsi (2025). Inspirada en hechos reales.
            </p>
          </div>

          {/* Leonidas / Juro por mis orejas */}
          <div className="flex flex-col items-center text-center gap-4">
            <img
              src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/libros/7e90895d-6d66-4a23-bc5f-7046beb51bcf.jpg"
              alt="Portada de Leonidas / Juro por mis orejas"
              className="w-full max-w-[240px] rounded-md shadow-xl object-cover hover:scale-105 transition-transform"
            />
            <h3 className="font-display text-2xl font-bold text-ink">Leonidas</h3>
            <p className="text-sm text-ink/70 leading-relaxed max-w-xs">
              Segunda edición de Juro por mis orejas, bajo nuevo título (en proceso de publicación).
            </p>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/escritora"
            className="inline-flex h-12 items-center justify-center rounded-md border-2 border-anchor px-8 font-semibold text-anchor transition-colors hover:bg-anchor hover:text-cream"
          >
            Conocer más o adquirir mis libros
          </Link>
        </div>
      </Container>

      {/* Validación en Medios / Social Proof */}
      <Band tone="cream-soft" className="py-20 border-t border-ink/5">
        <Container>
          {/* Entrevista Cablenoticias: título izquierda, video derecha */}
          <section className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
              <h2 className="font-display text-3xl sm:text-4xl italic text-burgundy">
                Entrevista a la escritora Amparo Rozo en Cablenoticias
              </h2>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-video w-full rounded-md overflow-hidden bg-ink/5 shadow-inner border border-ink/10">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  poster="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/web/amparo-rozo-correctora-estilo.jpg"
                >
                  <source
                    src="https://pub-31f388eee9ee467086e726e2865e639a.r2.dev/web/amparo-rozo-canal-uno-gps.mp4"
                    type="video/mp4"
                  />
                  Tu navegador no soporta el formato de video.
                </video>
              </div>
            </div>
          </section>

          {/* Trayectoria Editorial */}
          <section className="border-t border-ink/5 pt-12">
            <div className="text-center mb-10">
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

            {/* CTA */}
            <div className="flex justify-center mt-12">
              <WhatsAppButton message="Hola Amparo, me interesa el servicio de corrección de estilo.">
                Hablemos sobre tu manuscrito
              </WhatsAppButton>
            </div>
          </section>
        </Container>
      </Band>
    </>
  );
}
