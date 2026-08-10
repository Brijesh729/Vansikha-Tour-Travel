export interface ItineraryDay {
  day: string;
  detail: string;
}

export interface TourFaq {
  question: string;
  answer: string;
}

export interface TourPackage {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  price: string;
  priceCurrency: string;
  rating: number;
  reviews: number;
  heroImage: string;
  tourImage: string;
  description: string;
  itinerary: ItineraryDay[];
  vehicles: string[];
  included: string[];
  notIncluded: string[];
  category: "rajasthan" | "india";
  faqs?: TourFaq[];
}

export interface TourNavItem {
  title: string;
  desc: string;
  img: string;
  slug: string;
}

export interface BlogContentBlock {
  type: "para" | "heading";
  text: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
  authorImg: string;
  readTime: string;
  description: string;
  content: BlogContentBlock[];
}

export interface SeoPageData {
  title: string;
  description: string;
  keywords: string;
}
