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
            Nuclear energy is statistically one of the <strong className="text-foreground">safest forms of energy production</strong> in the world. According to peer-reviewed research published in <em>The Lancet</em> and analysis by Our World in Data, nuclear energy has caused fewer deaths per unit of energy produced than any other major source when accounting for the full lifecycle (manufacturing, installation, operation, and accidents).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The death rate from nuclear energy is approximately <strong className="text-foreground">0.03 deaths per terawatt-hour (TWh)</strong> of electricity produced. For comparison: coal is at about 24.6 deaths/TWh, oil about 18.4, natural gas about 2.8, wind about 0.04, and solar about 0.05.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It's worth noting that every energy source has improved its safety record over time. The fossil fuel industry has made tremendous strides in worker safety and emissions controls, and renewables continue to improve manufacturing and installation safety. The data above reflects the reality that all energy production carries some risk — and nuclear's record is remarkably strong.
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
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Regulation and Oversight: An Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nuclear energy is the most heavily regulated energy industry in the world. Authority is split across three layers: <strong className="text-foreground">national government regulators</strong> with binding legal authority to license, inspect, and shut down facilities; <strong className="text-foreground">international bodies</strong> that set standards and administer treaty-based inspections; and <strong className="text-foreground">industry and non-governmental organizations</strong> that set technical standards and run peer reviews. The sections below walk through who each of these is, when they were founded, what they actually do, and which are legally mandatory versus voluntary-but-effectively-required.
          </p>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Government Regulators: Who Sets the Legal Requirements</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nuclear safety is not voluntary best practice. In every country that operates a commercial reactor, an independent government regulator holds the legal authority to license, inspect, fine, suspend, or shut down a nuclear facility. Operating outside their authorization is a criminal matter.
          </p>
          <div className="space-y-4 mt-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">U.S. Nuclear Regulatory Commission (NRC) — Founded 1975</h3>
              <p className="text-sm text-muted-foreground">
                Created by the <strong className="text-foreground">Energy Reorganization Act of 1974</strong>, which split the old Atomic Energy Commission (AEC, established 1946 under the Atomic Energy Act) into two bodies: the NRC for civilian regulation and what eventually became the Department of Energy for development and defense work. The split was deliberate — having the same agency both promote and police nuclear power was judged a conflict of interest. The NRC began operating January 19, 1975. It licenses every commercial reactor, fuel cycle facility, and major radioactive materials user in the U.S., keeps <strong className="text-foreground">resident inspectors</strong> on site full-time at every operating plant, and enforces 10 CFR (Title 10 of the Code of Federal Regulations). Its authority is binding and non-optional for U.S. operators.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Canadian Nuclear Safety Commission (CNSC) — Founded 2000</h3>
              <p className="text-sm text-muted-foreground">
                Established under the <strong className="text-foreground">Nuclear Safety and Control Act of 1997</strong> (in force May 31, 2000), replacing the Atomic Energy Control Board (AECB, 1946). The CNSC regulates all nuclear activity in Canada, from uranium mines through reactor operation to waste management. Its licensing decisions are mandatory legal authorizations.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">UK Office for Nuclear Regulation (ONR) — Founded 2014</h3>
              <p className="text-sm text-muted-foreground">
                Created as a statutory public corporation under the <strong className="text-foreground">Energy Act 2013</strong>, taking effect April 1, 2014. The ONR consolidated nuclear safety, security, and safeguards functions that previously sat inside the Health and Safety Executive. It enforces site licensing under the Nuclear Installations Act 1965 and is the legal gatekeeper for any new UK reactor build, including SMRs.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">French Nuclear Safety Authority (ASN / ASNR) — Founded 2006, restructured 2025</h3>
              <p className="text-sm text-muted-foreground">
                The <strong className="text-foreground">Autorité de sûreté nucléaire (ASN)</strong> was created by the French Transparency and Nuclear Safety Act of June 13, 2006, as an independent administrative authority. On January 1, 2025, ASN merged with the technical safety institute IRSN to form the <strong className="text-foreground">Autorité de sûreté nucléaire et de radioprotection (ASNR)</strong>, consolidating regulatory and technical expertise. Compliance is mandatory for the French nuclear fleet — the largest in Europe.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Japan Nuclear Regulation Authority (NRA) — Founded 2012</h3>
              <p className="text-sm text-muted-foreground">
                Established September 2012 under the <strong className="text-foreground">Act for Establishment of the Nuclear Regulation Authority</strong>, passed in direct response to the Fukushima Daiichi accident. The NRA replaced the prior Nuclear and Industrial Safety Agency (NISA), which had been organizationally housed within the ministry that also promoted nuclear power. Like the NRC, the NRA was deliberately separated from any promotional mandate. Its restart approvals are a legal prerequisite for any Japanese reactor returning to service.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Other National Regulators</h3>
              <p className="text-sm text-muted-foreground">
                Every nuclear-operating country has a comparable body — Germany's BASE, Finland's STUK (founded 1958, one of the oldest), South Korea's NSSC (2011), China's NNSA (1984), Russia's Rostechnadzor, India's AERB (1983), and so on. These regulators share information through international forums but each holds independent legal authority within its own jurisdiction.
              </p>
            </div>
          </div>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">International Bodies: Treaties and Standards</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">International Atomic Energy Agency (IAEA) — Founded 1957</h3>
              <p className="text-sm text-muted-foreground">
                Established July 29, 1957 under its own Statute approved by 81 nations, following U.S. President Dwight Eisenhower's 1953 "Atoms for Peace" address to the UN General Assembly. The IAEA is an autonomous organization within the UN system and reports to both the UN General Assembly and Security Council. It sets <strong className="text-foreground">Safety Standards</strong> that member states voluntarily adopt into national law, conducts peer-review missions (OSART, IRRS, INSARR), and — critically — administers <strong className="text-foreground">safeguards inspections under the Nuclear Non-Proliferation Treaty (NPT)</strong>. For NPT signatory states, IAEA safeguards are <em>legally binding</em>; for civilian safety standards, the legal obligation is created by national adoption.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">OECD Nuclear Energy Agency (NEA) — Founded 1958</h3>
              <p className="text-sm text-muted-foreground">
                Established December 20, 1957 (originally the European Nuclear Energy Agency), the NEA is a specialized OECD agency for member countries with significant civilian nuclear programs. The NEA does not regulate, but it produces consensus technical analysis, the Multinational Design Evaluation Programme (MDEP) for new reactor reviews, and economic and safety reference documents that national regulators routinely cite.
              </p>
            </div>
          </div>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Industry and Non-Governmental Organizations</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Alongside the legal regulatory structure, a layer of industry-run and non-governmental organizations sets technical standards, runs peer reviews, and shares operational experience. Some are effectively mandatory by industry practice or insurance requirement even when not explicitly required by statute.
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">World Association of Nuclear Operators (WANO) — Founded 1989</h3>
              <p className="text-sm text-muted-foreground">
                Founded May 15, 1989 in Moscow, three years after the Chernobyl accident, by operators of every commercial nuclear plant in the world. WANO is a non-governmental industry body, not a regulator. <strong className="text-foreground">Membership is effectively mandatory</strong> — every commercial reactor operator on Earth is a member, and WANO peer reviews are required for international reinsurance coverage and increasingly written into national licensing expectations. WANO conducts on-site peer reviews, runs the Significant Operating Experience Reports (SOER) program, and shares operational lessons across the global fleet.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Institute of Nuclear Power Operations (INPO) — Founded 1979</h3>
              <p className="text-sm text-muted-foreground">
                Founded December 1979 by the U.S. nuclear industry directly after the Three Mile Island accident. INPO is a private, non-profit organization headquartered in Atlanta. It is <strong className="text-foreground">not a government regulator and membership is technically voluntary</strong>, but every U.S. commercial reactor operator is a member because (a) INPO evaluations are a condition of nuclear liability insurance through American Nuclear Insurers, and (b) the NRC formally recognizes and relies on INPO's accreditation of operator training programs. In practice, no U.S. utility operates a reactor outside the INPO system.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">American Nuclear Society (ANS) — Founded 1954</h3>
              <p className="text-sm text-muted-foreground">
                Founded December 11, 1954 as the professional society for nuclear scientists and engineers. ANS is a voluntary professional organization, but it develops <strong className="text-foreground">ANS consensus standards</strong> (accredited by ANSI) that are routinely incorporated by reference into NRC regulations and licensee technical specifications. Once an ANS standard is cited in a license or in 10 CFR, compliance with it becomes legally binding for that licensee.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Nuclear Energy Institute (NEI) — Founded 1994</h3>
              <p className="text-sm text-muted-foreground">
                Formed in 1994 from the consolidation of several earlier industry groups. NEI is the U.S. nuclear industry's policy and advocacy organization. Membership is voluntary, but NEI develops industry guidance documents (NEI 96-07, NEI 99-04, and others) that are frequently endorsed by the NRC in regulatory guides — at which point following them becomes an accepted legal compliance path.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">American Society of Mechanical Engineers (ASME) — Founded 1880</h3>
              <p className="text-sm text-muted-foreground">
                Not nuclear-specific, but the <strong className="text-foreground">ASME Boiler and Pressure Vessel Code (BPVC), Section III</strong> governs the design and construction of nuclear pressure-retaining components. ASME Section III is incorporated by reference into 10 CFR 50.55a, making it <em>legally mandatory</em> for U.S. nuclear construction. ASME also runs the Nuclear Quality Assurance (NQA-1) program used by virtually every nuclear vendor and supplier.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">American Nuclear Insurers (ANI) — Founded 1957</h3>
              <p className="text-sm text-muted-foreground">
                A voluntary pool of property and casualty insurers that provides the nuclear liability insurance required under the <strong className="text-foreground">Price-Anderson Act of 1957</strong>. Price-Anderson legally requires every U.S. commercial reactor to carry primary liability coverage; ANI is the de facto provider. Through its inspection requirements, ANI effectively imposes additional safety expectations beyond NRC minimums.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h3 className="font-heading font-semibold text-foreground mb-1">Electric Power Research Institute (EPRI) — Founded 1972</h3>
              <p className="text-sm text-muted-foreground">
                A collaborative, non-profit R&amp;D organization funded by member utilities. EPRI's Nuclear Sector produces research on materials aging, fuel performance, severe accident analysis, and license renewal. Participation is voluntary, but EPRI methodologies are widely cited in license amendment requests and accepted by the NRC as technically credible bases.
              </p>
            </div>
          </div>
        </section>

        <section className="retro-card">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Legal vs. Ethical Requirements — How They Stack</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A useful way to read the safety system: legal requirements set the floor, and the industry-run organizations push the ceiling higher.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong className="text-foreground">Mandatory (legal):</strong> NRC license conditions and 10 CFR; ASME Section III; IAEA safeguards under the NPT; Price-Anderson liability coverage; national regulator approvals (CNSC, ONR, ASNR, NRA, and counterparts).</li>
            <li><strong className="text-foreground">Mandatory in practice (industry-enforced):</strong> WANO membership and peer review; INPO accreditation of training; ANI insurance pool participation. None are written into federal statute, but no commercial operator functions outside them.</li>
            <li><strong className="text-foreground">Voluntary but routinely binding once adopted:</strong> ANS and NEI standards become legal obligations the moment they are referenced in a license or regulation. EPRI research becomes a binding basis once a licensee submits it as part of an approved analysis.</li>
            <li><strong className="text-foreground">Genuinely voluntary:</strong> Professional society membership, conference participation, voluntary commitments above license requirements (for example, post-Fukushima FLEX equipment beyond what regulators required).</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The practical effect is that a U.S. commercial reactor operator is simultaneously accountable to a federal regulator with shutdown authority, an international inspectorate with treaty backing, an industry peer review body whose findings are visible to every other operator on the planet, and an insurance pool that can effectively price them out of operation. That layered structure is itself a core part of why the industry's safety record is as strong as the data shows.
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
              <a href="https://www.nrc.gov/about-nrc/history.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                U.S. NRC — Our History (Energy Reorganization Act of 1974) <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.iaea.org/about/overview/history" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                IAEA — History (Atoms for Peace, 1957 Statute) <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.wano.info/about-us" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                WANO — About Us (founded 1989) <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.inpo.info/AboutUs.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                INPO — About Us (founded 1979 post-TMI) <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.ans.org/about/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                American Nuclear Society — About <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://www.asme.org/codes-standards/bpvc-standards" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                ASME Boiler and Pressure Vessel Code <ExternalLink className="h-3 w-3" />
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
