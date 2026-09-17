# Estado del proyecto

Se lee al arrancar cualquier sesión, se actualiza al cerrar cada tarea o al reiniciar contexto.

## Resumen
Fase 1 (investigación, copy, diseño, stack) cerrada. Fase 2 (implementación) en marcha: el sitio vive en `sitio-web/` (Next.js + Tailwind + Neon + R2), con repo propio en GitHub (`Airhonreality/Amparo_Correcciones`) y contenido real ya cargado en producción de datos (Neon).

## Última sesión cerrada
**Fecha:** 2026-09-17 (tuteo + espacios móviles)
**Qué se hizo (implementado, verificado y desplegado):**
- **Tuteo:** el hero del home pasa a "**Tu** texto está en buenas manos" (y su imagen OpenGraph `app/opengraph-image.tsx`). Se auditaron las páginas públicas: el resto del copy ya usa "tú" (el "su" restante es tercera persona del libro/trabajo, no de usted).
- **Espacios en móvil:** se redujo el relleno vertical de las 4 secciones del home en móvil (de ~96px a ~56px por lado; `py-14` base + `sm/lg` iguales) y dos separaciones internas grandes (`mt-14`→`mt-10 sm:mt-14` en Mi compromiso; `mt-12`→`mt-8 sm:mt-12` en el carrusel). Pantallas grandes sin cambios.
- Verificado: `tsc` limpio, `next build` OK, deploy en vivo. Commits: `816210c` (espacios) y `ae2d850` (tuteo).
- ⚠️ **Pendiente de revisión del humano:** el working tree tiene **cambios sin commitear que no son de esta sesión** (borran `app/page.tsx` y `app/opcion-*`, y modifican varias páginas, `next.config.ts`, `lib/seo.ts`, etc.). No fueron tocados ni commiteados por mí; producción no los incluye. Hay que decidir si se conservan (commit) o se desechan.
- **Archivos afectados:** `sitio-web/components/correccion-de-estilo-content.tsx`, `sitio-web/app/opengraph-image.tsx`, `arnes/estado.md`.

## Sesión cerrada antes
**Fecha:** 2026-09-17 (home: se retira la mini grilla de opiniones)
**Qué se hizo (implementado, verificado y desplegado):**
- **Mini grilla de opiniones eliminada** de la sección "Opiniones de mis clientes": el carrusel editorial ya muestra todas las opiniones y la grilla recargaba la página. Se eliminó también el helper `excerpt` (quedó sin uso). La sección queda: título + carrusel sobre fondo `olive-soft`.
- Verificado: `tsc` limpio, `eslint` sin errores nuevos (6 pre-existentes en `opcion-*`), `next build` OK, deploy en vivo. Commit `9fb7cdc`.
- **Archivos afectados:** `sitio-web/components/correccion-de-estilo-content.tsx`, `arnes/estado.md`.

