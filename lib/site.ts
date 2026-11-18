export const site = {
  name: "Vansikha Tour & Travel",
  shortName: "Vansikha",
  tagline: "Royal journeys from the heart of Jaipur",
  phoneDisplay: "+91 89469 22052",
  phoneRaw: "918946922052",
  whatsapp: "918946922052",
  email: "chetanbunkar786@gmail.com",
  city: "Jaipur",
  state: "Rajasthan",
  country: "India",
  hours: "Mon – Sat, 9 AM – 7 PM",
  instagram: "https://instagram.com/chetanbunkar",
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tour Packages" },
  { href: "/destinations", label: "Destinations" },
  { href: "/car-rental", label: "Car Rental" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
