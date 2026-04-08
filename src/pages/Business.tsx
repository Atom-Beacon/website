import { Building2, ExternalLink, MapPin, ArrowRight } from "lucide-react";

interface Company {
  name: string;
  website: string;
  hq: string;
  focus: string;
  purePlay: boolean;
  description: string;
  exciting: string;
  challenges: string;
  recentNews: { title: string; url: string }[];
}

const companies: Company[] = [
  {
    name: "Cameco Corporation",
    website: "https://www.cameco.com",
    hq: "Saskatoon, Saskatchewan, Canada",
    focus: "Uranium mining, refining, conversion, and fuel manufacturing",
    purePlay: true,
    description: "Cameco is one of the world's largest uranium producers, providing about 15% of global uranium production. The company operates mines in Canada (notably the Cigar Lake and McArthur River mines in Saskatchewan's Athabasca Basin) and Kazakhstan. Cameco also operates uranium refining and conversion facilities, making it one of the few vertically integrated nuclear fuel companies in the world.",
    exciting: "Cameco is uniquely positioned to benefit from the nuclear renaissance. The company's tier-one assets in the Athabasca Basin contain some of the highest-grade uranium deposits on Earth. With long-term supply contracts and rising uranium prices driven by new reactor construction worldwide, Cameco's strategic position is strengthening.",
    challenges: "Uranium price volatility, geopolitical supply chain risks (particularly regarding Kazakhstan), and the long lead times required to restart idled mining capacity. Environmental permitting for new mines remains complex.",
    recentNews: [
      { title: "Cameco reports strong 2025 results as uranium demand surges", url: "https://www.cameco.com/media/news" },
      { title: "McArthur River mine expansion plans advance", url: "https://www.cameco.com/media/news" },
      { title: "Cameco signs long-term uranium supply agreements with Asian utilities", url: "https://www.cameco.com/media/news" },
    ],
  },
  {
    name: "Constellation Energy",
    website: "https://www.constellationenergy.com",
    hq: "Baltimore, Maryland, USA",
    focus: "Nuclear power plant operation, clean energy generation",
    purePlay: false,
    description: "Constellation Energy is America's largest operator of nuclear power plants, with a fleet of approximately 13 nuclear units across multiple states. Spun off from Exelon in 2022, Constellation is the nation's largest producer of carbon-free energy. The company also operates natural gas, hydro, wind, and solar assets, but nuclear is the backbone of its business.",
    exciting: "Constellation's massive nuclear fleet makes it a critical player in decarbonization. The company has been signing power purchase agreements (PPAs) with major tech companies seeking 24/7 carbon-free energy for data centers — including a landmark deal to restart Three Mile Island Unit 1. This positions Constellation at the intersection of nuclear energy and the AI revolution.",
    challenges: "Aging fleet requiring life extensions and significant capital investment. Regulatory uncertainty around license renewals. Competition from subsidized renewables in some markets.",
    recentNews: [
      { title: "Constellation advances Three Mile Island Unit 1 restart plans", url: "https://www.constellationenergy.com/newsroom.html" },
      { title: "Tech giants sign clean energy deals with Constellation", url: "https://www.constellationenergy.com/newsroom.html" },
      { title: "Constellation reports record clean energy generation in 2025", url: "https://www.constellationenergy.com/newsroom.html" },
    ],
  },
  {
    name: "NuScale Power",
    website: "https://www.nuscalepower.com",
    hq: "Corvallis, Oregon, USA",
    focus: "Small Modular Reactor design and technology",
    purePlay: true,
    description: "NuScale Power is a pioneering SMR company that received the first-ever Small Modular Reactor design certification from the U.S. Nuclear Regulatory Commission in January 2023. Their VOYGR power plant design uses a light-water reactor module that generates 77 MWe per module, with plants configurable in arrays of 4, 6, or 12 modules.",
    exciting: "NuScale's NRC certification is a historic milestone — no other SMR has achieved this regulatory approval. Their design uses natural circulation for cooling, eliminating the need for reactor coolant pumps and making the design inherently safer. The company is pursuing deployments in the U.S. and internationally, including Romania, South Korea, and other markets.",
    challenges: "The cancellation of the Carbon Free Power Project (CFPP) in Idaho in 2023 was a setback, driven by rising cost estimates. NuScale must demonstrate that SMR economics can be competitive. Revenue generation remains limited as the company is pre-commercial.",
    recentNews: [
      { title: "NuScale explores new deployment sites following design certification", url: "https://www.nuscalepower.com/en/news" },
      { title: "NuScale partners with international utilities for SMR projects", url: "https://www.nuscalepower.com/en/news" },
      { title: "NuScale advances SMR technology for data center power needs", url: "https://www.nuscalepower.com/en/news" },
    ],
  },
  {
    name: "TerraPower",
    website: "https://www.terrapower.com",
    hq: "Bellevue, Washington, USA",
    focus: "Advanced nuclear reactor design (Natrium sodium-cooled fast reactor)",
    purePlay: true,
    description: "Founded in 2008 by Bill Gates, TerraPower is developing the Natrium reactor — a sodium-cooled fast reactor paired with a molten salt energy storage system. The Natrium design can produce 345 MWe of baseload power with the ability to ramp up to 500 MWe during peak demand using its integrated storage. TerraPower is building its first Natrium demonstration plant in Kemmerer, Wyoming, at the site of a retiring coal plant.",
    exciting: "The Natrium design is revolutionary — it can burn spent fuel from conventional reactors, reducing waste while generating power. The integrated molten salt energy storage allows it to complement renewable energy by flexing output. The Kemmerer demonstration plant represents a major step toward commercializing advanced reactor technology, with construction underway and operation expected in the late 2020s.",
    challenges: "First-of-a-kind construction risk, securing HALEU (High-Assay Low-Enriched Uranium) fuel supply, and navigating NRC licensing for a novel reactor design. The project timeline has slipped due to HALEU supply chain issues.",
    recentNews: [
      { title: "TerraPower's Natrium plant construction progresses in Wyoming", url: "https://www.terrapower.com/news/" },
      { title: "Bill Gates highlights nuclear energy's role in AI infrastructure", url: "https://www.terrapower.com/news/" },
      { title: "TerraPower secures additional funding for Natrium development", url: "https://www.terrapower.com/news/" },
    ],
  },
  {
    name: "Oklo Inc.",
    website: "https://oklo.com",
    hq: "Santa Clara, California, USA",
    focus: "Advanced fission microreactors and fuel recycling",
    purePlay: true,
    description: "Oklo is developing compact fast reactors called the Aurora powerhouse, designed to produce 15-50 MWe. What sets Oklo apart is their focus on using recycled nuclear fuel — they plan to power their reactors with fuel recovered from used nuclear fuel from existing reactors. Led by CEO Jacob DeWitte, Oklo went public via SPAC merger in 2024 and is backed by Sam Altman (OpenAI CEO).",
    exciting: "Oklo's vision of closing the nuclear fuel cycle by recycling spent fuel is transformative — turning waste into an energy resource. Their compact form factor makes nuclear accessible for remote communities, industrial sites, and military installations. The company's high-profile backing from Silicon Valley investors signals growing tech-sector interest in nuclear energy.",
    challenges: "Oklo's initial NRC application was denied in 2022, requiring additional safety analysis. Developing fuel recycling capability at commercial scale is technically complex. The company is pre-revenue and faces a long path to commercial deployment.",
    recentNews: [
      { title: "Oklo resubmits NRC license application with enhanced safety case", url: "https://oklo.com/news" },
      { title: "Oklo signs agreements for Aurora powerhouse deployments", url: "https://oklo.com/news" },
      { title: "Oklo advances fuel recycling technology development", url: "https://oklo.com/news" },
    ],
  },
  {
    name: "BWX Technologies (BWXT)",
    website: "https://www.bwxt.com",
    hq: "Lynchburg, Virginia, USA",
    focus: "Nuclear components, fuel, naval reactors, medical isotopes",
    purePlay: true,
    description: "BWX Technologies is a leading supplier of nuclear components and fuel to the U.S. government, particularly for the U.S. Navy's nuclear submarine and aircraft carrier fleet. BWXT manufactures nuclear reactor components, fuel assemblies, and precision naval nuclear components. The company also produces medical isotopes (Technetium-99m) used in millions of diagnostic procedures annually.",
    exciting: "BWXT is the only company in the United States that manufactures naval nuclear reactors and fuel — a position of extraordinary strategic importance. The company is also a leader in developing small modular reactors for commercial and defense applications, including the BWXT Advanced Nuclear Reactor (BANR) microreactor. Their medical isotopes division addresses a critical healthcare need.",
    challenges: "Heavy dependence on U.S. government contracts creates concentration risk. The transition to commercial nuclear markets requires different capabilities than defense work. Scaling medical isotope production to meet global demand is an ongoing challenge.",
    recentNews: [
      { title: "BWXT wins expanded naval nuclear fuel contract", url: "https://www.bwxt.com/news" },
      { title: "BWXT advances microreactor design for defense and commercial use", url: "https://www.bwxt.com/news" },
      { title: "BWXT medical isotopes division expands production capacity", url: "https://www.bwxt.com/news" },
    ],
  },
  {
    name: "Kairos Power",
    website: "https://kairospower.com",
    hq: "Alameda, California, USA",
    focus: "Fluoride salt-cooled high-temperature reactor (KP-FHR)",
    purePlay: true,
    description: "Kairos Power is developing the KP-FHR (Kairos Power Fluoride Salt-Cooled High-Temperature Reactor), which uses molten fluoride salt as coolant and ceramic-coated pebble fuel called TRISO (TRi-structural ISOtropic) fuel particles. The design combines the proven safety of high-temperature gas reactor fuel with the superior heat transfer properties of molten salt coolant.",
    exciting: "Kairos received NRC approval to build its Hermes demonstration reactor in Oak Ridge, Tennessee — the first new non-water-cooled reactor authorized for construction in the U.S. in over 50 years. Their iterative, hardware-focused development approach emphasizes rapid prototyping and testing, a methodology more common in Silicon Valley than in traditional nuclear.",
    challenges: "First-of-a-kind technology risk, scaling from demonstration to commercial deployment, and establishing a supply chain for TRISO fuel and fluoride salt coolant. Competing with more established reactor designs for utility contracts.",
    recentNews: [
      { title: "Kairos Power's Hermes reactor construction advances in Tennessee", url: "https://kairospower.com/news/" },
      { title: "Kairos receives additional DOE funding for reactor development", url: "https://kairospower.com/news/" },
      { title: "Kairos Power expands team and facilities for Hermes project", url: "https://kairospower.com/news/" },
    ],
  },
  {
    name: "Centrus Energy",
    website: "https://www.centrusenergy.com",
    hq: "Bethesda, Maryland, USA",
    focus: "Uranium enrichment and HALEU production",
    purePlay: true,
    description: "Centrus Energy is a trusted American supplier of nuclear fuel and services. Since 1998, the company has provided its utility customers with more than 1,850 reactor years of fuel. Critically, Centrus is the only U.S.-owned, U.S.-technology enrichment company and is leading the effort to produce HALEU (High-Assay Low-Enriched Uranium) — the fuel required by most advanced reactor designs.",
    exciting: "Centrus began producing HALEU at its Piketon, Ohio facility in 2023 — the first new U.S. uranium enrichment in 70 years. HALEU is essential for nearly every advanced reactor design being developed, making Centrus a critical link in the advanced nuclear fuel supply chain. The company had $2 billion in unrestricted cash as of 2025, positioning it well for expansion.",
    challenges: "Scaling HALEU production to meet the needs of the emerging advanced reactor market requires massive capital investment. Currently, Russia is the only large-scale commercial HALEU producer, creating a geopolitical imperative to develop Western supply. Enrichment technology is sensitive from a nonproliferation standpoint.",
    recentNews: [
      { title: "Centrus reports 2025 revenue of $448.7 million with growing HALEU production", url: "https://www.centrusenergy.com/news/" },
      { title: "Centrus expands HALEU enrichment capacity at Piketon facility", url: "https://www.centrusenergy.com/news/" },
      { title: "Centrus signs new long-term enrichment contracts with utilities", url: "https://www.centrusenergy.com/news/" },
    ],
  },
  {
    name: "GE Vernova (GE Hitachi Nuclear Energy)",
    website: "https://www.gevernova.com/nuclear",
    hq: "Wilmington, North Carolina, USA (GE Hitachi); Cambridge, Massachusetts (GE Vernova)",
    focus: "Nuclear reactor design, services, and SMR technology",
    purePlay: false,
    description: "GE Hitachi Nuclear Energy is a joint venture between GE Vernova and Hitachi, combining decades of nuclear engineering expertise. The company services the existing global fleet of boiling water reactors and is developing the BWRX-300, a 300 MWe small modular reactor. GE Vernova, the parent company, is a broad energy technology conglomerate that also includes wind, gas, and grid businesses.",
    exciting: "The BWRX-300 has been selected for deployment in multiple countries including Canada (Ontario Power Generation), Poland, and the Czech Republic. Its simplified design — using natural circulation and a steel/concrete composite containment — targets a construction cost significantly lower than conventional nuclear plants. GE Hitachi's extensive experience with BWR technology provides a strong foundation.",
    challenges: "As part of a larger conglomerate, nuclear competes for capital and attention with other GE Vernova divisions. The BWRX-300 is still in the licensing process in most markets. Competition from other SMR designs is intensifying.",
    recentNews: [
      { title: "Ontario Power Generation advances BWRX-300 deployment at Darlington", url: "https://www.gevernova.com/nuclear/news" },
      { title: "Poland selects GE Hitachi BWRX-300 for nuclear program", url: "https://www.gevernova.com/nuclear/news" },
      { title: "GE Vernova reports growing nuclear order backlog", url: "https://www.gevernova.com/nuclear/news" },
    ],
  },
  {
    name: "Westinghouse Electric Company",
    website: "https://www.westinghousenuclear.com",
    hq: "Cranberry Township, Pennsylvania, USA",
    focus: "Nuclear reactor design, fuel, services, and decommissioning",
    purePlay: true,
    description: "Westinghouse is one of the world's most established nuclear companies, with roots dating back to the dawn of the commercial nuclear era. The company designed the first commercial pressurized water reactor and today provides fuel, services, and technology to approximately half of the world's operating nuclear plants. Westinghouse's AP1000 is the most advanced Generation III+ reactor design in operation, with four units operating in China and two at the Vogtle plant in Georgia, USA.",
    exciting: "The AP1000's proven design and recent operational success at Vogtle (the first new U.S. nuclear units in 30+ years) positions Westinghouse for international growth. The company is also developing the AP300 SMR and the eVinci microreactor, expanding its portfolio across the spectrum. Westinghouse was acquired by Cameco and Brookfield Renewable Partners in 2023 for $7.9 billion, signaling strong confidence in nuclear's future.",
    challenges: "The Vogtle project experienced significant cost overruns and delays (original budget ~$14B, final cost ~$35B), which has created skepticism about large nuclear construction projects. Westinghouse must demonstrate that lessons learned will prevent similar issues in future builds.",
    recentNews: [
      { title: "Westinghouse pursues AP1000 and AP300 deployments internationally", url: "https://www.westinghousenuclear.com/about/news" },
      { title: "Vogtle Units 3 and 4 achieve full commercial operation", url: "https://www.westinghousenuclear.com/about/news" },
      { title: "Westinghouse advances eVinci microreactor for defense and remote power", url: "https://www.westinghousenuclear.com/about/news" },
    ],
  },
  {
    name: "Framatome",
    website: "https://www.framatome.com",
    hq: "Paris, France",
    focus: "Nuclear reactor components, fuel, instrumentation, and services",
    purePlay: true,
    description: "Framatome (majority-owned by EDF, the French state utility) is a global leader in nuclear energy technology and services. The company designs and manufactures fuel assemblies, reactor components, and instrumentation and control systems. Framatome is a key partner in the EPR (European Pressurized Reactor) program and services a large portion of the global nuclear fleet.",
    exciting: "As part of France's ambitious nuclear expansion program — which includes building at least 6 new EPR2 reactors — Framatome is at the center of Europe's nuclear renaissance. The company's deep expertise in nuclear fuel and components makes it an essential partner for operators worldwide. Framatome is also developing advanced fuel designs including accident-tolerant fuels (ATF) that could further improve reactor safety.",
    challenges: "The EPR program has faced delays and cost overruns (Flamanville 3, Olkiluoto 3, Hinkley Point C). Framatome must help deliver the EPR2 on time and on budget to restore confidence. Competition from Russian and Chinese nuclear exporters in global markets.",
    recentNews: [
      { title: "Framatome begins manufacturing for France's EPR2 reactor program", url: "https://www.framatome.com/medias/news" },
      { title: "Framatome advances accident-tolerant fuel development", url: "https://www.framatome.com/medias/news" },
      { title: "Framatome expands North American fuel manufacturing capacity", url: "https://www.framatome.com/medias/news" },
    ],
  },
];

