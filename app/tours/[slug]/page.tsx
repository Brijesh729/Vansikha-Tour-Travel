import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  Car,
  Check,
  Clock,
  Compass,
  MapPin,
  Star,
  Users,
  X,
} from "lucide-react"
import { formatINR, tours } from "@/lib/data/tours"
import { PageHero } from "@/components/site/page-hero"
import { EnquiryForm } from "@/components/site/enquiry-form"
import { TourCard } from "@/components/site/tour-card"
import { FaqList } from "@/components/site/faq-list"
import { site, whatsappLink } from "@/lib/site"

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) return {}
  return {
    title: `${tour.title} (${tour.nights}N / ${tour.days}D) — Vansikha Tour & Travel`,
    description: tour.subtitle,
  }
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) notFound()

  const related = tours.filter((t) => t.slug !== tour.slug && (t.region === tour.region || t.themes.some((x) => tour.themes.includes(x)))).slice(0, 3)

  const facts = [
    { icon: Clock, label: "Duration", value: `${tour.nights} Nights / ${tour.days} Days` },
    { icon: MapPin, label: "Destinations", value: tour.location },
    { icon: Compass, label: "Theme", value: tour.themes.join(", ") },
    { icon: Users, label: "Group type", value: "Private / Customisable" },
  ]

  return (
    <>
      <PageHero
        image={tour.image}
        eyebrow={`${tour.nights}N / ${tour.days}D · ${tour.region}`}
        title={tour.title}
        description={tour.subtitle}
        crumbs={[
          { href: "/tours", label: "Tours" },
          { href: `/tours/${tour.slug}`, label: tour.title },
        ]}
      >
        <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-white/85">
          <Star className="size-3.5 fill-accent text-accent" aria-hidden />
          <span className="font-semibold text-white">{tour.rating}</span>
          <span>({tour.reviews} reviews)</span>
        </div>
      </PageHero>

      <section aria-label="Trip facts" className="border-b border-border bg-card">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:gap-6 px-5 py-5 sm:py-6 md:grid-cols-4 md:px-8">
          {facts.map((f) => (
            <div key={f.label} className="flex items-start gap-2.5">
              <f.icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">{f.label}</dt>
                <dd className="mt-0.5 text-sm sm:text-base font-medium">{f.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-5 py-12 sm:py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_22rem]">
        <div className="flex flex-col gap-10 sm:gap-12">
          <section>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold">Overview</h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">{tour.overview}</p>
            <h3 className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">Tour highlights</h3>
            <ul className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
              {tour.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 rounded-xl bg-secondary/70 p-3 text-xs sm:text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {tour.gallery.length > 1 && (
            <section aria-label="Gallery" className="grid grid-cols-2 gap-3 sm:gap-4">
              {tour.gallery.slice(0, 4).map((src, i) => (
                <div key={src} className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}>
                  <Image src={src} alt={`${tour.title} photo ${i + 1}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
              ))}
            </section>
          )}

          <section>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold">Day-by-day itinerary</h2>
            <ol className="mt-6 sm:mt-8 border-l-2 border-dashed border-border">
              {tour.itinerary.map((day, i) => (
                <li key={day.title} className="relative pb-8 pl-8 last:pb-0">
                  <span className="absolute top-0 -left-[1rem] grid size-8 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">Day {i + 1}</p>
                  <h3 className="mt-1 text-base sm:text-lg font-serif font-semibold">{day.title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{day.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="grid gap-4 sm:gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-5 sm:p-6 ring-1 ring-border">
              <h2 className="text-lg sm:text-xl font-serif font-semibold">What&apos;s included</h2>
              <ul className="mt-4 flex flex-col gap-2.5 text-xs sm:text-sm">
                {tour.included.map((x) => (
                  <li key={x} className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#1f8f4e]" aria-hidden />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-card p-5 sm:p-6 ring-1 ring-border">
              <h2 className="text-lg sm:text-xl font-serif font-semibold">Not included</h2>
              <ul className="mt-4 flex flex-col gap-2.5 text-xs sm:text-sm text-muted-foreground">
                {tour.excluded.map((x) => (
                  <li key={x} className="flex gap-2.5">
                    <X className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-serif font-semibold">Available vehicles</h2>
            <ul className="mt-3.5 flex flex-wrap gap-2.5">
              {tour.vehicles.map((v) => (
                <li key={v} className="flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs sm:text-sm">
                  <Car className="size-3.5 text-primary" aria-hidden />
                  {v}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold">Frequently asked</h2>
            <div className="mt-6">
              <FaqList items={tour.faqs} />
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-card p-5 sm:p-6 shadow-lg ring-1 ring-border">
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-primary">
              {formatINR(tour.price)}
              <span className="ml-1 font-sans text-xs font-normal text-muted-foreground">/ person</span>
            </p>
            <p className="mt-1.5 text-[11px] text-muted-foreground">Price varies by hotel category, vehicle and season.</p>
            <a
              href={whatsappLink(`Hi, I'm interested in the ${tour.title} (${tour.nights}N/${tour.days}D). Please share details.`)}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center justify-center rounded-xl bg-[#1f8f4e] py-2.5 text-xs sm:text-sm font-medium text-white transition hover:bg-[#1f8f4e]/90"
            >
              Quick enquiry on WhatsApp
            </a>
            <a href={`tel:+${site.phoneRaw}`} className="mt-2.5 flex items-center justify-center rounded-xl border border-border py-2.5 text-xs sm:text-sm font-medium hover:bg-secondary">
              Call {site.phoneDisplay}
            </a>
            <div className="my-5 h-px bg-border" />
            <h2 className="font-sans text-xs sm:text-sm font-semibold">Or send a detailed request</h2>
            <div className="mt-3.5">
              <EnquiryForm defaultTour={tour.title} compact />
            </div>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="bg-secondary/60 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold">You may also like</h2>
            <ul className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <li key={t.slug}>
                  <TourCard tour={t} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
