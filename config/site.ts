/**
 * Central business configuration.
 *
 * Values below marked "VERIFIED FROM SOURCE" were taken directly from the
 * original Vite project's components (Footer.jsx, Contact.jsx,
 * RajasthanTourPackages.jsx) and are consistent across all of them.
 *
 * Values marked "PLACEHOLDER — REPLACE" were placeholder/fake data left in
 * the original SEO.jsx schema (fake phone number, "Your Street Address",
 * fake pincode) and must NOT go to production as-is.
 */

export const siteConfig = {
  businessName: "Vansikha Tour & Travel",

  // VERIFIED FROM SOURCE (Footer.jsx, Contact.jsx, RajasthanTourPackages.jsx)
  phoneDisplay: "+91-8058104662",
  phoneRaw: "918058104662", // used for tel: and wa.me: links
  whatsapp: "918058104662",
  email: "brijeshvermaa1@gmail.com",
  city: "Jaipur",
  state: "Rajasthan",
  country: "India",
  hours: "Mon – Sat, 9 AM – 7 PM",
  instagramUsername: "brijeshvermaa",

  // PLACEHOLDER — REPLACE with real registered business address before launch.
  // The old SEO.jsx schema had "Your Street Address" / fake pincode 302001 /
  // fake phone +91-9876543210. Only city/state/country above are confirmed real.
  streetAddress: "PLACEHOLDER_STREET_ADDRESS",
  postalCode: "PLACEHOLDER_POSTAL_CODE",

  // Approximate Jaipur coordinates carried over from original schema —
  // replace with exact business location if available.
  latitude: "26.9124",
  longitude: "75.7873",

  // Site URL — set this to the real production domain via env var.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://vansikha-tour-travel.web.app",

  // VERIFIED FROM SOURCE (index.html gtag script)
  googleAnalyticsId: "G-PYHMYF25PY",
};

export type SiteConfig = typeof siteConfig;
