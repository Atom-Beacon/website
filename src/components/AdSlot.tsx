/**
 * AdSlot — reserved, labeled areas for Google AdSense Auto Ads.
 *
 * The AdSense script in index.html enables Auto Ads; Google places ads where
 * they fit. These blocks give predictable vertical space and clear labeling.
 * (Manual display units would use ins.adsbygoogle + data-ad-slot from the
 * AdSense dashboard and a matching (adsbygoogle).push({}) — not used here.)
 */

interface AdSlotProps {
  placement: "after-intro" | "mid-article" | "sidebar";
  className?: string;
}

const AdSlot = ({ placement, className = "" }: AdSlotProps) => {
  return (
    <aside
      className={`ad-container ${className}`}
      aria-label="Advertisement"
      data-ad-placement={placement}
    >
      <div className="text-center py-2">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium">
          Advertisement
        </span>
        <div className="min-h-[90px] w-full" aria-hidden="true" />
      </div>
    </aside>
  );
};

export default AdSlot;
