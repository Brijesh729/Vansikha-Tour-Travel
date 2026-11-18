import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BadgeIndianRupee,
  Briefcase,
  Car,
  Compass,
  Headphones,
  Hotel,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react"
import { tours } from "@/lib/data/tours"
import { destinations } from "@/lib/data/destinations"
import { fleet, stats, testimonials, values } from "@/lib/data/content"
import { TourCard } from "@/components/site/tour-card"
import { DestinationCard } from "@/components/site/destination-card"
import { SectionHeading } from "@/components/site/section-heading"
import { Reveal } from "@/components/site/reveal"

export function StatsStrip() {
  return (
    <section aria-label="Our numbers" className="relative z-10 bg-ink">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-6 sm:py-8 md:grid-cols-4 md:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="border-t border-white/15 pt-4">
            <dt className="text-xs sm:text-sm text-white/60">{s.label}</dt>
            <dd className="mt-1.5 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">{s.value}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}

export function IntroSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-14">
      <Reveal className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image src="/images/about-guide.png" alt="A local Vansikha guide showing travellers around a Jaipur palace" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="absolute -right-2 -bottom-6 w-44 sm:w-48 rounded-2xl bg-card p-4 sm:p-5 shadow-xl ring-1 ring-border md:-right-6">
          <p className="font-serif text-3xl sm:text-4xl font-bold text-primary">10+</p>
          <p className="mt-1 text-xs text-muted-foreground">Years of guiding travellers through Rajasthan</p>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <SectionHeading
          eyebrow="Welcome to Vansikha"
          title="Local hearts, royal hospitality, every step of the way."
          description="We are a Jaipur-born travel company that believes great journeys are personal. From a quick Pushkar weekend to a 15-day palace trail, we design every itinerary around you — your pace, your budget and the stories you want to bring home."
        />
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { icon: Compass, title: "Tailor-made itineraries", text: "No fixed group tours — your trip, your way." },
            { icon: Car, title: "Own fleet & drivers", text: "Sedans to Tempo Travellers, all AC." },
            { icon: Hotel, title: "Handpicked stays", text: "Budget hotels to heritage palaces." },
            { icon: Headphones, title: "24×7 support", text: "Real people, always on WhatsApp." },
          ].map((f) => (
            <li key={f.title} className="flex gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <f.icon className="size-4" aria-hidden />
              </span>
              <div>
                <h3 className="font-sans text-sm font-semibold">{f.title}</h3>
                <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
          More about us <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </Reveal>
    </section>
  )
}

