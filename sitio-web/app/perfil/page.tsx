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

const R2 = "https://pub-31f388eee9ee467086e726e2865e639a.r2.dev";

export default function PerfilPage() {
  return (
    <>
      {/* Hero / Bio de Autoridad */}
      <Band tone="cream-soft" className="py-24 border-b border-ink/5">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h1 className="font-display text-4xl sm:text-5xl italic text-ink">Amparo Rozo</h1>
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
                  src={`${R2}/web/amparo-rozo-filbo-2022.avif`}
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

      {/* Portada y Contraportada - Marcianos hijos de p... */}
      <Container className="py-20">
        <div className="flex flex-col md:flex-row gap-8 items-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 flex flex-col items-center text-center gap-4">
            <img
              src={`${R2}/libros/34db07cd-39fc-494e-9597-8d0a175d5974.jpg`}
              alt="Portada de Marcianos hijos de p..."
              className="w-full max-w-[240px] rounded-md shadow-xl object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center text-center gap-4">
            <img
              src={`${R2}/libros/34db07cd-39fc-494e-9597-8d0a175d5974.jpg`}
              alt="Contraportada de Marcianos hijos de p..."
              className="w-full max-w-[240px] rounded-md shadow-xl object-cover"
            />
          </div>
        </div>
      </Container>

      {/* Leonidas / Juro por mis orejas - portada en 3D */}
      <Container className="py-20">
        <div className="flex justify-center">
          <img
            src={`${R2}/libros/7e90895d-6d66-4a23-bc5f-7046beb51bcf.jpg`}
            alt="Portada de Leonidas / Juro por mis orejas"
            className="w-full max-w-[300px] rounded-md shadow-2xl object-cover"
          />
        </div>
      </Container>

      {/* Segunda edición - portada y página interior */}
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4">
            <img
              src={`${R2}/libros/7e90895d-6d66-4a23-bc5f-7046beb51bcf.jpg`}
              alt="Leonidas - portada"
              className="w-full max-w-[240px] rounded-md shadow-xl object-cover"
            />
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <img
              src={`${R2}/libros/7e90895d-6d66-4a23-bc5f-7046beb51bcf.jpg`}
              alt="Página interior - Leonidas"
              className="w-full max-w-[240px] rounded-md shadow-xl object-cover"
            />
          </div>
        </div>
      </Container>

      {/* Validación en Medios / Social Proof */}
      <Band tone="cream-soft" className="py-20 border-t border-ink/5">
        <Container>
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
                  poster={`${R2}/web/amparo-rozo-correctora-estilo.jpg`}
                >
                  <source
                    src={`${R2}/web/amparo-rozo-canal-uno-gps.mp4`}
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
