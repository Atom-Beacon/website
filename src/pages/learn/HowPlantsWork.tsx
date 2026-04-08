import { Link } from "react-router-dom";
import { ArrowLeft, Zap, ExternalLink } from "lucide-react";

const HowPlantsWork = () => (
  <div className="container py-12">
    <div className="max-w-4xl mx-auto">
      <Link to="/learn" className="inline-flex items-center gap-1 text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Learn
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-primary/10">
          <Zap className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground">How Does a Nuclear Power Plant Work?</h1>
      </div>

      <div className="space-y-8">
        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">The Basic Principle</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At its core, a nuclear power plant works much like a coal or natural gas plant — it generates heat to produce steam, which spins a turbine connected to a generator. The key difference is the heat source: instead of burning fossil fuels, a nuclear plant uses <strong className="text-foreground">controlled nuclear fission</strong> to generate heat.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This process produces no direct greenhouse gas emissions, no particulate pollution, and no combustion byproducts. The only visible output from a nuclear plant's cooling towers is water vapor.
          </p>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Step-by-Step Process</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Nuclear Fission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Inside the <strong className="text-foreground">reactor core</strong>, uranium fuel assemblies are arranged in a precise configuration. Neutrons bombard uranium-235 atoms, causing them to split and release energy in the form of heat. Control rods made of neutron-absorbing materials (like boron or hafnium) are inserted or withdrawn to regulate the rate of fission.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Heat Transfer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A coolant — usually water — circulates through the reactor core, absorbing the heat produced by fission. In a Pressurized Water Reactor (PWR), this primary coolant is kept under high pressure (about 155 bar / 2,250 psi) to prevent it from boiling. The hot, pressurized water then flows through a <strong className="text-foreground">steam generator</strong>, where it transfers its heat to a secondary water loop.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Steam Generation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In the secondary loop, the transferred heat boils water into high-pressure steam. In a Boiling Water Reactor (BWR), this step is simpler — water boils directly in the reactor vessel itself, eliminating the need for a separate steam generator.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Turbine and Generator</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The high-pressure steam is directed at a <strong className="text-foreground">turbine</strong>, causing it to spin at high speed (typically 1,500 or 3,000 RPM depending on grid frequency). The turbine is connected to an electrical generator that converts mechanical energy into electricity, which is then fed into the power grid.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Cooling and Condensation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  After passing through the turbine, the steam enters a <strong className="text-foreground">condenser</strong> where it's cooled back into liquid water using water from a river, lake, ocean, or cooling tower. The condensed water is then pumped back to the steam generator to be reheated, completing the cycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Cooling Towers: Not What You Think</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The large, hyperbolic towers often associated with nuclear power are <strong className="text-foreground">cooling towers</strong> — and they release only <strong className="text-foreground">water vapor</strong>, not smoke, radiation, or pollution. Many types of power plants (including natural gas and coal) also use identical cooling towers. Not all nuclear plants even have them — plants located near large bodies of water often use direct cooling instead.
          </p>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Key Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Reactor Vessel</h3>
              <p className="text-sm text-muted-foreground">Houses the fuel assemblies and control rods. Made of thick steel (typically 20-25 cm) to withstand high pressures and contain radiation.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Containment Building</h3>
              <p className="text-sm text-muted-foreground">A massive reinforced concrete and steel structure (often 1-1.5 meters thick) that surrounds the reactor, designed to contain any release of radioactive material.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Control Rods</h3>
              <p className="text-sm text-muted-foreground">Made of neutron-absorbing materials. Inserted to slow the reaction, withdrawn to increase power output. Can fully shut down the reactor within seconds.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Fuel Assemblies</h3>
              <p className="text-sm text-muted-foreground">Bundles of fuel rods containing uranium pellets. A typical PWR core contains about 200 fuel assemblies, each holding about 200-300 individual fuel rods.</p>
            </div>
          </div>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Efficiency and Output</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A typical nuclear power plant has a thermal efficiency of about 33-37%, comparable to fossil fuel plants. However, nuclear's advantage lies in its <strong className="text-foreground">capacity factor</strong> — the percentage of time a plant operates at full power. U.S. nuclear plants achieved an average capacity factor of about <strong className="text-foreground">92% in 2024</strong>, the highest of any energy source. By comparison, natural gas plants average around 40%, wind about 35%, and solar about 25%.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A single 1,000-megawatt nuclear reactor can power approximately 750,000 homes and operates continuously for 18-24 months between refueling outages.
          </p>
        </section>

        <section className="retro-card bg-primary/5">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Sources & Further Reading</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="https://www.energy.gov/ne/articles/nuclear-101-how-does-nuclear-reactor-work" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                U.S. DOE — How Does a Nuclear Reactor Work? <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.world-nuclear.org/nuclear-essentials/how-does-a-nuclear-reactor-work" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                World Nuclear Association — How Does a Nuclear Reactor Work <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.eia.gov/energyexplained/nuclear/nuclear-power-plants.php" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                U.S. EIA — Nuclear Power Plants <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default HowPlantsWork;
