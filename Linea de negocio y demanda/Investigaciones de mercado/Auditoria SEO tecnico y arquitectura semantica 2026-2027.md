# Auditoría SEO técnico y arquitectura semántica — sitio Amparo Rozo (2026-2027)

**Fecha:** 2026-08-17
**Alcance:** `sitio-web/` (Next.js 16 App Router) tal como está en el commit actual (`e0d4b4f`).
**Fuentes usadas:** código real del sitio, `Input 1 modelo de negocio amparo rozo.md`, `Investigación Estratégica de SEO y Keyword Research...md`, y el documento adjunto por el humano (`INS_Mejores Prácticas de JSON-LD y SEO Técnico para 2026-2027.md`).
**No incluye cambios de código.** Este documento es una auditoría + hoja de ruta priorizada. Ejecutar cualquier ítem de aquí requiere el comando explícito **"IMPLEMENTAR"** por regla de `AGENTS.md`.

---

## 0. Hallazgo de seguridad (fuera del alcance SEO, pero bloqueante)

`Linea de negocio y demanda/Guia de accesos` contiene en texto plano: connection string de Neon con contraseña, token y secret key de Cloudflare R2. Viola la propia regla de `AGENTS.md` ("Secretos y credenciales: nunca en archivos que un agente pueda editar"). No está en git (el repo `sitio-web` tiene su propio `.gitignore` y esta carpeta vive fuera de ese repo), pero cualquier agente con acceso de lectura a la carpeta del proyecto puede leerlo. Recomendación: mover las credenciales a un gestor de secretos o al menos fuera de un archivo de texto plano dentro del repo de trabajo, y rotar el secret key de R2 si este archivo se ha compartido alguna vez. Decisión tuya, no toco el archivo.

---

## 1. Diagnóstico: qué existe hoy vs. qué falta

El sitio ya tiene lo difícil resuelto: arquitectura de contenido correcta (coincide casi 1:1 con el hub & spoke que recomienda la investigación de keywords — pilar `/correccion-de-estilo`, hub de precios `/cuanto-cuesta-corregir-un-libro`, cluster ToFu en `/blog`), `next/font` y `next/image` ya en uso (bien para Core Web Vitals), metadata por página vía `export const metadata` (bien, aunque incompleta). Lo que falta es casi toda la capa de señales técnicas y semánticas que un motor o un LLM necesita para citar o indexar el sitio con confianza.

| Elemento | Estado | Impacto |
|---|---|---|
| `metadataBase` / dominio canónico | ❌ No existe | Sin esto, Next.js no puede resolver URLs absolutas para OG/canonical — **bloqueante para todo lo demás** |
| `<link rel="canonical">` por página | ❌ | Riesgo de contenido duplicado si el sitio es accesible por `www` y sin `www`, o por preview URLs de Vercel |
| Open Graph / Twitter Cards | ❌ | Cero preview al compartir en WhatsApp (canal principal de conversión aquí), redes o buscadores |
| `robots.txt` | ❌ | Sin control explícito de rastreo; admin (`/admin`) queda potencialmente indexable |
| `sitemap.xml` | ❌ | Descubrimiento más lento de páginas nuevas (blog, portafolio) |
| `manifest.json` / iconos PWA | ❌ | Solo hay `favicon.ico` por defecto de `create-next-app` |
| JSON-LD (cualquier tipo) | ❌ | Cero — ni `Person`, ni `ProfessionalService`, ni `Book`, ni `BlogPosting`, ni `Review` |
| `sameAs` / perfiles externos | ❌ No hay redes sociales, Google Business Profile, Amazon Author Central ni Goodreads referenciados en ningún lado del proyecto | Sin `sameAs` no hay forma de que Google/LLMs resuelvan la entidad "Amparo Rozo" contra un Knowledge Graph — **hueco crítico para una profesional independiente** |
| `llms.txt` | ❌ | Estándar emergente 2025-2026 para orientar agentes/LLMs sobre el contenido del sitio; no existe |
| Alt text en imágenes | 🟡 Parcial | El portafolio ya genera alt dinámico (`Portada de ${bookTitle}`) — bien. Faltará auditar cuando se suban fotos de autora, portadas de las 2 novelas, etc. |
| `dateModified` / `datePublished` | ❌ | El schema de `blogPosts` tiene `createdAt`/`updatedAt` en la base de datos pero no se expone en metadata ni en JSON-LD — señal de "freshness" perdida |
| Protección de `/admin` contra indexación | ❌ | Nada impide que Google indexe `/admin/login` |
| FAQPage / HowTo | ✅ No se usan | Correcto — Google deprecó estos rich results en 2026, el sitio ya no incurre en ese error por accidente |
| Precio como texto plano vs. `Offer` estructurado | 🟡 | El precio ($23 COP/palabra) está en el copy pero no en un schema `Offer`/`PriceSpecification` |
| Testimonios sin `Review`/`AggregateRating` | 🟡 | Hay tabla `testimonials` en la base de datos, pero no se emite como dato estructurado |
| Idioma declarado | ✅ | `<html lang="es">` correcto en `layout.tsx` |
| Core Web Vitals (base) | ✅ Probable, no medido | Next.js 16 + fonts optimizados + `next/image` da buena base; falta medir en producción una vez desplegado |

