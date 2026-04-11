import { useState } from "react";
import atomMascot from "@/assets/atom-mascot.png";

type AgeLevel = "toddler" | "elementary" | "middle" | "highschool";

const levels: { id: AgeLevel; label: string; ages: string; emoji: string }[] = [
  { id: "toddler", label: "Little Atoms", ages: "Ages 3–5", emoji: "🍼" },
  { id: "elementary", label: "Atom Explorers", ages: "Ages 6–10", emoji: "🔬" },
  { id: "middle", label: "Energy Investigators", ages: "Ages 11–13", emoji: "⚡" },
  { id: "highschool", label: "Nuclear Scholars", ages: "Ages 14–18", emoji: "🎓" },
];

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const quizzes: Record<AgeLevel, QuizQuestion[]> = {
  toddler: [
    {
      question: "What are the teeny tiny pieces that everything is made of?",
      options: ["Cookies 🍪", "Atoms ⚛️", "Stars ⭐"],
      correctIndex: 1,
      explanation: "That's right! Everything is made of atoms — even cookies and stars!",
    },
    {
      question: "What does nuclear energy help make?",
      options: ["Electricity 💡", "Rain 🌧️", "Rainbows 🌈"],
      correctIndex: 0,
      explanation: "Yes! Nuclear energy helps make electricity that powers our lights and toys!",
    },
  ],
  elementary: [
    {
      question: "What is the center of an atom called?",
      options: ["The shell", "The nucleus", "The orbit", "The electron"],
      correctIndex: 1,
      explanation: "The nucleus is the dense center of an atom, made of protons and neutrons!",
    },
    {
      question: "One tiny uranium pellet has as much energy as…",
      options: ["A glass of water", "A car battery", "A ton of coal", "A flashlight battery"],
      correctIndex: 2,
      explanation: "Incredible, right? A pellet the size of a gummy bear packs the energy of 2,000 pounds of coal!",
    },
    {
      question: "What spins to help make electricity in a power plant?",
      options: ["A wheel", "A turbine", "A propeller", "A top"],
      correctIndex: 1,
      explanation: "Steam spins a turbine, which is connected to a generator that makes electricity!",
    },
  ],
  middle: [
    {
      question: "What famous equation explains the energy released in nuclear fission?",
      options: ["F = ma", "E = mc²", "V = IR", "PV = nRT"],
      correctIndex: 1,
      explanation: "Einstein's E=mc² shows that a tiny amount of mass converts to a huge amount of energy!",
    },
    {
      question: "What are control rods used for in a nuclear reactor?",
      options: ["Stirring the water", "Absorbing excess neutrons", "Heating the fuel", "Generating steam"],
      correctIndex: 1,
      explanation: "Control rods absorb neutrons to regulate the chain reaction — they're how operators speed up or slow down the reactor!",
    },
    {
      question: "Which process powers the Sun?",
      options: ["Fission", "Combustion", "Fusion", "Evaporation"],
      correctIndex: 2,
      explanation: "The Sun fuses hydrogen atoms into helium at temperatures over 15 million °C!",
    },
    {
      question: "All US nuclear waste from 60+ years would fit on…",
      options: ["A parking lot", "A football field", "The state of Texas", "A basketball court"],
      correctIndex: 1,
      explanation: "All of it! Stacked just 10 yards high on a single football field. Nuclear waste is incredibly compact.",
    },
  ],
  highschool: [
    {
      question: "What does k-effective = 1.0 mean in reactor physics?",
      options: ["Reactor is shut down", "Reaction is growing", "Reaction is self-sustaining at steady state", "Reactor is overheating"],
      correctIndex: 2,
      explanation: "k-eff = 1.0 means exactly one neutron from each fission causes another fission — a stable, self-sustaining chain reaction.",
    },
    {
      question: "What is 'yellowcake' in the nuclear fuel cycle?",
      options: ["A safety warning label", "Processed uranium oxide (U₃O₈)", "A type of reactor coolant", "A fusion byproduct"],
      correctIndex: 1,
      explanation: "Yellowcake is milled uranium ore concentrate — an early stage in the fuel fabrication process.",
    },
    {
      question: "Which reactor design uses liquid fuel dissolved in fluoride salt?",
      options: ["PWR", "BWR", "Molten Salt Reactor", "CANDU"],
      correctIndex: 2,
      explanation: "MSRs dissolve fuel directly in molten salt, enabling unique safety features like passive drainage in emergencies.",
    },
    {
      question: "Approximately how much energy does a single fission event release?",
      options: ["2 eV", "200 eV", "200 MeV", "200 GeV"],
      correctIndex: 2,
      explanation: "About 200 MeV — roughly 80 million times more than burning a single carbon atom!",
    },
  ],
};

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
      {
        heading: "So Many Ways to Make Energy! ☀️💨🔥",
        body: "Did you know there are lots of ways to make electricity? The sun gives us solar energy — that's why some rooftops have shiny panels! Wind can spin big fans called turbines. Water flowing in rivers can make power too! And for a long time, people burned coal and oil to keep warm and run machines. Every kind of energy helps us in different ways!",
      },
      {
        heading: "Scientists Are Energy Superheroes! 🦸",
        body: "Scientists and engineers are like superheroes — they figure out how to use energy to help people! Some study atoms, some study the sun, and some study wind. They all work together to make sure everyone has the electricity they need. Teamwork!",
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
        heading: "The Energy Family 👨‍👩‍👧‍👦",
        body: "Think of energy sources like members of a family — each one has a special talent! Solar energy is great during sunny days. Wind energy works best in breezy places. Coal and natural gas helped build our cities and factories over the last 200 years. Hydropower uses flowing water. And nuclear energy works around the clock, no matter the weather. The best power grids use a team of different sources working together!",
      },
      {
        heading: "Famous Scientists Who Studied Atoms 👩‍🔬",
        body: "Many brilliant people helped us understand atoms! Marie Curie discovered radioactivity and won TWO Nobel Prizes. Albert Einstein figured out the famous equation E=mc² that explains how atoms hold so much energy. Enrico Fermi built the first nuclear reactor in 1942 under a football stadium in Chicago! Lise Meitner helped explain how atoms could split apart. These scientists changed the world!",
      },
      {
        heading: "Fun Fact! 🌟",
        body: "The word 'atom' comes from an ancient Greek word meaning 'uncuttable' — people once thought atoms were the smallest thing possible. We now know atoms are made of even smaller particles!",
      },
      {
        heading: "Try This at Home! 🧪",
        body: "You can see a chain reaction in action! Set up a bunch of dominoes in a line. When you push the first one, it knocks over the next, and the next, and the next — just like neutrons hitting uranium atoms in a reactor! The trick is that each domino only knocks over one or two more, keeping it controlled — just like in a real reactor.",
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
        heading: "Energy Sources Work Together",
        body: "Every energy source has its own strengths. Nuclear excels at providing large amounts of reliable, carbon-free electricity with a very small land footprint. Solar panels capture energy from the sun and can be installed on rooftops. Wind turbines harness moving air in open areas. Coal and natural gas plants can be built quickly and have powered civilization for over a century. The best energy grids use a mix of many sources, each doing what it does best. Nuclear's special strength is providing steady, round-the-clock power.",
      },
      {
        heading: "Radiation: What Is It Really?",
        body: "Radiation is energy that travels through space. It's all around us — from the sun, from rocks in the ground, even from bananas (they contain a tiny bit of radioactive potassium!). The radiation from nuclear plants is carefully contained and monitored. In fact, you receive more radiation from a single cross-country flight than you'd get living next to a nuclear plant for a year. Understanding radiation helps separate facts from fear.",
      },
      {
        heading: "Nuclear Waste: Smaller Than You Think",
        body: "All of the used nuclear fuel produced by US nuclear plants over 60+ years would fit on a single football field stacked just 10 yards high. That's incredibly compact compared to the waste from many other industries. Used fuel is stored in robust steel and concrete containers. Scientists are also developing ways to recycle used fuel, extracting 90%+ of the remaining energy.",
      },
      {
        heading: "The Future: Fusion Energy",
        body: "While current nuclear plants use fission (splitting atoms), scientists are working on fusion — combining light atoms like hydrogen to release even more energy. Fusion is what powers the Sun! If achieved commercially, fusion could provide virtually unlimited, clean energy with minimal waste. Major experiments around the world are making steady progress.",
      },
      {
        heading: "How Did We Get Here? A Brief History of Energy",
        body: "Humans have always needed energy. We started with wood fires, then discovered coal — which powered the steam engines that built the modern world. Oil and natural gas transformed transportation and industry. Hydroelectric dams, nuclear reactors, wind turbines, and solar panels each added new capabilities. Every step forward built on what came before. Understanding this history helps us appreciate why energy diversity matters.",
      },
      {
        heading: "Careers in Nuclear Energy 🏗️",
        body: "The nuclear industry needs all kinds of people! Reactor operators run the power plants. Nuclear engineers design new reactors. Health physicists make sure radiation levels are safe. Construction workers build the plants. Geologists find uranium deposits. Policy experts shape energy laws. Even communicators help explain nuclear science to the public. It's a field where science, engineering, and public service all come together.",
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
        body: "Nuclear's levelized cost of electricity (LCOE) varies significantly by region and project management. While nuclear has high capital costs and long construction timelines, it offers very low and stable fuel costs (uranium price has minimal impact on electricity cost) and plants can operate for 60-80 years. Every energy source has a different cost profile — natural gas plants are cheap to build but fuel-dependent, solar and wind have falling installation costs but require grid integration planning, and coal remains economically important in many developing nations. Understanding these trade-offs is key to smart energy policy.",
      },
      {
        heading: "The Energy Landscape: Past, Present, and Future",
        body: "The story of energy is the story of human progress. Coal powered the Industrial Revolution. Oil made modern transportation possible. Natural gas provided cleaner-burning alternatives for heating and electricity. Hydroelectric dams electrified entire regions. Nuclear brought energy density to a new level. Solar and wind are now the fastest-growing sources worldwide. No single technology brought us here — it was the cumulative innovation across all energy sources. As a nuclear scholar, it's important to understand and respect this full picture while exploring how nuclear can contribute to the next chapter.",
      },
      {
        heading: "Nuclear Nonproliferation and Global Security",
        body: "The peaceful use of nuclear energy is governed by international treaties, most notably the Nuclear Non-Proliferation Treaty (NPT), which aims to prevent the spread of nuclear weapons while promoting peaceful nuclear cooperation. The IAEA conducts safeguards inspections worldwide. Modern reactor designs and fuel cycles are being developed with proliferation resistance as a core design criterion — for example, TRISO fuel particles are extremely difficult to reprocess for weapons purposes.",
      },
      {
        heading: "Fusion: The Next Frontier",
        body: "Magnetic confinement fusion (tokamaks like ITER) and inertial confinement fusion (laser-driven like NIF) are the two main approaches. ITER aims to demonstrate Q>10 (producing 10x more fusion power than heating power) by the late 2020s. The Lawson criterion — the product of plasma density, confinement time, and temperature — must exceed a threshold for net energy gain. Private companies like Commonwealth Fusion Systems, Helion Energy, and TAE Technologies are pursuing compact approaches that could accelerate the timeline to commercial fusion power.",
      },
    ],
  },
};

