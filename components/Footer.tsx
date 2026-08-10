"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const openMail = () => {
    window.location.href = `mailto:${siteConfig.email}`;
  };

  const openWhatsApp = (tour: string) => {
    const msg = `Hello, I want information about ${tour}`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const openInstagram = () => {
    const appUrl = `instagram://user?username=${siteConfig.instagramUsername}`;
    const webUrl = `https://instagram.com/${siteConfig.instagramUsername}`;

    window.location.href = appUrl;
    setTimeout(() => {
      window.open(webUrl, "_blank");
    }, 700);
  };

  return (
    <footer className="bg-black text-gray-400 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Travel Desk */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">TRAVEL DESK</h4>
          <p className="text-sm leading-7">
            Rajasthan Travel Desk <br />
            {siteConfig.city}, {siteConfig.state} <br />
            {siteConfig.country}
          </p>
          <p
            onClick={openMail}
            className="mt-5 text-sm text-amber-400 cursor-pointer hover:text-amber-300 transition"
          >
            {siteConfig.email}
          </p>
        </div>

        {/* Office */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">OFFICE ADDRESS</h4>
          <p className="text-sm leading-7">
            Jaipur Office <br />
            {siteConfig.state}, {siteConfig.country} <br />
            Available on appointment
          </p>
          <p className="mt-5 text-sm">
            PHONE:
            <a href={`tel:+${siteConfig.phoneRaw}`} className="ml-2 text-amber-400 hover:text-amber-300">
              {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>

        {/* Rajasthan Tours */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">RAJASTHAN TOURS</h4>
          <ul className="space-y-3 text-sm">
            {["Same Day Tours", "3 Days Tours", "5 Days Tours", "7 Days Heritage Tours", "Local Sightseeing"].map(
              (item) => (
                <li
                  key={item}
                  onClick={() => openWhatsApp(item)}
                  className="cursor-pointer flex items-center gap-2 group relative"
                >
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-150 transition" />
                  <span className="relative transition">
                    {item}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-500 group-hover:w-full transition-all duration-400" />
                  </span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Special Experiences */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">SPECIAL EXPERIENCES</h4>
          <ul className="space-y-3 text-sm">
            {["Desert Safari", "Wildlife Tours", "Heritage Walks", "Adventure Tours", "Custom Travel Plans"].map(
              (item) => (
                <li
                  key={item}
                  onClick={() => openWhatsApp(item)}
                  className="cursor-pointer flex items-center gap-2 group relative"
                >
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-150 transition" />
                  <span className="relative transition">
                    {item}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-500 group-hover:w-full transition-all duration-300" />
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Legal links row */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-4 text-xs text-gray-500">
          <Link href="/privacy-policy" className="hover:text-amber-400 transition">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-amber-400 transition">
            Terms & Conditions
          </Link>
          <Link href="/disclaimer" className="hover:text-amber-400 transition">
            Disclaimer
          </Link>
          <Link href="/refund-policy" className="hover:text-amber-400 transition">
            Refund Policy
          </Link>
        </div>
      </div>

      <div className="bg-[#0b0b0b] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-amber-400 hover:font-bold transition"> {siteConfig.businessName} Desk. </span>
            All Rights Reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed & Developed by
            <span
              onClick={openInstagram}
              className="text-amber-400 ml-1 font-semibold cursor-pointer hover:text-pink-500 hover:font-bold transition"
            >
              Brijesh
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
