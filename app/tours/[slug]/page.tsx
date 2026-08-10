import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTourBySlug, tourPackages } from "@/data/tours";
import { seoData, defaultSeo } from "@/data/seo";
import { buildMetadata } from "@/lib/metadata";
import TourDetail from "@/components/TourDetail";

export function generateStaticParams() {
  return tourPackages.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = seoData[slug] || defaultSeo;
  return buildMetadata(page, `/tours/${slug}`);
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return <TourDetail tour={tour} />;
}
