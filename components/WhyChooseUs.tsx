const reasons = [
  {
    title: "Customized Itineraries",
    desc: "Tours planned around your travel dates, group size, and interests rather than a fixed template.",
  },
  {
    title: "Local Rajasthan Knowledge",
    desc: "Based in Jaipur, with routes and timings planned around real travel distances across Rajasthan.",
  },
  {
    title: "Direct WhatsApp & Call Support",
    desc: "Reach us directly for questions or changes to your itinerary — no call centre or ticket queue.",
  },
  {
    title: "Transparent Inclusions",
    desc: "Every tour page clearly lists what's included and what's not, so there are no surprises at booking.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-serif font-bold text-white mb-4">Why Travel With Us</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full opacity-70" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-xl hover:border-amber-500/40 transition-colors"
          >
            <h3 className="text-white font-semibold mb-2">{reason.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
