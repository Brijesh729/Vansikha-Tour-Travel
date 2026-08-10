import { Destination } from "@/types/destination";

/**
 * Destination content below is drawn from well-established, verifiable
 * facts about these places (major monuments, general climate patterns,
 * standard transport links) — the same kind of information found in any
 * reputable travel guide. Nothing here is a Vansikha-specific business
 * claim (no reviews, ratings, pricing claims, or customer statistics).
 *
 * This is a starter set of 6 destinations tied to existing tour packages.
 * The remaining places in the brief's list (Bikaner, Ranthambore, Ajmer,
 * Chittorgarh, Bundi, Bharatpur) are intentionally left out of this pass —
 * publishing them with only generic filler would violate the "no thin
 * pages" rule. Add them once there's enough specific, useful content for
 * each to stand on its own.
 */
export const destinations: Destination[] = [
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    tagline: "The Pink City",
    intro:
      "Jaipur, the capital of Rajasthan, is known for its terracotta-pink old city walls, Rajput-era forts and palaces, and busy bazaars. It's usually the starting point for most Rajasthan itineraries and is well connected by air, rail and road.",
    attractions: [
      {
        name: "Amber Fort",
        description:
          "A hilltop fort about 11 km from the city centre, known for its mirrored Sheesh Mahal and elephant-gate courtyards.",
      },
      {
        name: "City Palace",
        description:
          "A palace complex in the heart of the old city, part museum and part still home to the former royal family.",
      },
      {
        name: "Hawa Mahal",
        description:
          "A five-storey pink sandstone facade with hundreds of small windows, built so royal women could watch street life unseen.",
      },
      {
        name: "Jal Mahal",
        description: "A palace that appears to float in the middle of Man Sagar Lake, best viewed from the shore.",
      },
      {
        name: "Nahargarh Fort",
        description: "A fort on the Aravalli hills overlooking the city, popular for sunset views.",
      },
    ],
    bestTimeToVisit:
      "October to March, when daytime temperatures are comfortable for sightseeing. Summers (April–June) are very hot and dry.",
    howToReach:
      "Jaipur International Airport has domestic flights from most major Indian cities. Jaipur Junction is well connected by rail, and it's about a 5–6 hour drive from Delhi via the Delhi–Jaipur expressway.",
    localTransport:
      "Auto-rickshaws, app-based cabs, and the Jaipur Metro (limited coverage) are available. Most visitors prefer a private car for a full day of fort/palace hopping since sites are spread out.",
    travelTips: [
      "Amber Fort and City Palace can each take half a day — plan two separate outings rather than rushing both in one day.",
      "Bargaining is expected in the old-city bazaars (Johari Bazaar, Bapu Bazaar).",
      "Carry water and sun protection if visiting between March and June.",
    ],
    relatedTourSlugs: ["jaipur-tour", "golden-triangle-tour", "luxury-rajasthan-tour"],
    heroImage: "/images/packages/amer.jpg",
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    tagline: "The City of Lakes",
    intro:
      "Udaipur sits around a cluster of artificial lakes in the Aravalli hills and is known for its palaces, lake views, and a more relaxed pace than Jaipur or Jodhpur — a common pick for honeymooners and slower itineraries.",
    attractions: [
      {
        name: "City Palace, Udaipur",
        description:
          "A large palace complex on the eastern bank of Lake Pichola, built up over nearly 400 years by successive Mewar rulers.",
      },
      {
        name: "Lake Pichola",
        description:
          "The city's main lake, with boat rides that pass Jag Niwas (the Lake Palace, now a hotel) and Jag Mandir island.",
      },
      {
        name: "Saheliyon Ki Bari",
        description: "A garden of fountains and lotus pools built for the ladies of the royal court.",
      },
      {
        name: "Jagdish Temple",
        description: "A large Indo-Aryan style Hindu temple close to the City Palace, dedicated to Vishnu.",
      },
    ],
    bestTimeToVisit:
      "September to March. Winters are mild and pleasant; the lakes look their fullest just after the monsoon (September–October).",
    howToReach:
      "Maharana Pratap Airport has flights from major Indian cities. Udaipur City railway station connects to Delhi, Mumbai and Ahmedabad. It's roughly a 6-hour drive from Jaipur.",
    localTransport:
      "The old city around the lakes is largely walkable. Auto-rickshaws and cabs cover longer distances to sights like Sajjangarh (Monsoon Palace).",
    travelTips: [
      "A sunset boat ride on Lake Pichola is one of the most-recommended things to do here — book ahead in peak season (Nov–Feb).",
      "The Monsoon Palace (Sajjangarh) is best visited in the late afternoon for the view over the city.",
    ],
    relatedTourSlugs: ["udaipur-tour", "luxury-rajasthan-tour"],
    heroImage: "/images/packages/Taj-Lake-Palace-Udaipur1.jpg",
  },
  {
    slug: "jaisalmer",
    name: "Jaisalmer",
    state: "Rajasthan",
    tagline: "The Golden City",
    intro:
      "Jaisalmer sits deep in the Thar Desert near the Pakistan border and is built almost entirely from a honey-coloured sandstone that gives the city its nickname. It's the usual base for desert safaris and sand-dune camping.",
    attractions: [
      {
        name: "Jaisalmer Fort",
        description:
          "One of the few 'living forts' in the world — around a quarter of the old city's population still lives within its walls.",
      },
      {
        name: "Patwon Ki Haveli",
        description: "A cluster of five ornately carved havelis built by wealthy merchant families in the 1800s.",
      },
      {
        name: "Sam Sand Dunes",
        description: "Rolling desert dunes about 40 km from the city, the most common spot for camel and jeep safaris.",
      },
      {
        name: "Gadisar Lake",
        description: "An artificial lake with carved ghats and a small temple, a quieter spot within the city.",
      },
    ],
    bestTimeToVisit:
      "October to March. Summers regularly cross 45°C and desert safaris are not comfortable or advisable during that period.",
    howToReach:
      "Jaisalmer Airport has limited seasonal flights; most visitors arrive by overnight train from Jaipur or Delhi, or by road (Jaisalmer is about 5–6 hours from Jodhpur).",
    localTransport:
      "The fort and old city are walkable. Reaching the sand dunes requires a car or the safari operator's own transport.",
    travelTips: [
      "Overnight desert camping trips typically include an evening at the dunes and return the next morning — confirm exactly what's included before booking.",
      "Nights in the desert can get cold even when days are warm, especially November–February.",
    ],
    relatedTourSlugs: ["jaisalmer-tour", "desert-safari-tour"],
    heroImage: "/images/packages/jaisalmer.jpg",
  },
  {
    slug: "pushkar",
    name: "Pushkar",
    state: "Rajasthan",
    tagline: "The Holy Lake Town",
    intro:
      "Pushkar is a small pilgrimage town built around a holy lake, about 15 km from Ajmer. It's known for the Brahma Temple — one of very few temples to Brahma in India — and for the annual Pushkar Camel Fair.",
    attractions: [
      {
        name: "Brahma Temple",
        description: "One of the only temples in India dedicated to Brahma, dating back to the 14th century.",
      },
      {
        name: "Pushkar Lake",
        description: "A sacred lake ringed by more than 50 ghats, used for ritual bathing by pilgrims.",
      },
      {
        name: "Pushkar Camel Fair",
        description:
          "An annual livestock and cultural fair (usually held around October–November) with camel trading, races, and folk performances.",
      },
    ],
    bestTimeToVisit:
      "October to March for comfortable weather; specifically around the Pushkar Camel Fair dates if you want to see it (check the exact dates each year, as they follow the lunar calendar).",
    howToReach:
      "Nearest airport and railway station are in Ajmer, about 30–40 minutes away by road. Pushkar is also a common short add-on to a Jaipur or Ajmer itinerary.",
    localTransport: "Pushkar's town centre is small and walkable. Autos and cabs are available for trips to/from Ajmer.",
    travelTips: [
      "Pushkar is considered a holy town — alcohol and non-vegetarian food are officially restricted within town limits.",
      "Accommodation books up quickly during the camel fair; plan well ahead if visiting then.",
    ],
    relatedTourSlugs: ["pushkar-tour"],
    heroImage: "/images/packages/Pushkar Tour.jpg",
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
