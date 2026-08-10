"use client";

import Image from "next/image";

const cars = [
  {
    name: "Sedan",
    desc: "Dzire / Etios",
    seats: "4 Seater",
    price: "₹11 / km (Estimated)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgfAArnootDkUT2kzs0Eyq89_3n8Lj55nEA&s",
  },
  {
    name: "SUV",
    desc: "Innova / Crysta",
    seats: "6–7 Seater",
    price: "₹16 / km (Estimated)",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9608/1755846139274/front-left-side-47.jpg?tr=w-320",
  },
  {
    name: "Luxury",
    desc: "Fortuner / BMW",
    seats: "4–5 Seater",
    price: "₹30 / km (Estimated)",
    img: "https://www.bmw-kunexclusive-hyderabad.in/sites/default/files/2025-11/1680x756_2.jpg",
  },
  {
    name: "Tempo Traveller",
    desc: "Group Travel",
    seats: "12–16 Seater",
    price: "₹24 / km (Estimated)",
    img: "https://www.forcemotors.com/wp-content/uploads/2025/02/URBANIA-1.png",
  },
];

const CarRental = () => {
  return (
    <section
      className="relative pt-28 pb-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-white font-serif">Royal Car Rental Services</h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto text-sm">
            Chauffeur driven luxury & budget cars for Rajasthan and outstation trips
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {cars.map((car) => (
            <div
              key={car.name}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 w-full">
                {/* External vendor/reference images - not local assets, see section 47 of the brief */}
                <Image src={car.img} alt={car.name} fill className="object-cover" unoptimized />
              </div>

              <div className="p-5 text-white text-sm space-y-2">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-gray-300">{car.desc}</p>
                <p>🚗 {car.seats}</p>
                <p className="text-yellow-400 font-medium">{car.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20 text-sm">
          {[
            "Local & Outstation Trips",
            "Airport Pickup & Drop",
            "Rajasthan Tour Packages",
            "Professional Drivers",
            "Clean & Well Maintained Cars",
            "24×7 Customer Support",
          ].map((item) => (
            <div key={item} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center text-gray-300">
              {item}
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-8">
          <h2 className="text-xl text-white font-medium mb-6 text-center">Get Best Car Rental Price</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-md text-white text-sm focus:outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-md text-white text-sm focus:outline-none focus:border-yellow-400"
            />

            <select className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-md text-white text-sm focus:outline-none focus:border-yellow-400">
              <option className="text-black">Select Car Type</option>
              <option className="text-black">Sedan</option>
              <option className="text-black">SUV</option>
              <option className="text-black">Luxury</option>
              <option className="text-black">Tempo Traveller</option>
            </select>

            <button
              type="button"
              className="w-full bg-yellow-500 text-black font-medium py-2.5 rounded-md hover:bg-yellow-400 transition"
            >
              Request Callback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CarRental;
