import type { MetadataRoute } from "next";
import { siteInfo } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteInfo.name} — Corrección de estilo literario`,
    short_name: siteInfo.name,
    description:
      "Corrección de estilo para novelas, memorias, crónicas y libros de crecimiento personal.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf0d8",
    theme_color: "#bd6d5e",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
