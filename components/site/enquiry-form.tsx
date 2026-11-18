"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { tours } from "@/lib/data/tours"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs sm:text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/15"

export function EnquiryForm({ defaultTour, compact = false }: { defaultTour?: string; compact?: boolean }) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? "").trim()
    const lines = [
      "New trip enquiry — Vansikha Tour & Travel",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      get("email") && `Email: ${get("email")}`,
      `Interested in: ${get("tour") || "Custom trip"}`,
      get("date") && `Travel date: ${get("date")}`,
      `Travellers: ${get("travellers")}`,
      get("message") && `Message: ${get("message")}`,
    ].filter(Boolean)
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer")
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-3.5">
      <div className={cn("grid gap-3 sm:gap-3.5", !compact && "sm:grid-cols-2")}>
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            pattern="[0-9+\s\-]{8,15}"
            placeholder="+91 98xxx xxxxx"
            className={fieldClass}
          />
        </Field>
        {!compact && (
          <Field label="Email (optional)" htmlFor="email">
            <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} />
          </Field>
        )}
        <Field label="Tour package" htmlFor="tour">
          <select id="tour" name="tour" defaultValue={defaultTour ?? ""} className={fieldClass}>
            <option value="">Custom / not sure yet</option>
            {tours.map((t) => (
              <option key={t.slug} value={t.title}>
                {t.title}
              </option>
            ))}
            <option value="Car rental">Car rental only</option>
          </select>
        </Field>
        <Field label="Travel date" htmlFor="date">
          <input id="date" name="date" type="date" className={fieldClass} />
        </Field>
        <Field label="Travellers" htmlFor="travellers">
          <input id="travellers" name="travellers" type="number" min={1} max={60} defaultValue={2} className={fieldClass} />
        </Field>
      </div>
      <Field label="Tell us about your trip" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 3}
          placeholder="Hotels, budget, special occasions..."
          className={cn(fieldClass, "resize-none")}
        />
      </Field>
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
      >
        <Send className="size-3.5" aria-hidden />
        Send enquiry on WhatsApp
      </button>
      <p className="text-center text-xs text-muted-foreground" aria-live="polite">
        {sent ? "Thank you! Your enquiry has opened in WhatsApp — just press send." : "We usually reply within 1–2 hours."}
      </p>
    </form>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-xs sm:text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  )
}
