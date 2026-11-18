import type { Metadata } from "next"
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { EnquiryForm } from "@/components/site/enquiry-form"
import { FaqList } from "@/components/site/faq-list"
import { faqs } from "@/lib/data/content"
import { site, whatsappLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact & Enquiry",
  description: "Plan your Rajasthan or India trip with Vansikha Tour & Travel, Jaipur. Call, WhatsApp or send an enquiry.",
}

export default function ContactPage() {
  const channels = [
    { icon: Phone, label: "Call us", value: site.phoneDisplay, href: `tel:+${site.phoneRaw}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: whatsappLink("Hello, I want to plan a trip.") },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Office", value: `${site.city}, ${site.state}` },
    { icon: Clock, label: "Hours", value: site.hours },
  ]
  return (
    <>
      <PageHero
        image="/images/jaipur-2.jpg"
        eyebrow="Contact"
        title="Let's plan your journey"
        description="Tell us where you'd like to go. We'll reply with a personalised itinerary and a transparent quote."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />
      <section className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-5 py-12 sm:py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold">Get in touch</h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Our Jaipur team is happy to help in Hindi or English.</p>
          <ul className="mt-6 flex flex-col gap-3">
            {channels.map((c) => {
              const inner = (
                <>
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <c.icon className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">{c.label}</span>
                    <span className="block text-sm font-medium break-all">{c.value}</span>
                  </span>
                </>
              )
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-3.5 rounded-xl p-2 transition hover:bg-secondary/60">
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3.5 p-2">{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="rounded-2xl bg-card p-5 sm:p-6 md:p-8 shadow-lg ring-1 ring-border">
          <h2 className="text-xl sm:text-2xl font-serif font-semibold">Send an enquiry</h2>
          <p className="mt-1.5 mb-5 text-xs sm:text-sm text-muted-foreground">Fill in a few details and we&apos;ll take it from there.</p>
          <EnquiryForm />
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 pb-12 sm:pb-16 md:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-serif font-semibold">Frequently asked questions</h2>
        <div className="mt-6 sm:mt-8">
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  )
}
