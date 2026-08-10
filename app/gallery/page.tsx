import { Metadata } from "next";
import { seoData } from "@/data/seo";
import { buildMetadata } from "@/lib/metadata";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = buildMetadata(seoData["gallery"], "/gallery");

export default function GalleryPage() {
  return <Gallery />;
}
