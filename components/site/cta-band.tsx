import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { site } from "@/lib/site"
import { Reveal } from "./reveal"

export function CtaBand() {
  return (
    <section className="px-5 py-12 sm:py-16 md:px-8 md:py-20">
      <Reveal className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-2xl bg-ink px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14">
        <Image src="/images/jaipur-2.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-transparent" aria-hidden />
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Your journey starts here</p>
          <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl leading-tight text-white font-serif">Let&apos;s plan a trip you&apos;ll talk about for years.</h2>
          <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">
            Share your dates and budget — our Jaipur team will send a personalised itinerary within a few hours.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-ink transition hover:bg-accent/90"
            >
              Get a free quote
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
            <a
              href={`tel:+${site.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Phone className="size-3.5" aria-hidden />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
