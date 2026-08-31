# Guía de estilo visual — CONFIRMADA (definitiva)

*Extraído visualmente de 8 capturas del sitio legacy (Wix). Confirmado por el humano el 2026-08-17. Estos son los tokens definitivos de color y tipografía para el diseño nuevo — los hex son aproximaciones leídas de la imagen, no valores exactos de CSS; si se necesita precisión de píxel en algún punto del código, se inspecciona el sitio en vivo en ese momento, pero el rol y la intención de cada color/fuente ya no está en discusión.*

## Paleta de color

| Color | Rol observado | Hex aprox. | Dónde aparece |
|---|---|---|---|
| Crema/beige | Fondo de header y bandas de highlight | `#FBF0D8` | Header de todas las páginas, banda "Servicio integral...", banda "Mi compromiso" |
| Verde muy oscuro (casi negro) | Barra superior, texto/borde de botón secundario | `#1B2A1F` | Barra superior de todas las páginas, borde+texto del botón "HABLEMOS" del footer |
| Teal/azul petróleo | Texto itálico de subtítulos | `#3D7C8C` | "Servicio integral de corrección de estilo" |
| Marrón oscuro / negro cálido | Titulares serif | `#2B2420` | "Novelas - Memorias - Crónicas...", nombres, títulos de libro |
| Gris claro | Fondo de sección alterna | `#F4F4F2` | Sección hero de Inicio (foto + bio corta) |
| Rosa polvo / malva | Banda de encabezado de página interior | `#D9A3A8` | Banda superior de Escritora y Perfil |
| Rosa más claro | Banda de aviso/confidencialidad | `#E8B7BA` | Bloque de acuerdo de confidencialidad |
| Azul pastel suave | Fondo de tarjeta de testimonio | `#B4D2D8` | Tarjeta de testimonio de Fernando Gómez Casas |
| Coral/salmón | CTA flotante principal | `#EF8D77` | Botón "Hablemos" flotante (todas las páginas) |
| Verde WhatsApp estándar | Ícono de WhatsApp | `#25D366` | Ícono dentro de todos los botones de contacto |
| Verde turquesa | CTA secundario en línea | `#4EC0B0` | Botón "Requiero un servicio de corrección" |
| Magenta/fucsia | CTA de compra de libro | `#DB1F6E` | Botón "COMPRAR EJEMPLAR" |
| Terracota | Fondo de footer | `#BD6D5E` | Footer de todas las páginas |
| Dorado/mostaza | Botón del footer | `#F1C87A` | Botón "HABLEMOS" del footer |
| Gris texto | Cuerpo de texto general | `#4A4A4A` | Párrafos de checklist, bios |
| Crema/blanco | Texto sobre fondos oscuros | `#FDF6EC` | Texto del footer |

### Hallazgo a resolver
El sitio actual no usa el color por rol de forma sistemática: la banda de encabezado de página cambia de crema (Inicio) a rosa (Escritora, Perfil) sin una regla clara, y hay 4 colores de botón distintos para CTAs que cumplen función similar (coral, turquesa, magenta, dorado). Para la reconstrucción, esto se puede simplificar a una paleta con roles fijos (1 color de fondo alterno por sección, 1 color de CTA primario, 1 de CTA secundario) conservando el mismo carácter — pastel, cálido, editorial — sin la inconsistencia.

## Tipografía

| Elemento | Familia (aprox.) | Estilo | Notas |
|---|---|---|---|
| Titulares (H1/H2) | Serif elegante (tipo Playfair Display / Libre Baskerville) | Regular e itálica | Itálica se usa mucho para subtítulos de sección ("Mi compromiso", "Mi perfil", "Como escritora") |
| Navegación | Misma serif, itálica | Itálica, el ítem activo se subraya en negro | — |
| Cuerpo de texto | Sans-serif humanista redondeada (tipo Nunito / Poppins) | Regular | Usado en checklists, bios, captions |
| Nombre de marca (header) | Sans-serif bold, versalitas, letter-spacing amplio | Bold caps | "CORRECCIÓN, REDACCIÓN Y ESTILO" |
| Nombre en testimonio | Script/cursiva decorativa | — | Solo aparece una vez (nombre de cliente sobre foto), no es tipografía de sistema — probablemente un asset de imagen, no fuente web |

### Patrón de la marca
La combinación serif itálica (para lo emocional/personal: subtítulos, citas, nombre de la marca) + sans-serif redondeada (para lo funcional: listas, cuerpo) es el lenguaje tipográfico real de Amparo — se conserva. La itálica constante es una firma visual reconocible, no un accidente de plantilla.
