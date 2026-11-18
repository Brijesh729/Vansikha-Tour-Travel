import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { ToursBrowser } from "@/components/tours/tours-browser"
import { CtaBand } from "@/components/site/cta-band"

export const metadata: Metadata = {
  title: "Tour Packages",
  description: "Browse Rajasthan and all-India tour packages from Jaipur — heritage, honeymoon, spiritual, desert and adventure holidays.",
}

export default async function ToursPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string; theme?: string; duration?: string }>
}) {
  const params = await searchParams
  return (
    <>
      <PageHero
        image="/images/udaipur.jpg"
        eyebrow="Tour packages"
        title="Handcrafted holidays for every kind of traveller"
        description="Heritage trails, honeymoon escapes, desert adventures and sacred yatras — filter to find your perfect trip, then make it your own."
        crumbs={[{ href: "/tours", label: "Tour Packages" }]}
      />
      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <ToursBrowser initial={params} />
      </section>
      <CtaBand />
    </>
  )
}
