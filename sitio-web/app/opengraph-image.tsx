import { ImageResponse } from "next/og";
import { siteInfo } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbf0d8",
          color: "#2b2420",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#bd6d5e",
            marginBottom: 24,
          }}
        >
          {siteInfo.name}
        </div>
        <div
          style={{
            fontSize: 64,
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            lineHeight: 1.2,
          }}
        >
          Tu texto está en buenas manos.
        </div>
        <div style={{ fontSize: 28, color: "#6e6255", marginTop: 32 }}>
          Corrección de estilo literario — hecha a mano, palabra por palabra.
        </div>
      </div>
    ),
    { ...size }
  );
}
