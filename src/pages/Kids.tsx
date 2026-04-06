import { useState } from "react";
import atomMascot from "@/assets/atom-mascot.png";

type AgeLevel = "toddler" | "elementary" | "middle" | "highschool";

const levels: { id: AgeLevel; label: string; ages: string; emoji: string }[] = [
  { id: "toddler", label: "Little Atoms", ages: "Ages 3–5", emoji: "🍼" },
  { id: "elementary", label: "Atom Explorers", ages: "Ages 6–10", emoji: "🔬" },
  { id: "middle", label: "Energy Investigators", ages: "Ages 11–13", emoji: "⚡" },
  { id: "highschool", label: "Nuclear Scholars", ages: "Ages 14–18", emoji: "🎓" },
];

const content: Record<AgeLevel, { title: string; sections: { heading: string; body: string }[] }> = {
  toddler: {
    title: "Hello, Little Atom! 👋",
    sections: [
      {
        heading: "Everything Is Made of Tiny Things! 🧱",
        body: "You know how you can build a big tower with lots of tiny blocks? Well, EVERYTHING around you — your toys, your food, even YOU — is made of teeny tiny pieces called atoms! They're so small you can't see them, but they're everywhere!",
      },
      {
        heading: "Atoms Have Lots of Energy! ⭐",
        body: "Inside every atom, there's a special kind of energy — like a little battery! When scientists learned how to use that energy, they found out they could make electricity — that's what makes your lights turn on and your tablet work!",
      },
      {
        heading: "Clean Energy for Our Planet 🌍",
        body: "Nuclear energy is a special way to make electricity that keeps our air clean. It doesn't make the yucky smoke that makes the sky gray. It helps keep the Earth happy and healthy for all the animals, trees, and people!",
      },
    ],
  },
  elementary: {
    title: "Welcome, Atom Explorer! 🔭",
    sections: [
      {
        heading: "What Are Atoms?",
        body: "Atoms are the building blocks of everything in the universe. Each atom has a center called a nucleus, which is made of protons and neutrons. Tiny electrons zip around the nucleus like planets orbiting a sun. There are over 100 different types of atoms, called elements — like hydrogen, oxygen, carbon, and uranium!",
      },
      {
        heading: "How Does Nuclear Energy Work?",
        body: "Nuclear energy comes from splitting atoms — usually a special type of uranium. When a uranium atom splits, it releases a LOT of heat energy. That heat boils water to make steam, and the steam spins a big fan called a turbine. The turbine is connected to a generator that makes electricity! One tiny uranium pellet (about the size of a gummy bear!) has as much energy as a TON of coal.",
      },
      {
        heading: "Why Is Nuclear Energy Important?",
        body: "Nuclear power plants make electricity without creating air pollution or greenhouse gases during operation. That's really important because greenhouse gases contribute to climate change. Nuclear plants can run day and night, rain or shine, providing reliable electricity for millions of homes and schools.",
      },
      {
        heading: "Fun Fact! 🌟",
        body: "The word 'atom' comes from an ancient Greek word meaning 'uncuttable' — people once thought atoms were the smallest thing possible. We now know atoms are made of even smaller particles!",
      },
    ],
  },
  middle: {
    title: "Welcome, Energy Investigator! ⚡",
    sections: [
      {
        heading: "Nuclear Fission: Splitting the Atom",
        body: "Nuclear fission is the process of splitting a heavy atomic nucleus (usually Uranium-235 or Plutonium-239) into two lighter nuclei. This split releases a tremendous amount of energy according to Einstein's famous equation E=mc². The released neutrons can strike other uranium atoms, creating a chain reaction. In a nuclear reactor, this chain reaction is carefully controlled using control rods that absorb excess neutrons.",
      },
      {
        heading: "Inside a Nuclear Power Plant",
        body: "A nuclear power plant has several key components: the reactor core (where fission happens), a coolant system (usually water) that carries heat away from the core, a steam generator, a turbine, and a generator. The reactor is housed in a thick containment structure made of reinforced concrete and steel, designed to contain radiation even in extreme scenarios. Modern plants have multiple independent safety systems.",
      },
      {
        heading: "Nuclear vs. Other Energy Sources",
        body: "Every energy source has trade-offs. Nuclear excels at providing large amounts of reliable, carbon-free electricity with a tiny land footprint. A nuclear plant the size of a shopping mall produces as much electricity as a solar farm covering 13,000 football fields. However, nuclear plants are expensive to build and produce radioactive waste that must be safely managed. Wind and solar are cheaper to build per unit but need large areas and backup power for when conditions aren't favorable.",
      },
      {
        heading: "Nuclear Waste: Not as Scary as You Think",
        body: "All of the used nuclear fuel produced by US nuclear plants over 60+ years would fit on a single football field stacked just 10 yards high. Compare that to the millions of tons of CO₂ released by fossil fuel plants every year. Used fuel is stored in robust steel and concrete containers. Scientists are also developing ways to recycle used fuel, extracting 90%+ of the remaining energy.",
      },
      {
        heading: "The Future: Fusion Energy",
        body: "While current nuclear plants use fission (splitting atoms), scientists are working on fusion — combining light atoms like hydrogen to release even more energy. Fusion is what powers the Sun! If achieved commercially, fusion could provide virtually unlimited, clean energy with minimal waste. Major experiments around the world are making steady progress.",
      },
    ],
  },
  highschool: {
    title: "Welcome, Nuclear Scholar! 🎓",
    sections: [
      {
        heading: "Nuclear Physics Fundamentals",
        body: "Nuclear energy exploits the binding energy differences between heavy and light nuclei. In fission, a heavy nucleus like U-235 absorbs a thermal neutron, forming an unstable U-236 nucleus that splits into two fission fragments, 2-3 free neutrons, and gamma radiation. The mass defect (about 0.1% of the original mass) converts to approximately 200 MeV of energy per fission event — roughly 80 million times the energy released by burning a single carbon atom.",
      },
      {
        heading: "Reactor Physics and Engineering",
        body: "Commercial reactors maintain criticality — a self-sustaining chain reaction where exactly one neutron from each fission event causes another fission. The multiplication factor (k-effective) equals 1.0 at steady state. Reactors are designed with negative temperature and void coefficients, meaning the reaction naturally slows down if temperature rises — a crucial passive safety feature. Generation III+ designs like the AP1000 and EPR incorporate passive safety systems that use natural circulation, gravity, and compressed gas rather than active pumps.",
      },
      {
        heading: "The Nuclear Fuel Cycle",
        body: "Uranium is mined, milled into yellowcake (U₃O₈), converted to UF₆, enriched from 0.7% to about 3-5% U-235 (for commercial reactors), fabricated into ceramic UO₂ pellets, and assembled into fuel rods. After 4-6 years in the reactor, spent fuel contains about 95% unused uranium, 1% plutonium, and 4% fission products. Open fuel cycles (like the US) store spent fuel directly. Closed cycles (like France) reprocess spent fuel to extract usable uranium and plutonium, reducing high-level waste volume by ~80%.",
      },
      {
        heading: "Advanced Reactor Concepts",
        body: "Generation IV reactor designs include: Molten Salt Reactors (MSRs) that use liquid fuel dissolved in fluoride salt, enabling online reprocessing and passive drainage safety; Sodium-Fast Reactors (SFRs) that use fast neutrons to breed fuel and consume long-lived actinides; Very High Temperature Reactors (VHTRs) that can provide process heat up to 950°C for industrial applications and hydrogen production; and Small Modular Reactors (SMRs) designed for factory fabrication and deployment in locations unsuitable for large plants.",
      },
      {
        heading: "Energy Economics and Policy",
        body: "Nuclear's levelized cost of electricity (LCOE) varies significantly by region and project management. While nuclear has high capital costs and long construction timelines, it offers very low and stable fuel costs (uranium price has minimal impact on electricity cost) and plants can operate for 60-80 years. When accounting for system costs — including grid integration, backup capacity, and storage for intermittent sources — nuclear becomes highly competitive. Carbon pricing mechanisms further improve nuclear's economic position.",
      },
      {
        heading: "Fusion: The Next Frontier",
        body: "Magnetic confinement fusion (tokamaks like ITER) and inertial confinement fusion (laser-driven like NIF) are the two main approaches. ITER aims to demonstrate Q>10 (producing 10x more fusion power than heating power) by the late 2020s. The Lawson criterion — the product of plasma density, confinement time, and temperature — must exceed a threshold for net energy gain. Private companies like Commonwealth Fusion Systems and TAE Technologies are pursuing compact, high-field approaches that could accelerate the timeline to commercial fusion power.",
      },
    ],
  },
};

