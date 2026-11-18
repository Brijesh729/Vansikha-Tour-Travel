import Link from "next/link"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { nav, site } from "@/lib/site"
import { tours } from "@/lib/data/tours"
import { destinations } from "@/lib/data/destinations"
import { Logo } from "./logo"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-8 sm:pt-16 md:px-8">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-white">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed">
              A Jaipur-based travel company crafting personalised Rajasthan and all-India holidays, with our own trusted fleet of cars and drivers.
            </p>
            <ul className="mt-5 flex flex-col gap-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden />
                {site.city}, {site.state}, {site.country}
              </li>
              <li>
                <a href={`tel:+${site.phoneRaw}`} className="flex items-center gap-2.5 hover:text-white">
                  <Phone className="size-3.5 text-accent" aria-hidden />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 break-all hover:text-white">
                  <Mail className="size-3.5 shrink-0 text-accent" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="size-3.5 text-accent" aria-hidden />
                {site.hours}
              </li>
            </ul>
          </div>

          <FooterColumn title="Explore" className="lg:col-span-2">
            {nav.map((n) => (
              <FooterLink key={n.href} href={n.href}>
                {n.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Popular tours" className="lg:col-span-3">
            {tours.slice(0, 5).map((t) => (
              <FooterLink key={t.slug} href={`/tours/${t.slug}`}>
                {t.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Top places" className="lg:col-span-3">
            {destinations.slice(0, 5).map((d) => (
              <FooterLink key={d.slug} href={`/destinations/${d.slug}`}>
                {d.name} tour guide
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{title}</h2>
      <ul className="mt-4 flex flex-col gap-2 text-xs sm:text-sm">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition hover:text-white">
        {children}
      </Link>
    </li>
  )
}
