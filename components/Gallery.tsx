"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/jaipur.jpg", title: "Amber Fort, Jaipur" },
  { src: "/images/packages/Taj-Lake-Palace-Udaipur1.jpg", title: "City Palace, Udaipur" },
  { src: "/images/packages/Jaisalmer_desert_1.jpg", title: "Thar Desert, Jaisalmer" },
  { src: "/images/packages/Hawa.jpg", title: "Hawa Mahal, Jaipur" },
  { src: "/images/packages/Pushkar Tour.jpg", title: "Pushkar Lake" },
  { src: "/images/packages/rambagh-palace-jaipur.jpeg", title: "Royal Rajasthan" },
];

const Gallery = () => {
  const [active, setActive] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const close = () => {
    setActive(null);
    setZoom(1);
  };

  const next = () => {
    if (active === null) return;
    setActive((active + 1) % images.length);
    setZoom(1);
  };

  const prev = () => {
    if (active === null) return;
    setActive((active - 1 + images.length) % images.length);
    setZoom(1);
  };

  useEffect(() => {
    if (active === null) return;
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
        style={{
          backgroundImage:
            "url('https://www.tourmyindia.com/blog/wp-content/uploads/2018/07/How-to-Plan-Family-Friendly-Hioliday-Trip-to-Rajasthan.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-white font-serif">Travel Gallery</h1>
          <p className="text-gray-300 text-sm mt-2">Explore Rajasthan through beautiful moments</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div
              key={img.src}
              onClick={() => setActive(i)}
              className="relative cursor-pointer overflow-hidden rounded-xl group h-56"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute bottom-3 left-3 text-xs text-white opacity-0 group-hover:opacity-100 transition">
                {img.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
          onClick={close}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-10 text-white text-6xl"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-10 text-white text-6xl"
            aria-label="Next image"
          >
            ›
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => setZoom((z) => Math.min(3, Math.max(1, z + (e.deltaY < 0 ? 0.15 : -0.15))))}
            className="bg-black/30 backdrop-blur-xl rounded-xl overflow-hidden w-[90%] max-w-6xl"
          >
            <div className="flex justify-between px-4 py-3 text-white text-sm bg-black/50">
              <span>{images[active].title}</span>
              <button onClick={close} className="text-3xl" aria-label="Close">
                ✕
              </button>
            </div>

            <div className="relative w-full h-[75vh]">
              <Image
                src={images[active].src}
                alt={images[active].title}
                fill
                sizes="90vw"
                style={{ transform: `scale(${zoom})` }}
                className="object-contain transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
