"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [honeypot, setHoneypot] = useState(""); // spam trap - real users never fill this
  const [started, setStarted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!started) {
      setStarted(true);
      trackEvent("contact_form_start");
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    if (honeypot) return; // silently drop likely bot submissions

    const { name, email, phone, message } = form;
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill in your name, phone number, and message.");
      return;
    }
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    trackEvent("contact_form_submit");
    trackEvent("whatsapp_click", { source: "contact_form" });

    const text = `
New Tour Inquiry:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
    `;

    const whatsappURL = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      className="relative pt-28 pb-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://s7ap1.scene7.com/is/image/incredibleindia/1-sam-sand-dunes-jaisalmer-city-hero?qlt=82&ts=1726660014904')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-white font-serif">Contact Us</h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto text-sm">
            Plan your Rajasthan or India tour with expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6 text-gray-200 text-sm">
            <h2 className="text-lg font-medium text-white">{siteConfig.businessName}</h2>

            <p className="leading-relaxed text-gray-300">Customized Rajasthan & India tour packages.</p>

            <div className="space-y-3">
              <p>
                📍 {siteConfig.city}, {siteConfig.state}
              </p>
              <p>📞 {siteConfig.phoneDisplay}</p>
              <p>✉️ {siteConfig.email}</p>
              <p>⏰ {siteConfig.hours}</p>
            </div>
          </div>

          <form className="space-y-5">
            {/* Honeypot field - hidden from real users via CSS, bots often fill every field */}
            <input
              type="text"
              name="company"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] w-px h-px opacity-0"
              aria-hidden="true"
            />

            {error && (
              <p role="alert" className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-md px-4 py-2">
                {error}
              </p>
            )}

            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border border-white/50 px-4 py-2.5 text-sm text-white rounded-md"
            />

            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-white/50 px-4 py-2.5 text-sm text-white rounded-md"
            />

            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              onChange={handleChange}
              type="text"
              placeholder="Phone Number"
              required
              className="w-full bg-transparent border border-white/50 px-4 py-2.5 text-sm text-white rounded-md"
            />

            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your travel plan..."
              required
              className="w-full bg-transparent border border-white/50 px-4 py-2.5 text-sm text-white rounded-md"
            />

            <button
              type="button"
              onClick={sendWhatsApp}
              className="inline-flex items-center justify-center bg-yellow-500 text-black text-sm font-medium px-6 py-2.5 rounded-md hover:bg-yellow-400 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
