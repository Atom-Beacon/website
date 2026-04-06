import { Atom, Zap, Shield, Leaf, Factory, Recycle } from "lucide-react";

const topics = [
  {
    icon: Atom,
    title: "What Is Nuclear Energy?",
    content: "Nuclear energy is the energy stored in the nucleus (core) of atoms. When atoms are split apart (fission) or combined (fusion), enormous amounts of energy are released. Nuclear power plants use controlled fission reactions — typically splitting uranium atoms — to generate heat, which produces steam to spin turbines and generate electricity. A single uranium fuel pellet the size of a pencil eraser contains as much energy as one ton of coal.",
  },
  {
    icon: Zap,
    title: "How Does a Nuclear Power Plant Work?",
    content: "A nuclear reactor heats water using the energy from splitting uranium atoms. This creates steam, which spins a turbine connected to a generator. The generator converts that spinning motion into electricity. The steam is then cooled, condensed back into water, and recycled. The cooling towers you see at plants release only water vapor — not smoke or pollution. The entire process produces virtually zero greenhouse gas emissions during operation.",
  },
  {
    icon: Shield,
    title: "Is Nuclear Energy Safe?",
    content: "Modern nuclear energy is one of the safest forms of power generation. The industry has decades of operational experience and is one of the most heavily regulated in the world. Advanced reactor designs include passive safety systems that work even without human intervention or electrical power. Statistically, nuclear energy has caused fewer deaths per unit of energy produced than any other major source, including wind and solar when accounting for manufacturing and installation.",
  },
  {
    icon: Leaf,
    title: "Nuclear and the Environment",
    content: "Nuclear power produces nearly zero carbon emissions during operation. A typical 1,000-megawatt nuclear plant prevents the emission of about 6 million tons of CO₂ per year compared to a coal plant. Nuclear also has the smallest land footprint of any major energy source — producing the same amount of electricity as a solar farm would require about 75 times less land. Used fuel is carefully stored and managed, and advanced recycling technologies are reducing waste volumes significantly.",
  },
  {
    icon: Factory,
    title: "Types of Nuclear Reactors",
    content: "There are several types of reactors in use and in development. Pressurized Water Reactors (PWRs) and Boiling Water Reactors (BWRs) are the most common today. New designs include Small Modular Reactors (SMRs) that can be factory-built and shipped to sites, making nuclear more accessible and affordable. Advanced concepts like molten salt reactors, high-temperature gas reactors, and fast neutron reactors offer enhanced safety, efficiency, and waste reduction capabilities.",
  },
  {
    icon: Recycle,
    title: "Nuclear Fuel and Waste",
    content: "Nuclear fuel begins as uranium ore, which is mined, processed, and enriched. A single fuel assembly can power a reactor for years before needing replacement. Used fuel can be recycled — France reprocesses about 96% of its spent fuel. The total amount of high-level nuclear waste produced by the entire US nuclear fleet over 60+ years would fit on a single football field stacked less than 10 yards high. Research into advanced fuel cycles aims to reduce waste further and extract more energy from the same fuel.",
  },
];

const Learn = () => {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Learn About Nuclear Energy</h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Build your understanding of how nuclear energy works, why it matters, and how it fits into our clean energy future.
        </p>

        <div className="space-y-8">
          {topics.map((topic, i) => (
            <div key={i} className="retro-card animate-fade-in-up opacity-0" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 rounded-lg bg-primary/10">
                  <topic.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">{topic.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{topic.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 retro-card bg-primary/5">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3">A Note on Energy Diversity</h3>
          <p className="text-muted-foreground leading-relaxed">
            While we're passionate about nuclear energy, we recognize that no single source can solve the world's energy challenges alone. Solar, wind, hydro, geothermal, and other renewables each bring unique strengths. The most resilient, clean energy grids will use a diverse mix — and nuclear provides the reliable, carbon-free baseload power that makes intermittent sources like wind and solar more effective. Together, they're unstoppable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
