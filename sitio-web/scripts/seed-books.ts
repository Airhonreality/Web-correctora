import "dotenv/config";
import { db } from "../lib/db";
import { authorBooks } from "../lib/db/schema";

const book1 = {
  title: "Marcianos hijos de p...",
  subtitle: "La sátira mística que la crítica editorial no pudo ignorar.",
  editorialNote: "En un mercado editorial donde la coedición es la norma, el comité del Grupo Editorial Ibáñez destacó la fuerza narrativa y la originalidad temática de la obra de Amparo Rozo, apostando por su publicación, sumándola a su catálogo bajo un sello de excelencia.",
  description: `Esta es la historia de una familia tradicional de clase trabajadora, conformada por Ramiro, padre de familia; su esposa, una abnegada ama de casa, y sus tres hijos, cuya cotidianidad se ve alterada por el inesperado regreso del tío Marco, quien ingresó a una logia hermética, y ahora hace milagros: multiplica el pan, los envueltos, el chocolate y hasta los huevos; desata tormentas a su antojo, y cura heridas y quemaduras. Deslumbrados con sus poderes, Ramiro y Sebastián, el hijo menor, seguirán sus pasos; en tanto que el hijo mayor, escéptico por naturaleza, se mantendrá en franca rebeldía. La tensión escala cuando el maestro de la logia anuncia una fecha definitiva para el fin del mundo: el 21 de diciembre de 2012. Según el jerarca, el planeta será purificado y solo los "elegidos" sobrevivirán.

La historia se desarrolla en la ciudad de Bogotá y muestra la influencia del sincretismo cultural con los nuevos movimientos religiosos que surgieron desde los años sesenta hasta la actualidad y que han tenido gran influencia en las clases populares de las ciudades y pueblos de América Latina. El trasfondo social y político se evidencia a lo largo del relato. Una novela muy humana, con ligeros toques de realismo mágico y humor ácido.`,
  purchaseLink: "#",
  purchasePlatform: "En Editorial Ibáñez",
  preferenceOrder: 10,
  published: true,
};

const book2 = {
  title: "Leonidas",
  subtitle: "Una novela de ficción histórica, donde los espantos, los duendes y hasta el mismo diablo cobran vida en los campos colombianos, en medio de guerras y amores prohibídos.",
  editorialNote: "Primera edición: Juro por mis orejas. Editorial Oveja Negra.\nSegunda edición Amazon.",
  description: `En un remoto pueblo de frio y nublado enigma, una jovencita de buena familia da luz a un niño de largas orejas y pies deformes, pero de radiantes ojos azules. Atormentado por sus defectos, llevará a diario un sombrero de ala ancha y alpargatas que lo guardarán de las burlas de los pueblerinos y el desprecio de las jovencitas.

Su destino estará marcado por las reyertas políticas entre liberales y conservadores y por la sombra de su abuelo, que le enseñará desde pequeño a defenderse de sus enemigos. Con el transcurrir de los años pasará de los puños y la cauchera a crear un poderoso ejército civil con el que resistirá las embestidas a su pueblo natal.

La historia nos transporta a una tierra mágica, hogar de duendes, lloronas, almas en pena, deidades ancestrales, que conviven con el mismo diablo, quien no dudará en tomar partido en las disputas políticas y ponerse del lado de los liberales.

*Reconocimientos:*
Revista cultural DC. Sección Libros recomendados.`,
  purchaseLink: "#",
  purchasePlatform: "Amazon",
  preferenceOrder: 5,
  published: true,
};

async function main() {
  console.log("Seeding books...");
  await db.delete(authorBooks); // Limpiar primero
  await db.insert(authorBooks).values([book1, book2]);
  console.log("Books seeded successfully.");
  process.exit(0);
}

main().catch((err) => {
  console.error("Error seeding books:", err);
  process.exit(1);
});
