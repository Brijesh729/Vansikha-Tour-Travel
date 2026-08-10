"use client";

import { useEffect } from "react";
import Image from "next/image";
import { MapPin, Calendar, Check, X, Car, ArrowRight, Phone, Users } from "lucide-react";
import { TourPackage } from "@/types";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { tourPackages } from "@/data/tours";
import FAQ from "@/components/FAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

const StatCardMinimal = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex-1 min-w-[140px] flex items-center gap-4 px-6 py-5">
    <div className="p-2.5 bg-zinc-900/50 text-zinc-400 rounded-lg border border-zinc-700/50">{icon}</div>
    <div>
      <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-[0.15em] mb-1">{label}</p>
      <p className="text-sm font-bold text-zinc-100 tracking-tight">{value}</p>
    </div>
  </div>
);

const TourDetail = ({ tour }: { tour: TourPackage }) => {
  useEffect(() => {
    trackEvent("tour_view", { tour: tour.slug });
  }, [tour.slug]);

  const handleCall = () => {
    trackEvent("phone_click", { tour: tour.slug });
    window.location.href = `tel:+${siteConfig.phoneRaw}`;
  };

  const handleWhatsApp = () => {
    trackEvent("tour_cta_click", { tour: tour.slug });
    trackEvent("whatsapp_click", { tour: tour.slug });
    const msg = `Hello, I want to book ${tour.title} package`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const relatedTours = tourPackages.filter((t) => t.category === tour.category && t.slug !== tour.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-300 font-sans antialiased selection:bg-amber-500/30">
      {/* HERO */}
      <div className="relative h-[75vh] w-full overflow-hidden">
        <Image
          src={tour.heroImage}
          alt={`${tour.title} - ${tour.location} ${tour.duration} tour package`}
          fill
          priority
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full px-6 pb-24 text-white z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] rounded-md">
                <MapPin size={10} /> {tour.location}
              </span>
              <span className="h-px w-8 bg-zinc-600" />
              <span className="text-zinc-300 text-xs uppercase tracking-widest">{tour.duration}</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-6 leading-[0.95]">
              {tour.title}
            </h1>
            <p className="text-xl md:text-3xl font-light text-zinc-200 max-w-3xl leading-relaxed">
              {tour.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Tours", path: "/tours" },
            { name: tour.title, path: `/tours/${tour.slug}` },
          ]}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-20">
            <div className="flex flex-wrap gap-0 divide-x divide-yellow-700 border border-yellow-800 rounded-xl bg-zinc-800/30">
              <StatCardMinimal icon={<Calendar size={18} />} label="Duration" value={tour.duration} />
              <StatCardMinimal icon={<Users size={18} />} label="Group Size" value="Min 2 Pax" />
              <StatCardMinimal icon={<Car size={18} />} label="Transport" value="Private AC" />
            </div>

            <section>
              <div className="flex items-baseline gap-4 mb-8 border-b border-zinc-700 pb-4">
                <h2 className="text-3xl md:text-4xl font-serif text-white font-medium tracking-tight">Overview</h2>
                <div className="h-px flex-1 bg-zinc-700" />
              </div>
              <p className="text-lg leading-8 text-zinc-300 font-light">{tour.description}</p>
            </section>

            <section>
              <div className="flex items-baseline gap-4 mb-12 border-b border-zinc-700 pb-4">
                <h2 className="text-3xl md:text-4xl font-serif text-white font-medium tracking-tight">Itinerary</h2>
                <div className="h-px flex-1 bg-zinc-700" />
              </div>

              <div className="space-y-12 relative pl-2 md:pl-0">
                <div className="absolute left-[11px] md:left-[11px] top-6 bottom-6 w-[1px] bg-zinc-700" />

                {tour.itinerary.map((item) => (
                  <div key={item.day} className="relative flex gap-8 md:gap-12 group">
                    <div className="relative z-10 flex-shrink-0 w-6 h-6 mt-1.5 md:mt-2 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="flex-1 pb-8">
                      <h3 className="text-xl md:text-2xl font-serif text-white font-medium tracking-tight mb-4">
                        {item.day.split(":")[1] ?? item.day}
                      </h3>

                      <div className="p-6 md:p-8 bg-zinc-950/40 border border-yellow-700 rounded-xl hover:border-zinc-600 transition-colors duration-500">
                        <p className="text-zinc-200 leading-7 font-light text-sm md:text-base">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {tour.faqs && tour.faqs.length > 0 && <FAQ faqs={tour.faqs} />}

            {relatedTours.length > 0 && (
              <section>
                <h2 className="text-3xl font-serif text-white font-medium mb-8 border-b border-zinc-700 pb-4">
                  Related Tours
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {relatedTours.map((rt) => (
                    <Link
                      key={rt.slug}
                      href={`/tours/${rt.slug}`}
                      className="p-5 bg-zinc-800/40 border border-zinc-700 rounded-xl hover:border-amber-500/50 transition"
                    >
                      <h3 className="text-white font-semibold text-sm mb-1">{rt.title}</h3>
                      <p className="text-xs text-zinc-500">
                        {rt.duration} · {rt.priceCurrency}
                        {rt.price}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-10">
              <div className="bg-zinc-800 border border-zinc-700 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
                <div className="p-8 pb-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">
                        Price starts from
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-amber-500 text-2xl font-serif font-bold">{tour.priceCurrency}</span>
                        <span className="text-white text-5xl font-bold tracking-tighter">{tour.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={handleWhatsApp}
                      className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-900/20 flex items-center justify-center gap-3 text-sm uppercase tracking-wide group"
                    >
                      Book Now
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={handleCall}
                      className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-3 border border-zinc-700 hover:border-zinc-600"
                    >
                      <Phone size={18} className="text-amber-500" />
                      Speak to Expert
                    </button>
                  </div>
                </div>

                <div className="h-px bg-zinc-700 mx-8" />

                <div className="p-8 space-y-8">
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
                      <span className="w-1 h-1 bg-green-500 rounded-full" /> Included
                    </h4>
                    <ul className="space-y-4">
                      {tour.included.map((item) => (
                        <li key={item} className="text-sm text-zinc-300 flex items-start gap-3 leading-relaxed">
                          <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-500 rounded-full" /> Excluded
                    </h4>
                    <ul className="space-y-4">
                      {tour.notIncluded.map((item) => (
                        <li key={item} className="text-sm text-zinc-400 flex items-start gap-3 leading-relaxed">
                          <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Car size={16} className="text-zinc-400" />
                  <h3 className="text-zinc-100 text-xs font-bold uppercase tracking-widest">Transport Options</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tour.vehicles.map((v) => (
                    <span
                      key={v}
                      className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-medium tracking-wide"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
