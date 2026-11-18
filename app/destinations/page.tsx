import type { Metadata } from "next"
import { destinations } from "@/lib/data/destinations"
import { PageHero } from "@/components/site/page-hero"
import { DestinationsBrowser } from "@/components/destinations/destinations-browser"
import { CtaBand } from "@/components/site/cta-band"

export const metadata: Metadata = {
  title: "Destinations in Rajasthan & India — Travel Guides | Vansikha Tour & Travel",
  description:
    "Explore 16 iconic destinations across Rajasthan, the Golden Triangle, and India. Discover top attractions, best time to visit, and local travel tips.",
}

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        image="/images/jaisalmer.jpg"
        eyebrow="Curated Destination Guides"
        title="Places that stay in your heart forever"
        description="Comprehensive travel guides, top attractions, local food trails, and distance guides from Jaipur — for every city we know and cherish."
        crumbs={[{ href: "/destinations", label: "Destinations" }]}
      />
      <section className="mx-auto max-w-7xl px-5 pb-12 sm:pb-16 md:px-8 md:pb-20">
        <DestinationsBrowser destinations={destinations} />
      </section>
      <CtaBand />
    </>
  )
}
