import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { HeroSearch } from "./hero-search"

export function HomeHero() {
  return (
    <section className="relative z-30 flex min-h-[85vh] sm:min-h-[88vh] md:min-h-[90vh] flex-col justify-end bg-ink pt-24 pb-20 sm:pt-28 sm:pb-24 md:pb-28">
      {/* Background Amber Fort Image container with overflow-hidden */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image
          src="/images/jaipur.jpg"
          alt="Amber Fort in Jaipur glowing golden at sunset"
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover"
        />
        {/* Atmospheric Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/35 to-ink/90" aria-hidden />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Social Proof */}
        <div className="flex items-center gap-2 text-xs text-white/90">
          <span className="flex items-center gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-accent text-accent" />
            ))}
          </span>
          <span className="font-medium text-white/90">Loved by 12,000+ travellers across India & abroad</span>
        </div>

        {/* Hero Title - Compact & Balanced */}
        <h1 className="mt-3 max-w-3xl font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-tight text-white drop-shadow">
          Discover the royal soul of{" "}
          <span className="italic text-accent font-serif font-medium">
            Rajasthan
          </span>
        </h1>

        {/* Subtitle & Action Buttons */}
        <div className="mt-3 flex flex-col gap-3.5 md:flex-row md:items-end md:justify-between">
          <p className="max-w-lg text-xs sm:text-sm md:text-base leading-relaxed text-white/85">
            Handcrafted tours, heritage stays and trusted chauffeur-driven cars — planned by locals who call Jaipur home.
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-ink shadow-md shadow-black/25 transition hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore packages</span>
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
            <Link
              href="/car-rental"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Rent a car
            </Link>
          </div>
        </div>

        {/* Horizontal Booking Bar */}
        <div className="mt-5 sm:mt-6">
          <HeroSearch />
        </div>
      </div>
    </section>
  )
}
