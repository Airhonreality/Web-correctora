import { db } from "../lib/db";
import { blogPosts, portfolioItems, testimonials } from "../lib/db/schema";

const posts: Array<{
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  published: boolean;
}> = [
  {
    slug: "ventajas-de-contratar-un-corrector-de-estilo-frente-a-una-ia",
    title: "Ventajas de contratar un corrector de estilo frente a una IA",
    excerpt:
      "En el mundo actual, donde la tecnología avanza a pasos agigantados, las herramientas de inteligencia artificial han ganado popularidad en tareas de redacción y corrección de textos. Sin embargo, hay aspectos clave que solo un corrector humano puede ofrecer.",
    body: `En el mundo actual, donde la tecnología avanza a pasos agigantados, las herramientas de inteligencia artificial (IA) han ganado popularidad en tareas de redacción y corrección de textos. Sin embargo, aunque estas herramientas puedan resultar útiles, hay aspectos clave que solo un corrector de estilo humano puede ofrecer:

Conexión humana y contexto

Un corrector de estilo aporta un elemento que ninguna IA puede replicar: la capacidad de comprender matices culturales, emocionales y contextuales. Un texto no solo comunica ideas, sino también emociones, valores y mensajes implícitos que pueden variar según el público al que se dirige. Por ejemplo, un corrector profesional sabrá ajustar el tono de un mensaje corporativo para que sea formal pero accesible, o convertir un texto literario en una obra más evocadora y enriquecida.

Personalización del estilo

Cada autor tiene una voz única, y un buen corrector de estilo tiene la habilidad de preservar esa esencia mientras mejora la claridad y la coherencia del texto. Las IA, aunque avanzadas, suelen operar sobre la base de reglas genéricas o patrones preestablecidos, lo que puede resultar en textos que pierden personalidad. Como correctora profesional, me aseguro de que el texto refleje no solo las intenciones del autor, sino también las expectativas del público objetivo.

Resolución de ambigüedades

Un aspecto fundamental de la corrección es interpretar y resolver ambigüedades. Las IA pueden tener dificultades para entender significados implícitos o frases cuyo sentido depende del contexto. Por ejemplo, ¿«cerró con broche de oro» se refiere a un logro excepcional o a un objeto físico? Un corrector humano puede discernir estas sutilezas y ajustar el texto para evitar confusiones.

Atención a los detalles

Los correctores profesionales no solo buscamos errores gramaticales o de puntuación, sino también incoherencias estilísticas, errores de formato y repeticiones innecesarias. Una IA podría pasar por alto elementos como un cambio inadvertido en el tiempo verbal o una construcción redundante. Mi experiencia me permite identificar y corregir estos detalles, garantizando que el texto sea impecable.

Colaboración y asesoramiento

Una de las mayores ventajas de contratar un corrector profesional es la posibilidad de trabajar en conjunto. Más allá de corregir, hago sugerencias, aclaro dudas y ayudo al autor a desarrollar su idea con mayor claridad. Esta interacción personalizada, que fomenta el aprendizaje y la mejora continua, está fuera del alcance de cualquier herramienta automatizada.

No es solo una opinión

El 57% de los autores en español rechaza categóricamente el uso de la inteligencia artificial para escribir o corregir su obra (CEDRO). La mayoría del mercado hispanohablante piensa igual: la corrección de un libro no se delega en un algoritmo.

Conclusión

Aunque las herramientas de IA pueden ser un complemento útil, contratar los servicios de un corrector de estilo humano garantiza un nivel de precisión y personalización que la tecnología aún no puede igualar. Un corrector profesional no solo mejora el texto, sino que también protege la voz del autor, conecta con el lector y asegura que cada palabra cumpla con su propósito. Si buscas llevar tus textos al siguiente nivel, la experiencia humana es insustituible.`,
    published: true,
  },
  {
    slug: "el-computador-no-se-las-sabe-todas",
    title: "El computador no se las sabe todas",
    excerpt:
      "Cuando nos sentamos a redactar nuestros textos ignoramos que el computador también se equivoca, pues en algunos casos no solo corrige equivocadamente aquellas palabras que escribimos correctamente, sino que las altera.",
    body: `Cuando nos sentamos a redactar nuestros textos ignoramos que el computador también se equivoca, pues en algunos casos no solo corrige equivocadamente aquellas palabras que escribimos correctamente, sino que las altera. No significa que este maravilloso invento no sea un excelente aliado siempre atento a enmendar nuestros errores, solo que esa ayuda no es suficiente, y no nos exime de conocer y aplicar las normas de acentuación.

Palabras que el computador no diferencia:

A lo largo de nuestros trabajos, seguramente nos habremos encontrado con familias de palabras con la tilde como única diferencia en la escritura y con distinta aplicación o significado en la frase. La RAE la denomina tilde diacrítica. Para entenderlo mejor, veamos unos ejemplos: cuánto/cuanto, aún/aun, qué/que, té/te, dónde/donde.

¿En qué se diferencian estas palabras?

Se diferencian en su significado y acentuación. Diferencias que el computador, a pesar de su avanzada tecnología, no puede establecer, por lo que reconoce como correctas las distintas escrituras. Y palabras como estas abundan en nuestro rico idioma.

Esta es una de las razones por las que el servicio de un corrector de estilo es imprescindible, pues no pasa por alto esta clase de detalles.

Miremos otros ejemplos de tilde diacrítica en el caso de algunas palabras que el computador marca como correctas independientemente del contexto.

Pronombres: tú/tu, él/el, mí/mi, sí/si.

Verbos: dé/de, sé/se.

Adverbios: sí/si, más/mas.

Pronombres y adverbios interrogativos o exclamativos: cómo/como, cuándo/cuando, cuanto/cuanta, quienes/cuales, donde/adonde.

A estos corresponden los mismos no tildados con oficio distinto dentro de un texto: qué, quién, cuál, cuán, cómo, cuándo, cuánto, cuánta, quiénes, cuáles, dónde, adónde.

Casos en que el computador corrige de manera equivocada

En estos casos, cabe aclarar que no solo se equivoca el computador, sino quienes escribimos. Por ejemplo, cuando hacemos mal uso de una frase que comienza con un que antecedido del signo de interrogación: ¿Que me vaya para la casa? El computador le marcará la tilde, ¿qué me vaya para la casa?, y el texto quedará incorrecto.

Sin darnos cuenta, hacemos mal uso de ciertas expresiones que no encajan en el texto, pero el computador las asume como correctas. Uno de los errores más comunes es el manejo indebido que hacemos de las siguientes palabras:

Porque: es una conjunción causal, que equivale a decir pues, debido a, en razón de (No voy porque está lloviendo). Pero cuidado: también puede ir en frases interrogativas (¿Vino porque no tenía alternativa?).

Por qué: es una expresión interrogativa. Ejemplo: ¿Por qué no me has llamado? Pero ojo, también puede ir en frase enunciativa: Ya sé por qué no quiso venir.

Porqué: es sustantivo, sinónimo de causa, razón o motivo: "Desconozco el porqué de su extraño comportamiento".

Por que: el computador la marca como incorrecta. Se trata de una conjunción que significa "para que". Por ejemplo: "Ruegue a Dios por que no llueva".`,
    published: true,
  },
  {
    slug: "dialogos-de-whatsapp-en-una-novela",
    title: "Diálogos de WhatsApp en una novela",
    excerpt:
      "Descubre cómo integrar diálogos de WhatsApp en novelas sin perder ritmo ni claridad, siguiendo un formato claro y coherente.",
    body: `La Real Academia Española aún no cuenta con una regla para mostrar en las novelas diálogos de WhatsApp; no obstante, cada intervención podría introducirse con el nombre de la persona, a manera de guion teatral: nombre del personaje en mayúscula y letra redonda, y discurso del personaje en letra cursiva.

ANDRÉS: Quiero verte.
MARÍA: Yo también quiero verte.
ANDRÉS: ¿Podría ser esta noche?
MARÍA: Tal vez.

Si la conversación se trae a colación entre personajes de la novela, lo recomendable es narrar lo conversado o señalarlo entre comillas para no alterar el ritmo del escrito. Ejemplo:

Me dijo por WhatsApp que hiciera lo que quisiera.

Me dijo por WhatsApp, «Haz lo que quieras».`,
    published: true,
  },
  {
    slug: "solo-con-tilde-o-no",
    title: '"Solo" ¿con tilde o no?',
    excerpt:
      "La RAE aclara el uso de la tilde en 'solo' y los demostrativos. Aunque puede tildarse en casos de ambigüedad, se sugiere evitarlo y resolver la ambigüedad de otra manera.",
    body: `De acuerdo con la última actualización de la RAE (2023), esta palabra puede llevar tilde cuando la persona que escribe considera que existe riesgo de ambigüedad. Cuando no resulta claro si la palabra "solo" se usa como adverbio o como adjetivo podemos añadirle una tilde al adverbio solo, aunque no es de obligado cumplimiento que la lleve. "Puede tildarse únicamente si hay riesgo de ambigüedad, pero se recomienda no tildarlo ni siquiera en esos casos y resolver la ambigüedad de otra manera". Asimismo, la RAE afirma que estas ambigüedades se despejan revisando el contexto comunicativo.

Por otro lado, en los casos en que el término figure como un adjetivo, no es necesario que se acentúe.

Solo: "No me gusta estar solo".
Sólo: "Sólo quiere trabajar".

Para evitar ambigüedades, además de revisar el contexto, "sólo" podría sustituirse por otro adverbio como "únicamente" o "exclusivamente". Ejemplo: Juan vino solo a comer / Juan vino únicamente a comer.

Novedades de la Real Academia Española (RAE):

Eliminación de los dígrafos ch y ll del abecedario. Estos signos dobles se siguen utilizando en la escritura de las palabras españolas, pero ya no se consideran letras del abecedario.

La norma de escribir sin acento el adjetivo solo y los determinantes demostrativos.

La posibilidad de escribir sin tilde el adverbio solo y los pronombres demostrativos este, ese, aquel, incluso en casos de posible ambigüedad.`,
    published: true,
  },
  {
    slug: "tildes-obsoletas",
    title: "Tildes obsoletas",
    excerpt:
      "Cuando abrimos libros viejos nos encontramos con pronombres como éste, ése, aquél tildados. Desde 1952 la RAE considera innecesaria esa tilde.",
    body: `Cuando abrimos esos libros viejos y amarillentos depositados en los anaqueles de alguna librería o biblioteca, nos encontramos con que los pronombres éste, ése, aquél, ésta, ésa, aquélla, aquéllos, éstos, ésos, éstas, llevan tilde. Y así las replicamos en nuestros escritos, ignorando que en 1952 la RAE consideró innecesario aplicarles la tilde para diferenciarlas de los adjetivos: este, ese, aquel, esta, esa, aquella, estos, esos, aquellos, estas, esas, aquellas. Hoy no se tildan, pues es prácticamente imposible que se presten a confusión, ya que el mismo contexto aclara la idea.

Veamos: "Esta sábana está sucia" / "En esta sabana pastan los animales".

He aquí otras damnificadas: Ruíz/Ruiz, fué/fue, dió/dio, vió/vio, fé/fe.

Tildes de pretéritos monosílabos que perdieron la tilde en 1999. Seguramente habremos tildado alguna de estas palabras después de esta fecha: fió/fio, lió/lio, guió/guio, rió/rio.

Otras palabras que perdieron la tilde en 1999: guión/guion, Sión/Sion.`,
    published: true,
  },
  {
    slug: "expresiones-latinas-que-no-pasan-de-moda",
    title: "Expresiones latinas que no pasan de moda",
    excerpt:
      "A veces escuchamos, e incluso utilizamos, expresiones latinas que siguen vigentes y que le dan a un texto un toque de elegancia y exactitud etimológica.",
    body: `A veces escuchamos, e incluso utilizamos, expresiones latinas que siguen vigentes y que al introducirlas ocasionalmente en un texto le proporcionamos un toque de elegancia y exactitud etimológica.

Ad hoc: expresamente para esto. Alma máter: la universidad, madre del espíritu. Alter ego: otro yo, una segunda personalidad. A posteriori: posteriormente. A priori: previamente. Cogito, ergo sum: pienso, luego existo. Currículum vitae: historial o méritos de uno. De facto: de hecho. Déficit: carencia o falta de. Ex profeso: intencionadamente, únicamente. Facsímile: copia idéntica. In fraganti: en el mismo momento. Lapsus linguae: error involuntario al hablar. Memorándum: informe, recopilación. Motu proprio: por propia voluntad. Non plus ultra: no más allá. Sine die: sin fecha fija. Statu quo: situación determinada. Ultimátum: última posibilidad. Vox populi: opinión popular o generalizada. Ergo: por tanto, luego. Exabrupto: arrebatada, bruscamente. Hábeas corpus: derecho a ser oído; mostrar al reo. Ibidem: allí mismo. Ipso facto: en el acto, por el mismo hecho. Mare magnum: confusión de asuntos. Modus vivendi: modo de vivir. Per se: por sí mismo. Sine qua non: condición sin la cual no. Sui géneris: muy especial. Superávit: residuo. Verbi gratia o verbi gracia: por ejemplo.`,
    published: true,
  },
  {
    slug: "bellas-palabras-del-espanol-en-via-de-extincion",
    title: "Bellas palabras del español en vía de extinción",
    excerpt:
      "La flexibilidad del idioma y el paso de los años hacen que algunas palabras que antaño adornaron con su belleza la lengua castellana vayan quedando relegadas. No las dejemos morir.",
    body: `No las dejemos morir...

La flexibilidad del idioma, el paso de los años y el devenir de las nuevas generaciones (más desparpajadas), conllevan a que algunas palabras que antaño adornaron con su belleza y musicalidad la lengua castellana, vayan quedando relegadas. Veamos algunas:

Agasajar: tratar a una persona con afecto, atención y amabilidad; halagarla con regalos u otras muestras de consideración.

Cascarrias: persona que se enfada con facilidad o por poco motivo.

Mansarda: cubierta donde las vertientes se quiebran y acentúan la pendiente en la parte inferior, donde generalmente se abren ventanas a la manera de buhardillas; espacio amplio entre el techo y el tejado.

Bizarro: que es valiente y, por lo general, apuesto.

Holganza: descanso y tranquilidad de que disfruta la persona que tiene poco o nada que hacer.

Prístino: que se mantiene inalterado, puro, tal como era en su forma original.

Sino: situación o estado a que una persona o una cosa llega o ha de llegar inevitablemente guiada por el destino. "Nadie puede saber a ciencia cierta cuál es su sino".

Picaflor: hombre enamoradizo y galanteador; también, pájaro conocido como colibrí.

Nefando: que resulta abominable por ir contra la moral y la ética.

Gentileza: amabilidad y cortesía de la persona gentil; garbo, gracia o gallardía con que una persona realiza una cosa.

Escabel: taburete pequeño para apoyar los pies cuando se está sentado.

Embeber: hacer que un cuerpo absorba un líquido; recoger parte de una cosa en ella misma; instruirse bien en una materia o informarse bien de algo.

Zaguán: sala o pieza de una casa, inmediata a la puerta principal de entrada.

Resolana: luz y calor producidos por la reverberación del sol en un lugar que está a la sombra.

Atalaya: torre construida en un lugar alto para vigilar gran extensión de terreno o de mar y poder avisar con tiempo de un peligro o amenaza; punto de vista desde el cual se pueden enjuiciar con objetividad hechos e ideas.`,
    published: true,
  },
  {
    slug: "armonia-y-musica-del-lenguaje",
    title: "Armonía y música del lenguaje",
    excerpt:
      "Un tema que divide hoy a los hablantes hispanos es el uso del lenguaje sexista. La claridad, precisión y economía del lenguaje contribuyen a que el lector entienda las intenciones del autor.",
    body: `Un tema que divide hoy a los hablantes hispanos es el uso del lenguaje sexista. Están los que consideran que el idioma castellano tal y como es, es universal e incluyente. Un ejemplo de ello es el vocablo "presidente", ya que todas las palabras terminadas en "ente", como "consecuente", hacen referencia al ENTE, el cual es universal, por tanto, no admite ENTA, como "presidenta" o "consecuenta" en referencia al sexo femenino. Por tanto, se considera que el lenguaje artificialmente inducido va en contra de la economía y la musicalidad, y que se ha tomado como una forma personal de expresar posturas ideológicas.

Queda, pues, en manos del lector, decidir libremente cómo escribir y expresarse oralmente.

No obstante, la claridad, precisión y economía del lenguaje contribuyen a que el lector preste más atención al escrito y entienda las intenciones del autor.`,
    published: true,
  },
  {
    slug: "que-hace-un-corrector-de-estilo",
    title: "¿Qué hace un corrector de estilo?",
    excerpt:
      "Muchos autores confunden la corrección de estilo con una simple revisión ortográfica, pero el trabajo va mucho más allá.",
    body: `Cuando terminas de escribir tu manuscrito, es normal preguntarte qué sigue. Muchos autores confunden la corrección de estilo con una simple revisión ortográfica, pero el trabajo va mucho más allá.

Un corrector de estilo trabaja sobre tres frentes a la vez. Primero, la superficie del texto: ortografía, puntuación, gramática y ortotipografía (comillas, guiones, rayas, itálicas). Segundo, la construcción de las frases: sintaxis clara, sin ambigüedades, sin repeticiones ni redundancias que cansen al lector. Y tercero — el que ninguna herramienta automática puede hacer — el criterio literario: coherencia de la trama, continuidad lógica de la historia, verosimilitud de los hechos, construcción de personajes y uso correcto de los tiempos verbales.

No se trata de imponer un estilo ajeno al tuyo. Un buen corrector preserva tu voz como autor y la hace brillar con más claridad, no la reemplaza.

Si tu manuscrito está listo y quieres saber qué necesita, escríbeme por WhatsApp y lo revisamos juntos.`,
    published: true,
  },
  {
    slug: "diferencia-entre-correccion-de-estilo-y-ortotipografia",
    title: "Diferencia entre corrección de estilo y ortotipografía",
    excerpt:
      "Es una de las preguntas que más me hacen los autores nuevos, y vale la pena aclararla antes de contratar cualquier servicio.",
    body: `Es una de las preguntas que más me hacen los autores nuevos, y vale la pena aclararla antes de contratar cualquier servicio.

La corrección ortotipográfica revisa la superficie del texto: ortografía, acentuación, puntuación, uso correcto de comillas, guiones, rayas, mayúsculas y cursivas. Es la capa más básica — necesaria, pero no suficiente para un libro que se va a publicar.

La corrección de estilo va más allá: revisa cómo están construidas las frases (sintaxis), elimina repeticiones y redundancias, resuelve ambigüedades, corrige el uso del vocabulario y, en el caso de una novela, evalúa la coherencia de la trama, la construcción de los personajes y la continuidad lógica de la historia.

En pocas palabras: la corrección ortotipográfica revisa que el texto esté bien escrito. La corrección de estilo revisa que el texto esté bien contado.

Si tu manuscrito ya pasó por un corrector ortográfico automático (como el de Word) y quieres saber si necesita algo más, escríbeme por WhatsApp.`,
    published: true,
  },
  {
    slug: "como-mejorar-el-estilo-de-mi-novela",
    title: "Cómo mejorar el estilo de mi novela",
    excerpt:
      "Antes de enviar tu manuscrito a corrección, hay algunas cosas que puedes revisar tú mismo para fortalecer el estilo de tu novela.",
    body: `Antes de enviar tu manuscrito a corrección, hay algunas cosas que puedes revisar tú mismo para fortalecer el estilo de tu novela.

Lee en voz alta. Las frases que suenan torpes al oído casi siempre lo son también en el papel. Si te quedas sin aire a mitad de una oración, probablemente es momento de dividirla.

Elimina las muletillas. Palabras y expresiones que se repiten sin darte cuenta ("de repente", "entonces", "en ese momento") le restan fuerza al texto cuando aparecen demasiado seguido.

Revisa la continuidad. ¿El personaje tenía los ojos verdes en el capítulo 3 y cafés en el capítulo 20? ¿La escena ocurre de día y dos párrafos después ya es de noche sin explicación? Estas inconsistencias son de las más difíciles de detectar por el propio autor, precisamente porque conoces la historia de memoria.

Cuida los tiempos verbales. Cambiar de pasado a presente sin intención rompe la inmersión del lector.

No le tengas miedo a cortar. Si una escena no mueve la trama ni desarrolla a un personaje, probablemente sobra.

Después de tu propia revisión, un corrector de estilo puede ver lo que a ti, como autor, te resulta invisible por estar demasiado cerca del texto. Escríbeme por WhatsApp cuando tu manuscrito esté listo.`,
    published: true,
  },
];

