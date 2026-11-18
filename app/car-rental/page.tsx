import type { Metadata } from "next"
import Image from "next/image"
import { Briefcase, Check, Luggage, Users } from "lucide-react"
import { carServices, fleet } from "@/lib/data/content"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { Reveal } from "@/components/site/reveal"
import { CtaBand } from "@/components/site/cta-band"
import { whatsappLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Car & Tempo Traveller Rental in Jaipur",
  description: "Rent sedans, SUVs, luxury cars and Tempo Travellers with drivers in Jaipur — airport transfers, local sightseeing and outstation trips.",
}

export default function CarRentalPage() {
  return (
    <>
      <PageHero
        image="/images/fleet-suv.png"
        eyebrow="Car rental"
        title="Chauffeur-driven cars across Rajasthan & India"
        description="Clean AC vehicles, verified drivers and honest per-km pricing — from airport pickups to 15-day road trips."
        crumbs={[{ href: "/car-rental", label: "Car Rental" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="Our fleet" title="Choose your ride" description="Indicative outstation rates. Driver allowance, tolls, parking and state taxes are charged as applicable." />
        <ul className="mt-8 sm:mt-10 flex flex-col gap-5">
          {fleet.map((car, i) => (
            <Reveal as="li" key={car.name} className="grid overflow-hidden rounded-2xl bg-card ring-1 ring-border md:grid-cols-[1.1fr_1fr]">
              <div className={`relative aspect-[16/10] md:aspect-auto ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={car.image} alt={`${car.name} — ${car.models}`} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col p-5 sm:p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{car.bestFor}</p>
                <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-serif font-semibold">{car.name}</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{car.models}</p>
                <ul className="mt-5 flex flex-wrap gap-4 text-xs sm:text-sm">
                  <li className="flex items-center gap-1.5">
                    <Users className="size-3.5 text-primary" aria-hidden /> {car.seats} passengers
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Luggage className="size-3.5 text-primary" aria-hidden /> {car.bags} bags
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Briefcase className="size-3.5 text-primary" aria-hidden /> AC · Verified driver
                  </li>
                </ul>
                <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:items-end sm:justify-between">
                  <p>
                    <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">₹{car.rate}</span>
                    <span className="ml-1 text-xs sm:text-sm text-muted-foreground">/ km</span>
                  </p>
                  <a
                    href={whatsappLink(`Hi, I'd like to book a ${car.name} (${car.models}). Please share availability.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs sm:text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                  >
                    Book this car
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-ink py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading tone="dark" eyebrow="Services" title="Every kind of journey, covered" />
          <ul className="mt-8 sm:mt-10 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {carServices.map((s) => (
              <li key={s.title} className="bg-ink p-5 sm:p-6">
                <Check className="size-5 text-accent" aria-hidden />
                <h3 className="mt-3 text-lg sm:text-xl font-serif font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/65">{s.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
