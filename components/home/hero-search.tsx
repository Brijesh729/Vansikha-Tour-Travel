"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Check,
  ChevronDown,
  Clock,
  Compass,
  Crown,
  Heart,
  Landmark,
  MapPin,
  Palmtree,
  Search,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

const destinationOptions = [
  {
    value: "",
    label: "Anywhere in India",
    detail: "All Rajasthan circuits & iconic India destinations",
    icon: Compass,
  },
  {
    value: "Rajasthan",
    label: "Rajasthan Only",
    detail: "Jaipur, Udaipur, Jaisalmer, Jodhpur & Pushkar",
    icon: Crown,
  },
  {
    value: "India",
    label: "Rest of India",
    detail: "Kashmir, Kerala backwaters, Char Dham, Ladakh & Goa",
    icon: MapPin,
  },
]

const styleOptions = [
  {
    value: "",
    label: "All experiences",
    detail: "Browse all curated themes & travel styles",
    icon: Sparkles,
  },
  {
    value: "Heritage",
    label: "Heritage & Palaces",
    detail: "Forts, royal havelis & living cultural traditions",
    icon: Landmark,
  },
  {
    value: "Honeymoon",
    label: "Honeymoon & Romantic",
    detail: "Lake Pichola boat rides & luxury candlelit dinners",
    icon: Heart,
  },
  {
    value: "Adventure",
    label: "Desert Safari & Dunes",
    detail: "Thar sand dunes, camel safaris & sunset camps",
    icon: Crown,
  },
  {
    value: "Spiritual",
    label: "Spiritual & Pilgrimage",
    detail: "Pushkar Brahma temple, Char Dham & sacred ghats",
    icon: Compass,
  },
  {
    value: "Luxury",
    label: "Luxury Palace Trail",
    detail: "5-star royal heritage stays & private chauffeurs",
    icon: Crown,
  },
  {
    value: "Nature",
    label: "Nature & Wildlife",
    detail: "Tiger safaris, Aravali lakes & nature escapes",
    icon: Sparkles,
  },
  {
    value: "Beach",
    label: "Beach & Coastal",
    detail: "Goa beaches & serene Kerala backwaters",
    icon: Palmtree,
  },
]

const durationOptions = [
  {
    value: "",
    label: "Any duration",
    detail: "Flexible customized days to match your schedule",
    badge: "Flexible",
  },
  {
    value: "short",
    label: "1 – 3 days",
    detail: "Weekend getaways, city breaks & short tours",
    badge: "Short Trip",
  },
  {
    value: "medium",
    label: "4 – 6 days",
    detail: "Classic holiday circuits with key highlights",
    badge: "Standard Tour",
  },
  {
    value: "long",
    label: "7+ days",
    detail: "Grand comprehensive royal road trips & circuits",
    badge: "Grand Circuit",
  },
]

