export type TourTheme = "Heritage" | "Spiritual" | "Honeymoon" | "Adventure" | "Luxury" | "Beach" | "Nature"

export interface Tour {
  slug: string
  title: string
  subtitle: string
  location: string
  region: "Rajasthan" | "India"
  themes: TourTheme[]
  nights: number
  days: number
  price: number
  rating: number
  reviews: number
  image: string
  gallery: string[]
  overview: string
  highlights: string[]
  itinerary: { title: string; detail: string }[]
  vehicles: string[]
  included: string[]
  excluded: string[]
  bestTime: string
  groupSize: string
  faqs: { q: string; a: string }[]
}

export const tours: Tour[] = [
  {
    slug: "jaipur-tour",
    title: "Jaipur Royal Heritage Tour",
    subtitle: "Fortresses, palaces and living craft traditions of the Pink City",
    location: "Jaipur",
    region: "Rajasthan",
    themes: ["Heritage", "Luxury"],
    nights: 2,
    days: 3,
    price: 10920,
    rating: 4.9,
    reviews: 148,
    image: "/images/amer-fort.jpg",
    gallery: ["/images/amer-fort.jpg", "/images/hawa-mahal.jpg", "/images/jaipur.jpg", "/images/jaipur-2.jpg"],
    overview:
      "Immerse yourself in the opulent grandeur of India's royal Pink City. Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is a living UNESCO World Heritage open-air museum where imposing hilltop ramparts overlook bustling bazaars packed with gem cutters, hand-block printers, and royal sweetmakers. This curated 3-day private escape takes you along the sunrise ramparts of Amber Fort, through the mirror-mosaic Sheesh Mahal, into the royal courtyards of City Palace, and past the 953 honeycombed windows of Hawa Mahal. Planned and chauffeured by our Jaipur-based team, you will enjoy insider access, skip-the-line guidance, and authentic local culinary recommendations.",
    highlights: [
      "Early morning scenic drive & exploration of hilltop Amber Fort with Sheesh Mahal",
      "Private guided tour of City Palace museum and UNESCO-listed Jantar Mantar sundial",
      "Sunset photo stop at the floating water palace Jal Mahal in Man Sagar Lake",
      "Panoramic 360-degree sunset vista of Jaipur from Nahargarh Fort ramparts",
      "Guided walk through the 953-window honeycomb facade of Hawa Mahal (Palace of Winds)",
      "Heritage shopping trail in Johari and Bapu Bazaars for certified gems, textiles, and blue pottery",
      "Authentic royal Rajasthani thali dinner recommendation with Dal Baati Churma & Ghewar",
    ],
    itinerary: [
      {
        title: "Arrival, City Palace, Jantar Mantar & Bazaars",
        detail:
          "Morning pickup from Jaipur International Airport (JAI), Railway Station, or your chosen hotel with traditional Rajasthani welcome. Check in and refresh. Afternoon visit to the royal City Palace complex and the UNESCO astronomical observatory Jantar Mantar. Photo stop at the iconic facade of Hawa Mahal. In the evening, enjoy a leisurely guided walk through Johari Bazaar and Bapu Bazaar for lac bangles, quilts, and block prints.",
      },
      {
        title: "Amber Fort, Jal Mahal & Sunset at Nahargarh",
        detail:
          "08:30 AM morning departure to the hilltop Amber Fort. Ascend the royal ramparts, explore the Diwan-i-Aam, the exquisite mirror-mosaic Sheesh Mahal, and lush Mughal gardens. Midday photo stop at the water palace Jal Mahal. In the late afternoon, drive up the ridge to Nahargarh Fort for a breathtaking sunset overlooking the entire glowing pink city, followed by dinner at a rooftop heritage restaurant.",
      },
      {
        title: "Albert Hall Museum, Patrika Gate & Departure",
        detail:
          "Relaxed morning breakfast. Visit the Indo-Saracenic Albert Hall Museum set amidst lush Ram Niwas Garden, followed by a photo session at the vibrant hand-painted arches of Patrika Gate. Sample authentic Pyaaz Kachori and sweet Lassi before private transfer to the airport or railway station for your onward journey.",
      },
    ],
    vehicles: [
      "Sedan: Swift Dzire / Toyota Etios (Up to 3-4 guests)",
      "SUV: Toyota Innova Crysta (Up to 6 guests)",
      "Tempo Traveller: 12-Seater / 17-Seater Luxury (Families & Groups)",
    ],
    included: [
      "2 Nights accommodation in handpicked 3-star, 4-star, or heritage palace hotels",
      "Daily buffet breakfast at the hotel",
      "All transfers & sightseeing by private air-conditioned commercial vehicle",
      "Dedicated commercial chauffeur with uniform, fluent in Hindi & basic English",
      "All highway toll taxes, inter-city parking fees, state border permits, and fuel charges",
      "Complimentary chilled packaged mineral water bottles replenished daily",
      "Jaipur airport/railway station pickup and drop-off",
      "24x7 trip support from our Jaipur operations headquarters",
    ],
    excluded: [
      "Monument entry tickets, camera/video permits, and audio guide fees",
      "Lunch and dinner (unless specifically requested in customized package)",
      "Personal expenses such as laundry, phone calls, alcoholic beverages, and tips",
      "Airfare or train tickets to/from Jaipur",
    ],
    bestTime: "October – March (Pleasant sunny days 18°C–26°C with cool evenings)",
    groupSize: "Private Tour (Customised for 2 to 25 travellers)",
    faqs: [
      {
        q: "Can this Jaipur tour package be customised?",
        a: "Yes, 100%! We can add extra days, include an excursion to the Chand Baori stepwell at Abhaneri, a village dinner at Chokhi Dhani, or upgrade your stay to 5-star royal palace properties like Rambagh Palace.",
      },
      {
        q: "Are monument entry tickets included in this package?",
        a: "Monument entry tickets are not included by default to give you flexibility. However, our driver will assist you in acquiring composite tickets or online fast-track QR passes with zero hassle.",
      },
      {
        q: "What is the best pickup point?",
        a: "We offer complimentary door-to-door pickup and drop-off from any location in Jaipur, including Jaipur Airport (JAI), Jaipur Junction (JP), Gandhinagar Station, or your residence/hotel.",
      },
    ],
  },
  {
    slug: "jodhpur-royal-tour",
    title: "Jodhpur Royal Blue City Heritage",
    subtitle: "The imposing Mehrangarh Fort, blue lanes and royal Marwar culture",
    location: "Jodhpur",
    region: "Rajasthan",
    themes: ["Heritage", "Luxury"],
    nights: 2,
    days: 3,
    price: 11500,
    rating: 4.8,
    reviews: 112,
    image: "/images/desert-safari.jpg",
    gallery: ["/images/desert-safari.jpg", "/images/amer-fort.jpg", "/images/jaipur-2.jpg"],
    overview:
      "Perched on the edge of the Thar Desert, the Sun City of Jodhpur is celebrated worldwide for its towering cliffside fortress and labyrinth of indigo blue-painted houses. Dominated by the unvanquished Mehrangarh Fort, which rises 400 feet above the city, Jodhpur reflects the chivalry, folklore, and artistic splendor of the Rathore Rajputs. This 3-day private package covers the palatial courtyards of Mehrangarh, the translucent white marble of Jaswant Thada, the Art-Deco grandeur of Umaid Bhawan Palace, and a traditional Bishnoi Village safari where blackbucks roam alongside ancient craft communities.",
    highlights: [
      "Guided tour of the colossal Mehrangarh Fort and its world-class royal museum collection",
      "Walking tour through the maze of blue-painted Brahmin quarters in Navchowkiya",
      "Visit to the glowing white marble royal cenotaph Jaswant Thada",
      "Explore the museum and vintage car gallery at the golden Umaid Bhawan Palace",
      "Bishnoi Village 4x4 Jeep Safari to witness potters, weavers, and wildlife",
      "Sunset shopping at the historic Ghanta Ghar (Clock Tower) and Sardar Market",
      "Taste authentic Jodhpur Mirchi Vadas, Mawa Kachori, and Makhania Lassi",
    ],
    itinerary: [
      {
        title: "Arrival in Jodhpur & Umaid Bhawan Palace",
        detail:
          "Pickup from Jodhpur Airport or Railway Station (or scenic private drive from Jaipur). Check-in at your hotel. Afternoon visit to Umaid Bhawan Palace Museum, home to the current royal family, showcasing vintage clocks, weapons, and vintage automobiles. Evening visit to the vibrant Clock Tower (Ghanta Ghar) and bustling spice markets.",
      },
      {
        title: "Mehrangarh Fort, Jaswant Thada & Blue City Walk",
        detail:
          "Morning dedicated to exploring the sheer ramparts of Mehrangarh Fort, including Moti Mahal, Phool Mahal, and Sheesh Mahal. Walk down to the serene marble cenotaph Jaswant Thada. In the afternoon, enjoy a heritage walking trail through the blue-washed alleys of Navchowkiya with local photography stops.",
      },
      {
        title: "Bishnoi Village Safari, Mandore Gardens & Departure",
        detail:
          "Morning 4x4 open jeep safari to a nearby Bishnoi village to witness their wildlife conservation, potters at work, and wild blackbuck antelopes. Return via the historic red sandstone cenotaphs of Mandore Gardens. In the evening, private drop-off at Jodhpur airport or railway station.",
      },
    ],
    vehicles: ["Sedan (Dzire/Etios)", "SUV (Innova Crysta)", "Luxury Tempo Traveller"],
    included: [
      "2 Nights hotel accommodation in Jodhpur (heritage/3-star/4-star)",
      "Daily buffet breakfast",
      "All transfers and sightseeing by private AC car with chauffeur",
      "Bishnoi Village 4x4 Jeep Safari",
      "All toll taxes, state road taxes, parking fees, and driver allowances",
      "Complimentary mineral water during sightseeing",
    ],
    excluded: [
      "Monument entry fees and camera charges",
      "Lunches and dinners",
      "Flying Fox zipline adventure ticket at Mehrangarh Fort (optional add-on)",
    ],
    bestTime: "October – March (Mild days 16°C–26°C with cool desert nights)",
    groupSize: "Private Tour (2 to 20 travellers)",
    faqs: [
      {
        q: "Can we travel to Jodhpur directly from Jaipur by car?",
        a: "Yes! The drive from Jaipur to Jodhpur takes approximately 5.5 hours along smooth 4-lane highways. We can provide door-to-door car rental from Jaipur with scenic en-route stops at Ajmer or Pushkar.",
      },
      {
        q: "Is the Bishnoi village safari suitable for children and seniors?",
        a: "Yes, it is a gentle and culturally enriching open-jeep drive through rural countryside, highly praised by families and wildlife lovers.",
      },
    ],
  },
  {
    slug: "udaipur-tour",
    title: "Udaipur Lakes & Palaces",
    subtitle: "The most romantic city in India with shimmering lakes and heritage luxury",
    location: "Udaipur",
    region: "Rajasthan",
    themes: ["Honeymoon", "Heritage", "Luxury"],
    nights: 3,
    days: 4,
    price: 14500,
    rating: 4.9,
    reviews: 236,
    image: "/images/udaipur-lake-palace.jpg",
    gallery: ["/images/udaipur-lake-palace.jpg", "/images/city-palace-udaipur.jpg", "/images/udaipur.jpg"],
    overview:
      "Framed by the purple Aravalli hills and centered around shimmering freshwater lakes, Udaipur is widely acclaimed as the most romantic city in Asia. Founded in 1559 by Maharana Udai Singh II, the City of Lakes is famous for its whitewashed marble palaces that seem to float gracefully on the waters of Lake Pichola. This 4-day private getaway combines royal heritage with leisurely lakeside indulgence: explore the colossal City Palace, take a private sunset boat cruise past the Taj Lake Palace and Jag Mandir, wander through royal fountain gardens at Saheliyon Ki Bari, and watch vibrant Rajasthani folk dances at Bagore Ki Haveli.",
    highlights: [
      "Comprehensive private tour of Rajasthan's largest royal palace complex — City Palace",
      "Scenic sunset boat ride on Lake Pichola with stops at the island palace Jag Mandir",
      "Visit to Saheliyon Ki Bari (Garden of the Maidens) with gravity-fed fountains and lotus pools",
      "Dharohar folk dance and puppet performance at the 18th-century Bagore Ki Haveli",
      "Panoramic views of Udaipur's lakes from the hilltop Monsoon Palace (Sajjangarh)",
      "Intricately carved 17th-century Jagdish Temple and vintage car museum",
      "Candlelit rooftop dinner overlooking illuminated lake palaces",
    ],
    itinerary: [
      {
        title: "Arrival in Udaipur & Lakeside Evening",
        detail:
          "Pickup from Udaipur Maharana Pratap Airport (UDR), Railway Station, or private road transfer from Jaipur. Check into your hotel. Afternoon visit to the intricately carved Jagdish Temple. At sunset, enjoy a tranquil stroll around Ambrai Ghat with spectacular views of City Palace across Lake Pichola.",
      },
      {
        title: "City Palace, Jag Mandir & Pichola Sunset Cruise",
        detail:
          "Morning guided exploration of the grand City Palace complex, including the Peacock Courtyard, Crystal Gallery, and Zenana Mahal. In the late afternoon, board a private boat cruise across Lake Pichola visiting the island palace Jag Mandir. In the evening, attend the vibrant Dharohar folk dance show at Bagore Ki Haveli.",
      },
      {
        title: "Saheliyon Ki Bari, Fateh Sagar Lake & Monsoon Palace",
        detail:
          "Visit the historic Saheliyon Ki Bari gardens and the Vintage Classic Car Collection. Drive around the picturesque promenade of Fateh Sagar Lake. Late afternoon ascent to the high hilltop Monsoon Palace (Sajjangarh) for unforgettable sunset panoramas over the Aravalli range and lakes.",
      },
      {
        title: "Shopping & Departure",
        detail:
          "Leisurely breakfast. Morning walk through Hathi Pol bazaar for Pichwai paintings, silver jewellery, and authentic Mewari handicrafts. Private transfer to the airport or railway station for departure.",
      },
    ],
    vehicles: ["Sedan (Etios/Dzire)", "SUV (Innova Crysta)", "Luxury Tempo Traveller"],
    included: [
      "3 Nights hotel accommodation in Udaipur",
      "Daily buffet breakfast",
      "All transfers & sightseeing by private AC vehicle",
      "Lake Pichola sunset boat ride tickets",
      "Bagore Ki Haveli Dharohar cultural show tickets",
      "All highway tolls, parking fees, and driver allowances",
      "Airport/railway station pickup and drop-off",
    ],
    excluded: [
      "Monument entry fees (City Palace, Monsoon Palace)",
      "Lunches, dinners, and personal expenses",
      "Camera/video charges at monuments",
    ],
    bestTime: "September – March (Crisp 14°C to 28°C; lakes are full post-monsoon)",
    groupSize: "Private Tour (2 to 15 travellers)",
    faqs: [
      {
        q: "Is this tour package ideal for honeymoons?",
        a: "Absolutely! Udaipur is India's top honeymoon destination. We can arrange romantic lake-view room upgrades, candlelight dinners, cake, and floral bed decorations on request.",
      },
      {
        q: "Can we include a day trip to Kumbhalgarh and Ranakpur?",
        a: "Yes! Many of our guests add an extra day to visit Kumbhalgarh Fort (the Great Wall of India) and the 1,444 carved marble pillars of Ranakpur Jain Temple on the way from Jodhpur or as a day excursion.",
      },
    ],
  },
  {
    slug: "jaisalmer-tour",
    title: "Jaisalmer Golden Desert Odyssey",
    subtitle: "Living sandstone citadel, Thar sand dunes and starry desert camp nights",
    location: "Jaisalmer",
    region: "Rajasthan",
    themes: ["Adventure", "Heritage"],
    nights: 2,
    days: 3,
    price: 12800,
    rating: 4.8,
    reviews: 178,
    image: "/images/jaisalmer.jpg",
    gallery: ["/images/jaisalmer.jpg", "/images/desert-safari.jpg", "/images/jaipur-1.jpg"],
    overview:
      "Rising out of the golden sands of the Thar Desert like a scene from Arabian Nights, Jaisalmer is constructed almost entirely of golden-yellow Jurassic sandstone. Unlike any other fort in the world, Sonar Qila (Jaisalmer Fort) is a living fortress where thousands of residents live, trade, and pray within medieval bastions. This 3-day desert odyssey takes you inside stone-carved merchant havelis, along peaceful desert lakes, and deep into the rolling sand dunes of Sam for sunset camel safaris, jeep dune-bashing, and an unforgettable luxury desert camp night around a roaring bonfire with Kalbelia folk dancers.",
    highlights: [
      "Guided walking tour of the living Golden Fort (Sonar Qila) and 15th-century Jain temples",
      "Marvel at the stone-lace filigree carvings of Patwon Ki Haveli and Salim Singh Ki Haveli",
      "Sunset camel safari traversing the rolling sand dunes of Sam",
      "Thrilling 4x4 Jeep dune-bashing across desert crests with expert drivers",
      "Overnight luxury Swiss desert camp stay with private attached washroom and modern amenities",
      "Evening Rajasthani cultural performance with fire dancers, Kalbelia music, and buffet dinner",
      "Visit to the historic rainwater reservoir Gadisar Lake surrounded by artistically carved chhatris",
      "Explore the mysterious abandoned ghost village of Kuldhara",
    ],
    itinerary: [
      {
        title: "Arrival in Jaisalmer & Living Fort Exploration",
        detail:
          "Pickup from Jaisalmer Airport, Railway Station, or private road arrival. Hotel check-in. Afternoon guided tour of the 12th-century living Jaisalmer Fort, exploring the Raj Mahal palace, ancient Jain temples, and cannon viewpoints. Sunset visit to the peaceful waters and shrines of Gadisar Lake.",
      },
      {
        title: "Carved Havelis, Kuldhara Ghost Village & Sam Desert Camp",
        detail:
          "Morning visit to the magnificent Patwon Ki Haveli and Nathmal Ki Haveli. Drive towards the Sam sand dunes, stopping at the eerie 18th-century abandoned ruins of Kuldhara. Arrive at the luxury desert camp by 03:30 PM with traditional dhol welcome. Embark on a sunset camel safari and 4x4 jeep dune drive. Evening bonfire, live Manganiyar music, folk dance, and royal Rajasthani dinner under the stars.",
      },
      {
        title: "Sunrise over Dunes & Departure",
        detail:
          "Early morning tea atop the dunes watching the golden sunrise. Buffet breakfast at the camp. Drive back to Jaisalmer city for souvenir shopping (mirror work, camel leather juttis, and desert spices). Private transfer to the railway station or airport for onward travel.",
      },
    ],
    vehicles: ["SUV (Innova Crysta)", "4x4 Desert Jeep", "Luxury Tempo Traveller"],
    included: [
      "1 Night stay in heritage/boutique hotel in Jaisalmer city",
      "1 Night luxury Swiss-tent stay at Sam Sand Dunes with attached bathroom",
      "Daily breakfast + 1 lavish royal dinner at the desert camp",
      "Sunset camel safari on Sam sand dunes",
      "4x4 Jeep dune-bashing safari",
      "Evening folk dance (Kalbelia) and musical bonfire entertainment",
      "All private AC road transfers and sightseeing",
      "Tolls, parking, and driver night allowances",
    ],
    excluded: [
      "Monument entry tickets and guide tips",
      "Quad biking and parasailing at dunes (optional on-spot payment)",
      "Lunch on all days",
    ],
    bestTime: "October – February (Pleasant 18°C–24°C days, crisp chilly desert nights 8°C–12°C)",
    groupSize: "Private Tour (2 to 20 travellers)",
    faqs: [
      {
        q: "Are the desert camps safe for families and solo female travellers?",
        a: "Yes, 100%! We partner exclusively with vetted, fenced luxury camps with 24-hour security, warm running water, private attached western bathrooms, and family-friendly staff.",
      },
      {
        q: "What should I pack for the desert camp night?",
        a: "The desert temperature drops significantly after sunset between November and February. Pack a warm jacket, fleece sweater, comfortable walking shoes, and sunglasses for daytime sand glares.",
      },
    ],
  },
  {
    slug: "ranthambore-wildlife-tour",
    title: "Ranthambore Royal Bengal Tiger Safari",
    subtitle: "Thrilling jungle safaris in the legendary hunting grounds of Jaipur Maharajas",
    location: "Ranthambore",
    region: "Rajasthan",
    themes: ["Adventure", "Nature"],
    nights: 2,
    days: 3,
    price: 13500,
    rating: 4.8,
    reviews: 94,
    image: "/images/amer-fort.jpg",
    gallery: ["/images/amer-fort.jpg", "/images/jaipur.jpg", "/images/desert-safari.jpg"],
    overview:
      "Witness the majestic Royal Bengal Tiger in one of India's most celebrated wildlife sanctuaries. Located just 3 hours from Jaipur where the ancient Aravalli and Vindhya ranges converge, Ranthambore National Park is famous for its high tiger density and dramatic landscape of 1,000-year-old fort ruins, ancient banyan trees, and lotus-filled lakes. This 3-day wildlife tour includes 2 guided jungle safaris in open 6-seater 4x4 Gypsys accompanied by expert forest naturalists, visits to the cliffside 10th-century Ranthambore Fort, and the sacred Trinetra Ganesh Temple.",
    highlights: [
      "2 Thrilling open-top 6-seater 4x4 Gypsy jungle safaris in prime tiger zones",
      "High probability of sighting Bengal tigers, leopards, sloth bears, and marsh crocodiles",
      "Visit to the UNESCO-listed 10th-century Ranthambore Fort set inside the national park",
      "Darshan at the sacred Trinetra (three-eyed) Ganesh Temple atop the fort",
      "Explore Padam Talao lake and the historic Jogi Mahal with India's 2nd-largest banyan tree",
      "Birdwatching around scenic Surwal Lake for painted storks and migratory waterfowl",
      "Comfortable wildlife resort stay with swimming pool and evening nature talks",
    ],
    itinerary: [
      {
        title: "Jaipur to Ranthambore Drive & Afternoon Safari",
        detail:
          "08:00 AM pickup from Jaipur and scenic 3-hour highway drive to Sawai Madhopur via the new expressway. Check in at your wildlife resort and lunch. 02:30 PM departure for your first afternoon jungle safari in an open 4x4 Gypsy with a certified forest tracker exploring prime zones. Evening tea, wildlife documentary, and dinner at the resort.",
      },
      {
        title: "Morning Jungle Safari & Ranthambore Fort Trek",
        detail:
          "06:00 AM early morning second jungle safari into the forest mist tracking fresh pugmarks around lakes and rocky ridges. Return to the resort for hot breakfast and relaxation. In the afternoon, visit the dramatic 10th-century Ranthambore Fort and Trinetra Ganesh temple with breathtaking panoramic views over the tiger reserve.",
      },
      {
        title: "Village Craft Center & Return to Jaipur",
        detail:
          "Relaxed breakfast. Visit the Dastkar Ranthambore craft cooperative supporting local women artisans with hand block-printing and pottery. Midday drive back to Jaipur, dropping you at the airport, station, or hotel.",
      },
    ],
    vehicles: ["Private AC Car (Jaipur–Ranthambore transfers)", "Open 4x4 Jungle Gypsy (Safari)"],
    included: [
      "2 Nights stay in wildlife jungle resort in Sawai Madhopur",
      "All meals (Breakfast, Lunch & Dinner at the resort)",
      "2 Jungle Safaris in shared open 6-seater 4x4 Gypsy with forest permits & naturalist",
      "Jaipur–Ranthambore–Jaipur private AC car transfers",
      "All highway tolls, driver allowances, and forest entry fees",
    ],
    excluded: [
      "Camera/video lens fees as levied by the Forest Department",
      "Personal expenses, tips to naturalists and drivers",
    ],
    bestTime: "October to June (Park closed July–Sept; highest tiger sightings in April–June)",
    groupSize: "2 to 12 travellers",
    faqs: [
      {
        q: "How far in advance should we book Ranthambore safaris?",
        a: "We strongly recommend booking at least 60 to 90 days in advance. Forest department permits for the prime zones (Zones 1 to 5) are strictly limited and sell out rapidly.",
      },
      {
        q: "Can we guarantee tiger sightings?",
        a: "While wild animals move freely and sightings can never be 100% guaranteed by any operator, Ranthambore has one of the world's highest tiger densities, and taking two safaris maximizes your sighting chances to over 80%.",
      },
    ],
  },
  {
    slug: "mount-abu-hill-retreat",
    title: "Mount Abu Hill Retreat & Dilwara",
    subtitle: "Rajasthan's only hill station, cool mountain pine breeze and exquisite marble shrines",
    location: "Mount Abu",
    region: "Rajasthan",
    themes: ["Honeymoon", "Heritage", "Nature"],
    nights: 2,
    days: 3,
    price: 11800,
    rating: 4.7,
    reviews: 86,
    image: "/images/udaipur.jpg",
    gallery: ["/images/udaipur.jpg", "/images/udaipur-lake-palace.jpg", "/images/city-palace-udaipur.jpg"],
    overview:
      "Escape to Rajasthan's only hill station, nestled at 4,000 feet in the southern Aravalli hills near the Gujarat border. Mount Abu is renowned for its cool mountain pine breezes, tranquil lakes, and the world-famous 11th-century Dilwara Jain Temples, whose white marble filigree carvings rival the finest stone sculpture on earth. This 3-day mountain retreat features relaxed boating on sacred Nakki Lake, stunning vistas from Guru Shikhar (the highest peak in Rajasthan), sunset cliff views, and visits to Achalgarh Fort.",
    highlights: [
      "Marvel at the impossible marble lace carvings of the 11th-century Dilwara Jain Temples",
      "Sunset shikara paddle boating on picturesque Nakki Lake",
      "Ascend to Guru Shikhar (5,650 ft), the highest peak of the Aravalli mountain range",
      "Spectacular golden sunset views dipping into valley mist from Sunset Point",
      "Explore the unique Toad Rock natural outcrop and Achalgarh Fort",
      "Stroll the vibrant evening bazaars of Mount Abu for Rajasthani quilts and sweets",
    ],
    itinerary: [
      {
        title: "Arrival in Mount Abu & Nakki Lake Sunset",
        detail:
          "Pickup from Abu Road Railway Station, Udaipur, or Jaipur. Scenic uphill mountain drive through pine and oak forests. Hotel check-in. Afternoon visit to Nakki Lake with relaxing boat ride and short walk up to Toad Rock. Evening walk around the lakeside promenade.",
      },
      {
        title: "Dilwara Temples & Guru Shikhar Mountain Peak",
        detail:
          "Morning guided visit to the awe-inspiring Dilwara Temples to examine marble ceilings carved with dancing celestial maidens. Drive up to Guru Shikhar, visiting the Dattatreya temple with panoramic mountain views. In the late afternoon, witness the dramatic sunset at Sunset Point.",
      },
      {
        title: "Achalgarh Fort, Peace Park & Departure",
        detail:
          "Visit the historic Achalgarh Fort and Achaleshwar Mahadev temple featuring Lord Shiva's sacred toe print. Stroll through the lush Brahma Kumaris Peace Park gardens. Afternoon drop-off at Abu Road railway station or onward transfer.",
      },
    ],
    vehicles: ["Sedan (Etios/Dzire)", "SUV (Innova Crysta)"],
    included: [
      "2 Nights hotel accommodation in Mount Abu",
      "Daily buffet breakfast",
      "All mountain transfers and sightseeing by private AC car",
      "Nakki Lake boat cruise ticket",
      "All toll taxes, parking, and driver allowances",
    ],
    excluded: ["Entry fees, lunch, dinner, and personal expenses"],
    bestTime: "Year-round (Crisp 10°C–22°C in winter; lush waterfalls in monsoon July–Sept)",
    groupSize: "2 to 10 travellers",
    faqs: [
      {
        q: "What is the best way to reach Mount Abu?",
        a: "The nearest railway junction is Abu Road (ABR), just 28 km down the hill. It connects with direct trains from Jaipur, Mumbai, Delhi, and Ahmedabad. We also combine Mount Abu with Udaipur road tours.",
      },
    ],
  },
  {
    slug: "bikaner-desert-palace-tour",
    title: "Bikaner Royal Palaces & Desert Heritage",
    subtitle: "Unconquered Junagarh Fort, Karni Mata temple, camel research and royal havelis",
    location: "Bikaner",
    region: "Rajasthan",
    themes: ["Heritage", "Adventure"],
    nights: 2,
    days: 3,
    price: 10800,
    rating: 4.8,
    reviews: 79,
    image: "/images/jaipur-2.jpg",
    gallery: ["/images/jaipur-2.jpg", "/images/jaisalmer.jpg", "/images/desert-safari.jpg"],
    overview:
      "Step off the beaten path into Bikaner, the royal desert kingdom founded in 1488 along ancient caravan trade routes. Celebrated for its formidable Junagarh Fort — one of the very few major fortresses in Rajasthan never conquered by invading armies — Bikaner boasts breathtaking Dulmera red sandstone havelis, rich miniature art, and world-famous culinary snacks. This 3-day heritage tour covers Junagarh Fort, the 600-year-old Karni Mata Temple at Deshnok, the National Research Centre on Camel, and the architectural wonder of Rampuria Havelis.",
    highlights: [
      "Explore the unconquered Junagarh Fort including Badal Mahal, Anup Mahal, and royal armories",
      "Architectural heritage walk through the ornate red-sandstone Rampuria Havelis",
      "Visit the famous 600-year-old Karni Mata Temple (Rat Temple) at Deshnok",
      "Tour Asia's only National Camel Breeding & Research Farm; taste camel milk ice cream",
      "Admire the grand Indo-Saracenic architecture of Lalgarh Palace and Museum",
      "Taste authentic fresh Bikaneri Bhujia, Rasgullas, and Ghewar at historic Kote Gate halwais",
    ],
    itinerary: [
      {
        title: "Jaipur to Bikaner Drive & Rampuria Havelis",
        detail:
          "Morning departure from Jaipur on smooth 4-lane NH11 highway (approx. 5 hrs). Check into your heritage hotel in Bikaner. Afternoon walking tour through the red-sandstone Rampuria Havelis and Kote Gate bazaar, sampling fresh Bikaneri Bhujia straight from the kadhai.",
      },
      {
        title: "Junagarh Fort & Karni Mata Temple Deshnok",
        detail:
          "Morning comprehensive tour of the unconquered Junagarh Fort with an expert guide. In the afternoon, drive 30 km south to the legendary Karni Mata Temple at Deshnok to observe the thousands of revered sacred rats. Return to Bikaner for evening tea at Lalgarh Palace.",
      },
      {
        title: "Camel Research Centre & Return",
        detail:
          "Visit the National Research Centre on Camel to learn about desert breeds and taste camel-milk coffee and kulfi. Midday return drive to Jaipur or drop-off at Bikaner Junction.",
      },
    ],
    vehicles: ["Sedan (Etios/Dzire)", "SUV (Innova Crysta)", "Tempo Traveller"],
    included: [
      "2 Nights hotel accommodation in Bikaner",
      "Daily breakfast",
      "All transfers & sightseeing by private AC car",
      "Tolls, parking, and driver allowances",
    ],
    excluded: ["Entry fees, lunch, dinner, personal expenses"],
    bestTime: "October – March (Mild sunny days, cool evenings; Camel Festival in January)",
    groupSize: "2 to 15 travellers",
    faqs: [
      {
        q: "How far is Bikaner from Jaipur?",
        a: "Bikaner is approximately 330 km from Jaipur, connected by a smooth 4-lane highway via Sikar. The drive takes around 5 hours with comfortable highway food stops.",
      },
    ],
  },
  {
    slug: "luxury-rajasthan-tour",
    title: "Luxury Rajasthan Palace Trail",
    subtitle: "Stay like royalty across Jaipur, Jodhpur and Udaipur in heritage 5-star palace hotels",
    location: "Jaipur · Jodhpur · Udaipur",
    region: "Rajasthan",
    themes: ["Luxury", "Heritage", "Honeymoon"],
    nights: 6,
    days: 7,
    price: 48000,
    rating: 4.9,
    reviews: 82,
    image: "/images/rambagh-palace.jpg",
    gallery: ["/images/rambagh-palace.jpg", "/images/udaipur-lake-palace.jpg", "/images/city-palace-udaipur.jpg"],
    overview:
      "The definitive royal odyssey through Rajasthan's three legendary heritage capitals: the Pink City of Jaipur, the Sun City of Jodhpur, and the City of Lakes, Udaipur. Designed for discerning travelers seeking five-star refinement, this slow and indulgent 7-day tour features stays in authentic converted heritage palace hotels, private licensed palace guides, dedicated luxury chauffeur-driven vehicles, candlelit lakeside dinners, and curated shopping experiences.",
    highlights: [
      "Overnight stays in authentic royal palace and 5-star heritage hotels",
      "VIP private access and expert-guided tours of Amber Fort, City Palace, and Mehrangarh",
      "Private sunset boat charter on Lake Pichola overlooking the illuminated Taj Lake Palace",
      "Scenic countryside drive through the Aravalli hills with stop at Ranakpur Jain Temple",
      "Luxury chauffeur-driven sedan with daily chilled refreshments and on-call concierge",
      "Private curated royal dining experiences with regional Rajasthani culinary masters",
    ],
    itinerary: [
      { title: "VIP Welcome to Jaipur", detail: "VIP airport pickup, luxury palace check-in, and welcome dinner." },
      { title: "Jaipur Royal Trail", detail: "Private guided tour of Amber Fort, City Palace, and private gem atelier." },
      { title: "Jaipur to Jodhpur Drive", detail: "Scenic drive to Jodhpur; check into a heritage palace; sunset at Jaswant Thada." },
      { title: "Jodhpur Blue City & Fort", detail: "Private tour of Mehrangarh Fort, Umaid Bhawan museum, and blue lanes." },
      { title: "Jodhpur to Udaipur via Ranakpur", detail: "Drive through the Aravallis, private tour of 1444 marble pillars at Ranakpur." },
      { title: "Udaipur Lakes & Palaces", detail: "Private City Palace tour and chartered sunset boat cruise on Lake Pichola." },
      { title: "Departure", detail: "Relaxed champagne breakfast and private transfer to Udaipur Airport." },
    ],
    vehicles: ["Luxury Sedan (Toyota Camry / BMW)", "Premium SUV (Innova Crysta Luxury)"],
    included: [
      "6 Nights stay in luxury heritage palace properties",
      "Daily gourmet buffet breakfast and 3 curated palace dinners",
      "Private luxury AC car with dedicated executive chauffeur",
      "Chartered private boat ride on Lake Pichola",
      "Private licensed guides at all major monuments",
      "All tolls, parking fees, and driver allowances",
    ],
    excluded: ["Airfare, monument entry tickets, personal spa expenses, and tips"],
    bestTime: "October – March",
    groupSize: "Private Tour (2 to 8 guests)",
    faqs: [
      {
        q: "Which hotels are included in this luxury tour?",
        a: "We curate from prestigious palace hotels such as Rambagh Palace / Alsisar Haveli in Jaipur, Ajit Bhawan / Raas in Jodhpur, and Taj Lake Palace / Fatehprakash in Udaipur based on your custom preferences.",
      },
    ],
  },
  {
    slug: "grand-rajasthan-circuit",
    title: "Grand 10-Day Royal Rajasthan Circuit",
    subtitle: "The ultimate royal odyssey across Jaipur, Bikaner, Jaisalmer, Jodhpur, Udaipur and Pushkar",
    location: "Jaipur · Bikaner · Jaisalmer · Jodhpur · Udaipur · Pushkar",
    region: "Rajasthan",
    themes: ["Heritage", "Luxury", "Adventure"],
    nights: 9,
    days: 10,
    price: 36500,
    rating: 4.9,
    reviews: 142,
    image: "/images/amer-fort.jpg",
    gallery: ["/images/amer-fort.jpg", "/images/jaisalmer.jpg", "/images/udaipur-lake-palace.jpg", "/images/pushkar.jpg"],
    overview:
      "The definitive Rajasthan road trip of a lifetime. Spanning 10 glorious days, this comprehensive royal circuit weaves through the most iconic kingdoms of the Thar: the rose-pink forts of Jaipur, the unconquered sandstone bastions of Bikaner, the golden sand dunes of Jaisalmer, the blue-washed alleys of Jodhpur, the romantic lakes of Udaipur, and the sacred ghats of Pushkar. Handcrafted by local travel experts who know every scenic highway, authentic roadside dhaba, and sunset viewpoint, this tour provides the ultimate immersion into the soul of royal Rajasthan.",
    highlights: [
      "Comprehensive coverage of all 6 premier Rajasthan destinations in one seamless road trip",
      "UNESCO Fortresses: Amber Fort, Jaisalmer Fort, Mehrangarh Fort, and Udaipur City Palace",
      "Overnight luxury Swiss desert camp stay with camel trek and bonfire at Sam Sand Dunes",
      "Scenic cruise on Lake Pichola past floating white marble palaces in Udaipur",
      "Brahma Temple darshan and evening Maha Aarti on sacred Pushkar Lake",
      "Visit Karni Mata temple at Deshnok and Asia's only Camel Research Centre in Bikaner",
      "Travel comfortably in a dedicated private AC vehicle with professional commercial chauffeur",
    ],
    itinerary: [
      { title: "Day 1: Arrival in Jaipur", detail: "Pickup and check-in. Evening visit to City Palace, Hawa Mahal, and local craft bazaars." },
      { title: "Day 2: Jaipur Forts & Palaces", detail: "Full day exploring Amber Fort, Sheesh Mahal, Jal Mahal, and sunset at Nahargarh Fort." },
      { title: "Day 3: Jaipur to Bikaner", detail: "Drive to Bikaner via Sikar. Visit Junagarh Fort and the carved Rampuria Havelis." },
      { title: "Day 4: Bikaner to Jaisalmer", detail: "Visit Karni Mata Temple and Camel Farm; scenic desert highway drive to Jaisalmer." },
      { title: "Day 5: Jaisalmer Living Fort & Sam Desert Dunes", detail: "Explore Jaisalmer Fort and Patwon Ki Haveli. Afternoon transfer to Sam dunes for camel safari and camp stay." },
      { title: "Day 6: Jaisalmer to Jodhpur", detail: "Drive to the Blue City Jodhpur. Afternoon tour of Mehrangarh Fort and Jaswant Thada." },
      { title: "Day 7: Jodhpur to Udaipur via Ranakpur", detail: "Drive through Aravalli hills, stop at Ranakpur Jain Temple, arrive in Udaipur by evening." },
      { title: "Day 8: Udaipur City Palace & Lake Pichola", detail: "Full day in Udaipur: City Palace, Saheliyon Ki Bari, and sunset boat ride on Lake Pichola." },
      { title: "Day 9: Udaipur to Pushkar", detail: "Scenic drive to holy Pushkar. Visit Brahma Temple and attend evening aarti at the holy ghats." },
      { title: "Day 10: Pushkar to Jaipur & Departure", detail: "Morning walk around Pushkar Lake; scenic return drive to Jaipur for airport/railway drop." },
    ],
    vehicles: ["Sedan (Etios/Dzire)", "SUV (Innova Crysta)", "Luxury Tempo Traveller (12/17 seater)"],
    included: [
      "9 Nights accommodation (8 nights hotels + 1 night luxury Swiss desert camp)",
      "Daily buffet breakfast + dinner at the desert camp",
      "Sunset camel safari and folk dance performance in Jaisalmer",
      "Lake Pichola boat cruise in Udaipur",
      "All transfers and inter-city travel by private dedicated AC vehicle",
      "All highway toll taxes, parking fees, state border permits, and driver night allowances",
      "Door-to-door pickup and drop-off in Jaipur",
    ],
    excluded: ["Monument entry fees, guide charges, lunches, and personal expenses"],
    bestTime: "October – March (Best road trip weather across the state)",
    groupSize: "Private Tour (2 to 20 guests)",
    faqs: [
      {
        q: "Is 10 days enough for this grand circuit?",
        a: "Yes! 10 days / 9 nights is the gold standard for comfortably covering Rajasthan's prime circuit without excessive driving on any single day.",
      },
      {
        q: "Can the tour start from Delhi or end in Udaipur?",
        a: "Yes! We can customize the pickup and drop-off to start from Delhi, Jaipur, or Jodhpur, and conclude in Udaipur or Jaipur according to your flight tickets.",
      },
    ],
  },
  {
    slug: "golden-triangle-tour",
    title: "Golden Triangle Classic",
    subtitle: "Delhi • Agra • Jaipur — The essential royal and Mughal heritage circuit",
    location: "Delhi · Agra · Jaipur",
    region: "India",
    themes: ["Heritage"],
    nights: 5,
    days: 6,
    price: 25000,
    rating: 4.8,
    reviews: 198,
    image: "/images/taj-mahal.jpg",
    gallery: ["/images/taj-mahal.jpg", "/images/golden-triangle.jpg", "/images/hawa-mahal.jpg"],
    overview:
      "India's most celebrated travel circuit connects the nation's political capital Delhi, the Mughal splendor of Agra, and the Rajput royalty of Jaipur. Designed for first-time visitors and history enthusiasts, this 6-day private journey unveils world-famous architectural wonders including the Taj Mahal at sunrise, the red sandstone ramparts of Agra Fort, the abandoned city of Fatehpur Sikri, the UNESCO monuments of Delhi, and the hilltop palaces of Jaipur. Chauffeured in a comfortable private AC car with dedicated local guides at every monument.",
    highlights: [
      "Witness the awe-inspiring Taj Mahal at sunrise as the white marble glows pink and gold",
      "Explore Delhi's historic monuments: Qutub Minar, Humayun's Tomb, and India Gate",
      "Visit Agra Fort and the ghost city of Fatehpur Sikri (Buland Darwaza)",
      "Comprehensive Jaipur tour: Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal",
      "Private air-conditioned car transfers along modern expressways (Yamuna Expressway & NE-4)",
    ],
    itinerary: [
      { title: "Day 1: Arrival in Delhi", detail: "Pickup from Delhi Airport/Station. Check-in. Drive past India Gate, Parliament House, and Rashtrapati Bhavan." },
      { title: "Day 2: Historic Delhi Sightseeing", detail: "Visit Qutub Minar, Humayun's Tomb, Jama Masjid, and take a rickshaw ride through Chandni Chowk." },
      { title: "Day 3: Delhi to Agra via Yamuna Expressway", detail: "Fast 3.5-hr drive to Agra. Check-in. Visit Agra Fort and sunset view of the Taj from Mehtab Bagh." },
      { title: "Day 4: Sunrise Taj Mahal to Jaipur via Fatehpur Sikri", detail: "06:00 AM sunrise visit to Taj Mahal. Breakfast. Drive to Jaipur stopping at the UNESCO city Fatehpur Sikri." },
      { title: "Day 5: Jaipur Royal Heritage", detail: "Full day tour: Amber Fort with Sheesh Mahal, Jal Mahal, City Palace, and Jantar Mantar." },
      { title: "Day 6: Jaipur to Delhi Departure", detail: "Morning visit to Patrika Gate. Return drive to Delhi or drop-off at Jaipur Airport." },
    ],
    vehicles: ["Sedan (Etios/Dzire)", "SUV (Innova Crysta)", "Tempo Traveller"],
    included: [
      "5 Nights hotel stay across Delhi (2N), Agra (1N), and Jaipur (2N)",
      "Daily buffet breakfast",
      "All inter-city transfers and local sightseeing by private AC car",
      "All toll taxes, state road taxes, parking, and driver allowances",
    ],
    excluded: ["Monument entry fees and camera charges", "Lunch and dinner"],
    bestTime: "October – March",
    groupSize: "Private Tour (2 to 15 guests)",
    faqs: [
      {
        q: "Is the Taj Mahal open every day?",
        a: "The Taj Mahal is strictly closed on Fridays. Our itinerary is carefully arranged so your visit falls on any other day of the week.",
      },
    ],
  },
  {
    slug: "varanasi-ayodhya-divine-yatra",
    title: "Varanasi & Ayodhya Divine Yatra",
    subtitle: "Sacred Ganges Ghats, Kashi Vishwanath and Ram Mandir darshan",
    location: "Varanasi · Ayodhya",
    region: "India",
    themes: ["Spiritual", "Heritage"],
    nights: 3,
    days: 4,
    price: 15500,
    rating: 4.9,
    reviews: 118,
    image: "/images/char-dham.jpg",
    gallery: ["/images/char-dham.jpg", "/images/pushkar.jpg"],
    overview:
      "A profoundly spiritual pilgrimage connecting two of the holiest destinations in Hindu civilization. In Varanasi (Kashi), witness the soul-stirring evening Ganga Aarti, take a sunrise boat ride past 84 sacred stone ghats, and seek the blessings of Lord Shiva at the golden Kashi Vishwanath temple. Then journey to sacred Ayodhya to have darshan at the magnificent newly consecrated Shri Ram Janmabhoomi Temple, Hanuman Garhi, and the holy Sarayu River.",
    highlights: [
      "Darshan at the golden Kashi Vishwanath Jyotirlinga Temple & Corridor",
      "Spectacular evening Ganga Aarti from a private boat at Dashashwamedh Ghat",
      "Early morning sunrise boat ride on the sacred Ganges along 84 historic ghats",
      "Darshan at the grand Shri Ram Janmabhoomi Mandir and Hanuman Garhi in Ayodhya",
      "Evening Sarayu River Maha Aarti and Ram Ki Paidi in Ayodhya",
      "Excursion to Sarnath where Gautam Buddha gave his very first sermon",
    ],
    itinerary: [
      { title: "Day 1: Arrival in Varanasi & Evening Ganga Aarti", detail: "Pickup from Varanasi Airport/Station. Check-in. Evening private boat ride to witness the grand Maha Aarti at Dashashwamedh Ghat." },
      { title: "Day 2: Kashi Vishwanath, Ghats & Sarnath", detail: "Early morning sunrise boat ride along the ghats. Darshan at Kashi Vishwanath and Annapurna temple. Afternoon visit to Buddhist ruins at Sarnath." },
      { title: "Day 3: Varanasi to Ayodhya & Ram Mandir Darshan", detail: "Morning drive to Ayodhya (approx. 4 hrs). Check-in. Darshan at Shri Ram Janmabhoomi Temple and Hanuman Garhi. Evening Sarayu Aarti." },
      { title: "Day 4: Kanak Bhawan & Departure", detail: "Morning visit to Kanak Bhawan and Treta Ke Thakur. Private transfer to Ayodhya Airport/Station or Varanasi." },
    ],
    vehicles: ["Sedan (Etios/Dzire)", "SUV (Innova Crysta)", "Tempo Traveller"],
    included: [
      "3 Nights hotel accommodation (2N Varanasi, 1N Ayodhya)",
      "Daily breakfast",
      "Private sunrise & evening boat rides on River Ganga",
      "All inter-city transfers and temple visits by private AC car",
      "All toll taxes, parking, and driver allowances",
    ],
    excluded: ["Special VIP darshan tickets, lunches, and dinners"],
    bestTime: "October – March (Pleasant 14°C–26°C weather along the rivers)",
    groupSize: "Private Tour (2 to 15 guests)",
    faqs: [
      {
        q: "Can we arrange wheelchair assistance for senior citizens?",
        a: "Yes! Both Kashi Vishwanath Corridor and Ayodhya Ram Mandir have dedicated battery-operated e-cart facilities and wheelchair assistance, which we coordinate for your family.",
      },
    ],
  },
  {
    slug: "kashmir-paradise-tour",
    title: "Kashmir Paradise: Valley of Dreams",
    subtitle: "Dal Lake houseboats, Gulmarg Gondola snowfields and pine valleys of Pahalgam",
    location: "Srinagar · Gulmarg · Pahalgam",
    region: "India",
    themes: ["Honeymoon", "Nature"],
    nights: 5,
    days: 6,
    price: 24500,
    rating: 4.8,
    reviews: 165,
    image: "/images/kashmir.jpg",
    gallery: ["/images/kashmir.jpg", "/images/jaipur.jpg"],
    overview:
      "Experience the timeless beauty of the Kashmir Valley, praised for centuries as Heaven on Earth. From traditional hand-carved cedarwood houseboats floating on the mist-covered waters of Dal Lake to the snow-covered peaks of Gulmarg accessible by Asia's highest cable car gondola, Kashmir is pure poetry. This 6-day holiday features shikara rides, Mughal terrace gardens, the gushing Lidder River and pine forests of Pahalgam, and the glacier meadows of Sonamarg.",
    highlights: [
      "Overnight stay on a traditional hand-carved luxury cedar houseboat on Dal Lake",
      "Scenic shikara boat cruise exploring floating vegetable gardens and lotus channels",
      "Cable car ride on the world-famous Gulmarg Gondola to Phase 1 and Phase 2 snow peaks",
      "Excursion through the pine forests of Pahalgam to Betaab Valley and Aru Valley",
      "Visit the royal Mughal Gardens: Shalimar Bagh, Nishat Bagh, and Chashme Shahi",
    ],
    itinerary: [
      { title: "Day 1: Srinagar Arrival & Dal Lake Shikara", detail: "Pickup from Srinagar Airport. Houseboat check-in. Evening sunset shikara ride." },
      { title: "Day 2: Gulmarg Day Trip", detail: "Scenic drive to Gulmarg; ride the Gondola cable car to Apharwat peak; return to Srinagar." },
      { title: "Day 3: Srinagar to Pahalgam Valley", detail: "Drive to Pahalgam via saffron fields of Pampore. Evening stroll along Lidder River." },
      { title: "Day 4: Pahalgam Betaab & Aru Valleys", detail: "Explore Betaab Valley, Aru Valley, and Chandanwari by local vehicle." },
      { title: "Day 5: Pahalgam to Srinagar & Mughal Gardens", detail: "Return drive to Srinagar; visit Shalimar and Nishat Mughal Gardens." },
      { title: "Day 6: Departure", detail: "Breakfast and transfer to Srinagar Airport for onward flight." },
    ],
    vehicles: ["Sedan (Etios)", "SUV (Innova / Tavera)"],
    included: [
      "4 Nights hotel in Srinagar/Pahalgam + 1 Night luxury houseboat on Dal Lake",
      "Daily breakfast and dinner (MAP plan)",
      "1-Hour Dal Lake shikara ride",
      "All transfers & sightseeing by private dedicated vehicle",
      "Tolls, parking, and driver allowances",
    ],
    excluded: ["Airfare, Gulmarg Gondola tickets, pony rides, and personal expenses"],
    bestTime: "April – October for flowers & greenery; Dec – Feb for snow & skiing",
    groupSize: "2 to 12 travellers",
    faqs: [
      {
        q: "How early should we book Gulmarg Gondola tickets?",
        a: "Gondola tickets must be booked online at least 3 to 4 weeks prior as daily visitor quotas are strictly enforced.",
      },
    ],
  },
  {
    slug: "kerala-backwaters-tour",
    title: "Kerala Backwaters & Hill Country",
    subtitle: "Misty Munnar tea hills, Thekkady spice estates and private Alleppey houseboat",
    location: "Munnar · Thekkady · Alleppey",
    region: "India",
    themes: ["Nature", "Honeymoon"],
    nights: 4,
    days: 5,
    price: 19500,
    rating: 4.8,
    reviews: 104,
    image: "/images/kerala.jpg",
    gallery: ["/images/kerala.jpg"],
    overview:
      "A soothing tropical journey through God's Own Country. Contrast the crisp mountain air and rolling emerald tea plantations of Munnar with the fragrant cardamom hills of Thekkady, concluding with a private luxury houseboat cruise along the palm-fringed backwaters of Alleppey. Enjoy authentic Keralan hospitality, fresh coastal cuisine, and relaxing Ayurvedic traditions.",
    highlights: [
      "Overnight cruise on a private air-conditioned thatched houseboat in Alleppey backwaters",
      "Stroll through rolling green tea estates and visit a heritage tea museum in Munnar",
      "Spice garden walk in Thekkady discovering fresh cardamom, cloves, and vanilla",
      "Witness an authentic Kathakali dance-drama and Kalaripayattu martial arts show",
      "Delicious traditional Kerala meals served on banana leaves with Karimeen fish",
    ],
    itinerary: [
      { title: "Day 1: Kochi to Munnar Drive", detail: "Pickup from Kochi Airport/Station. Scenic drive past Cheeyappara waterfalls to Munnar. Hotel check-in." },
      { title: "Day 2: Munnar Tea Hills Sightseeing", detail: "Visit Eravikulam National Park (Nilgiri Tahr), Tea Museum, Mattupetty Dam, and Echo Point." },
      { title: "Day 3: Munnar to Thekkady Spice Trail", detail: "Drive through the Western Ghats to Thekkady. Afternoon spice plantation tour and Periyar Lake boat safari." },
      { title: "Day 4: Thekkady to Alleppey Houseboat", detail: "Drive to Alleppey. Board your private luxury houseboat by 12:00 noon. Cruise tranquil canals with all meals served on board." },
      { title: "Day 5: Alleppey to Kochi Departure", detail: "Breakfast on the water. Disembark by 09:00 AM and drive to Kochi airport or station." },
    ],
    vehicles: ["Sedan (Etios/Dzire)", "SUV (Innova Crysta)"],
    included: [
      "3 Nights hotel stay + 1 Night private AC houseboat in Alleppey",
      "Daily breakfast (All meals included on the houseboat: Lunch, Tea/Snacks, Dinner, Breakfast)",
      "All transfers and sightseeing by private AC car with chauffeur",
      "All tolls, parking, and driver allowances",
    ],
    excluded: ["Airfare, entry fees to parks/shows, Ayurvedic treatments (optional add-on)"],
    bestTime: "September – March (Pleasant tropical 22°C–30°C)",
    groupSize: "2 to 8 travellers",
    faqs: [
      {
        q: "Is the Alleppey houseboat shared or private?",
        a: "100% PRIVATE! You have the entire houseboat to yourself with a dedicated captain, engine driver, and personal chef.",
      },
    ],
  },
  {
    slug: "char-dham-yatra",
    title: "Sacred Char Dham Yatra of Uttarakhand",
    subtitle: "Holy pilgrimage to Yamunotri, Gangotri, Kedarnath and Badrinath",
    location: "Uttarakhand",
    region: "India",
    themes: ["Spiritual"],
    nights: 10,
    days: 11,
    price: 42000,
    rating: 4.9,
    reviews: 88,
    image: "/images/char-dham.jpg",
    gallery: ["/images/char-dham.jpg"],
    overview:
      "The ultimate sacred pilgrimage across the Garhwal Himalayas of Uttarakhand, visiting the four holy abodes: Yamunotri, Gangotri, Kedarnath, and Badrinath. We manage all biometric registrations, handpicked hillside hotels, hill-experienced commercial drivers, and emergency assistance so that your family can focus completely on divine devotion and darshan.",
    highlights: [
      "Complete darshan of all 4 sacred Himalayan Dhams: Yamunotri, Gangotri, Kedarnath, Badrinath",
      "Evening Ganga Aarti at the legendary Har Ki Pauri in Haridwar",
      "Visit the sacred source of the holy rivers Yamuna and Ganga",
      "Kedarnath Jyotirlinga darshan amidst towering snow-clad peaks",
      "Badrinath Temple, Tapt Kund holy hot springs, and Mana (India's first border village)",
      "Experienced mountain chauffeurs specializing in high-altitude Himalayan roads",
    ],
    itinerary: [
      { title: "Day 1: Haridwar to Barkot", detail: "Pickup from Haridwar/Dehradun. Drive to Barkot via Mussoorie and Kempty Falls." },
      { title: "Day 2: Yamunotri Darshan", detail: "Early drive to Janki Chatti. 6 km trek/pony to Yamunotri Temple and holy Surya Kund. Return to Barkot." },
      { title: "Day 3: Barkot to Uttarkashi", detail: "Drive to Uttarkashi along the Bhagirathi River. Visit Kashi Vishwanath temple." },
      { title: "Day 4: Gangotri Darshan", detail: "Excursion to Gangotri Temple through Harsil Valley. Holy dip and puja. Return to Uttarkashi." },
      { title: "Day 5: Uttarkashi to Guptkashi", detail: "Scenic drive past Mandakini river confluence to Guptkashi. Yatra preparations." },
      { title: "Day 6: Guptkashi to Kedarnath", detail: "Drive to Sonprayag/Gaurikund. Trek (16 km) or helicopter to Kedarnath. Evening temple aarti." },
      { title: "Day 7: Kedarnath to Guptkashi", detail: "Morning VIP darshan of Lord Shiva. Descend to Gaurikund and drive back to Guptkashi hotel." },
      { title: "Day 8: Guptkashi to Badrinath", detail: "Drive to Badrinath via Joshimath. Check-in. Evening darshan and Tapt Kund hot springs." },
      { title: "Day 9: Badrinath to Rudraprayag", detail: "Morning darshan, visit Mana village, Vyas Gufa, and Bhim Pul. Drive down to Rudraprayag." },
      { title: "Day 10: Rudraprayag to Rishikesh", detail: "Drive via Devprayag (confluence of Alaknanda & Bhagirathi). Evening Ganga Aarti at Rishikesh." },
      { title: "Day 11: Rishikesh to Haridwar & Departure", detail: "Morning temple visits, drop-off at Haridwar Railway Station or Dehradun Airport." },
    ],
    vehicles: ["SUV (Innova Crysta - Hill Certified)", "Tempo Traveller (12/17-Seater 4x2 Hill Spec)"],
    included: [
      "10 Nights hotel accommodation with attached washrooms",
      "Daily breakfast and dinner (pure vegetarian satvik meals)",
      "Dedicated hill-experienced driver with commercial permit",
      "Complete assistance with mandatory Uttarakhand Char Dham registration",
      "All state green taxes, tolls, parking, and driver allowances",
    ],
    excluded: ["Helicopter shuttle tickets for Kedarnath (available as add-on)", "Pony / Palki charges", "Personal puja donations"],
    bestTime: "May – June and September – October (Temples open on Akshaya Tritiya, close on Diwali)",
    groupSize: "2 to 20 pilgrims",
    faqs: [
      {
        q: "Can we arrange Kedarnath helicopter tickets?",
        a: "Yes! We assist in booking Kedarnath helicopter tickets via the official IRCTC portal from Phata, Guptkashi, or Sirsi helipads subject to availability.",
      },
    ],
  },
  {
    slug: "goa-beach-holiday",
    title: "Goa Sunshine & Heritage Escape",
    subtitle: "Golden beaches, UNESCO Portuguese churches, water sports and coastal susegad",
    location: "North & South Goa",
    region: "India",
    themes: ["Beach"],
    nights: 3,
    days: 4,
    price: 13500,
    rating: 4.7,
    reviews: 152,
    image: "/images/goa.jpg",
    gallery: ["/images/goa.jpg"],
    overview:
      "Soak in the golden sunshine and coastal charm of India's favorite seaside holiday. Combining vibrant North Goa shores with Portuguese colonial architecture and serene South Goa sands, this 4-day beach break includes visits to Fort Aguada, the UNESCO-listed churches of Old Goa, water sports on Calangute, and a sunset river cruise on the Mandovi.",
    highlights: [
      "Explore the golden beaches of North Goa: Baga, Calangute, and Anjuna",
      "Panoramic ocean views from the 17th-century Portuguese Fort Aguada",
      "Visit Old Goa's UNESCO World Heritage Basilica of Bom Jesus and Se Cathedral",
      "Enjoy a sunset boat cruise with live Goan folk music along the Mandovi River",
      "Stroll the colourful Latin Quarter of Fontainhas in Panaji",
    ],
    itinerary: [
      { title: "Day 1: Arrival & Beach Relaxation", detail: "Pickup from Goa Airport (GOI/GOX) or Madgaon Station. Check-in. Evening relaxing at the beach shack." },
      { title: "Day 2: North Goa Forts & Beaches", detail: "Fort Aguada, Calangute Beach, Baga Beach, water sports, and sunset at Anjuna." },
      { title: "Day 3: South Goa Heritage & Mandovi Cruise", detail: "Visit Old Goa UNESCO churches, Mangueshi Temple, Fontainhas, and evening Mandovi River cruise." },
      { title: "Day 4: Departure", detail: "Morning beach stroll, breakfast, and airport drop-off." },
    ],
    vehicles: ["Sedan (Etios)", "SUV (Innova Crysta)"],
    included: [
      "3 Nights stay in premium beach resort with swimming pool",
      "Daily buffet breakfast",
      "All transfers & sightseeing by private AC car",
      "Mandovi River sunset cruise ticket",
      "All tolls, parking, and driver allowances",
    ],
    excluded: ["Water sports tickets, meals other than breakfast, personal expenses"],
    bestTime: "November – February",
    groupSize: "2 to 12 travellers",
    faqs: [{ q: "Are water sports included?", a: "They can be added at the beach counter based on your choice of jet-ski, parasailing, or banana rides." }],
  },
  {
    slug: "leh-ladakh-adventure",
    title: "Leh Ladakh High-Altitude Adventure",
    subtitle: "Pangong Tso, Khardung La Pass, Nubra sand dunes and ancient monasteries",
    location: "Leh · Nubra · Pangong",
    region: "India",
    themes: ["Adventure", "Nature"],
    nights: 6,
    days: 7,
    price: 31000,
    rating: 4.9,
    reviews: 110,
    image: "/images/ladakh.jpg",
    gallery: ["/images/ladakh.jpg"],
    overview:
      "Cross the highest motorable mountain passes on earth into the Moonland of Ladakh. This epic 7-day adventure takes you across Khardung La (17,582 ft) into the Nubra Valley to ride double-humped Bactrian camels, camp along the crystal turquoise waters of Pangong Tso, and explore centuries-old Tibetan Buddhist monasteries.",
    highlights: [
      "Drive across Khardung La Pass (17,582 ft) — one of the highest motorable roads in the world",
      "Overnight luxury dome camping by the shifting turquoise waters of Pangong Tso",
      "Ride double-humped Bactrian camels across the cold desert sand dunes of Hunder",
      "Explore Diskit Monastery and its 106-ft outdoor statue of Maitreya Buddha",
      "Visit Thiksey Monastery, Hemis Monastery, and the gravity-defying Magnetic Hill",
    ],
    itinerary: [
      { title: "Day 1: Arrival in Leh & Mandatory Acclimatization", detail: "Airport pickup. Complete rest all day to acclimatize to high altitude (11,500 ft)." },
      { title: "Day 2: Leh Local Sights & Monasteries", detail: "Visit Shanti Stupa, Leh Palace, Magnetic Hill, and the Indus-Zanskar Sangam." },
      { title: "Day 3: Leh to Nubra Valley via Khardung La", detail: "Drive over Khardung La (17,582 ft) into Nubra Valley. Diskit Monastery and Hunder camel ride." },
      { title: "Day 4: Nubra Valley to Pangong Tso via Shyok", detail: "Scenic off-road drive along the Shyok River to Pangong Lake. Camp check-in and sunset by the lake." },
      { title: "Day 5: Pangong Tso to Leh via Chang La", detail: "Sunrise photography over the lake. Return drive to Leh over Chang La pass (17,688 ft)." },
      { title: "Day 6: Thiksey & Hemis Monastery Tour", detail: "Full day tour of Thiksey Gompa, Shey Palace, and Hemis Monastery. Evening shopping in Leh market." },
      { title: "Day 7: Departure", detail: "Early morning transfer to Leh Airport for your onward flight." },
    ],
    vehicles: ["SUV (Innova / Scorpio 4x4)"],
    included: [
      "6 Nights accommodation (Hotels in Leh + Luxury camps in Nubra and Pangong)",
      "Daily breakfast and dinner",
      "All Inner Line Permits, Wildlife fees, and Environmental fees arranged",
      "Dedicated high-altitude SUV with experienced local Ladakhi driver",
      "Emergency oxygen cylinder in vehicle during high-pass drives",
    ],
    excluded: ["Airfare, camel ride fee, and personal expenses"],
    bestTime: "May – September (Passes are open, pleasant 15°C–25°C days)",
    groupSize: "2 to 10 adventure travellers",
    faqs: [
      {
        q: "Why is Day 1 rest mandatory in Leh?",
        a: "Leh is at 11,500 ft with thin air and lower oxygen levels. A complete 24-hr rest without physical exertion allows your body to acclimatize safely and prevents Acute Mountain Sickness (AMS).",
      },
    ],
  },
  {
    slug: "kumbhalgarh-ranakpur-trail",
    title: "Kumbhalgarh Great Wall & Ranakpur Marble Trail",
    subtitle: "The second longest continuous wall in the world and 1,444 carved Jain pillars",
    location: "Kumbhalgarh · Ranakpur",
    region: "Rajasthan",
    themes: ["Heritage", "Nature"],
    nights: 1,
    days: 2,
    price: 8500,
    rating: 4.8,
    reviews: 64,
    image: "/images/amer-fort.jpg",
    gallery: ["/images/amer-fort.jpg", "/images/city-palace-udaipur.jpg"],
    overview:
      "A captivating 2-day heritage excursion into the rugged Aravalli mountains of Mewar. Stand in awe before Kumbhalgarh Fort, whose formidable 36-kilometer-long stone rampart is officially the second longest continuous wall in the world after the Great Wall of China. Then wind down through forest passes to Ranakpur, home to the 15th-century Chaturmukha Jain Temple — an architectural miracle of 1,444 uniquely hand-carved marble pillars where no two pillars share the same motif.",
    highlights: [
      "Walk the ramparts of Kumbhalgarh Fort, birthplace of legendary warrior Maharana Pratap",
      "Marvel at the Great Wall of India spanning 36 km across 13 mountain peaks",
      "Explore Badal Mahal (Cloud Palace) perched atop the highest point of the fortress",
      "Guided tour of Ranakpur Jain Temple featuring 1,444 intricately chiseled marble pillars",
      "Scenic mountain drive through the Kumbhalgarh Wildlife Sanctuary",
    ],
    itinerary: [
      {
        title: "Udaipur/Jaipur to Kumbhalgarh & Sound-and-Light Show",
        detail:
          "Morning pickup and scenic drive through the Aravalli hills to Kumbhalgarh. Hotel check-in. Afternoon exploration of the massive fortress, Badal Mahal, and perimeter ramparts. In the evening, witness the illuminated fort and dramatic sound-and-light history show.",
      },
      {
        title: "Kumbhalgarh to Ranakpur Temple & Return",
        detail:
          "After breakfast, take the scenic winding mountain road down to Ranakpur. Spend 2 hours admiring the 15th-century white marble Jain temple with an audio guide. Enjoy a traditional lunch, followed by transfer to Udaipur or Jaipur.",
      },
    ],
    vehicles: ["Sedan (Etios/Dzire)", "SUV (Innova Crysta)"],
    included: [
      "1 Night stay in heritage resort in Kumbhalgarh",
      "Daily breakfast",
      "All transfers & sightseeing by private AC car",
      "Tolls, parking, and driver allowances",
    ],
    excluded: ["Entry tickets and audio guide charges", "Lunch and dinner"],
    bestTime: "September – March (Green Aravalli hills and crisp weather)",
    groupSize: "2 to 10 travellers",
    faqs: [
      {
        q: "Can this tour be combined with an Udaipur trip?",
        a: "Yes! Kumbhalgarh and Ranakpur make an ideal 1-night / 2-day addition on the way between Jodhpur and Udaipur or as a loop from Udaipur.",
      },
    ],
  },
  {
    slug: "shekhawati-fresco-art-tour",
    title: "Shekhawati Painted Havelis & Fresco Art Trail",
    subtitle: "The world's largest open-air art gallery with 200-year-old merchant mansions",
    location: "Mandawa · Nawalgarh",
    region: "Rajasthan",
    themes: ["Heritage"],
    nights: 1,
    days: 2,
    price: 7800,
    rating: 4.8,
    reviews: 58,
    image: "/images/hawa-mahal-2.jpg",
    gallery: ["/images/hawa-mahal-2.jpg", "/images/jaipur.jpg"],
    overview:
      "Tucked just 3.5 hours north of Jaipur, the Shekhawati region is celebrated as the world's largest open-air art gallery. In the 18th and 19th centuries, wealthy Marwari merchants channeled their immense Silk Route fortunes into building palatial multi-courtyard family havelis, commissioning master artists to coat every exterior wall, ceiling, and archway with vibrant hand-painted frescoes. Discover whimsical murals depicting Indian epics alongside British steam locomotives, airplanes, and gramophones in Mandawa and Nawalgarh.",
    highlights: [
      "Guided walking tour of Mandawa exploring Murmuria Haveli, Chokhani Haveli, and Castle Mandawa",
      "Visit the impeccably restored Podar Haveli Museum in Nawalgarh with over 750 historic frescoes",
      "Stay in an authentic converted 200-year-old heritage merchant haveli with carved wooden arches",
      "Learn the centuries-old natural mineral pigment fresco painting technique from local artists",
      "Convenient weekend getaway just 170 km from Jaipur",
    ],
    itinerary: [
      {
        title: "Jaipur to Mandawa Drive & Haveli Walking Trail",
        detail:
          "08:30 AM pickup from Jaipur and smooth 3.5-hr drive to Mandawa via NH52. Check into your heritage haveli hotel. Afternoon guided walking trail through the sandy lanes of Mandawa, exploring Murmuria Haveli, Saraf Haveli, and the royal armory of Castle Mandawa.",
      },
      {
        title: "Nawalgarh Podar Haveli & Return to Jaipur",
        detail:
          "After breakfast, drive to nearby Nawalgarh to explore the Anandilal Podar Haveli Museum and Aath Haveli complex. Enjoy authentic Shekhawati Dal Baati lunch before an afternoon drive back to Jaipur, arriving by 06:00 PM.",
      },
    ],
    vehicles: ["Sedan (Etios/Dzire)", "SUV (Innova Crysta)"],
    included: [
      "1 Night stay in heritage merchant haveli hotel in Mandawa",
      "Daily breakfast",
      "All transfers & sightseeing by private AC car",
      "Tolls, parking, and driver allowances",
    ],
    excluded: ["Haveli caretaker entry fees (₹50–₹100), lunch, and dinner"],
    bestTime: "October – March",
    groupSize: "2 to 10 travellers",
    faqs: [
      {
        q: "Is Shekhawati easily accessible from Jaipur for a weekend trip?",
        a: "Yes! Mandawa is only 170 km from Jaipur along the modern 4-lane NH52 highway. It is widely considered Rajasthan's most unique weekend cultural escape.",
      },
    ],
  },
]

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug)
}

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value)
}
