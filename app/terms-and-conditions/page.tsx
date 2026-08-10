import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...buildMetadata(
    {
      title: "Terms & Conditions | Vansikha Tour & Travel",
      description: "Terms & Conditions for Vansikha Tour & Travel.",
      keywords: "",
    },
    "/terms-and-conditions"
  ),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-gray-300">
      <h1 className="text-3xl font-serif font-bold text-white mb-6">Terms & Conditions</h1>
      <p className="text-sm text-amber-400 mb-8 border border-amber-500/30 bg-amber-500/10 rounded-lg p-4">
        This page is a placeholder. The final Terms & Conditions text has not yet been
        written and should be added before this page is published or
        submitted for search indexing.
      </p>
      <p className="leading-relaxed">
        Vansikha Tour &amp; Travel will publish its Terms & Conditions here. If you have
        questions in the meantime, please get in touch via the Contact page.
      </p>
    </div>
  );
}
