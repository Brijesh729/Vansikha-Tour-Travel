/**
 * Placeholder ad slot - disabled by default via env var.
 * Wire up real AdSense units by setting NEXT_PUBLIC_ADS_ENABLED=true
 * and inserting the AdSense script/unit code here once the site has
 * been reviewed and approved. Never renders anything (not even blank
 * space) when disabled, to avoid layout shift.
 */
const AdSlot = ({ slot }: { slot: "in-article" | "sidebar" | "footer" }) => {
  const adsEnabled = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

  if (!adsEnabled) return null;

  return (
    <div data-ad-slot={slot} className="w-full my-8 flex justify-center">
      {/* AdSense unit goes here once approved */}
    </div>
  );
};

export default AdSlot;
