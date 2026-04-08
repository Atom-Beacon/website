import { Atom, Zap, Shield, Leaf, Factory, Recycle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  {
    icon: Atom,
    title: "What Is Nuclear Energy?",
    summary: "Nuclear energy is the energy stored in the nucleus of atoms. Learn how fission and fusion release enormous amounts of energy.",
    to: "/learn/what-is-nuclear-energy",
  },
  {
    icon: Zap,
    title: "How Does a Nuclear Power Plant Work?",
    summary: "From splitting atoms to spinning turbines — discover the step-by-step process that turns nuclear reactions into electricity.",
    to: "/learn/how-plants-work",
  },
  {
    icon: Shield,
    title: "Is Nuclear Energy Safe?",
    summary: "Modern nuclear energy is one of the safest forms of power generation. Explore the data, the designs, and the regulations.",
    to: "/learn/safety",
  },
  {
    icon: Leaf,
    title: "Nuclear and the Environment",
    summary: "Near-zero carbon emissions, minimal land use, and careful waste management — see how nuclear stacks up environmentally.",
    to: "/learn/environment",
  },
  {
    icon: Factory,
    title: "Types of Nuclear Reactors",
    summary: "From PWRs to SMRs to molten salt designs — explore the diverse world of reactor technology.",
    to: "/learn/reactor-types",
  },
  {
    icon: Recycle,
    title: "Nuclear Fuel and Waste",
    summary: "How uranium becomes fuel, how waste is managed, and why the volume is far smaller than most people think.",
    to: "/learn/fuel-and-waste",
  },
];

const Learn = () => {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Learn About Nuclear Energy</h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Build your understanding of how nuclear energy works, why it matters, and how it fits into our clean energy future. Click any topic to dive deeper.
        </p>

        <div className="space-y-6">
          {topics.map((topic, i) => (
            <Link
              key={i}
              to={topic.to}
              className="retro-card block hover:scale-[1.01] transition-transform animate-fade-in-up opacity-0"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 rounded-lg bg-primary/10">
                  <topic.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">{topic.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">{topic.summary}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-sm">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
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
