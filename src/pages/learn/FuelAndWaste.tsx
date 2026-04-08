import { Link } from "react-router-dom";
import { ArrowLeft, Recycle, ExternalLink } from "lucide-react";

const FuelAndWaste = () => (
  <div className="container py-12">
    <div className="max-w-4xl mx-auto">
      <Link to="/learn" className="inline-flex items-center gap-1 text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Learn
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-primary/10">
          <Recycle className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground">Nuclear Fuel and Waste</h1>
      </div>

      <div className="space-y-8">
        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">The Nuclear Fuel Cycle</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nuclear fuel begins as <strong className="text-foreground">uranium ore</strong>, a naturally occurring mineral found in the Earth's crust. The journey from ore to electricity involves several stages:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">1</span>
              <div>
                <strong className="text-foreground">Mining</strong>
                <p className="text-sm text-muted-foreground">Uranium is mined through conventional open-pit or underground methods, or increasingly through <strong className="text-foreground">in-situ leaching (ISL)</strong>, which uses solutions to dissolve uranium from the ore body underground — a less environmentally disruptive method. Major mining countries include Kazakhstan (43% of world production), Canada, Namibia, Australia, and Uzbekistan.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">2</span>
              <div>
                <strong className="text-foreground">Conversion and Enrichment</strong>
                <p className="text-sm text-muted-foreground">Natural uranium contains about 0.7% uranium-235 (the fissile isotope). For most reactors, this must be enriched to 3-5% U-235. The uranium is first converted to uranium hexafluoride gas (UF₆), then enriched using gas centrifuges.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">3</span>
              <div>
                <strong className="text-foreground">Fuel Fabrication</strong>
                <p className="text-sm text-muted-foreground">Enriched uranium is converted to uranium dioxide (UO₂) powder, pressed into small cylindrical pellets, sintered at high temperatures, and loaded into fuel rods. These rods are bundled into fuel assemblies ready for the reactor.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">4</span>
              <div>
                <strong className="text-foreground">Reactor Operation</strong>
                <p className="text-sm text-muted-foreground">Fuel assemblies spend 3-6 years in the reactor, generating electricity. A single fuel assembly can produce an enormous amount of energy before needing replacement.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Understanding Nuclear Waste</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nuclear waste is categorized into three levels based on radioactivity:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Low-Level Waste (LLW)</h3>
              <p className="text-sm text-muted-foreground">Includes items like protective clothing, tools, filters, and medical waste. Makes up about 90% of the volume but contains only about 1% of the radioactivity. Safely disposed of in near-surface facilities.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Intermediate-Level Waste (ILW)</h3>
              <p className="text-sm text-muted-foreground">Includes reactor components, chemical sludges, and resins. Contains about 4% of the radioactivity. Typically solidified in concrete or bitumen and stored in engineered facilities.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">High-Level Waste (HLW)</h3>
              <p className="text-sm text-muted-foreground">Spent fuel and waste from reprocessing. Contains about 95% of the radioactivity but represents only about 3% of the volume. This is the waste that requires long-term isolation in deep geological repositories.</p>
            </div>
          </div>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Putting Waste Volume in Perspective</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The total amount of high-level nuclear waste produced by the <strong className="text-foreground">entire U.S. nuclear fleet over 60+ years</strong> of operation would fit on a single football field stacked less than 10 yards high. The total global inventory of spent fuel amounts to about 400,000 metric tons — substantial, but remarkably small compared to the waste from fossil fuels.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For comparison, a single 1,000-MW coal plant produces about <strong className="text-foreground">300,000 tons of ash per year</strong>, along with millions of tons of CO₂ and air pollutants. A nuclear plant of the same capacity produces about <strong className="text-foreground">20 metric tons of spent fuel per year</strong>.
          </p>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Recycling and Reprocessing</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Spent nuclear fuel is not truly "waste" in the traditional sense. It still contains about <strong className="text-foreground">96% usable material</strong> — approximately 95% uranium and 1% plutonium — that can be recycled into new fuel.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">France</strong> has been commercially reprocessing spent fuel since the 1970s at the La Hague facility, recycling about 96% of spent fuel into MOX (Mixed Oxide) fuel for reuse in reactors. The UK, Russia, Japan, and India also operate or have operated reprocessing facilities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The United States does not currently reprocess spent fuel due to a policy decision made in 1977 by President Carter over nuclear proliferation concerns, though this policy is under reconsideration.
          </p>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Deep Geological Disposal</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For waste that cannot be recycled, <strong className="text-foreground">deep geological repositories</strong> offer a permanent solution. Finland's <strong className="text-foreground">Onkalo</strong> facility — the world's first permanent deep geological repository — is under construction on the island of Olkiluoto and is expected to begin accepting waste in the mid-2020s. The facility stores waste 400-450 meters underground in stable bedrock that has been geologically inactive for 1.8 billion years.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Sweden is also advancing its own deep geological repository. In the United States, the Yucca Mountain site in Nevada was studied for decades but remains politically stalled.
          </p>
        </section>

        {/* @todo: Add section on advanced fuel cycles — HALEU (High-Assay Low-Enriched Uranium), 
           thorium fuel cycles, and how they could reduce waste and improve resource utilization. 
           Research needed on current HALEU production status (Centrus Energy) and thorium MSR progress. */}

        {/* @todo: Add section on transmutation — using fast reactors or accelerator-driven systems 
           to convert long-lived radioactive isotopes into shorter-lived ones. 
           Research needed on current status of partitioning & transmutation research programs. */}

        <section className="retro-card bg-primary/5">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Sources & Further Reading</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="https://www.world-nuclear.org/information-library/nuclear-fuel-cycle/nuclear-waste/nuclear-waste-disposal" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                World Nuclear Association — Nuclear Waste Disposal <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.nei.org/fundamentals/nuclear-waste" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Nuclear Energy Institute — Nuclear Waste <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.posiva.fi/en/index/finaldisposal.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Posiva — Onkalo Deep Geological Repository <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.iaea.org/topics/spent-fuel-management" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                IAEA — Spent Fuel Management <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default FuelAndWaste;
