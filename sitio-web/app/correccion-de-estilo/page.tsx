import { CorreccionDeEstiloContent } from "@/components/correccion-de-estilo-content";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata = pageMetadata({
  title: "Corrección de estilo literario",
  description:
    "Servicio integral de corrección de estilo para novelas, memorias, crónicas y libros especializados. Sin inteligencia artificial.",
  path: "/correccion-de-estilo",
});

export default function CorreccionDeEstiloPage() {
  return <CorreccionDeEstiloContent />;
}