const portfolio: Array<{
  bookTitle: string;
  authorName: string;
  genre: string;
  correctionSummary: string;
  authorized: boolean;
}> = [
  {
    bookTitle: "Sombras y luciérnagas",
    authorName: "Jeniffer Camus",
    genre: "Novela romántica",
    correctionSummary: "Corrección ortotipográfica, hechos inverosímiles, puntuación.",
    authorized: false,
  },
  {
    bookTitle: "La travesía de mi alma",
    authorName: "Jorge Olmus Restrepo",
    genre: "Crecimiento personal",
    correctionSummary:
      "Corrección de redundancias, ambigüedades, ortografía, erratas, cacofonías, puntuación, léxico, ortotipografía.",
    authorized: false,
  },
  {
    bookTitle: "Yo soy Juan Domínguez, el escritor",
    authorName: "Tatiana Agudelo Camacho",
    genre: "Novela romántica erótica",
    correctionSummary:
      "Corrección gramatical, puntuación, errores léxicos, ortografía, erratas y ortotipografía.",
    authorized: false,
  },
  {
    bookTitle: "De regreso a la vida",
    authorName: "Patricia Sánchez",
    genre: "Novela contemporánea y de ficción",
    correctionSummary: "Corrección integral de estilo, ortografía, semántica, puntuación y erratas.",
    authorized: false,
  },
  {
    bookTitle: "Auditor en honor a la verdad",
    authorName: "Álvaro Zerda Ordóñez",
    genre: "Libro especializado",
    correctionSummary: "Errores de puntuación, ortográficos, repeticiones, sintaxis, erratas, léxico.",
    authorized: false,
  },
  {
    bookTitle: "Una letra y dos telones",
    authorName: "Gustavo Manrique García",
    genre: "Memorias",
    correctionSummary:
      "Corrección gramatical, puntuación, errores léxicos, ortografía, erratas y ortotipografía.",
    authorized: false,
  },
  {
    bookTitle: "El guardián del sextante",
    authorName: "Victor Hugo García",
    genre: "Fábula en forma de novela corta",
    correctionSummary: "Corrección ortográfica, semántica, puntuación, cacofonías, ambigüedades.",
    authorized: false,
  },
];

