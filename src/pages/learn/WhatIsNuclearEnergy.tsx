import { Link } from "react-router-dom";
import { ArrowLeft, Atom, ExternalLink } from "lucide-react";

const WhatIsNuclearEnergy = () => (
  <div className="container py-12">
    <div className="max-w-4xl mx-auto">
      <Link to="/learn" className="inline-flex items-center gap-1 text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Learn
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-primary/10">
          <Atom className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground">What Is Nuclear Energy?</h1>
      </div>

      <div className="space-y-8">
        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">The Basics</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nuclear energy is the energy stored in the nucleus — the dense core — of an atom. Atoms are the building blocks of all matter, and their nuclei are held together by an extraordinarily powerful force called the <strong className="text-foreground">strong nuclear force</strong>. When this force is disrupted, whether by splitting an atom apart or fusing atoms together, a tremendous amount of energy is released.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This energy manifests primarily as heat, which can be harnessed to generate electricity. The amount of energy locked in atomic nuclei is millions of times greater per unit of mass than that stored in chemical bonds (like those in coal or natural gas), which is why nuclear fuel is so remarkably energy-dense.
          </p>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Fission vs. Fusion</h2>
          
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Nuclear Fission</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Fission is the process of splitting a heavy atomic nucleus into two or more lighter nuclei. When a neutron strikes the nucleus of a fissile atom — typically <strong className="text-foreground">uranium-235</strong> or <strong className="text-foreground">plutonium-239</strong> — the nucleus becomes unstable and splits, releasing energy and additional neutrons. Those neutrons can then strike other nuclei, creating a self-sustaining <strong className="text-foreground">chain reaction</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            All commercial nuclear power plants today use fission. The process was first demonstrated in 1938 by German chemists Otto Hahn and Fritz Strassmann, with theoretical explanation provided by Lise Meitner and Otto Frisch.
          </p>

          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Nuclear Fusion</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Fusion is the opposite process: combining two light atomic nuclei to form a heavier one. This is the process that powers the Sun and all stars — hydrogen nuclei fuse into helium at temperatures exceeding 15 million degrees Celsius, releasing vast quantities of energy.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Scientists and engineers have been working toward controlled fusion on Earth for decades. While not yet commercially viable, major milestones have been achieved. In December 2022, the National Ignition Facility (NIF) at Lawrence Livermore National Laboratory achieved <strong className="text-foreground">fusion ignition</strong> — producing more energy from a fusion reaction than the laser energy used to drive it — for the first time in history.
          </p>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Energy Density: Why Nuclear Is Unique</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            One of nuclear energy's most remarkable characteristics is its energy density. According to the Nuclear Energy Institute (NEI), a single uranium fuel pellet — roughly the size of a pencil eraser and weighing about 6 grams — contains as much energy as:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
            <li><strong className="text-foreground">1 ton (2,000 lbs) of coal</strong></li>
            <li><strong className="text-foreground">149 gallons of oil</strong></li>
            <li><strong className="text-foreground">17,000 cubic feet of natural gas</strong></li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            This extraordinary energy density means nuclear plants require far less fuel than fossil fuel plants and produce far less waste per unit of energy generated. It also means nuclear fuel is relatively inexpensive to transport and store.
          </p>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Nuclear Energy Today</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            As of 2024, there are approximately <strong className="text-foreground">440 commercial nuclear reactors</strong> operating in <strong className="text-foreground">32 countries</strong>, providing about <strong className="text-foreground">10% of the world's electricity</strong> and roughly <strong className="text-foreground">25% of all low-carbon electricity</strong> globally. Nuclear has the highest capacity factor of any power source — about 92% in the United States in 2024, meaning nuclear plants produce electricity over 92% of the time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Countries like France (approximately 70% nuclear), Slovakia (about 57%), and Ukraine (about 55%) rely heavily on nuclear power for their electricity needs.
          </p>
        </section>

        <section className="retro-card bg-primary/5">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Sources & Further Reading</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="https://www.nei.org/fundamentals/nuclear-fuel" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Nuclear Energy Institute — Nuclear Fuel <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.iaea.org/topics/nuclear-power-reactors" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                IAEA — Nuclear Power Reactors <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://css.umich.edu/publications/factsheets/energy/nuclear-energy-factsheet" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                University of Michigan — Nuclear Energy Factsheet <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.energy.gov/ne/articles/5-fast-facts-about-nuclear-energy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                U.S. Department of Energy — 5 Fast Facts About Nuclear Energy <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.llnl.gov/news/national-ignition-facility-achieves-fusion-ignition" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Lawrence Livermore National Laboratory — NIF Fusion Ignition <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default WhatIsNuclearEnergy;
