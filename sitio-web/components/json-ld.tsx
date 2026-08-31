export function JsonLd({ data }: { data: object }) {
  // Escapa "<" para que texto libre (p. ej. citas de testimonios o cuerpos de
  // blog) no pueda cerrar prematuramente la etiqueta <script>.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
