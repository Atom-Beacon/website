import { Link } from "react-router-dom";
import { ArrowLeft, Factory, ExternalLink } from "lucide-react";

const ReactorTypes = () => (
  <div className="container py-12">
    <div className="max-w-4xl mx-auto">
      <Link to="/learn" className="inline-flex items-center gap-1 text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Learn
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-primary/10">
          <Factory className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground">Types of Nuclear Reactors</h1>
      </div>

      <div className="space-y-8">
        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Current Generation Reactors</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Pressurized Water Reactor (PWR)</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                The most common type worldwide, representing about <strong className="text-foreground">65% of all operating reactors</strong>. Water is used as both coolant and moderator, kept under high pressure to prevent boiling in the primary loop. Heat is transferred to a secondary loop where steam is generated. Major manufacturers include Westinghouse, Framatome (formerly Areva), and Rosatom.
              </p>
              <p className="text-sm text-muted-foreground italic">Examples: Westinghouse AP1000, French EPR, Russian VVER</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Boiling Water Reactor (BWR)</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                The second most common type, representing about <strong className="text-foreground">20% of operating reactors</strong>. Water boils directly in the reactor vessel, eliminating the need for a separate steam generator. This simplifies the design but means the turbine must handle slightly radioactive steam. Primarily developed by GE Hitachi Nuclear Energy.
              </p>
              <p className="text-sm text-muted-foreground italic">Examples: GE Hitachi ESBWR, ABWR</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">CANDU (Canada Deuterium Uranium)</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                A Canadian-designed pressurized heavy water reactor that uses natural (unenriched) uranium as fuel and heavy water (deuterium oxide) as both coolant and moderator. The CANDU design can be refueled during operation, avoiding lengthy shutdown periods. About 30 CANDU reactors operate worldwide.
              </p>
              <p className="text-sm text-muted-foreground italic">Developed by Atomic Energy of Canada Limited (AECL), now SNC-Lavalin/AtkinsRéalis</p>
            </div>
          </div>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Small Modular Reactors (SMRs)</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SMRs are defined as reactors with an electrical output of <strong className="text-foreground">300 megawatts or less</strong>, designed to be factory-manufactured and transported to their operating site. They represent one of the most exciting frontiers in nuclear technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">NuScale VOYGR</h3>
              <p className="text-sm text-muted-foreground">First SMR to receive NRC design certification (2023). Each module produces 77 MWe. Uses natural circulation for cooling — no pumps needed.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Rolls-Royce SMR</h3>
              <p className="text-sm text-muted-foreground">A 470 MWe PWR design backed by the UK government. Designed for factory manufacturing with a 60-year operating life.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">GE Hitachi BWRX-300</h3>
              <p className="text-sm text-muted-foreground">A 300 MWe simplified BWR design selected for deployment in Canada and Poland. Features passive safety and significantly reduced construction costs.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Holtec SMR-160</h3>
              <p className="text-sm text-muted-foreground">A 160 MWe PWR designed for walk-away safety — it can shut down and cool itself indefinitely without operator action or external power.</p>
            </div>
          </div>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Advanced Reactor Concepts</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Molten Salt Reactors (MSR)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Use molten fluoride or chloride salts as both coolant and fuel carrier. They operate at atmospheric pressure (eliminating the risk of pressure-driven accidents), at higher temperatures (improving efficiency), and can potentially consume existing nuclear waste as fuel. Companies like Kairos Power, Terrestrial Energy, and Flibe Energy are developing MSR designs.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">High-Temperature Gas Reactors (HTGR)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Use helium gas as coolant and graphite as moderator, operating at temperatures up to 950°C. Their high outlet temperatures make them ideal for industrial process heat and hydrogen production. China's HTR-PM pebble bed reactor began commercial operation in December 2023.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Fast Neutron Reactors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Operate with fast (unmoderated) neutrons, enabling them to "breed" more fissile material than they consume and to burn long-lived radioactive waste. TerraPower's Natrium reactor, backed by Bill Gates, is a sodium-cooled fast reactor paired with molten salt energy storage, currently under construction in Kemmerer, Wyoming.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Microreactors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ultra-small reactors producing 1-20 MWe, designed to be transportable by truck, ship, or aircraft. Intended for remote communities, military installations, disaster relief, and off-grid industrial sites. The U.S. Department of Defense's Project Pele is developing a transportable microreactor prototype.
              </p>
            </div>
          </div>
        </section>

        {/* @todo: Add section on Generation IV reactor designs — a deeper dive into the six Gen IV designs 
           selected by the Generation IV International Forum (GIF): SFR, VHTR, GFR, MSR, LFR, SCWR. 
           Include timeline estimates for commercial deployment. Sources: GIF, IAEA. */}

        {/* @todo: Add section on fusion reactor progress — ITER, Commonwealth Fusion Systems (SPARC), 
           TAE Technologies, Helion Energy. Current status, timelines, and technical challenges. */}

        <section className="retro-card bg-primary/5">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Sources & Further Reading</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="https://www.iaea.org/topics/small-modular-reactors" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                IAEA — Small Modular Reactors <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.gen-4.org/gif/jcms/c_9260/public" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Generation IV International Forum <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.world-nuclear.org/information-library/nuclear-fuel-cycle/nuclear-power-reactors/advanced-nuclear-power-reactors" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                World Nuclear Association — Advanced Reactors <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.energy.gov/ne/advanced-small-modular-reactors-smrs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                U.S. DOE — Advanced Small Modular Reactors <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default ReactorTypes;
