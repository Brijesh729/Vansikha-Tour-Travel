import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultSeo } from "@/data/seo";
import { buildMetadata, buildOrganizationSchema, buildWebsiteSchema } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

/**
 * NOTE: This build environment could not reach fonts.googleapis.com
 * (sandboxed, no external network), so next/font/google fails at build
 * time here. On a normal machine/CI with internet access, swap this
 * block back to:
 *
 *   import { Playfair_Display, Inter } from "next/font/google";
 *   const heading = Playfair_Display({ variable: "--font-heading", subsets: ["latin"], weight: ["500","600","700"] });
 *   const body = Inter({ variable: "--font-body", subsets: ["latin"], weight: ["400","500","600"] });
 *
 * and use `${heading.variable} ${body.variable}` on <html> below.
 * Until then, this uses system font stacks via CSS variables so the
 * build succeeds and the site still looks intentional.
 */
const fontVariableClass = "font-fallback";

export const metadata: Metadata = {
  ...buildMetadata(defaultSeo, "/"),
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = buildOrganizationSchema();
  const websiteSchema = buildWebsiteSchema();

  return (
    <html lang="en" className={`${fontVariableClass} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Google Analytics - GA4 ID migrated from original index.html gtag script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
