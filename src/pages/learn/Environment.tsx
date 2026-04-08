import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, ExternalLink } from "lucide-react";

const Environment = () => (
  <div className="container py-12">
    <div className="max-w-4xl mx-auto">
      <Link to="/learn" className="inline-flex items-center gap-1 text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Learn
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-primary/10">
          <Leaf className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground">Nuclear and the Environment</h1>
      </div>

      <div className="space-y-8">
        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Carbon Emissions</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nuclear power produces <strong className="text-foreground">virtually zero greenhouse gas emissions during operation</strong>. When considering the full lifecycle — including mining, fuel processing, construction, and decommissioning — nuclear emits approximately <strong className="text-foreground">12 grams of CO₂ per kilowatt-hour (g CO₂/kWh)</strong>, according to the Intergovernmental Panel on Climate Change (IPCC).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For context, lifecycle emissions for other sources are approximately:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="p-3 rounded-lg bg-muted/50 text-center">
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-xs text-muted-foreground">Nuclear (g CO₂/kWh)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 text-center">
              <p className="text-2xl font-bold text-foreground">11</p>
              <p className="text-xs text-muted-foreground">Wind (g CO₂/kWh)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 text-center">
              <p className="text-2xl font-bold text-foreground">44</p>
              <p className="text-xs text-muted-foreground">Solar (g CO₂/kWh)</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 text-center">
              <p className="text-2xl font-bold text-foreground">820</p>
              <p className="text-xs text-muted-foreground">Coal (g CO₂/kWh)</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A typical 1,000-megawatt nuclear plant prevents the emission of approximately <strong className="text-foreground">6 million tons of CO₂ per year</strong> compared to a coal-fired plant of the same capacity.
          </p>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Land Use</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nuclear has the <strong className="text-foreground">smallest land footprint</strong> of any major energy source. According to the U.S. Department of Energy, a typical 1,000-MW nuclear plant requires about <strong className="text-foreground">1 square mile</strong> of land. To produce the same amount of electricity:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>A wind farm would need approximately <strong className="text-foreground">360 square miles</strong></li>
            <li>A solar farm would need approximately <strong className="text-foreground">75 square miles</strong></li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            This compact footprint means less habitat disruption, less deforestation, and less agricultural land displaced — a critical consideration as the world balances energy needs with biodiversity preservation.
          </p>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Water Use</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nuclear plants do use significant amounts of water for cooling, similar to coal and natural gas plants. However, modern cooling technologies are reducing water consumption. Dry cooling systems and closed-loop cooling towers dramatically reduce water withdrawals compared to older once-through cooling designs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Several next-generation reactor designs — including high-temperature gas reactors and some molten salt designs — can operate with minimal or no water for cooling, which could make nuclear viable in arid regions.
          </p>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Avoiding Air Pollution</h2>
          <p className="text-muted-foreground leading-relaxed">
            Beyond climate benefits, nuclear power avoids the <strong className="text-foreground">air pollution</strong> that kills an estimated 4.2 million people globally each year (WHO). Unlike fossil fuel plants, nuclear produces no sulfur dioxide (SO₂), nitrogen oxides (NOₓ), particulate matter, or mercury. The NEI estimates that U.S. nuclear plants alone avoid over 476 million metric tons of CO₂ and significant quantities of harmful air pollutants annually.
          </p>
        </section>

        {/* @todo: Add section on mining environmental impacts — uranium mining (in-situ leaching vs. open pit), 
           land reclamation practices, comparison with coal mining impacts. Research needed on modern ISL mining 
           environmental footprint data from IAEA and WNA. */}

        {/* @todo: Add section on biodiversity near nuclear plants — studies showing thriving wildlife around 
           operating plants (e.g., Turkey Point, Chernobyl exclusion zone biodiversity recovery). 
           Sources needed: peer-reviewed ecological studies. */}

        <section className="retro-card bg-primary/5">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Sources & Further Reading</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="https://www.ipcc.ch/report/ar6/wg3/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                IPCC AR6 Working Group III — Lifecycle Emissions Data <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.energy.gov/ne/articles/3-reasons-why-nuclear-clean-and-sustainable" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                U.S. DOE — 3 Reasons Why Nuclear Is Clean and Sustainable <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.nei.org/resources/statistics" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Nuclear Energy Institute — Statistics <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://ourworldindata.org/land-use-per-energy-source" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Our World in Data — Land Use per Energy Source <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default Environment;
