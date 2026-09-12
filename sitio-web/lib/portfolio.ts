export function genrePillClass(genre: string) {
  const g = genre.toLowerCase();
  if (g.includes("románt") || g.includes("romant") || g.includes("amor")) {
    return "bg-rose-light/30 text-terracotta";
  }
  if (g.includes("memor")) {
    return "bg-olive-soft text-olive";
  }
  if (g.includes("especial") || g.includes("académ") || g.includes("técnic") || g.includes("ensayo")) {
    return "bg-blue-pastel/50 text-cobalt";
  }
  if (g.includes("crecimiento") || g.includes("personal")) {
    return "bg-olive-soft text-olive";
  }
  return "bg-blue-pastel/50 text-teal-dark";
}