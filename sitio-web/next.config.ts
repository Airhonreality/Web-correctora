import type { NextConfig } from "next";

const r2PublicUrl = process.env.R2_PUBLIC_URL;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: r2PublicUrl
      ? [{ protocol: "https" as const, hostname: new URL(r2PublicUrl).hostname }]
      : [],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/correccion-de-estilo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
