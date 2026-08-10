import { Metadata } from "next";
import { seoData } from "@/data/seo";
import { buildMetadata } from "@/lib/metadata";
import Contact from "@/components/Contact";

export const metadata: Metadata = buildMetadata(seoData["contact"], "/contact");

export default function ContactPage() {
  return <Contact />;
}
