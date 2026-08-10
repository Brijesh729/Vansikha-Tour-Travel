import Image from "next/image";

const sections = [
  {
    subtitle: "Trusted Travel Partner",
    title: "Taj Mahal",
    description:
      "Welcome to Taj Mahal, Standing majestically on the banks of River Yamuna. Taj Mahal is famous for its own beauty and is one of the wonders of the world.",
    image: "/images/packages/Taj.jpg",
    points: [
      "Curated premium Taj Mahal tour packages",
      "Driver-inclusive private car rentals",
      "Affordable luxury within your budget",
      "Dedicated 24/7 customer support",
    ],
  },
  {
    subtitle: "Heritage & Culture",
    title: "Explore Jaipur",
    description:
      "Discover the forts, palaces, heritage streets, and cultural richness of the Pink City with our guided experiences.",
    image: "/images/packages/Hawa.jpg",
    points: [
      "Amber Fort & City Palace guided tours",
      "Handpicked cultural sightseeing routes",
      "Perfect for couples and families",
      "Photography & heritage experiences",
    ],
  },
];

const InfoSection = () => {
  return (
    <section className="w-full bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 space-y-28 py-20">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-5xl font-semibold text-white tracking-tight font-serif">
            Experience Rajasthan with Elegance
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Premium travel services designed with comfort, heritage, and trust.
          </p>
        </div>

        {sections.map((item, index) => (
          <div
            key={item.title}
            className={`grid md:grid-cols-2 gap-14 items-center ${
              index % 2 !== 0 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="relative h-[410px] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover border border-white/10 shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="space-y-7">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500">{item.subtitle}</p>
              <h3 className="text-4xl font-semibold text-white leading-snug font-serif">{item.title}</h3>
              <p className="text-lg text-gray-400 leading-relaxed">{item.description}</p>

              <ul className="space-y-3 pt-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                    <p className="text-base leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
