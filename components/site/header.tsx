"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { nav, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "bg-background/90 shadow-[0_1px_0_0_var(--border)] backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-18 md:px-8">
        <Link href="/" aria-label={`${site.name} home`} className={cn("transition-colors", solid ? "text-foreground" : "text-white")}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                      solid ? "text-foreground/75 hover:text-foreground" : "text-white/80 hover:text-white",
                      active && (solid ? "text-primary" : "text-white"),
                    )}
                  >
                    {item.label}
                    {active && <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-current" aria-hidden />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:+${site.phoneRaw}`}
            className={cn(
              "hidden items-center gap-2 text-xs md:text-sm font-medium md:flex",
              solid ? "text-foreground" : "text-white",
            )}
          >
            <Phone className="size-3.5" aria-hidden />
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-xs md:text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:inline-flex"
          >
            Plan my trip
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn("grid size-9 place-items-center rounded-full lg:hidden", solid ? "text-foreground" : "text-white")}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 bg-background transition-all duration-300 md:top-18 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col px-6 py-8">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-border">
                <Link href={item.href} className="block py-4 font-serif text-2xl text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3">
            <a href={`tel:+${site.phoneRaw}`} className="rounded-full border border-border py-3 text-center font-medium">
              Call {site.phoneDisplay}
            </a>
            <Link href="/contact" className="rounded-full bg-primary py-3 text-center font-medium text-primary-foreground">
              Plan my trip
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
