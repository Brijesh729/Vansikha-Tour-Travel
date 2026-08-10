import { Metadata } from "next";
import { seoData } from "@/data/seo";
import { buildMetadata } from "@/lib/metadata";
import CarRental from "@/components/CarRental";

export const metadata: Metadata = buildMetadata(seoData["car-rental"], "/car-rental");

export default function CarRentalPage() {
  return <CarRental />;
}
