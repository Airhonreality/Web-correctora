import { Container, Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "¿Cuánto cuesta corregir un libro?",
  description:
    "Tarifa de corrección de estilo: $23 COP por palabra, sin paquetes cerrados ni cotizadores automáticos.",
  path: "/cuanto-cuesta-corregir-un-libro",
});

const ejemplos = [
  { extension: "Cuento corto (10.000 palabras)", precio: "$230.000 COP" },
  { extension: "Novela corta (40.000 palabras)", precio: "$920.000 COP" },
  { extension: "Novela estándar (70.000 palabras)", precio: "$1.610.000 COP" },
  { extension: "Novela extensa (100.000 palabras)", precio: "$2.300.000 COP" },
];

export default function CuantoCuestaPage() {
  return (
    <>
      <Band tone="cream" className="py-16">
        <Container className="flex flex-col gap-3 text-center">
          <h1 className="font-display text-4xl italic">
            ¿Cuánto cuesta corregir un libro?
          </h1>
          <p className="text-lg text-muted">
            Trabajo con una tarifa fija de <strong>$23 COP por palabra</strong>.
            No hay paquetes cerrados ni cotizadores automáticos: te escribo
            personalmente después de contar las palabras exactas de tu
            manuscrito.
          </p>
        </Container>
      </Band>

      <Container className="py-16">
        <h2 className="font-display text-2xl italic">Ejemplos de inversión</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-anchor">
                <th className="py-2 pr-4">Extensión del manuscrito</th>
                <th className="py-2 tabular-nums">Inversión aproximada</th>
              </tr>
            </thead>
            <tbody>
              {ejemplos.map((row) => (
                <tr key={row.extension} className="border-b border-ink/10">
                  <td className="py-3 pr-4">{row.extension}</td>
                  <td className="py-3 tabular-nums">{row.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      <Band tone="bg-alt" className="py-16">
        <Container className="flex flex-col gap-4">
          <h2 className="font-display text-xl italic">
            ¿No sabes cuántas palabras tiene tu manuscrito?
          </h2>
          <p>
            En Word: <em>Revisar &gt; Contar palabras</em>. Como referencia,
            una página estándar (Times New Roman 12, interlineado 1,5) tiene
            entre 250 y 300 palabras.
          </p>
        </Container>
      </Band>

      <Container className="flex flex-col gap-4 py-16">
        <h2 className="font-display text-xl italic">
          ¿Por qué no hay un cotizador automático?
        </h2>
        <p>
          Porque el momento de cotizar tu manuscrito es, en sí mismo, parte de
          conocernos. Envíame tu texto y te respondo personalmente con el
          valor exacto.
        </p>
      </Container>

      <Band tone="cream" className="py-16">
        <Container className="flex justify-center">
          <WhatsAppButton message="Hola Amparo, quiero saber cuánto costaría corregir mi manuscrito.">
            Escríbeme por WhatsApp
          </WhatsAppButton>
        </Container>
      </Band>
    </>
  );
}
