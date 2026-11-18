import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { StatsStrip, Testimonials, WhyChooseUs } from "@/components/home/sections"
import { CtaBand } from "@/components/site/cta-band"

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Vansikha Tour & Travel — a Jaipur-based travel company crafting personal Rajasthan and India journeys.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/city-palace-udaipur.jpg"
        eyebrow="About us"
        title="Born in Jaipur. Built on hospitality."
        description="Atithi Devo Bhava — the guest is god. It is the oldest Rajasthani tradition, and the one we build every journey around."
        crumbs={[{ href: "/about", label: "About" }]}
      />
      <div className="bg-ink pt-8 sm:pt-10">
        <StatsStrip />
      </div>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:py-16 md:px-8 md:py-20 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Our story"
          title="From a single car to complete holidays across India"
          description="Vansikha Tour & Travel began in Jaipur with one simple promise: treat every traveller like family. What started as local car rentals and city tours has grown into a full travel company offering Rajasthan circuits, Golden Triangle tours, pilgrimages and holidays across India — while keeping the same personal touch."
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image src="/images/hawa-mahal.jpg" alt="Hawa Mahal, Jaipur" fill sizes="25vw" className="object-cover" />
          </div>
          <div className="relative mt-8 sm:mt-10 aspect-[3/4] overflow-hidden rounded-2xl">
            <Image src="/images/about-guide.png" alt="Our guide with travellers" fill sizes="25vw" className="object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-secondary/60 py-12 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 md:px-8">
          <div className="rounded-2xl bg-card p-6 sm:p-8 ring-1 ring-border">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our mission</p>
            <p className="mt-3.5 font-serif text-lg sm:text-xl leading-relaxed">
              To make travelling in India easy, safe and joyful — with honest prices and genuinely caring service.
            </p>
          </div>
          <div className="rounded-2xl bg-primary p-6 sm:p-8 text-primary-foreground">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our vision</p>
            <p className="mt-3.5 font-serif text-lg sm:text-xl leading-relaxed">
              To be the most trusted travel partner from Rajasthan, known for turning trips into lifelong memories.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Testimonials />
      <CtaBand />
    </>
  )
}
