import { Link } from "react-router-dom";
import { Atom, Newspaper, BookOpen, Pencil, Baby, Building2 } from "lucide-react";
import { BRAND_MARK } from "@/lib/brand";
import heroImage from "@/assets/hero-atomic.jpg";

const features = [
  {
    icon: Newspaper,
    title: "Latest News",
    description: "Stay current with nuclear energy developments across technology, business, and government.",
    to: "/news",
    delay: "stagger-1",
  },
  {
    icon: BookOpen,
    title: "Learn",
    description: "Build your understanding of nuclear energy from the ground up with clear, accessible content.",
    to: "/learn",
    delay: "stagger-2",
  },
  {
    icon: Building2,
    title: "Business",
    description: "Explore the companies driving nuclear innovation — from startups to industry giants.",
    to: "/business",
    delay: "stagger-3",
  },
  {
    icon: Pencil,
    title: "Blog & Opinions",
    description: "Read editorials and commentary on the future of clean energy from our contributors.",
    to: "/blog",
    delay: "stagger-4",
  },
  {
    icon: Baby,
    title: "Kids Zone",
    description: "Fun, age-appropriate learning about atoms, energy, and how nuclear power works.",
    to: "/kids",
    delay: "stagger-5",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Retro-futuristic nuclear power plant illustration" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container relative z-10 py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Atom className="h-10 w-10 text-accent" />
              <span className="text-sm font-medium tracking-widest uppercase text-accent">The Future is Atomic</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Powering Tomorrow with the Atom
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              Welcome to {BRAND_MARK} — your trusted source for nuclear energy news, education, and thoughtful commentary. We believe every energy source has its place, and nuclear deserves a seat at the table.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/learn"
                className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity retro-border"
              >
                Start Learning
              </Link>
              <Link
                to="/news"
                className="inline-flex items-center px-6 py-3 rounded-md bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity retro-border"
              >
                Read the News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore {BRAND_MARK}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're a policy expert, a curious student, or just getting started — there's something here for everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Link
              key={f.to}
              to={f.to}
              className={`retro-card hover:scale-[1.02] transition-transform animate-fade-in-up opacity-0 ${f.delay}`}
            >
              <f.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-card border-y-2 border-border">
        <div className="container py-20 text-center max-w-3xl mx-auto">
          <Atom className="h-12 w-12 text-primary mx-auto mb-6 atom-spin" />
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
            Our Philosophy
          </h2>
           <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We're advocates for nuclear energy — but not at the expense of any other energy source. Coal, oil, and natural gas built the modern world and continue to serve vital roles in communities everywhere. Solar, wind, hydro, and geothermal each bring unique strengths. Our focus is on lifting up nuclear energy's incredible potential while respecting every form of power generation that keeps the lights on.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Energy isn't a competition. It's a portfolio — and every source has its place.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
