import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { tourPackages } from "@/data/tours";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "Rajasthan & India Tour Packages | Vansikha Tour & Travel",
    description:
      "Browse all Rajasthan and India tour packages from Vansikha Tour & Travel, including Jaipur, Udaipur, Jaisalmer, Golden Triangle, Char Dham and more.",
    keywords: "rajasthan tour packages, india tour packages, vansikha tours",
  },
  "/tours"
);

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-zinc-900 pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">All Tour Packages</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Handpicked Rajasthan and India tour packages, curated for unforgettable journeys.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((tour) => (
            <Link
              key={tour.slug}
              href={`/tours/${tour.slug}`}
              className="group relative h-[320px] overflow-hidden border border-white/10 bg-black block rounded-xl"
            >
              <Image
                src={tour.tourImage}
                alt={`${tour.title} - ${tour.location} tour package`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6">
                <p className="text-amber-400 text-xs uppercase tracking-widest font-bold mb-1">{tour.location}</p>
                <h2 className="text-white text-xl font-serif font-bold">{tour.title}</h2>
                <p className="text-zinc-300 text-sm mt-1">
                  {tour.priceCurrency}
                  {tour.price} · {tour.duration}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
