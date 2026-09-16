import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { rootJsonLdGraph } from "@/lib/seo";
import { siteInfo, siteUrl } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const description =
  "Corrección de estilo para novelas, memorias, crónicas y libros de crecimiento personal. Hecha a mano, palabra por palabra, sin inteligencia artificial.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amparo Rozo — Corrección de estilo literario",
    template: "%s — Amparo Rozo",
  },
  description,
  alternates: { canonical: "/correccion-de-estilo" },
  openGraph: {
    title: "Amparo Rozo — Corrección de estilo literario",
    description,
    url: "/correccion-de-estilo",
    siteName: siteInfo.name,
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amparo Rozo — Corrección de estilo literario",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${playfair.variable} ${nunito.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream text-ink antialiased">
        <JsonLd data={rootJsonLdGraph()} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
