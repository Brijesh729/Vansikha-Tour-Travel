import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata(
  {
    title: "About Us | Vansikha Tour & Travel",
    description: "Learn about Vansikha Tour & Travel, a Rajasthan-based travel service offering tour packages and car rental across Rajasthan and India.",
    keywords: "about vansikha tour travel, rajasthan travel agency",
  },
  "/about"
);

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-zinc-300">
      <h1 className="text-4xl font-serif font-bold text-white mb-8">About {siteConfig.businessName}</h1>

      <div className="space-y-6 leading-relaxed">
        <p>
          {siteConfig.businessName} is a travel service based in {siteConfig.city}, {siteConfig.state},
          offering tour packages across Rajasthan and other parts of India, along with car rental services
          for local sightseeing and outstation trips.
        </p>
        <p>
          We help plan Rajasthan tours covering destinations such as Jaipur, Udaipur, Jaisalmer and Pushkar,
          as well as select tours to other Indian destinations. Itineraries can be customized based on your
          travel dates, group size and interests.
        </p>
        <p>
          For booking enquiries or to discuss a custom itinerary, reach us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-amber-400 hover:underline">
            {siteConfig.email}
          </a>{" "}
          or call{" "}
          <a href={`tel:+${siteConfig.phoneRaw}`} className="text-amber-400 hover:underline">
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
        <p className="text-sm text-amber-400/80 border border-amber-500/20 bg-amber-500/5 rounded-lg p-4 mt-8">
          This page intentionally does not list years of experience, awards, or customer numbers, since
          those weren&apos;t part of the original source content. Add real, verifiable details here when available.
        </p>
      </div>
    </div>
  );
}
