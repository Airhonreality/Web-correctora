# Estado del proyecto

Se lee al arrancar cualquier sesión, se actualiza al cerrar cada tarea o al reiniciar contexto.

## Resumen
Fase 1 (investigación, copy, diseño, stack) cerrada. Fase 2 (implementación) en marcha: el sitio vive en `sitio-web/` (Next.js + Tailwind + Neon + R2), con repo propio en GitHub (`Airhonreality/Amparo_Correcciones`) y contenido real ya cargado en producción de datos (Neon).

## Última sesión cerrada
**Fecha:** 2026-09-11
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
