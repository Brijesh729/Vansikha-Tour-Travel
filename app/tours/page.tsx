import { Suspense } from "react"
import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { ToursBrowser } from "@/components/tours/tours-browser"
import { CtaBand } from "@/components/site/cta-band"

export const metadata: Metadata = {
  title: "Tour Packages — Rajasthan & India Holidays | Vansikha Tour & Travel",
  description: "Browse 18 handcrafted Rajasthan and all-India tour packages from Jaipur — heritage, honeymoon, spiritual, desert and wildlife adventures.",
}

export default function ToursPage() {
  return (
    <>
      <PageHero
        image="/images/udaipur.jpg"
        eyebrow="Curated Tour Packages"
        title="Handcrafted holidays for every kind of traveller"
        description="Heritage trails, honeymoon escapes, desert adventures and sacred yatras — filter to find your perfect trip, then make it your own."
        crumbs={[{ href: "/tours", label: "Tour Packages" }]}
      />
      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <Suspense fallback={<div className="py-12 text-center text-sm text-muted-foreground">Loading tours...</div>}>
          <ToursBrowser />
        </Suspense>
      </section>
      <CtaBand />
    </>
  )
}
