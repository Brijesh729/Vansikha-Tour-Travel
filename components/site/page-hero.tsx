import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function PageHero({
  title,
  eyebrow,
  description,
  image,
  crumbs = [],
  children,
}: {
  title: string
  eyebrow?: string
  description?: string
  image: string
  crumbs?: { href: string; label: string }[]
  children?: React.ReactNode
}) {
  return (
    <section className="relative isolate flex min-h-[40vh] sm:min-h-[46vh] items-end overflow-hidden bg-ink pt-24 pb-8 sm:pt-28 sm:pb-10">
      <Image src={image} alt="" fill priority sizes="100vw" className="animate-ken-burns -z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/30" aria-hidden />
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1.5">
                <ChevronRight className="size-3 sm:size-3.5" aria-hidden />
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-white">
                    {c.label}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="mt-4 sm:mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>}
        <h1 className="mt-2.5 max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-white">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-white/80">{description}</p>}
        {children}
      </div>
    </section>
  )
}