async function seed() {
  console.log("Insertando posts del blog...");
  for (const post of posts) {
    await db.insert(blogPosts).values(post).onConflictDoNothing();
  }

  console.log("Insertando fichas de portafolio (sin autorizar por defecto)...");
  for (const item of portfolio) {
    await db.insert(portfolioItems).values(item);
  }

  console.log("Limpiando testimonios antiguos para evitar duplicados...");
  await db.delete(testimonials);

  console.log("Insertando todos los testimonios...");
  const testimoniosData = [
    {
      clientName: "Fernando Gómez Casas",
      bookTitle: "Este también soy yo",
      quote: "No pude tener mejor apoyo que el tuyo. Eres quien me puso el universo y por eso no solo me aportaste en contenido, sino que además me motivaste. Muchas gracias desde mi corazón.",
      featuredOnHome: true,
    },
    {
      clientName: "Jeir Alejandro Poveda",
      bookTitle: "La casa quemada",
      quote: "Te agradezco por tu ayuda, tienes el don de hacer ver sencillo lo complejo de la escritura, realmente siento cómo mejoró el escrito. Gracias por tanto. Gracias por tu esfuerzo y cariño expresado en tu trabajo.",
      featuredOnHome: false,
    },
    {
      clientName: "Jeniffer Camus",
      bookTitle: "Sombras y luciérnagas",
      quote: "Hola, Amparo, me encantó la corrección. ¡Eres la elegida! Muchas gracias, aprendí mucho, me encantó el informe de lectura crítica. Tus comentarios me parecieron muy valiosos, me llevaron a reescribir unas cositas, añadir o modificar información si algo no estaba claro o era inverosímil. Me gustó tu compromiso con el trabajo, la puntualidad y la comunicación. Fue interesante haber tenido un diálogo contigo, en vez de solo recibir el manuscrito con correcciones. ¡Espero volver a contar con tu colaboración para mi próxima obra!",
      featuredOnHome: false,
    },
    {
      clientName: "Mauricio Ibáñez",
      bookTitle: "El paraíso todavía es posible",
      quote: "Amparo, muchas gracias, pero sobre todo muchas felicitaciones. No se te escapó absolutamente el más mínimo detalle. Indudablemente artista de corazón.",
      featuredOnHome: false,
    },
    {
      clientName: "David Figueroa",
      bookTitle: "Tierra de camaleones y otros relatos",
      quote: "Muchas gracias, Amparo por tan excelente trabajo. El tomar estos escritos, y darles sentido solo puede hacerlo alguien con tus capacidades. De nuevo muchas gracias.",
      featuredOnHome: false,
    },
    {
      clientName: "Verónica María Sánchez González",
      bookTitle: "Navegando entre recuerdos",
      quote: "Muchas gracias, Amparo. Quedé supremamente feliz y a gusto con el trabajo. La verdad, fue mucho más de lo que esperaba.",
      featuredOnHome: false,
    },
    {
      clientName: "Victor Hugo García",
      bookTitle: "El guardián del sextante",
      quote: "Mi querida correctora, ¡muchas graciassss! Mi libro quedó al pelo. Se lo pasé a un par de amigos y lo leyeron de corrido, lo que significa que al final quedó muy bien escrito… gracias a su ayuda. Ahora sí me siento más seguro de publicarlo.",
      featuredOnHome: false,
    },
    {
      clientName: "Álvaro Zerda",
      bookTitle: "Auditor, en honor a la verdad",
      quote: "Soberbio el trabajo que has hecho. Estoy gratamente sorprendido. Qué buen nivel de detalle. Con tus correcciones y sugerencias estoy resolviendo todas las dudas que tenía y aprendiendo más de paso 🙏 ¡Uuufff! Excelente.",
      featuredOnHome: false,
    },
    {
      clientName: "Patricia Sánchez",
      bookTitle: "De regreso a la vida",
      quote: "Sorprendida con el trabajo de corrección. No me esperaba encontrarme con tantos problemas de incoherencia de situaciones y personajes. Gracias. Un gran abrazo.",
      featuredOnHome: false,
    },
    {
      clientName: "Luis Jerónimo Pulido",
      bookTitle: "Tesis maestría",
      quote: "Muchas gracias, Amparo. Estoy muy admirado de tu trabajo y agradecido por haberte encontrado causal-mente.",
      featuredOnHome: false,
    },
    {
      clientName: "Próspero Cardozo",
      bookTitle: "Huellas del silencio",
      quote: "Amparo, excelentes tus aportes y sugerencias, bellas tus palabras en cuanto a lo positivo del relato, ahora lo veo mejor con el toque personal que le has impartido. ¡Muchas gracias por esa gran colaboración!",
      featuredOnHome: false,
    },
  ];

  for (const t of testimoniosData) {
    await db.insert(testimonials).values(t);
  }

  console.log("Listo.");
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
