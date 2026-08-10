import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Old React Router paths from the Vite app -> new clean Next.js URLs.
    return [
      { source: "/CarRental", destination: "/car-rental", permanent: true },
      { source: "/Gallery", destination: "/gallery", permanent: true },
      { source: "/Contact", destination: "/contact", permanent: true },
      { source: "/tour/:slug", destination: "/tours/:slug", permanent: true },
    ];
  },
  images: {
    // External sources referenced by existing content (blog images/avatars,
    // reference car photos, background images). Prefer replacing these with
    // locally owned assets over time - see master prompt section 47.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "stimg.cardekho.com" },
      { protocol: "https", hostname: "www.bmw-kunexclusive-hyderabad.in" },
      { protocol: "https", hostname: "www.forcemotors.com" },
      { protocol: "https", hostname: "www.tourmyindia.com" },
      { protocol: "https", hostname: "s7ap1.scene7.com" },
    ],
  },
};

export default nextConfig;