## Sesión cerrada antes
**Fecha:** 2026-09-17 (home simplificado según feedback de Amparo, 8:46-9:03 a.m.)
**Qué se hizo (implementado, verificado y desplegado):**
- **Un solo título** en la sección de opiniones: **"Opiniones de mis clientes"** (se eliminó el eyebrow "Opiniones reales de mis autores" y el título "Lo que dicen los autores"; la palabra "autores" confundía).
- **Fondo verde clarito** (`bg-olive-soft`, token ya existente #e3e6d5) en lugar del terracota ("ese café es tétrico"). Se recoloreó toda la sección (carrusel editorial sin `onDark`, mini grilla en tarjetas blancas, iniciales teal, textos en tinta). Un día a día: mismo componente `TestimonialCarousel`.
- **Home recortado:** "De ahí para abajo ... irían en otras pestañas". Se retiraron del home la sección de **carátulas de libros** (portafolio → vive en `/portafolio`) y el bloque de **inversión/FAQ/CTA y letra pequeña** (maquetación y confidencialidad quedaron fuera del home). El botón "Ver inversión" del hero ahora enlaza a `/cuanto-cuesta-corregir-un-libro` (antes anclaba a `#inversion`, que ya no existe).
- **Dato 57% eliminado** del artículo IA (innecesario e inconveniente, según Amparo); el artículo "¿Por qué un corrector humano y no una IA?" se mantiene tal cual, justo después de las opiniones.
- Orden final del home: **Hero → Mi compromiso → Opiniones de mis clientes → Artículo IA**.
- Verificado: `tsc --noEmit` limpio, `eslint` sin errores nuevos (6 pre-existentes en `opcion-*`), `next build` OK. Deploy en vivo verificado (`www.correcionestilo.com`). Commit código `dc220c7`.
- Limpieza: se eliminaron imports/helpers sin uso (`FeaturedBookCarousel`, `getAuthorizedPortfolioItems`, `normalizeTitle`, `whatsappHref`).
- **Archivos afectados:** `sitio-web/components/correccion-de-estilo-content.tsx`, `arnes/estado.md`.

## Sesión cerrada antes
**Fecha:** 2026-09-17 (reorden del home según requerimientos de Amparo)
**Qué se hizo (implementado, verificado y desplegado):**
- **Pie de foto:** las credenciales ("Comunicadora social-periodista / Universidad Externado de Colombia / Correctora profesional de estilo y autora de dos novelas publicadas por editoriales.") pasaron de párrafo del hero a captión/\"pie de foto\" del cameo de Amparo (chip `max-w-[240px]` bajo la foto). Se quitó el pill anterior "Amparo Rozo".
- **Borrado:** la lista de géneros al pie del hero ("Libros especializados · Crecimiento personal / Novelas · Cuentos · Memorias · Crónicas") y el kicker "Servicio integral de corrección de estilo" (solo visible; la frase persiste únicamente en la meta description de SEO). Se quitó también el check "Acuerdo de confidencialidad" del hero.
- **Reorden de prioridades:** Maquetación y confidencialidad ya NO son bloques destacados → bajaron al **final de la página en letra pequeña** (banda muted debajo del CTA, con link al diseñador gráfico y nota del NDA). El banner navy de maquetación y la card rosa "Confidencialidad garantizada" se retiraron.
- **Opiniones arriba:** sección **terracota "Lo que dicen los autores" justo después de "Mi compromiso"**, con **carrusel editorial con TODAS las 12 opiniones + mini grilla** (6 compactas). El QuoteStrip estático ("Otros autores corregidos") se eliminó. Debajo va el **artículo de la IA** (columna única).
- **Textos corregidos:** "Pulido integral del lenguaje: desde la claridad estructural de cada oración hasta el detalle tipográfico." y ítem "Trama: coherencia en los hechos. Situaciones inverosímiles."
- Verificado: `tsc --noEmit` limpio, `eslint` sin errores nuevos (6 pre-existentes en `opcion-*`), `next build` OK. Deploy en vivo verificado (`www.correcionestilo.com`). Commit código `0ed2a13`.
- **Nota:** el token de Vercel había caducado; el CLI lo renovó solo al correr `vercel whoami`.
- **Archivos afectados:** `sitio-web/components/correccion-de-estilo-content.tsx`, `arnes/estado.md`.

## Sesión cerrada antes
**Fecha:** 2026-09-16 (listas "Mi compromiso" más vistosas)
**Qué se hizo (pedido directo del humano, implementado, verificado y desplegado):**
- **"Mi compromiso" con más peso visual:** las dos listas (ortotipografía/gramática y edición de novelas) dejaron de sentirse como texto plano. Los ítems ahora son filas con un **badge circular grande de color** (check sólido teal card 1 / terracota card 2, ~40px, con sombra difuminada del mismo color) y el texto en dos niveles: **lead en Nunito negrita** + detalle en tinta suave (arrays `compromiso`/`novelas` pasaron a `{lead, rest}`). Mayor separación entre ítems (`gap-4`) y tipografía un punto más grande.
- Verificado: `tsc --noEmit` limpio, `eslint` sin errores nuevos (6 pre-existentes en `opcion-*`), `next build` OK, deploy en vivo (`www.correcionestilo.com`). Commit `21b4318`.
- **Archivos afectados:** `sitio-web/components/correccion-de-estilo-content.tsx`, `arnes/estado.md` (este registro).

## Sesión cerrada antes

**Fecha:** 2026-09-16 (ajuste de tipografía y tamaño del video)
**Qué se hizo (pedido directo del humano, implementado, verificado y desplegado):**
- **Títulos en cursiva → Nunito negrita:** todos los títulos (h1/h2/h3) que usaban `font-display italic` (Playfair itálica) pasaron a Nunito (la fuente del cuerpo) en `font-bold tracking-tight`, sin itálica. Aplicado en home (`Mi compromiso`, `¿Por qué un corrector humano y no una IA?`, `Confidencialidad garantizada`, `¿Tu libro necesita también maquetación?`, `Inversión`, `¿Por qué no hay un cotizador automático?`), portafolio (título de libro, `Lo que dicen los autores`, `¿Quieres que tu libro sea el próximo?`), perfil (`Mi perfil`, `Trayectoria editorial`, `En los medios`, `Mis Novelas`, CTA final), `/cuanto-cuesta` (H1 + 3 h2), `/escritora` (`Como escritora`, `Sinopsis`), blog (H1, post destacado, títulos de cards) y `featured-book-carousel` (título de libro del slider). Se conservaron las cursivas que NO son títulos: citas/testimonios (blockquote Playfair italic), numerales decorativos ("01"/"02", comillas gigantes) y el contador de portafolio.
- **Video de Cablenoticias a ancho completo:** el sub-hero de "Entrevista en Cablenoticias" en `/perfil` dejó de ser card de 2 columnas (`lg:grid-cols-2`) con el video en una columna (48% del ancho + padding + ring) → ahora es una tarjeta apilada con el video **full-width** (`overflow-hidden` + `aspect-video w-full`, sin padding que lo encajone) y el texto debajo con `p-8 md:p-12`. El frame del video ahora abarca todo el ancho del contenedor. El sub-hero de Revista Cultural DC mantiene su layout de 2 columnas; su h3 se alineó a Nunito bold.
- Verificado: `tsc --noEmit` limpio, `eslint` sin errores nuevos (6 pre-existentes en `opcion-*`), `next build` OK. Commit `45f1396`, push a `main`, deploy Vercel `web-correctora` y verificado en vivo: HTML produce las clases nuevas (`text-* font-bold tracking-tight`, `aspect-video w-full`) tanto en `/` como `/perfil` y `/portafolio`.
- **Archivos afectados:** `sitio-web/components/correccion-de-estilo-content.tsx`, `sitio-web/components/featured-book-carousel.tsx`, `sitio-web/app/perfil/page.tsx`, `sitio-web/app/portafolio/page.tsx`, `sitio-web/app/cuanto-cuesta-corregir-un-libro/page.tsx`, `sitio-web/app/escritora/page.tsx`, `sitio-web/app/blog/page.tsx`, `sitio-web/app/blog/[slug]/page.tsx`, `arnes/estado.md` (este registro).

## Sesión cerrada antes

**Fecha:** 2026-09-16
**Qué se hizo (copy de home/perfil/portafolio/footer + rediseño "En los medios" + blog actualizado en Neon, comando "IMPLEMENTAR" + push + deploy):**
- **Home (`/` y `/correccion-de-estilo`, componente compartido `correccion-de-estilo-content.tsx`):** hero — "Su texto está en buenas manos" sin itálica ni punto; nueva línea de credenciales "Comunicadora social-periodista / Universidad Externado de Colombia / Correctora profesional de estilo y autora de dos novelas publicadas por editoriales."; párrafo "Corrección de estilo —sin inteligencia artificial— de novelas, memorias, crónicas, libros de crecimiento personal, etc."; párrafo en otra tipografía "La corrección de estilo dota a tu manuscrito de claridad, precisión, expresividad y tono adecuado, para que la lectura sea fluida, armónica y entretenida." Cierre "¿Tienes un manuscrito listo…?" sin itálica. Inversión: "Ejemplo: novela de 70.000 palabras" + nueva FAQ "¿Por qué no hay un cotizador automático?" con el copy pedido (también alineado en `/cuanto-cuesta-corregir-un-libro`). Franja "Otros autores corregidos" ahora con la cita fija propuesta (Patricia Sánchez, la de incoherencias/inverosimilitud/sin explicación) hardcodeada en UI — testimonio de Luis Jerónimo **no** se tocó en la DB (decisión del humano: reemplazo de UI).
- **Portafolio:** H1 "Libros corregidos" eliminado (quedan eyebrow, divider y subtítulo "Una muestra de manuscritos que he corregido…"); `<title>` SEO → "Corrección de estilo literario — manuscritos corregidos" (decisión delegada por el humano a mí, basada en búsqueda web: los buscadores usan "corrección de estilo", no "libros corregidos"); carrusel "Lo que dicen los autores" reemplazado por la misma cita única fija (atribuida a Patricia Sánchez).
- **Perfil:** párrafo de bio sustituido por "En mi recorrido profesional he trabajado como editora y correctora de textos literarios, Memorias, libros especializados y de crecimiento personal, entre otros."; "Trayectoria editorial" movida ANTES de "En los medios"; lista de trayectoria intacta (incluye Fundación Universitaria Cafam). **Rediseño "En los medios" (decisión del humano: relabel GPS → Cablenoticias + sub-heros editoriales):** el bloque dejó de ser 2 cards compactas → dos sub-heroes editoriales full-width (tarjeta blanca amplia, eyebrow, título grande, media + texto), el primero es "Entrevista en Cablenoticias" (eyebrow "Canal UNO · Espacio GPS", usa el mismo video R2 de Canal UNO — el asset al que se refería el humano; para Cablenoticias no existe asset propio todavía) y el segundo "Revista Cultural DC" con la estampilla de imágenes. En escritorio el media alterna lados (video izquierda / revista derecha); en móvil el texto va primero.
- **Footer/Contacto:** mensaje del botón de WhatsApp → "Hola, Amparo, me gustaría conocer tus servicios de corrección de estilo."
- **Blog "Cómo mejorar el estilo de mi novela" (Neon):** se creó `scripts/update-blog-style-novela.ts` (update por slug, conserva el registro, no re-crea) y se ejecutó contra Neon con la `DATABASE_URL` que pasó el humano (usada solo en el comando, no guardada): "Revisa la continuidad" → "Revisa la coherencia", "sin explicación?" → "sin ninguna explicación?", y cierre → "Envía dos páginas de tu manuscrito y te respondo con una primera lectura personalizada." **(3 reemplazos aplicados a producción).** `scripts/seed.ts` también quedó alineado (body + cierre).
- Verificado: `tsc --noEmit` limpio, `eslint` 0 errores nuevos (6 pre-existentes en `opcion-*`), `next build` OK (`/`, `/portafolio`, `/perfil`, `/correccion-de-estilo` dinámicas ƒ). Commit `aa59396`, push a `main`, deploy Vercel `web-correctora` → `https://www.correcionestilo.com` y verificación en vivo del copy nuevo (home, portafolio, perfil) y del post del blog actualizado.
- **Archivos afectados:** `arnes/estado.md` (este registro), `sitio-web/components/correccion-de-estilo-content.tsx`, `sitio-web/components/footer.tsx`, `sitio-web/app/portafolio/page.tsx`, `sitio-web/app/perfil/page.tsx`, `sitio-web/app/cuanto-cuesta-corregir-un-libro/page.tsx`, `sitio-web/scripts/seed.ts`, `sitio-web/scripts/update-blog-style-novela.ts` (nuevo).

**Qué quedó pendiente:**
- ⚠️ **Cambiar el Final URL de la campaña de Google Ads.** Hoy `/` y `/correccion-de-estilo` sirven exactamente el mismo contenido (canonical de `/` apunta a `/correccion-de-estilo`): el final URL puede ser cualquiera de las dos sin salto. Pendiente de decisión del humano cuál usar en la campaña.
- Ver en vivo: el hero nuevo (2 párrafos + línea de credenciales) en la landing, la cita fija de Patricia en home y portafolio, los sub-heros editoriales en `/perfil` y el post del blog actualizado.
- El `<title>` SEO de `/portafolio` lo decidí por delegación (investigación web ligera); revisar si conviene priorizar otro keyword. Si Amparo provee asset/foto de la entrevista Cablenoticias (distinto del video de Canal UNO), integrarlo al sub-hero.

## Sesiones cerradas anteriores

### Sesión 2026-09-16 (eliminar el "puente" del redirect + 4 ajustes al home)
**Qué se hizo (comando "IMPLEMENTAR" del humano + push + deploy):**
- **Dos rutas apuntando a la misma página, sin redirect:** se eliminó el `redirects()` de `next.config.ts` y se recreó `app/page.tsx`. Ahora `/` y `/correccion-de-estilo` renderizan el mismo componente compartido (`components/correccion-de-estilo-content.tsx`) — adiós al puente visual de "home caída + 2s de redirect". Verificado en producción: `/` responde **200** (antes 308). El contenido vivió como componente único para que ambas rutas nunca se desincronicen.
- **Se eliminó la sección 1 de opinión** (la franja de testimonio destacado justo bajo el hero, la de Fernando Gómez Casas): redundaba con la franja "Otros autores corregidos" que ya estaba más abajo. Queda una sola pausa de lectura de testimonios.
- **Foto 2 del slide del hero cambiada:** nueva foto de `Assets/frima de libros en feria escritora colombiana.jpeg` (copiada a `sitio-web/public/firma-feria-escritora-colombiana.jpg`) reemplaza a `event-2.jpg` en `components/events-carousel.tsx`.
- **Color del texto final del hero** (lista de géneros "Libros especializados · Crecimiento personal / Novelas · Cuentos · Memorias · Crónicas") pasó de `text-cream` al token rojo `text-teja`.
- **Sección "Libros que he corregido" reemplazada:** se eliminó `components/portfolio-slider.tsx` (componente huérfano) y su sección en el home. En su lugar se importó el módulo slide/hero de `/portafolio` (`FeaturedBookCarousel`) con el mismo mapeo de datos (testimonio por título normalizado, excerpt de 2 oraciones).
- Verificado: `tsc --noEmit` limpio, `eslint` 0 errores nuevos (6 pre-existentes en `opcion-*`), `next build` OK con `/` como ruta dinámica real (ƒ). Desplegado con Vercel CLI (`web-correctora`): `/` 200, `/correccion-de-estilo` 200, foto nueva servida.
- **Archivos afectados:** `arnes/estado.md` (este registro), `sitio-web/next.config.ts` (redirect eliminado), `sitio-web/app/page.tsx` (recreado), `sitio-web/app/correccion-de-estilo/page.tsx` (ahora usan el componente compartido), `sitio-web/components/correccion-de-estilo-content.tsx` (nuevo), `sitio-web/components/events-carousel.tsx` (foto 2), `sitio-web/components/portfolio-slider.tsx` (eliminado), `Assets/frima de libros en feria escritora colombiana.jpeg` + `sitio-web/public/firma-feria-escritora-colombiana.jpg` (nuevos).

### Sesión 2026-09-16 (reestructuración de la arquitectura del sitio)
**Qué se hizo (el home deja de existir como página — luego revertido en la sesión siguiente, ver arriba):**
- **Secciones del home migradas a `/perfil` (merge):** "Amparo Rozo" (cita + bio), "Como escritora" (intro de la sección "Mis Novelas" + link a `/escritora`) y "¿Tienes un manuscrito listo para publicar?" (CTA final de WhatsApp). El resto del home (hero + carrusel de testimonios) quedó deprecado y fue eliminado (`app/page.tsx` borrado).
- **Navegación:** se eliminó el ítem "Inicio" (`→/`) de `navLinks` y de `primaryMobileLinks` (móvil) — no había sentido tener un redirect en el menú. Queda: Servicios, Portafolio, Perfil, Escritora, Blog (+ Contactar).
- **SEO:** `/correccion-de-estilo` subió a priority 1 en `sitemap.ts` (se conserva `/` para no romper enlaces históricos, pero ahora responde 308); canonical default del layout apunta a `/correccion-de-estilo`.
- Verificado: `tsc --noEmit` limpio, `next build` OK. Desplegado y confirmado con Vercel CLI: `/` responde **308 → /correccion-de-estilo** en producción (`www.correcionestilo.com`), `/perfil` 200, `/correccion-de-estilo` 200.
- **Archivos afectados:** `arnes/estado.md` (este registro), `sitio-web/next.config.ts` (redirect), `sitio-web/app/page.tsx` (borrado), `sitio-web/app/perfil/page.tsx` (merge de secciones), `sitio-web/lib/site.ts` + `sitio-web/components/nav.tsx` (nav sin "Inicio"), `sitio-web/app/sitemap.ts`, `sitio-web/app/layout.tsx`.

**Qué quedó pendiente:**
- ⚠️ **Cambiar el Final URL de la campaña de Google Ads a `https://www.correcionestilo.com/correccion-de-estilo/`** (sigue siendo la acción pendiente; hoy `/` redirige, pero la landing directa evita el salto).
- Ver en vivo (preview o producción) el redirect de `/` y el merge en `/perfil` con las 3 secciones integradas (+ los 7 libros del portafolio autorizados y el testimonio destacado en la landing).

## Sesiones cerradas anteriores

### Sesión 2026-09-11
**Qué se hizo (implementación de conversión pura en `/correccion-de-estilo/`, comando "IMPLEMENTAR" del humano):**
- **Por qué:** la campaña de Google Ads puja por keywords transaccionales (`corrección de estilo`, `corrector de estilo`, etc.) con Final URL en el **home** (`Copy web add.md:25`). El arnés de negocio mapea esas keywords al **pilar transaccional** `/correccion-de-estilo/` (`Input 1 modelo de negocio amparo rozo.md:178,260`) — para no perder el magnetismo del home apuntó a esa página, se le integró el magnetismo adentro.
- **Hero con magnetismo del home transplanteado:** título indexado "Corrección de estilo literario" (H1 transaccional, ya no `sr-only`) + promesa emocional "Su texto está en buenas manos." + composición visual de arco (EventsCarousel) y cameo circular de Amparo con su pill — misma composición que el home (`app/page.tsx:65-85`). CTAs arriba: WhatsApp + ancla a Inversión.
- **Prueba social inmediata:** testimonio destacado real (Fernando Gómez Casas, vía `featured_on_home`) justo bajo el hero — el tráfico pagado no tiene contexto previo, la confianza va temprano.
- **Slider horizontal de portafolio (sección de conversión pura):** componente cliente `components/portfolio-slider.tsx` con slot cards (portada 2:3 autorizada, tag de género, título, autor, resumen en 1 línea). Track centrado (`mx-auto w-max`: con pocos ítems el grupo queda centrado en el lienzo, no pegado a la izquierda).
- **Refinamiento HCI/UX-editorial (crítica del Supervisor, misma sesión):** se descartó la primera versión como marquee infinito automático (fallos clásicos de carrusel: 0 affordance, tarjetas duplicadas en el mismo golpe de vista = sensación de falla técnica, CTA repetido en cada tarjeta → "ceguera de CTA", tipografía itálica agolpada, desequilibrio del lienzo). Versión final con: **peek pattern** (3-4 tarjetas completas + la siguiente asoma ~25-30%), **controles tipográficos ← → en la esquina superior derecha alineados con el título**, fondo degradado en los bordes que se activa según scroll (`canPrev`/`canNext`), flechas deshabilitadas en los extremos, snap-x, scroll suave, `prefers-reduced-motion` (scroll instantáneo), y enlace "Ver todos los libros corregidos →" movido al header junto a las flechas.
- **La tarjeta NO va a WhatsApp (2ª crítica del Supervisor):** ahora abre un modal de detalle (`PortfolioModal`) que amplía la portada y muestra los datos completos del proyecto del portafolio (género, título, autor, resumen de corrección completo y testimonio vinculado al libro si existe — mapeo por título normalizado, mismo patrón que `/portafolio`). El CTA de conversión único queda **dentro del modal** ("Quiero una corrección así"), no repetido en cada tarjeta. Modal accesible: `role=dialog`, cierre con Escape, click en backdrop, botón cerrar, scroll body bloqueado mientras está abierto.
- **Solución tipográfica:** la tarjeta dejó de llevar botón repetido — solo apertura de detalle con hover (zoom suave 1.02 en la portada + cursor pointer). Tipografía inferior limpia: tag de género en sans versalita neutro (sin teal brillante), título serif no-itálica más grande, autor, y resumen de 1 sola línea sin viñetas.
- **Decisión de conversión tomada:** el CTA de cada card es WhatsApp directo (no navega a `/portafolio`) — la página no espera a que el visitante explore; la oferta se cierra ahí mismo.
- Verificado: `tsc --noEmit` limpio, `eslint` 0 errores en archivos tocados (1 warning de `<img>` igual al patrón ya existente del home; los errores de lint que quedan son pre-existentes en `opcion-*` y home), `next build` 30/30 rutas, `/correccion-de-estilo` en `ƒ` (dynamic, consulta DB).
- **Archivos tocados:** `app/correccion-de-estilo/page.tsx` (reescrito), `components/portfolio-slider.tsx` (nuevo; sustituye a `portfolio-marquee.tsx`, que quedó eliminado), `app/globals.css` (utilidades `hide-scrollbar` + `prefers-reduced-motion` para el slider).

**Qué quedó pendiente (acción del Supervisor/humano):**
- ⚠️ **Cambiar el Final URL de la campaña de Google Ads de `https://www.correcionestilo.com/` a `https://www.correcionestilo.com/correccion-de-estilo/`** (hoy el anuncio aterriza en el home mientras puja por keywords transaccionales). Con esta implementación, la página de destino ya tiene hero de magnetismo + prueba social + portafolio + precio + WhatsApp: está lista para ser la landing de Ads.
- Ver en vivo (local o preview) el marquee con los 7 libros autorizados sembrados (los que Amparo haya autorizado desde el panel).
- Commit del cambio según el flujo habitual (el humano commitea).

**Refinamiento de layout: "Color Blocking" editorial (misma sesión, 3ª crítica del Supervisor — auditoría de layout: síndrome de "franjas repetitivas", cajitas flotantes sobre beige continuo):**
- **Ritmo de fondos por sección (nuevo flujo de color):** Hero **azul pastel full-bleed** → franja de testimonio **terracota full-width** → Mi compromiso en **crema** con cards **blanco puro + rosa suave** y banner **navy** → grilla asimétrica IA/Confidencialidad en **blanco+teal / rosa** (crema de fondo) → 2ª franja testimonio **terracota** → portafolio sobre **lino/arena** (`bg-sand`) → cierre **crema** con botones terracota. Se acabó el "efecto isla": cada bloque de color ocupa bandas completas como portada editorial.
- **Hero des-isleño:** el azul ya no es una cajita flotante — todo el hero es full-bleed `bg-blue-pastel` con columna izquierda 60% (eyebrow con rule, H1, "Su texto está en buenas manos.", copy, CTA WhatsApp terracota + ancla "Ver inversión" outline, fila de confianza con checkmarks) y derecha 40% (arco blanco `border-8` + cameo de Amparo con pill). Decoración: glow blanco difuminado en esquina.
- **Mi compromiso → grilla 2x2 editorial:** dos cards grandes (01 blanco puro, 02 rosa suave) con numeral fantasma, chip de alcance, título corto impactante ("Corrección ortotipográfica y gramatical" / "Edición de estilo para novelas y narrativa") y lista con checkmarks (tipografía más firme, sin itálicas delgadas). Footer en **navy**: banner "¿Tu libro necesita también maquetación?" con CTA WhatsApp "Pregunta por diagramación".
- **Humanos vs IA + Confidencialidad → grilla asimétrica 60/40:** izquierda blanco con borde teal (argumento de la tilde diacrítica + callout navy con el dato **57% CEDRO** en gold), derecha **rosa** (confidencialidad con icono ShieldCheck + punchline "Acuerdo firmado antes de leer una sola palabra de tu manuscrito").
- **Dos pausas de lectura terracota:** el testimonio destacado ya no es cajita → franja full-width con comillas grandes, serif itálica y cita en crema; una segunda franja ("Otros autores corregidos") con un testimonio largo no-featured divide el alcance del portafolio.
- **Portafolio sobre lino:** slider ahora vive en `bg-sand`, cards `bg-cream` y fades laterales `from-sand` (contenido neutro para que ganen las portadas).
- **Cierre en crema consolidado:** se fusionaron las dos bandas crema anteriores en una sola sección con tarjetas de precio ($23 por palabra en blanco / ejemplo 70.000 palabras ≈ $1.610.000 en navy con gold) + link a detalle de precios + CTA terracota + CTA final outline.
- **WhatsAppButton:** nueva variante `terracotta` (`bg-terracotta text-cream`); la variante `primary` coral del home queda intacta.
- Verificado: `tsc --noEmit` limpio, `eslint` 0 errores (1 warning de `<img>` del cameo, patrón existente), `next build` 30/30 rutas.

## Sesiones cerradas anteriores

**Fecha:** 2026-08-17
**Qué se hizo:**
- Cierre del Brief v2, reconciliación del sitemap con el sitio legacy, copy final aprobado (todo en `Linea de negocio y demanda/`).
- Paleta/tipografía destiladas y CONFIRMADAS (`Diseño UI/Guia de estilo visual - destilado.md`).
- Stack técnico aprobado (ver sección abajo) y, tras el comando explícito **"IMPLEMENTAR"** del humano, se construyó el sitio completo en `sitio-web/`: Next.js (App Router) + Tailwind v4, iron-session para auth (contraseña con scrypt), Drizzle + Neon Postgres, Cloudflare R2 para imágenes.
- Panel de administración con 3 pantallas (Blog, Portafolio, Testimonios — este último con vínculo opcional a un ítem de portafolio) y selector de portada que acepta arrastrar/pegar (Ctrl+V)/seleccionar archivo.
- Usuario de acceso al panel: **Amparo**, contraseña `amparorozo21` (hash en `.env.local`, nunca en el repo).
- Credenciales reales cargadas en `sitio-web/.env.local` (Neon, R2, sesión) a partir de `Linea de negocio y demanda/Guia de accesos`. R2 verificado de punta a punta (subida, lectura pública, borrado de un objeto de prueba).
- Contenido real sembrado en Neon: los 8 posts del blog legacy + el post de IA corregido (sin la palabra "calidad", con el dato del 57%) + 3 posts nuevos ToFu; las 7 fichas de portafolio (sembradas pero **no autorizadas/visibles** hasta que Amparo confirme permiso de cada autor desde el panel); el testimonio de Fernando Gómez Casas (visible en Inicio).
- Repo conectado a `https://github.com/Airhonreality/Amparo_Correcciones` y pusheado (2+ commits en `main`).
**Incidente y corrección (arrastrado de la sesión anterior):** se publicó sin autorización un Artifact en claude.ai; corregido con la regla de "nada sale del repo sin autorización" (ver decisiones vigentes). El artifact publicado en claude.ai sigue existiendo (privado) porque no hay herramienta para borrarlo — pendiente de que el humano lo borre manualmente si quiere.
**Nota para la próxima sesión:** el código en `sitio-web/` puede tener cambios adicionales hechos directamente por el humano o su editor (ej. campo de orden de preferencia en blog, editor de Markdown, ajustes de paleta) que no pasaron por esta sesión — leer el código actual antes de asumir que coincide exactamente con lo aquí descrito.

**Auditoría SEO técnico + implementación P0/P1 (misma fecha, sesión posterior):** tras pedido de auditoría SEO general, se escribió `Linea de negocio y demanda/Investigaciones de mercado/Auditoria SEO tecnico y arquitectura semantica 2026-2027.md` (diagnóstico + hoja de ruta priorizada). Con el comando **"IMPLEMENTAR"** del humano se construyó la capa técnica que faltaba:
- `metadataBase`, canonical y Open Graph/Twitter por página (`lib/seo.ts` → `pageMetadata()`), aplicado a las 8 páginas públicas.
- `app/robots.ts` (bloquea `/admin`) y `app/sitemap.ts` (dinámico, incluye posts del blog desde Neon).
- `app/manifest.ts`, `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx` — generados con `next/og` (monograma "AR" + paleta de marca), reemplazan el favicon por defecto de `create-next-app` (borrado).
- JSON-LD: `Person` (Amparo) sitewide en `layout.tsx`; `Service` con `Offer` ($23 COP/palabra) en `/correccion-de-estilo`; `Book` x2 en `/escritora`; `BlogPosting` con `dateModified` real por artículo; `Review` por cada testimonio en Inicio (sin `AggregateRating` inventado). Todo vía `components/json-ld.tsx` (escapa `<` para evitar que texto libre rompa el `<script>`).
- `public/llms.txt` — resumen del sitio para agentes/LLMs.
- `app/admin/layout.tsx` — `robots: noindex` para todo `/admin/*`.
- `NEXT_PUBLIC_SITE_URL` añadida a `.env.example` y `.env.local` (fallback a `localhost` en dev, a `VERCEL_URL` en preview) — **no se inventó un dominio real**, pendiente de que exista producción.
- Verificado con `tsc --noEmit`, `npm run lint` y `npm run build` (build completo, JSON-LD confirmado en el HTML estático de salida).
**Hallazgo de seguridad reportado, no corregido (decisión pendiente del humano):** `Linea de negocio y demanda/Guia de accesos` tiene credenciales de Neon y R2 en texto plano (no está en git, pero es legible por cualquier agente). Recomendado moverlas a un gestor de secretos o rotarlas.

**Qué quedó pendiente:**
- Que Amparo entre al panel y cargue portada + autorice cada uno de los 7 libros del portafolio (hoy ocultos a propósito).
- Decidir si se despliega a Vercel ahora o se sigue probando en local primero.
- Dominio de producción confirmado por el humano: `correcionestilo.com` (una sola "c" tras "corre" — así, no "correccionestilo"). `.env.example` ya actualizado como referencia. Falta: conectar el dominio en Vercel (Project Settings → Domains + DNS en el registrador), fijar versión canónica (`www` vs. apex), y poner `NEXT_PUBLIC_SITE_URL=https://www.correcionestilo.com` en Vercel → Environment Variables (Production) + redesplegar. Hoy el sitio en Vercel sigue generando canonical/sitemap sobre su URL temporal `*.vercel.app`.
- Verificar propiedad en Google Search Console y Bing Webmaster Tools, y enviar el sitemap una vez el dominio esté conectado.
- Crear/reclamar perfiles externos para `sameAs` (Google Business Profile, LinkedIn, Amazon Author Central, Goodreads) — hoy `siteInfo.sameAs` está vacío en `lib/site.ts`.
- Decisión sobre `Linea de negocio y demanda/Guia de accesos` (mover credenciales fuera de texto plano / rotar R2).

## Stack técnico — DEFINITIVO (aprobado 2026-08-17)
- **Next.js** (App Router) + **Tailwind CSS** — todo el frontend, tokens de color/tipografía tomados de `Diseño UI/Guia de estilo visual - destilado.md`.
- **GitHub + Vercel** — control de versiones y hosting/deploy. Nota vigente: el plan Hobby de Vercel restringe uso "no comercial" en sus términos; este es un sitio comercial — riesgo asumido conscientemente por el humano, se puede migrar a plan Pro ($20 USD/mes) si Vercel lo exige.
- **Neon Postgres** — base de datos para contenido estructurado (blog, fichas de portafolio, testimonios).
- **Cloudflare R2** — almacenamiento de imágenes (portadas de libros, fotos), sin costo de egress.
- **Panel de administración construido a mano** (no CMS de terceros) — rutas de Next.js protegidas por contraseña (usuario único: Amparo), formularios con Server Actions escribiendo directo a Neon vía ORM, subida de imágenes a R2 desde los mismos formularios.
- **Decisión explícita del humano: cero apps/CMS de terceros.** Solo infraestructura consumida por API/SDK (Vercel, Neon, R2), nunca una aplicación con UI propia de la que el proyecto dependa.

## Próxima acción permitida
Diseño y stack cerrados. Falta el comando explícito "IMPLEMENTAR" del humano para iniciar el scaffolding del proyecto (repo Next.js, esquema de Neon, conexión a R2, panel de admin).

## Decisiones vigentes
- No se escribirá código hasta recibir el comando explícito del humano ("IMPLEMENTAR"). Copys/estrategia (Brief v2), diseño web (paleta/tipografía) y stack técnico ya están cerrados — solo falta la autorización para empezar a construir.
- Cualquier implementación requiere el comando explícito del humano ("IMPLEMENTAR").
- **Nada sale del repo local sin autorización explícita previa** — prohibido publicar en Artifacts, servicios externos, o cualquier hosting fuera de la máquina del humano, sin pedirlo primero. (Regla fijada 2026-08-17 tras incidente de publicación no autorizada.)