const Kids = () => {
  const [selectedLevel, setSelectedLevel] = useState<AgeLevel>("elementary");
  const currentContent = content[selectedLevel];

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <img
            src={atomMascot}
            alt="Friendly atom mascot character"
            className="mx-auto h-32 w-32 mb-4"
            loading="lazy"
            width={512}
            height={512}
          />
          <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Kids Zone</h1>
          <p className="text-muted-foreground text-lg">
            Learning about nuclear energy is fun! Pick your level below.
          </p>
        </div>

        {/* Level selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`p-4 rounded-lg text-center transition-all ${
                selectedLevel === level.id
                  ? "bg-primary text-primary-foreground scale-105 retro-border"
                  : "bg-card text-foreground border-2 border-border hover:border-primary/50"
              }`}
            >
              <span className="text-2xl block mb-1">{level.emoji}</span>
              <span className="font-heading font-semibold text-sm block">{level.label}</span>
              <span className="text-xs opacity-75">{level.ages}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="retro-card mb-6">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">{currentContent.title}</h2>
          <div className="space-y-6">
            {currentContent.sections.map((section, i) => (
              <div key={i} className="animate-fade-in-up opacity-0" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{section.heading}</h3>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-lg bg-muted text-center">
          <p className="text-sm text-muted-foreground">
            👨‍👩‍👧‍👦 Parents & teachers: This content is designed to be accurate and age-appropriate.
            Feel free to use it as a learning resource!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kids;
