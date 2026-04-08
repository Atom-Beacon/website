import { Link } from "react-router-dom";
import { ArrowLeft, Shield, ExternalLink } from "lucide-react";

const Safety = () => (
  <div className="container py-12">
    <div className="max-w-4xl mx-auto">
      <Link to="/learn" className="inline-flex items-center gap-1 text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Learn
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-primary/10">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground">Is Nuclear Energy Safe?</h1>
      </div>

      <div className="space-y-8">
        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">The Safety Record</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nuclear energy is statistically one of the <strong className="text-foreground">safest forms of energy production</strong> in the world. According to peer-reviewed research published in <em>The Lancet</em> and analysis by Our World in Data, nuclear energy has caused fewer deaths per unit of energy produced than any other major source — including wind and solar — when accounting for the full lifecycle (manufacturing, installation, operation, and accidents).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The death rate from nuclear energy is approximately <strong className="text-foreground">0.03 deaths per terawatt-hour (TWh)</strong> of electricity produced. For comparison, coal causes about 24.6 deaths/TWh, oil about 18.4, natural gas about 2.8, and even wind and solar are at 0.04 and 0.05 respectively.
          </p>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Major Accidents in Context</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Three major nuclear accidents are frequently cited: <strong className="text-foreground">Three Mile Island</strong> (1979, USA), <strong className="text-foreground">Chernobyl</strong> (1986, USSR/Ukraine), and <strong className="text-foreground">Fukushima Daiichi</strong> (2011, Japan). Each of these events led to significant improvements in safety design and regulation.
          </p>
          <div className="space-y-4 mt-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Three Mile Island (1979)</h3>
              <p className="text-sm text-muted-foreground">A partial meltdown of one reactor. The containment building held, and there were no deaths or significant radiation exposure to the public. Studies by the NRC and independent researchers found no detectable health effects on the surrounding population.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Chernobyl (1986)</h3>
              <p className="text-sm text-muted-foreground">The worst nuclear disaster in history, caused by a fundamentally flawed reactor design (RBMK) combined with operator error during a safety test. The RBMK design — which lacked a proper containment building — is not used anywhere in the Western world and has been retired or heavily modified. The accident directly caused 31 deaths among plant workers and emergency responders, with the WHO estimating up to 4,000 additional cancer deaths over the following decades.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Fukushima Daiichi (2011)</h3>
              <p className="text-sm text-muted-foreground">Caused by a 9.0-magnitude earthquake and 14-meter tsunami — one of the most powerful natural disasters ever recorded. Three reactors experienced meltdowns. There was one confirmed radiation-related cancer death as of 2024. The primary health impacts were psychological stress and the consequences of mass evacuation. The disaster led to sweeping safety upgrades at nuclear plants worldwide.</p>
            </div>
          </div>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Modern Safety Systems</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Modern reactor designs incorporate multiple layers of safety, following the principle of <strong className="text-foreground">defense in depth</strong>:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong className="text-foreground">Passive safety systems</strong> — Use natural forces like gravity, convection, and compressed gas rather than active pumps and human intervention. These systems work even during a total loss of electrical power.</li>
            <li><strong className="text-foreground">Multiple physical barriers</strong> — The fuel pellet itself, the fuel rod cladding, the reactor vessel, and the containment building all serve as barriers preventing radioactive material release.</li>
            <li><strong className="text-foreground">Negative temperature/void coefficients</strong> — Many modern designs are physically incapable of runaway reactions. As temperatures rise, the reaction naturally slows down.</li>
            <li><strong className="text-foreground">Core catcher systems</strong> — Advanced designs include structures beneath the reactor vessel designed to safely contain and cool molten fuel in the extremely unlikely event of a vessel breach.</li>
          </ul>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Regulation and Oversight</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nuclear energy is the most heavily regulated energy industry in the world. In the United States, the <strong className="text-foreground">Nuclear Regulatory Commission (NRC)</strong> maintains resident inspectors at every operating nuclear plant — full-time, on-site personnel who independently monitor safety. Internationally, the <strong className="text-foreground">International Atomic Energy Agency (IAEA)</strong> conducts peer reviews and sets safety standards. Every nuclear nation has its own regulatory body, and the industry shares operational experience globally through organizations like the <strong className="text-foreground">World Association of Nuclear Operators (WANO)</strong>.
          </p>
        </section>

        <section className="retro-card bg-primary/5">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Sources & Further Reading</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="https://ourworldindata.org/safest-sources-of-energy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Our World in Data — Safest Sources of Energy <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.nrc.gov/about-nrc/regulatory.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                U.S. Nuclear Regulatory Commission — Regulatory Oversight <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.iaea.org/topics/nuclear-safety" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                IAEA — Nuclear Safety <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.world-nuclear.org/nuclear-essentials/chernobyl-accident" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                World Nuclear Association — Chernobyl Accident <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default Safety;
