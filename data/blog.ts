import { BlogPost } from "@/types";

/**
 * Blog data migrated verbatim from the original
 * src/components/Blog/Blog-data.jsx. Content unchanged.
 * NOTE: images/authorImg still point to external Unsplash/ui-avatars URLs
 * from the original project — see master-prompt section 47 (prefer local,
 * licensed assets). Left as-is for this stage; swap for owned imagery
 * when available.
 */
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 Hidden Gems in Rajasthan for 2026",
    slug: "hidden-gems-rajasthan",
    excerpt:
      "Discover the unexplored beauty of Rajasthan. From ancient stepwells to ghost towns, plan your perfect Rajasthan tour package today.",
    category: "Rajasthan Tourism",
    date: "April 20, 2025",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
    author: "Vansikha Team",
    authorImg:
      "https://ui-avatars.com/api/?name=Vansikha+Team&background=F59E0B&color=fff",
    readTime: "5 min read",
    description:
      "Rajasthan is known for its majestic forts, but the real magic lies in its hidden corners. Explore the best hidden gems for your next Rajasthan trip.",
    content: [
      {
        type: "para",
        text: "Rajasthan, the Land of Kings, is globally famous for Jaipur and Udaipur. But if you are planning a trip in 2026, step off the beaten path. Here are the top 5 hidden gems you must include in your Rajasthan tour package.",
      },
      { type: "heading", text: "1. Chand Baori, Abhaneri" },
      {
        type: "para",
        text: "One of the deepest stepwells in the world, Chand Baori is an architectural marvel. It is a perfect stop on your Jaipur to Agra road trip. Hiring a reliable taxi service in Jaipur is the best way to reach here.",
      },
      { type: "heading", text: "2. Kuldhara Ghost Town" },
      {
        type: "para",
        text: "Located near Jaisalmer, this abandoned village has a mysterious history. It is a must-visit during your Jaisalmer desert safari. The stories of the Paliwal Brahmins will give you chills.",
      },
      { type: "heading", text: "Why Book With Us?" },
      {
        type: "para",
        text: "At Vansikha Tour & Travel, we provide the best taxi service and customized tour packages to explore these wonders safely and comfortably.",
      },
    ],
  },
  {
    id: 2,
    title: "Best Time to Visit Jaisalmer for Desert Safari",
    slug: "best-time-jaisalmer-safari",
    excerpt:
      "Planning a trip to Jaisalmer? Know the best season for desert camping, camel rides, and sand dunes experiences.",
    category: "Travel Guide",
    date: "March 15, 2025",
    image:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80",
    author: "Travel Expert",
    authorImg:
      "https://ui-avatars.com/api/?name=Travel+Expert&background=F59E0B&color=fff",
    readTime: "4 min read",
    description:
      "Know the best time to visit Jaisalmer. We cover weather, festivals, and tips for the ultimate desert safari experience.",
    content: [
      {
        type: "para",
        text: "Jaisalmer, the Golden City, is best enjoyed when the weather is pleasant. If you are booking a Jaisalmer tour package, timing is everything.",
      },
      { type: "heading", text: "Winter Season (October to March)" },
      {
        type: "para",
        text: "This is the peak season. The days are sunny and nights are cool. Perfect for camel safaris and camping under the stars. Book your taxi service in advance during this time.",
      },
      { type: "heading", text: "Desert Festival" },
      {
        type: "para",
        text: "Held in February, the Desert Festival is a colorful event. It showcases Rajasthani folk culture, camel races, and turban tying competitions.",
      },
    ],
  },
  {
    id: 3,
    title: "Golden Triangle Tour Guide: Delhi Agra Jaipur",
    slug: "golden-triangle-guide",
    excerpt:
      "Everything you need to know about the Golden Triangle tour. Itinerary, tips, and best travel packages for 2026.",
    category: "India Tours",
    date: "February 10, 2025",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    author: "Vansikha Team",
    authorImg:
      "https://ui-avatars.com/api/?name=Vansikha&background=F59E0B&color=fff",
    readTime: "6 min read",
    description:
      "A complete guide to the Golden Triangle tour covering Delhi, Agra, and Jaipur. Explore India's rich heritage.",
    content: [
      {
        type: "para",
        text: "The Golden Triangle is the most popular tourist circuit in India. It connects the national capital Delhi, Agra (home of the Taj Mahal), and Jaipur (the Pink City).",
      },
      { type: "heading", text: "Ideal Itinerary" },
      {
        type: "para",
        text: "We recommend a 5 to 6-day trip. Spend 2 days in Delhi, 1 day in Agra, and 3 days in Jaipur. Hiring a car rental for the entire trip is the most convenient option.",
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
