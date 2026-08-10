"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/packages/amer.jpg", title: "Amber Fort" },
  { src: "/images/packages/Taj-Lake-Palace-Udaipur.jpg", title: "City Palace" },
  { src: "/images/packages/Jaisalmer_desert_1.jpg", title: "Thar Desert" },
  { src: "/images/packages/Hawa_2.jpg", title: "Hawa Mahal" },
];

const FooterGallery = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleOpen = (index: number) => {
    setCurrent(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="flex h-[300px] w-full gap-2 overflow-hidden shadow-xl">
        {images.map((img, i) => (
          <div
            key={img.src}
            onClick={() => handleOpen(i)}
            className="relative flex-2 hover:flex-[3] transition-all duration-500 ease-in-out group cursor-pointer overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              sizes="25vw"
              className="object-cover scale-105 group-hover:scale-110 transition-all duration-700"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute -left-[150%] top-0 h-full w-[100%] blur-xl rotate-12 group-hover:left-[150%] transition-all duration-700" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
              {img.title}
            </h3>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:scale-110 transition"
            aria-label="Close"
          >
            ✕
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-6 text-white text-5xl font-bold hover:scale-125 transition"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="max-w-5xl w-full px-6">
            <div className="relative w-full h-[70vh]">
              <Image
                src={images[current].src}
                alt={images[current].title}
                fill
                sizes="100vw"
                className="object-contain shadow-2xl"
              />
            </div>
            <h2 className="text-center text-white mt-4 text-2xl font-semibold">{images[current].title}</h2>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-6 text-white text-5xl font-bold hover:scale-125 transition"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default FooterGallery;
