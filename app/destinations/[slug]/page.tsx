import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  Calendar,
  Check,
  Compass,
  Info,
  MapPin,
  Navigation,
  Sparkles,
  Sun,
  Utensils,
} from "lucide-react"
import { destinations } from "@/lib/data/destinations"
import { tours } from "@/lib/data/tours"
import { PageHero } from "@/components/site/page-hero"
import { TourCard } from "@/components/site/tour-card"
import { CtaBand } from "@/components/site/cta-band"

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const d = destinations.find((x) => x.slug === slug)
  if (!d) return {}
  return {
    title: `${d.name} Tour Guide — ${d.nickname} | Vansikha Tour & Travel`,
    description: d.description,
  }
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const d = destinations.find((x) => x.slug === slug)
  if (!d) notFound()

  const related = tours.filter(
    (t) =>
      t.location.toLowerCase().includes(d.name.toLowerCase()) ||
      t.title.toLowerCase().includes(d.name.toLowerCase()) ||
      d.tourSlugs.includes(t.slug),
  )

  const facts = [
    { icon: MapPin, label: "State", value: d.state },
    { icon: Calendar, label: "Ideal stay", value: d.idealStay },
    { icon: Sun, label: "Best time to visit", value: d.bestTime },
    { icon: Compass, label: "Famous for", value: d.knownFor },
  ]

  return (
    <>
      <PageHero
        image={d.image}
        eyebrow={`${d.nickname} · ${d.state}`}
        title={d.name}
        description={d.summary}
        crumbs={[
          { href: "/destinations", label: "Destinations" },
          { href: `/destinations/${d.slug}`, label: d.name },
        ]}
      />

      {/* Destination Overview & Key Facts */}
      <section className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-5 py-12 sm:py-16 md:px-8 md:py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Discover & Explore</span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-semibold">About {d.name}</h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground whitespace-pre-line">
            {d.description}
          </p>

          {/* Connectivity from Jaipur */}
          <div className="mt-8 rounded-2xl bg-secondary/50 p-5 ring-1 ring-border">
            <div className="flex items-center gap-2.5 text-primary">
              <Navigation className="size-4" />
              <h3 className="text-sm font-semibold uppercase tracking-wider">Distance & Connectivity from Jaipur</h3>
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-foreground">
              <span className="font-semibold text-primary">{d.distanceFromJaipur}:</span> {d.howToReach}
            </p>
          </div>
        </div>

        <dl className="flex flex-col gap-px overflow-hidden rounded-2xl bg-border ring-1 ring-border self-start">
          {facts.map((f) => (
            <div key={f.label} className="flex items-start gap-3.5 bg-card p-4 sm:p-5">
              <f.icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <div>
                <dt className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {f.label}
                </dt>
                <dd className="mt-1 text-sm sm:text-base font-medium text-foreground">{f.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      {/* Top Attractions & Must-Do Experiences */}
      <section className="bg-secondary/40 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Must-Visit Sights</span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-semibold">Top attractions in {d.name}</h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Handpicked landmarks, historical fortresses, and architectural wonders curated by our local guides.
            </p>
          </div>

          <ol className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {d.attractions.map((a, i) => (
              <li
                key={a.name}
                className="flex flex-col rounded-2xl bg-card p-5 sm:p-6 ring-1 ring-border transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                    Highlight
                  </span>
                </div>
                <h3 className="mt-3 text-lg sm:text-xl font-serif font-semibold">{a.name}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
              </li>
            ))}
          </ol>

          {/* Signature Experiences */}
          <div className="mt-12 sm:mt-16 rounded-2xl bg-card p-6 sm:p-8 ring-1 ring-border">
            <h3 className="text-xl sm:text-2xl font-serif font-semibold">Experiences not to miss</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
              Unique cultural moments, outdoor adventures, and authentic local traditions.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {d.experiences.map((e) => (
                <li
                  key={e}
                  className="flex items-start gap-2.5 rounded-xl bg-secondary/60 p-3 text-xs sm:text-sm"
                >
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span className="font-medium text-foreground">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Local Culinary Trail & Famous Food */}
      {d.localFood && d.localFood.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 md:px-8 md:py-20">
          <div className="flex items-center gap-2.5 text-primary">
            <Utensils className="size-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Culinary Heritage</span>
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-semibold">
            Famous food & local specialties in {d.name}
          </h2>
          <p className="mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
            A journey through Rajasthan and India is incomplete without tasting its legendary street delicacies and royal palace recipes.
          </p>

          <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {d.localFood.map((food) => (
              <div key={food.name} className="flex flex-col rounded-2xl bg-card p-5 ring-1 ring-border">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent font-serif">Must Try</span>
                <h3 className="mt-1 text-base sm:text-lg font-serif font-semibold text-foreground">{food.name}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{food.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Local Travel Tips from Jaipur Locals */}
      {d.travelTips && d.travelTips.length > 0 && (
        <section className="bg-secondary/40 py-12 sm:py-16 md:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex items-center gap-2.5 text-primary">
              <Info className="size-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Insider Travel Advice</span>
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-semibold">
              Travel tips from local experts
            </h2>
            <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2">
              {d.travelTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-2xl bg-card p-4 sm:p-5 ring-1 ring-border">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <p className="text-xs sm:text-sm leading-relaxed text-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Tour Packages */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 md:px-8 md:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Tailor-Made Packages</span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-semibold">Tours featuring {d.name}</h2>
            </div>
            <Link
              href="/tours"
              className="hidden items-center gap-2 text-xs sm:text-sm font-medium text-primary sm:flex hover:underline"
            >
              View all packages <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
          <ul className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.slice(0, 6).map((t) => (
              <li key={t.slug}>
                <TourCard tour={t} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <CtaBand />
    </>
  )
}
