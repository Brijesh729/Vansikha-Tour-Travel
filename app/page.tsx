import { HomeHero } from "@/components/home/hero"
import {
  DestinationsBento,
  FeaturedTours,
  FleetPreview,
  IndiaTours,
  IntroSection,
  ProcessSection,
  StatsStrip,
  Testimonials,
  WhyChooseUs,
} from "@/components/home/sections"
import { SectionHeading } from "@/components/site/section-heading"
import { FaqList } from "@/components/site/faq-list"
import { CtaBand } from "@/components/site/cta-band"
import { faqs } from "@/lib/data/content"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsStrip />
      <IntroSection />
      <FeaturedTours />
      <DestinationsBento />
      <IndiaTours />
      <WhyChooseUs />
      <FleetPreview />
      <ProcessSection />
      <Testimonials />
      <section className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-5 py-12 sm:py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_1.5fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Can't find what you're looking for? Message us on WhatsApp anytime."
        />
        <FaqList items={faqs} />
      </section>
      <CtaBand />
    </>
  )
}