---

## 2. Cómo aplican al negocio los principios del documento adjunto

El documento que adjuntaste usa el mercado inmobiliario de Bogotá como laboratorio, pero los principios trasladan directo a este negocio (servicio profesional independiente, sin local físico visitable, trabajo 100% remoto):

- **No hay `LocalBusiness` de tienda física real** — el sitio dice "Trabajo virtual" en el footer, y la dirección en `siteInfo.address` es un apartamento residencial. Esto cambia la estrategia: en vez de `LocalBusiness` + `GeoCircle`/`areaServed` (pensado para negocios con clientes que se desplazan), el esquema correcto es **`Person` (Amparo Rozo) + `ProfessionalService`/`Service`**, con `areaServed` amplio en texto ("Colombia" / "Hispanoamérica", ya que el servicio es remoto y el copy no restringe geografía). Usar `LocalBusiness` con esa dirección residencial sería además un riesgo de privacidad — **no recomendado exponerla en JSON-LD** aunque ya esté en el footer visible.
- **`Organization` vs. `Person` como entidad raíz:** este es un negocio unipersonal de marca personal (correctora + escritora), no una empresa. La entidad raíz del grafo semántico debe ser `Person` (Amparo Rozo), no `Organization`. `Person` debe llevar `jobTitle`, `alumniOf` (Universidad Externado de Colombia), `knowsAbout` (corrección de estilo, edición literaria), y el `sameAs` hacia sus perfiles reales.
- **`sameAs` es el hueco más grande.** Ahora mismo no hay ningún perfil externo verificable enlazado desde el sitio. Sin `sameAs`, ni Google ni un LLM tienen cómo confirmar que "Amparo Rozo, correctora" y "Amparo Rozo, autora de *Marcianos hijos de p...*" son la misma entidad. Mínimo recomendado antes de lanzar:
  - Perfil de Google Business (aunque sea "Service area business" sin dirección pública) — refuerza fuerte la entidad en Search.
  - LinkedIn profesional.
  - Amazon Author Central (ya tiene 2 libros vendiéndose ahí — es gratis y de alto impacto para `sameAs` + aparece en Knowledge Panel de libros).
  - Página del libro en el sitio de Editorial Ibáñez / Oveja Negra si existen URLs propias.
  - Goodreads (si hay perfil de autor).