/* @todo: Add interactive activities per level — e.g., a drag-and-drop atom builder for elementary,
   a virtual reactor control panel simulation for middle school, and a binding energy curve explorer
   for high school. These would require more complex components and possibly a game engine library. */

/* @todo: Add a "Nuclear Energy Around the World" interactive map for middle/high school levels,
   showing where reactors operate and what percentage of each country's electricity comes from nuclear. */

const Quiz = ({ questions }: { questions: QuizQuestion[] }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[currentQ];

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.correctIndex) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentQ + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center py-6">
        <p className="text-4xl mb-2">{pct >= 80 ? "🏆" : pct >= 50 ? "👏" : "💪"}</p>
        <p className="font-heading text-2xl font-bold text-foreground mb-2">
          You scored {score} out of {questions.length}!
        </p>
        <p className="text-muted-foreground mb-4">
          {pct >= 80 ? "Amazing! You really know your nuclear science!" : pct >= 50 ? "Great job! Keep learning!" : "Good effort! Read through the sections above and try again!"}
        </p>
        <button onClick={handleRestart} className="px-5 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-muted-foreground">Question {currentQ + 1} of {questions.length}</p>
        <p className="text-sm text-muted-foreground">Score: {score}</p>
      </div>
      <p className="font-heading text-lg font-semibold text-foreground mb-4">{q.question}</p>
      <div className="space-y-2 mb-4">
        {q.options.map((opt, idx) => {
          let cls = "p-3 rounded-lg border-2 text-left w-full transition-all ";
          if (selected === null) {
            cls += "border-border hover:border-primary/50 bg-card text-foreground cursor-pointer";
          } else if (idx === q.correctIndex) {
            cls += "border-green-500 bg-green-500/10 text-foreground";
          } else if (idx === selected) {
            cls += "border-red-400 bg-red-400/10 text-foreground";
          } else {
            cls += "border-border bg-card text-muted-foreground opacity-50";
          }
          return (
            <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={selected !== null}>
              {opt}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className="animate-fade-in-up" style={{ animationFillMode: "forwards" }}>
          <p className="text-sm text-muted-foreground mb-3 p-3 rounded-lg bg-muted">{q.explanation}</p>
          <button onClick={handleNext} className="px-5 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            {currentQ + 1 >= questions.length ? "See Results" : "Next Question →"}
          </button>
        </div>
      )}
    </div>
  );
};

const Kids = () => {
  const [selectedLevel, setSelectedLevel] = useState<AgeLevel>("elementary");
  const currentContent = content[selectedLevel];
  const currentQuiz = quizzes[selectedLevel];

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

        {/* Quiz */}
        <div className="retro-card mb-6">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">🧠 Test Your Knowledge!</h2>
          <Quiz key={selectedLevel} questions={currentQuiz} />
        </div>

        <div className="p-4 rounded-lg bg-muted text-center">
          <p className="text-sm text-muted-foreground">
            👨‍👩‍👧‍👦 Parents & teachers: This content is designed to be accurate and age-appropriate.
            Feel free to use it as a learning resource! All facts are sourced from the IAEA, U.S. DOE, and peer-reviewed research.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kids;