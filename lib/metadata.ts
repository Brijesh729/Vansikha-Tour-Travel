import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SeoPageData } from "@/types";

/**
 * Builds a Next.js Metadata object from a page's SEO data.
 * Replaces the old react-helmet-based <SEO /> component.
 */
export function buildMetadata(page: SeoPageData, path: string): Metadata {
  const canonical = `${siteConfig.siteUrl}${path}`;
  const ogImage = `${siteConfig.siteUrl}/tour-preview.jpg`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    authors: [{ name: siteConfig.businessName }],
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      siteName: siteConfig.businessName,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
    other: {
      "geo.region": "IN-RJ",
      "geo.placename": "Jaipur Rajasthan",
      "geo.position": "26.9124;75.7873",
      ICBM: "26.9124, 75.7873",
    },
  };
}

/**
 * Organization/TravelAgency JSON-LD, migrated from the original SEO.jsx
 * schemaData. Uses siteConfig so placeholder fields are visible/traceable
 * in one place (config/site.ts) instead of being hardcoded here.
 */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.png`,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.postalCode,
      addressCountry: "India",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