export function HeroSearch() {
  const router = useRouter()
  const [region, setRegion] = useState("")
  const [theme, setTheme] = useState("")
  const [duration, setDuration] = useState("")
  const [openDropdown, setOpenDropdown] = useState<"region" | "theme" | "duration" | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click or Esc key
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenDropdown(null)
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setOpenDropdown(null)
    const params = new URLSearchParams()
    if (region) params.set("region", region)
    if (theme) params.set("theme", theme)
    if (duration) params.set("duration", duration)
    router.push(`/tours${params.size ? `?${params}` : ""}`)
  }

  // Active selected labels
  const selectedRegion = destinationOptions.find((r) => r.value === region) || destinationOptions[0]
  const selectedTheme = styleOptions.find((t) => t.value === theme) || styleOptions[0]
  const selectedDuration = durationOptions.find((d) => d.value === duration) || durationOptions[0]

  return (
    <div ref={containerRef} className="relative z-40 mx-auto w-full max-w-5xl">
      <form
        onSubmit={onSubmit}
        aria-label="Find a tour"
        className="rounded-2xl md:rounded-full bg-[#EFECE6]/95 backdrop-blur-md p-1.5 sm:p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-black/10 transition-shadow hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
      >
        <div className="grid gap-1 md:grid-cols-[1.15fr_auto_1.25fr_auto_1.1fr_auto] md:items-center">
          {/* Field 1: WHERE TO? */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "region" ? null : "region")}
              className={cn(
                "group w-full flex flex-col justify-center rounded-xl md:rounded-full px-4 py-2 sm:px-5 sm:py-2.5 transition-all text-left cursor-pointer",
                openDropdown === "region" ? "bg-white shadow-sm ring-1 ring-black/5" : "hover:bg-white/60",
              )}
            >
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500">
                Where to?
              </span>
              <div className="relative mt-0.5 flex items-center justify-between gap-2">
                <span className="truncate text-sm sm:text-[15px] font-medium text-stone-900">
                  {selectedRegion.label}
                </span>
                <ChevronDown
                  className={cn(
                    "size-3.5 shrink-0 text-stone-500 transition-transform duration-200",
                    openDropdown === "region" && "rotate-180 text-primary",
                  )}
                />
              </div>
            </button>

            {/* Region Dropdown Menu */}
            {openDropdown === "region" && (
              <div className="absolute top-full left-0 z-50 mt-2.5 w-72 sm:w-80 rounded-2xl bg-white p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/10 animate-in fade-in-0 zoom-in-95 duration-150">
                <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Select Destination
                </p>
                <div className="flex flex-col gap-1">
                  {destinationOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setRegion(opt.value)
                        setOpenDropdown(null)
                      }}
                      className={cn(
                        "flex items-center justify-between gap-3 rounded-xl p-2.5 text-left transition-colors cursor-pointer",
                        region === opt.value
                          ? "bg-amber-50 text-primary"
                          : "hover:bg-stone-50 text-stone-900",
                      )}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-amber-100/70 text-primary">
                          <opt.icon className="size-3.5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold leading-tight">{opt.label}</p>
                          <p className="mt-0.5 text-xs text-stone-500 line-clamp-1">{opt.detail}</p>
                        </div>
                      </div>
                      {region === opt.value && <Check className="size-4 text-primary shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Hairline Divider 1 */}
          <div className="hidden h-7 w-px bg-stone-300/80 md:block" aria-hidden />

          {/* Field 2: TRAVEL STYLE */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "theme" ? null : "theme")}
              className={cn(
                "group w-full flex flex-col justify-center rounded-xl md:rounded-full px-4 py-2 sm:px-5 sm:py-2.5 transition-all text-left cursor-pointer",
                openDropdown === "theme" ? "bg-white shadow-sm ring-1 ring-black/5" : "hover:bg-white/60",
              )}
            >
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500">
                Travel style
              </span>
              <div className="relative mt-0.5 flex items-center justify-between gap-2">
                <span className="truncate text-sm sm:text-[15px] font-medium text-stone-900">
                  {selectedTheme.label}
                </span>
                <ChevronDown
                  className={cn(
                    "size-3.5 shrink-0 text-stone-500 transition-transform duration-200",
                    openDropdown === "theme" && "rotate-180 text-primary",
                  )}
                />
              </div>
            </button>

            {/* Travel Style Dropdown Menu */}
            {openDropdown === "theme" && (
              <div className="absolute top-full left-0 sm:left-4 md:left-0 z-50 mt-2.5 w-76 sm:w-84 rounded-2xl bg-white p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/10 animate-in fade-in-0 zoom-in-95 duration-150 max-h-[360px] overflow-y-auto">
                <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Choose Travel Style
                </p>
                <div className="flex flex-col gap-1">
                  {styleOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setTheme(opt.value)
                        setOpenDropdown(null)
                      }}
                      className={cn(
                        "flex items-center justify-between gap-3 rounded-xl p-2.5 text-left transition-colors cursor-pointer",
                        theme === opt.value
                          ? "bg-amber-50 text-primary"
                          : "hover:bg-stone-50 text-stone-900",
                      )}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-amber-100/70 text-primary">
                          <opt.icon className="size-3.5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold leading-tight">{opt.label}</p>
                          <p className="mt-0.5 text-xs text-stone-500 line-clamp-1">{opt.detail}</p>
                        </div>
                      </div>
                      {theme === opt.value && <Check className="size-4 text-primary shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Hairline Divider 2 */}
          <div className="hidden h-7 w-px bg-stone-300/80 md:block" aria-hidden />

          {/* Field 3: DURATION */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "duration" ? null : "duration")}
              className={cn(
                "group w-full flex flex-col justify-center rounded-xl md:rounded-full px-4 py-2 sm:px-5 sm:py-2.5 transition-all text-left cursor-pointer",
                openDropdown === "duration" ? "bg-white shadow-sm ring-1 ring-black/5" : "hover:bg-white/60",
              )}
            >
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500">
                Duration
              </span>
              <div className="relative mt-0.5 flex items-center justify-between gap-2">
                <span className="truncate text-sm sm:text-[15px] font-medium text-stone-900">
                  {selectedDuration.label}
                </span>
                <ChevronDown
                  className={cn(
                    "size-3.5 shrink-0 text-stone-500 transition-transform duration-200",
                    openDropdown === "duration" && "rotate-180 text-primary",
                  )}
                />
              </div>
            </button>

            {/* Duration Dropdown Menu - Fully visible with rich options & badges */}
            {openDropdown === "duration" && (
              <div className="absolute top-full left-0 md:left-auto md:right-0 z-50 mt-2.5 w-72 sm:w-80 rounded-2xl bg-white p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/10 animate-in fade-in-0 zoom-in-95 duration-150">
                <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Select Trip Duration
                </p>
                <div className="flex flex-col gap-1">
                  {durationOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setDuration(opt.value)
                        setOpenDropdown(null)
                      }}
                      className={cn(
                        "flex items-center justify-between gap-3 rounded-xl p-2.5 text-left transition-colors cursor-pointer",
                        duration === opt.value
                          ? "bg-amber-50 text-primary"
                          : "hover:bg-stone-50 text-stone-900",
                      )}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-amber-100/70 text-primary font-semibold text-xs">
                          <Clock className="size-3.5" />
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold leading-tight">{opt.label}</p>
                            <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-600">
                              {opt.badge}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs text-stone-500 line-clamp-1">{opt.detail}</p>
                        </div>
                      </div>
                      {duration === opt.value && <Check className="size-4 text-primary shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Submit Search Button */}
          <div className="p-0.5">
            <button
              type="submit"
              className="flex h-11 sm:h-12 w-full items-center justify-center gap-2 rounded-xl md:rounded-full bg-primary px-6 sm:px-7 text-sm font-medium text-primary-foreground shadow-md shadow-primary/25 transition-all duration-200 hover:bg-primary/95 hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
            >
              <Search className="size-4 shrink-0 stroke-[2.2]" aria-hidden />
              <span className="whitespace-nowrap font-medium">Search tours</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
