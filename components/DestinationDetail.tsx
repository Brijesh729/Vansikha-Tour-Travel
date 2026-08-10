import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/types/destination";
import { tourPackages } from "@/data/tours";
import Breadcrumbs from "@/components/Breadcrumbs";

const DestinationDetail = ({ destination }: { destination: Destination }) => {
  const relatedTours = tourPackages.filter((t) => destination.relatedTourSlugs.includes(t.slug));

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-300">
      <div className="relative h-[55vh] w-full overflow-hidden">
        <Image src={destination.heroImage} alt={destination.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-6 pb-16 z-10">
          <div className="max-w-5xl mx-auto">
            <p className="text-amber-400 text-xs uppercase tracking-widest font-bold mb-3">{destination.state}</p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">{destination.name}</h1>
            <p className="text-xl text-zinc-200 mt-3">{destination.tagline}</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            { name: destination.name, path: `/destinations/${destination.slug}` },
          ]}
        />

        <section className="mb-16">
          <p className="text-lg leading-8 text-zinc-300 font-light">{destination.intro}</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif text-white font-medium mb-8 border-b border-zinc-700 pb-4">
            Top Attractions
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {destination.attractions.map((a) => (
              <div key={a.name} className="p-6 bg-zinc-800/40 border border-zinc-700 rounded-xl">
                <h3 className="text-white font-semibold mb-2">{a.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid sm:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-xl font-serif text-white font-medium mb-4">Best Time to Visit</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">{destination.bestTimeToVisit}</p>
          </div>
          <div>
            <h2 className="text-xl font-serif text-white font-medium mb-4">How to Reach</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">{destination.howToReach}</p>
          </div>
          <div>
            <h2 className="text-xl font-serif text-white font-medium mb-4">Local Transport</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">{destination.localTransport}</p>
          </div>
          <div>
            <h2 className="text-xl font-serif text-white font-medium mb-4">Travel Tips</h2>
            <ul className="space-y-2">
              {destination.travelTips.map((tip) => (
                <li key={tip} className="text-sm text-zinc-400 flex gap-2">
                  <span className="text-amber-500">•</span> {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {relatedTours.length > 0 && (
          <section>
            <h2 className="text-3xl font-serif text-white font-medium mb-8 border-b border-zinc-700 pb-4">
              Tours to {destination.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedTours.map((tour) => (
                <Link
                  key={tour.slug}
                  href={`/tours/${tour.slug}`}
                  className="p-6 bg-zinc-800/40 border border-zinc-700 rounded-xl hover:border-amber-500/50 transition"
                >
                  <h3 className="text-white font-semibold mb-1">{tour.title}</h3>
                  <p className="text-xs text-zinc-500">
                    {tour.duration} · {tour.priceCurrency}
                    {tour.price}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default DestinationDetail;
