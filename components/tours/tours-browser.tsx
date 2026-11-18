"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal } from "lucide-react"
import { tours, type TourTheme } from "@/lib/data/tours"
import { TourCard } from "@/components/site/tour-card"
import { cn } from "@/lib/utils"

const themes: TourTheme[] = ["Heritage", "Honeymoon", "Spiritual", "Adventure", "Luxury", "Nature", "Beach"]
const durations = [
  { value: "", label: "Any length" },
  { value: "short", label: "1–3 days" },
  { value: "medium", label: "4–6 days" },
  { value: "long", label: "7+ days" },
]

function matchesDuration(days: number, d: string) {
  if (d === "short") return days <= 3
  if (d === "medium") return days >= 4 && days <= 6
  if (d === "long") return days >= 7
  return true
}

export function ToursBrowser({
  initial,
}: {
  initial?: { region?: string; theme?: string; duration?: string }
}) {
  const searchParams = useSearchParams()
  const initialRegion = initial?.region ?? searchParams.get("region") ?? ""
  const initialTheme = initial?.theme ?? searchParams.get("theme") ?? ""
  const initialDuration = initial?.duration ?? searchParams.get("duration") ?? ""

  const [query, setQuery] = useState("")
  const [region, setRegion] = useState(initialRegion)
  const [theme, setTheme] = useState(initialTheme)
  const [duration, setDuration] = useState(initialDuration)
  const [sort, setSort] = useState("popular")

  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    const list = tours.filter(
      (t) =>
        (!region || t.region === region) &&
        (!theme || t.themes.includes(theme as TourTheme)) &&
        matchesDuration(t.days, duration) &&
        (!q || `${t.title} ${t.location} ${t.subtitle}`.toLowerCase().includes(q)),
    )
    if (sort === "price-asc") return [...list].sort((a, b) => a.price - b.price)
    if (sort === "price-desc") return [...list].sort((a, b) => b.price - a.price)
    if (sort === "rating") return [...list].sort((a, b) => b.rating - a.rating)
    return [...list].sort((a, b) => b.reviews - a.reviews)
  }, [query, region, theme, duration, sort])

  const reset = () => {
    setQuery("")
    setRegion("")
    setTheme("")
    setDuration("")
  }

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-5 border-b border-border bg-background/90 px-5 py-3 backdrop-blur-xl md:top-18 md:-mx-8 md:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <label htmlFor="tour-search" className="sr-only">
              Search tours
            </label>
            <input
              id="tour-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Jaipur, Kashmir, desert..."
              className="w-full rounded-full border border-input bg-card py-2 pr-4 pl-10 text-xs sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
          </div>
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Region">
            {[
              { v: "", l: "All" },
              { v: "Rajasthan", l: "Rajasthan" },
              { v: "India", l: "Rest of India" },
            ].map((r) => (
              <Chip key={r.l} active={region === r.v} onClick={() => setRegion(r.v)}>
                {r.l}
              </Chip>
            ))}
          </div>
          <div className="flex gap-2">
            <label className="sr-only" htmlFor="duration">
              Duration
            </label>
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="rounded-full border border-input bg-card px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-primary"
            >
              {durations.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
            <label className="sr-only" htmlFor="sort">
              Sort by
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-input bg-card px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-primary"
            >
              <option value="popular">Most popular</option>
              <option value="rating">Top rated</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]" role="group" aria-label="Travel style">
          <SlidersHorizontal className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
          <Chip active={!theme} onClick={() => setTheme("")} small>
            All styles
          </Chip>
          {themes.map((t) => (
            <Chip key={t} active={theme === t} onClick={() => setTheme(theme === t ? "" : t)} small>
              {t}
            </Chip>
          ))}
        </div>
      </div>

      <p className="mt-6 text-xs sm:text-sm text-muted-foreground" aria-live="polite">
        Showing <span className="font-semibold text-foreground">{results.length}</span> of {tours.length} packages
      </p>

      {results.length ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((t) => (
            <li key={t.slug}>
              <TourCard tour={t} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-border p-10 text-center">
          <p className="font-serif text-lg sm:text-xl">No packages match those filters.</p>
          <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">We build custom trips too — or try clearing a filter.</p>
          <button onClick={reset} className="mt-4 rounded-full bg-primary px-5 py-2 text-xs sm:text-sm font-medium text-primary-foreground">
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}

function Chip({
  active,
  onClick,
  children,
  small,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
  small?: boolean
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border font-medium whitespace-nowrap transition cursor-pointer",
        small ? "px-3 py-1 text-xs" : "px-3.5 py-1.5 text-xs sm:text-sm",
        active ? "border-primary bg-primary text-primary-foreground" : "border-input bg-card hover:border-foreground/30",
      )}
    >
      {children}
    </button>
  )
}
