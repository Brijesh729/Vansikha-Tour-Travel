import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar, Compass, MapPin, Navigation, Sun } from "lucide-react"
import type { Destination } from "@/lib/data/destinations"
import { cn } from "@/lib/utils"

export function DestinationCard({
  destination,
  variant,
  className,
}: {
  destination: Destination
  variant?: "bento" | "detailed"
  className?: string
}) {
  const shortDistance = destination.distanceFromJaipur.split("·")[0].trim()
  const shortSeason = destination.bestTime.split("(")[0].trim()

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className={cn(
        "group relative isolate flex flex-col justify-between overflow-hidden rounded-2xl bg-ink p-4 sm:p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 border border-white/10 ring-1 ring-black/20",
        className,
      )}
    >
      {/* Background Cover Image with cinematic zoom on hover */}
      <Image
        src={destination.image}
        alt={`${destination.name}, ${destination.nickname}`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />

      {/* Atmospheric Multi-layer Gradient */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/20 transition-opacity duration-300 group-hover:opacity-95"
        aria-hidden
      />

      {/* Top Bar: Floating Glass Badges */}
      <div className="flex items-center justify-between gap-1.5">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-white/90 backdrop-blur-md shadow-sm">
            <MapPin className="size-2.5 text-accent" />
            <span>{destination.state}</span>
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-white/90 backdrop-blur-md">
            <Calendar className="size-2.5 text-accent" />
            <span>{destination.idealStay}</span>
          </span>
        </div>

        {/* Tour Count Pill */}
        {destination.tourSlugs.length > 0 && (
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/95 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-ink shadow-sm whitespace-nowrap">
            <Compass className="size-2.5" />
            <span>{destination.tourSlugs.length} Tours</span>
          </span>
        )}
      </div>

      {/* Bottom Content Area */}
      <div className="mt-auto pt-14 sm:pt-16">
        {/* Nickname Eyebrow */}
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-accent drop-shadow truncate">
          {destination.nickname}
        </p>

        {/* City Title */}
        <h3 className="mt-0.5 font-serif text-xl sm:text-2xl font-normal text-white drop-shadow-md">
          {destination.name}
        </h3>

        {/* Summary Description */}
        <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-white/80 line-clamp-2">
          {destination.summary}
        </p>

        {/* Key Metrics & Action Button Row */}
        <div className="mt-3.5 flex items-center justify-between gap-2 border-t border-white/15 pt-3">
          <div className="flex flex-col gap-0.5 text-[11px] text-white/75 truncate pr-2">
            <span className="flex items-center gap-1 truncate">
              <Navigation className="size-2.5 text-accent shrink-0" />
              <span className="truncate">{shortDistance}</span>
            </span>
            <span className="flex items-center gap-1 truncate text-white/65">
              <Sun className="size-2.5 text-accent shrink-0" />
              <span className="truncate">{shortSeason}</span>
            </span>
          </div>

          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-[11px] sm:text-xs font-medium text-white backdrop-blur-md transition-all duration-300 group-hover:bg-accent group-hover:text-ink shrink-0">
            <span>Explore</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
