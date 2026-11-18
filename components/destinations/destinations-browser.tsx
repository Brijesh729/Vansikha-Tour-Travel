"use client"

import { useMemo, useState } from "react"
import { Compass, MapPin, Search, Sparkles } from "lucide-react"
import type { Destination } from "@/lib/data/destinations"
import { DestinationCard } from "@/components/site/destination-card"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Destinations" },
  { id: "rajasthan", label: "Rajasthan (9)" },
  { id: "spiritual", label: "Spiritual & Sacred" },
  { id: "hills-nature", label: "Hills & Wildlife" },
  { id: "india", label: "Rest of India" },
]

export function DestinationsBrowser({
  destinations,
}: {
  destinations: Destination[]
}) {
  const [query, setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()

    return destinations.filter((d) => {
      // Category match
      let matchesCat = true
      if (selectedCategory === "rajasthan") {
        matchesCat = d.state.toLowerCase() === "rajasthan"
      } else if (selectedCategory === "spiritual") {
        matchesCat = ["pushkar", "varanasi", "haridwar-rishikesh"].includes(d.slug)
      } else if (selectedCategory === "hills-nature") {
        matchesCat = ["ranthambore", "mount-abu", "kashmir", "kerala", "ladakh"].includes(d.slug)
      } else if (selectedCategory === "india") {
        matchesCat = d.state.toLowerCase() !== "rajasthan"
      }

      // Query match
      const haystack = `${d.name} ${d.nickname} ${d.state} ${d.knownFor} ${d.summary} ${d.attractions.map((a) => a.name).join(" ")}`.toLowerCase()
      const matchesQuery = !q || haystack.includes(q)

      return matchesCat && matchesQuery
    })
  }, [destinations, query, selectedCategory])

  return (
    <div>
      {/* Sticky Filter Bar */}
      <div className="sticky top-16 z-20 -mx-5 border-b border-border bg-background/95 px-5 py-3.5 backdrop-blur-xl md:top-18 md:-mx-8 md:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search
              className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Jaipur, Udaipur, forts, beaches..."
              className="w-full rounded-full border border-input bg-card py-2 pr-4 pl-10 text-xs sm:text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Destination Categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer",
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="mt-6 flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
        <p>
          Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "destination" : "destinations"}
          {selectedCategory !== "all" && ` in ${categories.find((c) => c.id === selectedCategory)?.label}`}
          {query && ` matching "${query}"`}
        </p>
        {(query || selectedCategory !== "all") && (
          <button
            type="button"
            onClick={() => {
              setQuery("")
              setSelectedCategory("all")
            }}
            className="text-xs font-semibold text-primary hover:underline cursor-pointer"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Destinations 3-Column Grid (3 boxes per row on desktop) */}
      {filtered.length > 0 ? (
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <li key={d.slug}>
              <DestinationCard destination={d} className="min-h-[20rem] sm:min-h-[22rem] md:min-h-[23rem]" />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center">
          <Compass className="mx-auto size-10 text-muted-foreground/60" />
          <h3 className="mt-3 text-lg font-serif font-semibold">No destinations found</h3>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto">
            We couldn&apos;t find any destination matching your search. Try adjusting your keywords or reset filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("")
              setSelectedCategory("all")
            }}
            className="mt-4 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
