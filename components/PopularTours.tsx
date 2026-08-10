import Link from "next/link";
import Image from "next/image";
import { tourPackages } from "@/data/tours";

const PopularTours = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-32 pt-20 antialiased">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl font-serif font-bold text-white tracking-tight mb-4">Popular Destinations</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full opacity-70 mb-6" />
        <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
          Discover handpicked tours crafted for unforgettable journeys.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
        {tourPackages.map((tour) => (
          <Link
            key={tour.slug}
            href={`/tours/${tour.slug}`}
            className="group relative h-[380px] w-[300px] overflow-hidden cursor-pointer
                       border border-white/10 bg-black block
                       transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                       hover:border-amber-500/50
                       hover:shadow-[0_20px_60px_-10px_rgba(245,158,11,0.3)]"
          >
            <Image
              src={tour.tourImage}
              alt={`${tour.title} - ${tour.location} tour package`}
              fill
              loading="lazy"
              sizes="300px"
              className="object-cover
                         transform transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
                         group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <div className="mb-3 overflow-hidden">
                <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 bg-black-500/10 rounded-full border border-amber-500/20 backdrop-blur-md translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  Top Rated
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white leading-tight mb-3 shadow-black drop-shadow-lg">
                {tour.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity">
                {tour.description}
              </p>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs font-bold text-white tracking-widest uppercase group-hover:text-amber-500 transition-colors duration-300">
                  Explore Now
                </span>
                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-black transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:rotate-[-45deg]"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularTours;