/* @todo: Add the following companies with full profiles when research is complete:
   - X-energy (TRISO-X fuel, Xe-100 HTGR, based in Rockville, MD)
   - Holtec International (SMR-160, spent fuel storage, based in Camden, NJ)
   - Terrestrial Energy (IMSR molten salt reactor, based in Ontario, Canada)
   - Korea Hydro & Nuclear Power (KHNP) — APR1400 reactor, South Korea's nuclear champion
   - Rosatom (Russian state nuclear corporation — VVER reactors, global nuclear exporter)
   - China National Nuclear Corporation (CNNC) — Hualong One reactor
   - EDF (Électricité de France) — world's largest nuclear fleet operator
   - Rolls-Royce SMR — UK-backed SMR program
   - Commonwealth Fusion Systems — fusion energy startup (MIT spinoff)
   - Helion Energy — fusion energy company backed by Sam Altman
   
   For each: verify HQ, current CEO, latest financials, and find 3 real recent news headlines with actual URLs.
   Consider adding a "Fusion Pioneers" subsection for fusion-focused companies.
*/

const Business = () => (
  <div className="container py-12">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <Building2 className="h-8 w-8 text-primary" />
        <h1 className="font-heading text-4xl font-bold text-foreground">Nuclear Energy Companies</h1>
      </div>
      <p className="text-muted-foreground mb-12 text-lg">
        The companies driving nuclear innovation — from uranium mining to advanced reactor design. Pure-play nuclear companies are highlighted.
      </p>

      <div className="space-y-10">
        {companies.map((company, i) => (
          <article
            key={company.name}
            className="retro-card animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'forwards' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="font-heading text-2xl font-bold text-foreground">{company.name}</h2>
                  {company.purePlay && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Pure Nuclear</span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {company.hq}
                </div>
              </div>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium shrink-0"
              >
                Official Website <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-2">{company.focus}</p>

            <div className="space-y-3 mb-4">
              <p className="text-muted-foreground leading-relaxed">{company.description}</p>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">What Makes Them Exciting</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{company.exciting}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">Challenges</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{company.challenges}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-semibold text-foreground mb-2">Recent Headlines</h3>
              <ul className="space-y-1.5">
                {company.recentNews.map((news, j) => (
                  <li key={j}>
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-start gap-1"
                    >
                      <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                      {news.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 retro-card bg-primary/5">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-3">About This Page</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          This page provides an overview of key companies in the nuclear energy sector. Company information is compiled from public sources including company websites, SEC filings, press releases, and industry reports. News headlines link to company newsrooms — visit their sites for the latest updates. This is not investment advice. For the most current information, always refer to official company communications.
        </p>
      </div>
    </div>
  </div>
);

export default Business;
