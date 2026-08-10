import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/data/destinations";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "Rajasthan Destinations | Vansikha Tour & Travel",
    description: "Explore Rajasthan's top destinations - Jaipur, Udaipur, Jaisalmer, Pushkar - with attractions, best time to visit and travel tips.",
    keywords: "rajasthan destinations, jaipur, udaipur, jaisalmer, pushkar",
  },
  "/destinations"
);

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-zinc-900 pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Rajasthan Destinations</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Attractions, best time to visit, and travel tips for Rajasthan&apos;s most-visited cities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group relative h-[320px] overflow-hidden border border-white/10 bg-black block rounded-xl"
            >
              <Image
                src={dest.heroImage}
                alt={`${dest.name}, ${dest.state} travel guide`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6">
                <p className="text-amber-400 text-xs uppercase tracking-widest font-bold mb-1">{dest.state}</p>
                <h2 className="text-white text-xl font-serif font-bold">{dest.name}</h2>
                <p className="text-zinc-300 text-sm mt-1">{dest.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