- **`Book` schema en `/escritora`:** cada novela (*Marcianos hijos de p...*, *Juro por mis orejas*) debe tener su propio `Book` JSON-LD con `author` (referenciando el mismo `Person`), `isbn` si se consigue, `publisher`, `datePublished`. Esto es alto valor porque conecta el sitio con el Knowledge Graph de libros de Google, algo que la competencia (Sinjania, Mariana Eguaras, Relatos Magar — mencionados en tu propia investigación de keywords) probablemente no tiene.
- **`Review`/`AggregateRating` sobre testimonios:** hay que ser estrictos aquí — el documento adjunto marca esto como "Media-Alta, dependiente de la autenticidad de las reseñas". Los testimonios actuales (tabla `testimonials`) son citas de clientes sin un mecanismo de verificación externa (no vienen de Google/Trustpilot). Marcarlos como `Review` schema propio es aceptable si son reales y verificables, pero **no se debe inventar un `AggregateRating` sin un sistema real de puntuación** — sería manipulación y penalizable.
- **Respuestas atómicas en vez de FAQPage:** ya lo están haciendo bien sin saberlo — por ejemplo el bloque "¿Por qué no hay un cotizador automático?" en `/cuanto-cuesta-corregir-un-libro` es exactamente el formato de párrafo declarativo de 40-60 palabras que recomienda el documento. Vale la pena revisar el resto del copy con ese lente al redactar contenido nuevo del blog.
- **`llms.txt`:** dado que el objetivo explícito es optimizar para "indexación en LLMs", este archivo (convención en `/llms.txt`, texto plano en Markdown con un resumen de quién es Amparo Rozo, qué servicio ofrece, links a páginas clave) es de implementación barata y directamente relevante al pedido.
- **`dateModified` en blog:** ya existe el campo en la base de datos (`updatedAt`), solo falta exponerlo en metadata/JSON-LD. Barato y de alto valor para las señales de "freshness" que buscan los agentes de información según el documento.
- **UCP/Universal Cart:** no aplica — no hay checkout ni `Product` transaccional, el negocio cierra por WhatsApp. Se puede ignorar esta sección del documento adjunto sin pérdida.

---

## 3. Hoja de ruta priorizada

### P0 — Fundacional (bloquea todo lo demás, bajo esfuerzo)
1. Definir dominio de producción → `metadataBase` en `layout.tsx`.
2. `robots.txt` (bloquear `/admin`) + `sitemap.xml` dinámico (Next.js `app/sitemap.ts`, incluye blog y portafolio desde la DB).
3. Canonical URL por página.
4. Open Graph + Twitter Card por página (imagen genérica de marca como mínimo; ideal una por página de servicio).
5. `manifest.json` + set completo de favicons/iconos.
6. JSON-LD base: `Person` (Amparo Rozo) + `Service`/`ProfessionalService` en el layout raíz o en `/correccion-de-estilo`.

### P1 — Estructural (valor semántico alto, esfuerzo medio)
7. `Book` JSON-LD para las 2 novelas en `/escritora`.
8. `BlogPosting` JSON-LD por artículo + exponer `dateModified`/`datePublished` reales desde la DB.
9. `Review` JSON-LD para testimonios reales (sin `AggregateRating` inventado).
10. `llms.txt` en la raíz del sitio.
11. Noindex explícito en rutas `/admin/*`.
12. Auditoría de alt text una vez existan fotos reales (autora, portadas de libros).

### P2 — Crecimiento (depende de acciones fuera del código)
13. Crear/reclamar perfiles externos para `sameAs`: Google Business Profile (service-area business), LinkedIn, Amazon Author Central, Goodreads.
14. Poblar el cluster de blog ToFu según la tabla de keywords ya investigada (`diferencia entre corrección de estilo y ortotipográfica`, `qué hace un corrector de estilo`, etc. — ya están priorizadas en tu propio documento de keyword research).
15. Medir Core Web Vitals reales en producción (Vercel Analytics o PageSpeed Insights) una vez desplegado.
16. Evaluar si hay contenido/URLs del sitio legacy (`Contenido de sitio web legacy/`) que merezcan redirect 301 si el dominio se reutiliza, para no perder autoridad heredada.

---

## 4. Decisiones que necesito de ti antes de poder ejecutar P0

- **Dominio de producción** (necesario para `metadataBase`, canonical, sitemap, OG). ¿Ya está comprado o sigue pendiente?
- **Imagen de marca** para Open Graph (foto de Amparo o una imagen de marca — aunque sea provisional).
- **¿Confirmas que la dirección en `siteInfo.address` NO debe exponerse en JSON-LD** (dado que es residencial y el negocio es remoto), o prefieres tratarla como dato público intencional?
- **Perfiles externos reales para `sameAs`** (P2): ¿cuáles ya existen (LinkedIn, Amazon Author Central, redes) y cuáles hay que crear?

Cuando tengas esas respuestas y quieras que empiece a construir, el comando es **"IMPLEMENTAR"** (por regla de `AGENTS.md`), y podemos ir fase por fase empezando por P0.