export function FeaturedTours() {
  const featured = tours.filter((t) => t.region === "Rajasthan").slice(0, 6)
  return (
    <section className="bg-secondary/60 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Rajasthan tour packages"
            title="Journeys through the land of kings"
            description="Our most-loved Rajasthan itineraries — every one customisable to your dates and budget."
          />
          <Link
            href="/tours"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-foreground/15 px-5 py-2 text-xs sm:text-sm font-medium transition hover:bg-foreground hover:text-background"
          >
            View all packages <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
        <ul className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((t, i) => (
            <Reveal as="li" key={t.slug} delay={(i % 3) * 100}>
              <TourCard tour={t} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function DestinationsBento() {
  const [a, b, c, d, e] = destinations
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 md:px-8 md:py-20">
      <SectionHeading
        eyebrow="Top destinations"
        title="Where will your story begin?"
        description="From the Pink City's palaces to the golden dunes of the Thar — explore India's most enchanting places."
        align="center"
      />
      <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 md:grid-cols-6 md:grid-rows-2">
        <Reveal className="md:col-span-3 md:row-span-2">
          <DestinationCard variant="bento" destination={a} className="h-full min-h-[18rem] sm:min-h-[22rem] md:min-h-[24rem]" />
        </Reveal>
        <Reveal delay={80} className="md:col-span-3">
          <DestinationCard variant="bento" destination={b} className="h-full min-h-48 sm:min-h-52" />
        </Reveal>
        <Reveal delay={160} className="md:col-span-3 grid gap-4 sm:grid-cols-2">
          <DestinationCard variant="bento" destination={c} className="h-full min-h-48 sm:min-h-52" />
          <DestinationCard variant="bento" destination={d} className="h-full min-h-48 sm:min-h-52" />
        </Reveal>
      </div>
      <Reveal className="mt-4 sm:mt-5">
        <DestinationCard variant="bento" destination={e} className="min-h-48 sm:min-h-56" />
      </Reveal>
      <div className="mt-8 text-center">
        <Link href="/destinations" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3">
          See all destinations <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </div>
    </section>
  )
}

export function IndiaTours() {
  const india = tours.filter((t) => t.region === "India")
  return (
    <section className="overflow-hidden bg-ink py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Beyond Rajasthan"
          title="Holidays across incredible India"
          description="From the Himalayas to the backwaters — we plan complete journeys across the country."
        />
      </div>
      <ul className="mt-8 sm:mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 md:px-[max(2rem,calc((100vw-80rem)/2+2rem))] [scrollbar-width:none]">
        {india.map((t) => (
          <li key={t.slug} className="w-[75vw] shrink-0 snap-start sm:w-[19rem]">
            <Link href={`/tours/${t.slug}`} className="group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl p-4 sm:p-5">
              <Image src={t.image} alt={t.title} fill sizes="19rem" className="-z-10 object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/30 to-transparent" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                {t.nights}N / {t.days}D · {t.location}
              </p>
              <h3 className="mt-1.5 text-lg sm:text-xl font-serif text-white">{t.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-white/70">
                From <span className="font-semibold text-white">₹{t.price.toLocaleString("en-IN")}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

const valueIcons = [Compass, BadgeIndianRupee, ShieldCheck, Briefcase, Hotel, Headphones]

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 md:px-8 md:py-20">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why travel with us"
            title="The Vansikha difference"
            description="Thousands of families, couples and groups trust us with their holidays. Here's why they keep coming back."
          />
        </div>
        <ul className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
          {values.map((v, i) => {
            const Icon = valueIcons[i]
            return (
              <li key={v.title} className="bg-background p-5 sm:p-6 transition-colors hover:bg-secondary/60">
                <Icon className="size-6 text-primary" aria-hidden />
                <h3 className="mt-4 text-lg sm:text-xl font-serif font-semibold">{v.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{v.detail}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export function FleetPreview() {
  return (
    <section className="bg-secondary/60 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Car & tempo traveller rental"
            title="Travel in comfort with our own fleet"
            description="Clean AC vehicles with experienced, verified drivers — for airport transfers, city tours and outstation trips."
          />
          <Link
            href="/car-rental"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-foreground/15 px-5 py-2 text-xs sm:text-sm font-medium transition hover:bg-foreground hover:text-background"
          >
            View rental rates <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
        <ul className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((car, i) => (
            <Reveal as="li" key={car.name} delay={i * 80} className="group overflow-hidden rounded-2xl bg-card ring-1 ring-border">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={car.image} alt={`${car.name} — ${car.models}`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-serif font-semibold">{car.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{car.models}</p>
                <div className="mt-3.5 flex items-center justify-between border-t border-border pt-3 text-xs sm:text-sm">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="size-3.5" aria-hidden /> {car.seats} seats
                  </span>
                  <span className="font-semibold text-primary">₹{car.rate}/km</span>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ProcessSection() {
  const steps = [
    { title: "Share your plan", text: "Tell us your dates, budget and the places you dream of." },
    { title: "Get your itinerary", text: "Receive a personalised day-by-day plan with a clear quote." },
    { title: "Confirm & relax", text: "Book with a small advance. We handle hotels, cars and guides." },
    { title: "Travel royally", text: "Enjoy the journey with 24×7 support from our Jaipur team." },
  ]
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 md:px-8 md:py-20">
      <SectionHeading eyebrow="How it works" title="Planning made effortless" align="center" />
      <ol className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 100} className="relative">
            <span className="font-serif text-4xl sm:text-5xl text-accent/70 font-semibold">0{i + 1}</span>
            <h3 className="mt-2.5 text-lg sm:text-xl font-serif font-semibold">{s.title}</h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="bg-primary py-12 text-primary-foreground sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Traveller stories</p>
          <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl leading-tight font-serif">Words from our happy travellers</h2>
        </div>
        <ul className="mt-8 sm:mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={(i % 2) * 100}>
              <figure className="flex h-full flex-col rounded-2xl bg-white/8 p-5 sm:p-6 md:p-7 ring-1 ring-white/15 backdrop-blur">
                <Quote className="size-6 text-accent" aria-hidden />
                <blockquote className="mt-4 flex-1 font-serif text-base sm:text-lg leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4">
                  <span className="grid size-9 sm:size-10 place-items-center rounded-full bg-accent font-semibold text-xs sm:text-sm text-ink" aria-hidden>
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{t.name}</span>
                    <span className="block text-xs text-primary-foreground/70">
                      {t.location} · {t.trip}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
