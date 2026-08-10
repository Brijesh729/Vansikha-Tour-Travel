import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import PopularTours from "@/components/PopularTours";
import InfoSection from "@/components/InfoSection";
import FooterGallery from "@/components/FooterGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import { defaultSeo } from "@/data/seo";
import { buildMetadata } from "@/lib/metadata";
import { destinations } from "@/data/destinations";
import { homeFaqs } from "@/data/faq";

export const metadata: Metadata = buildMetadata(defaultSeo, "/");

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularTours />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Explore Destinations</h2>
          <p className="text-zinc-400">Attractions, best time to visit and travel tips for each city.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group relative h-56 overflow-hidden rounded-xl border border-white/10 block"
            >
              <Image
                src={dest.heroImage}
                alt={`${dest.name}, ${dest.state} - travel guide`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-serif font-bold">{dest.name}</h3>
                <p className="text-zinc-300 text-xs">{dest.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <InfoSection />
      <FooterGallery />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <FAQ faqs={homeFaqs} title="Frequently Asked Questions" />
      </section>
    </>
  );
}
