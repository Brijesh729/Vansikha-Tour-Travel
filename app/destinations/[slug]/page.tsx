import { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { buildMetadata } from "@/lib/metadata";
import DestinationDetail from "@/components/DestinationDetail";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) {
    return buildMetadata(
      { title: "Destination Not Found", description: "This destination page could not be found.", keywords: "" },
      `/destinations/${slug}`
    );
  }

  return buildMetadata(
    {
      title: `${dest.name} Travel Guide | Attractions, Best Time & How to Reach`,
      description: dest.intro.slice(0, 155),
      keywords: `${dest.name.toLowerCase()} travel guide, ${dest.name.toLowerCase()} attractions, ${dest.name.toLowerCase()} tourism`,
    },
    `/destinations/${slug}`
  );
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) {
    notFound();
  }

  return <DestinationDetail destination={dest} />;
}
