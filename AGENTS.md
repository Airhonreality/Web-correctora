# Amparo Rozo Correcciones

**Fuente de verdad del arnés agéntico.**

## Qué construye este proyecto
Este proyecto alberga toda la línea de negocio y demanda de Amparo Rozo. Aquí vive toda la inteligencia del flujo de captación y ventas: analítica de ads semanal, investigaciones de mercado, retroalimentación web y, eventualmente, la construcción del propio sitio web.

## Definición de Skill
`SKILL = Metodología (conocimiento + implementación opcional)`

## Prohibido
- Implementar código o alterar la estructura del proyecto sin la autorización explícita ("IMPLEMENTAR") del humano.
- *(Se agregarán más prohibiciones a medida que el proceso de trabajo lo dicte).*

## Zonas y dueños
| Zona | Qué contiene | Dueño | Riesgo |
|---|---|---|---|
| `arnes/` | Arnés, ledger, planes, estado y registro de tareas | Supervisor | alto |
| `Linea de negocio y demanda/` | Investigaciones de mercado, ads, copys, modelo de negocio, etc. | Iniciador/Código | bajo |
| `[Por definir]` | Diseños UI, arquitectura técnica y código fuente del sitio web (se abrirá en una fase posterior). | Iniciador/Código | medio |

## Comandos de verificación
Actualmente en fase de investigación y destilación de negocio. No hay comandos de código estrictos. 

| Qué verifica | Comando / Criterio |
|---|---|
| Homeostasis | Revisión manual de `arnes/estado.md` para asegurar que el progreso, hallazgos y decisiones están documentados correctamente. |

**Checkpoints obligatorios**
- Antes de dar por cerrada una tarea de investigación o diseño.
- Antes de cualquier mutación de las reglas de este arnés.
- Antes de abrir la línea de arquitectura técnica (frameworks, librerías).

## Secretos y credenciales
Nunca en archivos que un agente pueda editar. Van en variables de entorno o un gestor de secretos externo.
