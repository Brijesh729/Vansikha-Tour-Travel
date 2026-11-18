import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock, MapPin, Star } from "lucide-react"
import { formatINR, type Tour } from "@/lib/data/tours"

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-[0_1px_0_0_var(--border)] ring-1 ring-border transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={tour.image}
          alt={`${tour.title} — ${tour.location}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          <span className="rounded-full bg-background/90 px-2.5 py-0.5 text-[11px] font-medium backdrop-blur">
            {tour.themes[0]}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-ink/70 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur">
            <Star className="size-3 fill-accent text-accent" aria-hidden />
            {tour.rating}
            <span className="sr-only">out of 5</span>
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="size-3" aria-hidden />
            {tour.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3" aria-hidden />
            {tour.nights}N / {tour.days}D
          </span>
        </div>
        <h3 className="mt-2 text-base sm:text-lg font-serif font-semibold leading-snug">
          <Link href={`/tours/${tour.slug}`} className="after:absolute after:inset-0">
            {tour.title}
          </Link>
        </h3>
        <p className="mt-1.5 mb-4 line-clamp-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{tour.subtitle}</p>
        <div className="mt-auto flex items-end justify-between border-t border-border pt-3">
          <div>
            <p className="text-[11px] text-muted-foreground">Starting from</p>
            <p className="font-serif text-lg sm:text-xl font-semibold text-primary">
              {formatINR(tour.price)}
              <span className="ml-1 font-sans text-xs font-normal text-muted-foreground">/ person</span>
            </p>
          </div>
          <span className="grid size-9 place-items-center rounded-full bg-secondary transition group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="size-4" aria-hidden />
          </span>
        </div>
      </div>
    </article>
  )
}
