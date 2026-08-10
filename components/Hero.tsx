"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = ["/images/jaipur.jpg", "/images/udaipur.jpg", "/images/jaisalmer.jpg"];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollDown = () => {
    window.scrollBy({ top: 800, behavior: "smooth" });
  };

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {images.map((img, index) => (
        <Image
          key={img}
          src={img}
          alt="Rajasthan"
          fill
          priority={index === 0}
          className={`object-cover object-top transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">
            Explore <span className="text-yellow-400">Vansikha Tour Travel</span>
          </h1>

          <p className="mt-6 text-gray-200">
            Forts, palaces, deserts & timeless heritage — experience India&apos;s most royal state.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <button
              onClick={scrollDown}
              className="px-8 py-3 rounded-full bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition"
            >
              Explore Tours
            </button>

            <Link
              href="/gallery"
              className="px-8 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
