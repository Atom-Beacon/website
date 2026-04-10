/**
 * AdSlot — a reserved, labeled container for Google AdSense auto-ads.
 *
 * Google AdSense Auto Ads automatically detects these reserved areas
 * and fills them when appropriate. This component provides a consistent,
 * honest container that is clearly labeled as advertising.
 *
 * The actual ad serving is handled by the AdSense script in index.html.
 * Auto ads will scan the page and place ads in optimal positions.
 * These slots act as hints / reserved space.
 *
 * @todo: Replace data-ad-client with real AdSense publisher ID (ca-pub-XXXXXXXXXXXXXXXX)
 * @todo: Replace data-ad-slot with real ad unit IDs from AdSense dashboard
 * @todo: Test ad rendering in production — ads won't show on localhost
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
        {/* 
          Google AdSense auto-ad container.
          In production, the adsbygoogle script will fill this automatically.
          The ins element below is the standard AdSense responsive ad unit.
        */}
        <ins
          className="adsbygoogle block"
          style={{ display: "block", minHeight: "90px" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
};

export default AdSlot;
