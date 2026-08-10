"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { rajasthanTours, indiaTours } from "@/data/tours";
import Search from "@/components/Search";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Main Header Fixed */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-semibold tracking-wide text-white">
            <Link href="/" onClick={closeMobileMenu}>
              Vansikha Tour Travel
            </Link>
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-white">
            <Link href="/" className="px-3 py-2 rounded-md hover:text-yellow-400 transition">
              Home
            </Link>

            {/* Rajasthan Tour Package Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 hover:text-yellow-400 transition flex items-center gap-1">
                Rajasthan Tour Packages <span className="text-xs">▾</span>
              </button>
              <div
                className="absolute left-1/2 -translate-x-1/2 mt-6 w-[900px] max-w-[95vw]
                opacity-0 invisible translate-y-3 scale-95
                group-hover:opacity-100 group-hover:visible
                group-hover:translate-y-0 group-hover:scale-100
                transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)] z-50"
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="absolute -top-2 left-1/3 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-8 bg-gray-50 border-r space-y-4">
                      <h3 className="text-lg font-bold text-gray-900">Rajasthan Tour Packages</h3>
                      <div className="relative w-full h-32 rounded-md overflow-hidden">
                        <Image src="/images/packages/RPT.png" alt="Rajasthan" fill className="object-cover" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Discover royal palaces, desert safaris and timeless heritage.
                      </p>
                      <Link href="/tours" className="text-sm font-bold text-blue-600 hover:underline">
                        View all packages →
                      </Link>
                    </div>
                    <div className="col-span-2 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {rajasthanTours.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/tours/${item.slug}`}
                            className="flex gap-3 p-2 rounded-lg bg-gray-100 hover:shadow-md transition"
                          >
                            <div className="relative w-14 h-14 rounded overflow-hidden shrink-0">
                              <Image src={item.tourImage} alt={item.title} fill className="object-cover" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                              <p className="text-xs text-gray-500">{item.subtitle}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Special India Tours Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 hover:text-yellow-400 transition flex items-center gap-1">
                Special India Tours <span className="text-xs">▾</span>
              </button>
              <div className="absolute left-1/4 -translate-x-1/2 mt-6 w-[900px] max-w-[95vw] opacity-0 invisible translate-y-3 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-8 bg-gray-50 border-r space-y-4">
                      <h3 className="text-lg font-bold text-gray-900">Special India Tours</h3>
                      <div className="relative w-full h-32 rounded-md overflow-hidden">
                        <Image
                          src="/images/packages/Golden-Triangle-Tour.jpg"
                          alt="India"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-600">
                        Explore India&apos;s iconic destinations including beaches, hill stations and heritage.
                      </p>
                      <Link href="/tours" className="text-sm font-bold text-blue-600 hover:underline">
                        View all India tours →
                      </Link>
                    </div>
                    <div className="col-span-2 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {indiaTours.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/tours/${item.slug}`}
                            className="flex gap-3 p-2 rounded-lg bg-gray-100 hover:shadow-md transition"
                          >
                            <div className="relative w-14 h-14 rounded overflow-hidden shrink-0">
                              <Image src={item.tourImage} alt={item.title} fill className="object-cover" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                              <p className="text-xs text-gray-500">{item.subtitle}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/destinations" className="px-3 py-2 hover:text-yellow-400 transition">
              Destinations
            </Link>
            <Link href="/car-rental" className="px-3 py-2 hover:text-yellow-400 transition">
              Car Rental
            </Link>
            <Link href="/gallery" className="px-3 py-2 hover:text-yellow-400 transition">
              Gallery
            </Link>
            <Link href="/blog" className="px-3 py-2 hover:text-yellow-400 transition">
              Blog
            </Link>
            <Link href="/contact" className="px-3 py-2 hover:text-yellow-400 transition">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:block ml-4">
            <Search />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />

        <div
          className={`absolute top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b bg-gray-50">
              <span className="text-lg font-bold text-gray-800">Menu</span>
              <button
                onClick={closeMobileMenu}
                className="text-gray-500 hover:text-red-500 text-2xl"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-gray-700 font-medium hover:bg-gray-100 rounded-lg"
              >
                Home
              </Link>

              {/* Mobile Accordion: Rajasthan */}
              <div>
                <button
                  onClick={() => toggleDropdown("rajasthan")}
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 font-medium hover:bg-gray-100 rounded-lg"
                  aria-expanded={activeDropdown === "rajasthan"}
                >
                  <span>Rajasthan Packages</span>
                  <span className={`transition-transform ${activeDropdown === "rajasthan" ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {activeDropdown === "rajasthan" && (
                  <div className="mt-2 ml-2 space-y-2 border-l-2 border-gray-200 pl-2">
                    {rajasthanTours.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/tours/${item.slug}`}
                        onClick={closeMobileMenu}
                        className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Accordion: India Tours */}
              <div>
                <button
                  onClick={() => toggleDropdown("india")}
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-700 font-medium hover:bg-gray-100 rounded-lg"
                  aria-expanded={activeDropdown === "india"}
                >
                  <span>Special India Tours</span>
                  <span className={`transition-transform ${activeDropdown === "india" ? "rotate-180" : ""}`}>▼</span>
                </button>
                {activeDropdown === "india" && (
                  <div className="mt-2 ml-2 space-y-2 border-l-2 border-gray-200 pl-2">
                    {indiaTours.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/tours/${item.slug}`}
                        onClick={closeMobileMenu}
                        className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/destinations"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-gray-700 font-medium hover:bg-gray-100 rounded-lg"
              >
                Destinations
              </Link>
              <Link
                href="/car-rental"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-gray-700 font-medium hover:bg-gray-100 rounded-lg"
              >
                Car Rental
              </Link>
              <Link
                href="/gallery"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-gray-700 font-medium hover:bg-gray-100 rounded-lg"
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-gray-700 font-medium hover:bg-gray-100 rounded-lg"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-gray-700 font-medium hover:bg-gray-100 rounded-lg"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
