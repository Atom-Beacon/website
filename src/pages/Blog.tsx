import { User, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { BRAND_MARK } from "@/lib/brand";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

const posts: BlogPost[] = [
  {
    id: "8",
    title: "A Global Buildout Takes Shape: Sweden, Canada, Korea, and the Race to Deploy",
    author: "Editorial Team",
    date: "September 5, 2026",
    excerpt: "BWRX-300 consortia in Sweden and Indigenous equity at Darlington, Natrium partnerships in Korea, and AP1000 financing in Poland — nuclear companies are turning national ambitions into multi-country deployment pipelines.",
    content: `If 2024 was the year nuclear returned to the policy agenda, 2026 is the year company partnerships started to look like real deployment maps. The common thread is not a single reactor type. It is developers and builders linking sites, capital, and construction partners across borders — and doing it in public.

In Sweden, Studsvik, GE Vernova Hitachi Nuclear Energy, and Samsung C&T agreed in September to advance an initial four-unit BWRX-300 project totaling about 1.2 GW, with first operation targeted for the mid-2030s. Studsvik leads permitting and site work; GE Vernova Hitachi leads design and licensing support; Samsung C&T joins as execution partner. It is not yet a final investment decision, but it is a named consortium with clear roles — the structure projects need before steel is ordered.

Canada is further along the same design family. The Williams Treaties First Nations' $700 million investment in Ontario Power Generation's Darlington New Nuclear Project is the largest collective First Nations stake in Canadian nuclear generation, backed by federal Indigenous loan guarantees and Ontario participation. Darlington remains the G7's leading grid-scale SMR effort. Indigenous equity at that scale strengthens both social license and the project's financial foundation — and it gives BWRX-300 a reference plant that European projects like Sweden's can learn from.

TerraPower is extending Natrium the other direction. Agreements with Hyundai Engineering & Construction and SK Innovation open pathways to commercialize the sodium-cooled design in the United States, Korea, and selected international markets, with HDEC positioned as EPC contractor for up to eight units under completion and performance guarantees. That sits alongside Natrium construction already underway in Kemmerer, Wyoming, and Meta's multi-unit offtake interest. Meanwhile Westinghouse welcomed early U.S. Export-Import Bank financing for Poland's first AP1000 plant — a reminder that large light-water builds are advancing in parallel with the SMR wave.

Zoom out and the picture is encouraging. Light-water SMRs have Canadian and Swedish paths. Advanced reactors have U.S. construction plus Korean industrialization. Generation III+ AP1000s have European financing milestones. Different technologies, same direction: companies are assembling the consortia, equity structures, and export-credit tools required to build fleets rather than one-offs. Nuclear progress is becoming legible again — not as a slogan, but as a set of projects with names, partners, and dates attached.

Sources: GE Vernova / World Nuclear News (Studsvik–GE Vernova Hitachi–Samsung C&T Sweden SMR agreement, September 3, 2026); GlobeNewswire / BNN Bloomberg (Williams Treaties First Nations Darlington investment, June 23, 2026); ANS Nuclear Newswire (TerraPower–Hyundai E&C–SK Innovation agreements, August 17, 2026); Westinghouse Electric Company (Poland AP1000 EXIM financing milestone, February 17, 2026).`,
    tags: ["news", "international", "BWRX-300", "Natrium", "deployment"],
  },
  {
    id: "7",
    title: "Fuel Is the Story: Enrichers, Fabricators, and Miners Step Into the Spotlight",
    author: "Editorial Team",
    date: "June 9, 2026",
    excerpt: "Reactors get the headlines, but the most consequential nuclear news in recent weeks has been at the front of the fuel cycle. Enrichment expansions, TRISO milestones, and miner earnings are reshaping the supply picture for the next decade.",
    content: `Most of the nuclear coverage in 2026 has focused on reactor developers — who is building, who is licensing, who is signing the next hyperscaler offtake. That is the visible end of the industry. The less visible end — the companies that mine, convert, enrich, and fabricate fuel — has been quietly running its own news cycle, and the past six months have produced more substantive movement there than in any comparable window in a generation. Reactors do not run on press releases. They run on assemblies of ceramic uranium pellets that have to travel a very specific industrial path, and that path is being rebuilt in real time.

The clearest signal came on June 2, when Urenco USA announced a multi-billion-dollar expansion of its National Enrichment Facility in Eunice, New Mexico — the only commercial uranium enrichment plant currently operating in the United States. The plan increases capacity at the site by roughly 50%, with construction privately financed rather than dependent on federal cost share. For a facility that has been the sole U.S. commercial enricher since URENCO commissioned it in 2010, a self-funded near-50% expansion is the strongest possible statement that the company sees durable, contract-backed demand from U.S. utilities and advanced reactor developers. Private capital does not chase a one-cycle bump.

Urenco's move sits on top of a larger federal push. Earlier this year, the Department of Energy issued its first production-scale task orders under a $2.7 billion uranium enrichment program, awarding $900 million each to Centrus Energy (NYSE American: LEU), General Matter, and Orano Federal Services. The Centrus award, announced January 6, supports the company's multi-billion-dollar expansion at its Piketon, Ohio facility — the same site that has been producing the country's only domestically enriched High-Assay Low-Enriched Uranium (HALEU) under a previous DOE contract that was extended through mid-2026. General Matter, a newer entrant, is being positioned to add a second domestic HALEU supply line, while Orano Federal Services brings European centrifuge expertise into the U.S. industrial base.

Read together, these awards and the Urenco expansion answer a question that has hung over the U.S. advanced reactor sector for years: where does the fuel come from? Until very recently, the honest answer was "Russia, or wait." Tenex (through Techsnabexport) was the only commercial-scale HALEU supplier on the planet, and the 2024 import ban on Russian enriched uranium made that dependency politically untenable. The structure now taking shape — Urenco at scale for LEU, Centrus and General Matter for HALEU, Orano filling in centrifuge capacity, and a federal procurement vehicle willing to pay for first-of-a-kind capacity — is the first credible answer to that question. It is not finished, and it will not be cheap, but it is a coherent industrial plan rather than a wish list.

The fabrication side moved too. On June 4, BWX Technologies (NYSE: BWXT) announced that TRISO fuel it manufactured had powered Antares Nuclear's reactor through first criticality under a DOE program — the first new reactor criticality enabled by domestically produced TRISO in decades. TRISO, short for tri-structural isotropic particle fuel, encapsulates uranium kernels in layers of carbon and silicon carbide that act as their own miniature containment vessel. It is the reference fuel form for several high-temperature gas-cooled reactor designs and a strong candidate for microreactors aimed at remote, industrial, and defense applications. A criticality milestone matters because TRISO has spent most of the last twenty years being described as "promising" without a clear commercial production base behind it. BWXT now has one, and the first reactor it has fueled is on a path to operation rather than a paper study.

What does any of this mean leading forward? A few things are worth saying plainly.

First, the U.S. fuel cycle is moving from a single-point-of-failure posture to something closer to a diversified industrial base. For utilities planning new builds and SMR deployments in the late 2020s and early 2030s, the calculus around fuel risk is changing. A decade ago, the answer to "can you secure HALEU for a 2030 startup?" was a polite shrug. Today it is a procurement conversation with multiple counterparties on multiple continents. That is the precondition for everything else the sector wants to do.

Second, the economics of enrichment are starting to support real capital deployment. Urenco's willingness to fund a 50% capacity expansion privately, and DOE's willingness to backstop additional capacity with $2.7 billion in task orders, both point to the same conclusion: contract pipelines are long enough and prices are firm enough that enrichment is once again a business someone wants to be in. That has not been continuously true since the 1980s. For investors, the implication is that midstream fuel-cycle exposure — historically a quiet, low-multiple corner of the energy complex — is becoming a growth story with structural tailwinds rather than a commodity-cycle trade.

Third, TRISO going commercial unlocks a category of reactors that have been waiting on it. High-temperature gas-cooled designs from X-energy, Antares, USNC, and others have always had a credible fuel form on paper. With BWXT now manufacturing TRISO that has fueled a real criticality event, the conversation shifts from "can this be made at scale?" to "how fast can the line ramp, and at what cost per kilogram?" That is a materially different question, and it is one a publicly traded contract manufacturer is well-equipped to answer over the next several years.

Fourth, the upstream miners are quietly benefiting from all of this. Cameco (TSX: CCO; NYSE: CCJ) reported first-quarter 2026 results on May 5 with disciplined operational execution and unchanged annual guidance, against a market backdrop the company described as supportive of long-term nuclear demand. Cameco's strategic position — McArthur River and Cigar Lake on the mining side, a 49% stake in Westinghouse, and growing fuel services exposure — gives it a rare vertical footprint across the entire fuel cycle. Pure-play U.S. producers Uranium Energy Corp and Denison Mines, and Australian producer Paladin Energy, are positioned more directly into the spot and term markets that are firming as enrichers expand. None of these companies are speculative bets on a reactor type. They are bets on the boring, durable fact that every operating and planned reactor needs uranium, and the contract market is starting to reflect that durability.

A useful way to read 2026 so far is that the nuclear story has rotated. In 2024 and early 2025, the headlines were almost entirely about reactor developers and offtake deals. In 2026, the most important moves have been one step upstream — in enrichment capacity, fuel form qualification, and miner balance sheets. The reactor story does not work without the fuel story working first. That work is now visibly underway, with private capital, federal procurement, and operational milestones all pointing in the same direction.

For readers tracking the sector, the takeaway is simple: when assessing any advanced reactor announcement from here forward, the next question is no longer "is the design credible?" It is "whose fuel, from which line, on what schedule?" The answer is finally starting to be a real one.

Sources: PR Newswire (Urenco USA expansion, June 2, 2026); Nuclear Engineering International (Urenco US enrichment expansion, June 4, 2026); POWER Magazine (Urenco enrichment expansion and DOE $2.7B task orders, June 3, 2026); Centrus Energy investor relations (DOE $900M award, January 6, 2026; HALEU contract extension, June 20, 2025); BWX Technologies (TRISO fuel first criticality for Antares, June 4, 2026); ExecutiveBiz (BWXT TRISO production for Antares, June 5, 2026); Cameco investor relations (Q1 2026 results, May 5, 2026).`,
    tags: ["news", "fuel cycle", "HALEU", "TRISO", "enrichment"],
  },
  {
    id: "6",
    title: "Newcleo Heads to Nasdaq: Lead-Cooled Fast Reactors Meet Public Markets",
    author: "Editorial Team",
    date: "May 27, 2026",
    excerpt: "A European advanced reactor developer is taking the SPAC route to a U.S. listing, while Terrestrial Energy quietly stacks another regulatory win for the IMSR.",
    content: `Advanced nuclear had another notable week, and the headline belongs to a company that, until recently, most U.S. retail investors had never heard of. London-based Newcleo announced a definitive business combination with NewHold Investment Corp III (NASDAQ: NHIC) at a $2.4 billion pre-money valuation, backed by a $220 million PIPE, with the combined company expected to list on Nasdaq in the second half of 2026. Gross proceeds could reach roughly $429 million before customary redemptions — a meaningful capital raise for any pre-revenue reactor developer, and one of the larger nuclear SPAC transactions since the 2021-2022 cycle.

What makes Newcleo interesting is not the deal structure but the underlying technology bet. Founded in 2021 by physicist Stefano Buono, Newcleo is developing a lead-cooled fast reactor (LFR) paired with its own mixed-oxide (MOX) fuel manufacturing capability. The reference plant is a 200 MWe LFR-AS-200, preceded by a smaller 30 MWe Precursor demonstration reactor planned in Italy. The fuel angle is the part worth lingering on: MOX made from depleted uranium and plutonium recovered from spent light-water reactor fuel turns an existing waste stream into a long-lived energy resource. That is a fundamentally different value proposition from most U.S.-listed SMR peers, which are largely tied to HALEU supply chains that are still being built out.

Lead coolant brings its own well-known engineering challenges — corrosion, inspection, and material compatibility under decades of operation are non-trivial — but it also offers high boiling margins, near-atmospheric operating pressure, and strong passive-safety characteristics. None of this is theoretical to Newcleo's team, which has been working through European licensing pathways for several years and, in April 2026, launched pre-application engagement with the U.S. Nuclear Regulatory Commission for its first U.S. reactor and fuel fabrication facility. The SPAC proceeds, if delivered net of redemptions, are aimed squarely at moving the Precursor toward construction and standing up the U.S. footprint in parallel.

For public-market investors, Newcleo will land in a Nasdaq peer set that already includes NuScale (SMR), Oklo (OKLO), NANO Nuclear (NNE), and Terrestrial Energy (IMSR). It will be the first lead-cooled fast reactor pure-play on a U.S. exchange, and the first MOX-centric advanced nuclear story most U.S. investors will be able to access directly. The closing remains subject to shareholder approval and the usual redemption math that has defined nearly every recent SPAC outcome — so the difference between the headline $429 million and actual net proceeds is the number to watch.

Elsewhere in advanced nuclear, Terrestrial Energy (NASDAQ: IMSR) continues to do the unglamorous work that makes molten salt reactor licensing real. Building on the May 12 NRC Safety Evaluation Report approving its Topical Report on Postulated Initiating Events — the second foundational topical report cleared for the Integral Molten Salt Reactor — Terrestrial Energy has been steadily filling in the technical scaffolding required for a future construction permit application. Each approved topical report is a piece of methodology the company no longer has to defend from scratch when the full application lands.

That patient, modular approach to NRC engagement is starting to pair well with the company's commercial story. The previously announced Department of Energy OTA agreement for Project TETRA, the Texas A&M RELLIS deployment selection, and the disclosed collaboration with Riot Platforms exploring up to 4 GW of co-located IMSR capacity for hyperscale AI workloads all point to a developer that is sequencing regulatory progress, pilot siting, and offtake conversations rather than relying on any single catalyst. For a company whose technology — molten salt as both fuel and coolant — was once treated as a science project, the operational cadence is increasingly that of a real reactor program.

Zooming out, the past few weeks have continued the trend we flagged earlier this month: nuclear's progress is becoming legible. A European LFR developer is choosing the U.S. public markets as the most efficient place to fund the next phase of its program. A North American molten salt developer is methodically converting topical reports into licensing leverage. Construction continues in Wyoming, fuel loading continues in Asia, and the DOE keeps writing cost-shared checks aimed at execution rather than concepts. The sector is not short on noise, but the signal is starting to dominate.

Sources: Finimize (Newcleo Nasdaq SPAC, May 27, 2026); StockTitan / NewHold Investment Corp III 8-K and Form 425 filings (May 27, 2026); NucNet (Newcleo $85M funding round, February 2026); Yahoo Finance (Newcleo NRC pre-application engagement, April 2026); Terrestrial Energy investor relations (NRC Safety Evaluation Report, May 12, 2026).`,
    tags: ["news", "Newcleo", "SPAC", "IMSR", "advanced reactors"],
  },
  {
    id: "5",
    title: "Capital, Licenses, and Quiet Wins: Nuclear's Busy Month",
    author: "Editorial Team",
    date: "May 16, 2026",
    excerpt: "From a $94 million federal push for small modular reactors to a Wyoming groundbreaking and a quietly important regulatory approval for Terrestrial Energy, the past four weeks have moved the nuclear business forward on multiple fronts.",
    content: `The last four weeks have been one of the more substantive stretches the nuclear sector has seen in some time. The story is less about any single headline and more about the cadence: federal dollars, regulatory approvals, construction milestones, and corporate deals are all landing in the same window. For investors and operators alike, that combination matters more than any single press release.

On May 15, the U.S. Department of Energy selected eight companies to share more than $94 million in cost-shared funding aimed at near-term deployment of advanced light-water small modular reactors. BWXT received the largest single award at roughly $21.4 million, with additional grants going to firms working on licensing pathways, supply chain build-out, and site readiness. The dollar figure is modest compared to total project costs, but the structural intent is significant: the program is designed to retire the unglamorous, non-technical barriers — paperwork, qualification, vendor capacity — that have historically slowed first-of-a-kind reactor projects far more than the physics ever did.

That federal push was paired with a tangible groundbreaking. In Wyoming, construction is now underway on TerraPower's Natrium plant near Kemmerer, with federal licensing in hand and state officials openly calling it a "nuclear renaissance" moment. Whatever one thinks of the rhetoric, the underlying point is concrete: a sodium-cooled fast reactor with integrated molten-salt energy storage is moving from drawings into steel and concrete on a U.S. site, with utility-scale ambitions and a clearly defined operating partner in PacifiCorp.

The international picture rounded out the month. China General Nuclear started construction on a fourth Hualong One unit at Taipingling in Guangdong on May 10, and completed initial fuel loading at Taipingling 2 and Changjiang 3 in early May. In Bangladesh, fuel loading wrapped at Rooppur Unit 1, putting the country's first reactor on the runway to first electricity. None of these are speculative builds — they are operational milestones on plants that will be feeding grids within the year. For anyone modeling global nuclear capacity additions, the curve continues to bend upward.

The corporate news has been just as active. NuScale, Oklo, Cameco, and BWXT have all reported quarters that the market is parsing closely, and SMR developer Holtec and reactor service firms continue to land contracts tied to restarts and refurbishments. The investment thesis is no longer "if" advanced nuclear gets built — it is increasingly about which platforms execute fastest, which supply chains scale, and which balance sheets can absorb the first-of-a-kind cost curve.

Which brings us to a development that deserves more attention than it received. On May 12, the Nuclear Regulatory Commission issued a Safety Evaluation Report approving Terrestrial Energy's (NASDAQ: IMSR) Topical Report on Postulated Initiating Events for its Integral Molten Salt Reactor. In plain terms, the NRC has formally accepted the methodology Terrestrial Energy uses to identify and analyze the events a future IMSR plant must be designed to withstand. It is the second such foundational topical report the agency has cleared for the IMSR in recent months, following earlier approval of its Principal Design Criteria framework.

This kind of approval rarely makes the front page. It is procedural, technical, and impossible to summarize in a chart. But for a molten salt reactor developer, foundational topical reports are the scaffolding that every later licensing submission rests on. Each one approved is one less open question when the full construction permit application lands at the NRC. Combined with Terrestrial Energy's previously announced DOE OTA agreement for the Project TETRA pilot, the Texas A&M RELLIS deployment selection, and the recently disclosed collaboration with Riot Platforms exploring up to 4 GW of co-located nuclear capacity for hyperscale AI workloads, the company is building a quietly coherent execution story underneath the headline noise.

Sources: World Nuclear News (DOE SMR funding, May 15, 2026; Rooppur fuel loading, May 12, 2026; Taipingling and Changjiang fuel loading, May 6, 2026); NPR (Wyoming reactor license, May 2, 2026); CGTN (Hualong One Unit 4 construction start, May 12, 2026); Terrestrial Energy investor relations (NRC Safety Evaluation Report, May 12, 2026; Q1 2026 results, May 14, 2026).`,
    tags: ["news", "monthly roundup", "SMR", "IMSR", "policy"],
  },
  {
    id: "4",
    title: "This Week in Nuclear: Policy Momentum, SMR Deals, and Fuel Supply Signals",
    author: "Editorial Team",
    date: "April 16, 2026",
    excerpt: "If this week felt different in nuclear, you're not imagining it. The headlines weren't just big promises — they showed projects moving from talking points into real-world execution.",
    content: `Some weeks in energy feel like déjà vu: more announcements, more projections, more "coming soon." This week felt different. The nuclear conversation moved in a way readers can actually feel — less theater, more follow-through.

One reason is that policy movement finally started to look practical. In the U.S., multiple states are actively clearing legal and financial lanes for new nuclear development, which is exactly the kind of behind-the-scenes work that determines whether projects happen or stall. If you want a quick overview of that shift, this piece is worth your time: https://www.world-nuclear-news.org/articles/three-us-states-pave-way-for-new-nuclear

Across the Atlantic, the UK story had the same "execution over slogans" energy. The contract step for first SMR delivery is significant because this is where abstract support gets translated into procurement, supply chains, and hard deadlines. For readers tracking whether SMRs are truly moving into delivery phase, here's the update: https://www.world-nuclear-news.org/articles/contract-signed-for-delivery-of-uks-first-smrs

Fuel-side signals mattered too, and they often get less attention than flashy reactor headlines. But reactors do not run on optimism — they run on real supply chains. New U.S. uranium production activity is one of those foundational developments that makes the rest of the nuclear growth story more believable over time: https://www.world-nuclear-news.org/articles/production-begins-at-us-uranium-project

On the company front, the week also reinforced how many different lanes of nuclear are maturing at the same time. Terrestrial Energy continues to frame the IMSR path around pilot execution and regulatory milestones, and this DOE-linked update provides useful context for where that platform is headed next: https://ir.terrestrialenergy.com/news-releases/news-release-details/terrestrial-energy-executes-doe-agreement-project-tetra-under

Oklo's updates are also interesting beyond share-price chatter, especially because they highlight how partnerships and ecosystem strategy are becoming part of the commercialization race, not an afterthought. This release gives a good window into that approach: https://oklo.com/newsroom/news-details/2026/Oklo-Blykalla-to-Expand-Strategic-Partnership-Through-U-S--Investment-and-Collaboration/default.aspx

And for readers following NuScale, even a straightforward investor-calendar update is a signal in itself right now: the market is watching every operational and financial checkpoint to gauge which SMR developers are tightening their path to deployment. Their latest notice is here: https://www.nuscalepower.com/press-releases/2026/nuscale-power-to-hold-first-quarter-2026-earnings-conference-call

If there is one takeaway from this week, it's this: nuclear progress is becoming more legible. We are seeing policy shifts, contract steps, supply-chain movement, and company-level milestones stack up in the same window. That's what real sector momentum looks like. Not hype. Not perfection. Just steady, tangible movement in the right direction.`,
    tags: ["weekly roundup", "news", "SMR", "policy"],
  },
  {
    id: "1",
    title: "Why Nuclear Deserves a Second Look",
    author: "Editorial Team",
    date: "April 3, 2026",
    excerpt: "Public perception of nuclear energy is shifting — and for good reason. Let's explore why now is the time to reconsider the atom.",
    content: `For decades, nuclear energy has been misunderstood. Hollywood dramatizations, Cold War anxieties, and a handful of well-publicized accidents created a narrative that overshadowed nuclear's remarkable safety record and environmental benefits.

But times are changing. With growing interest in energy diversity and reliability, policymakers, environmentalists, and even former nuclear skeptics are taking a fresh look at what atomic energy can offer.

The numbers speak for themselves: nuclear power provides about 10% of the world's electricity and roughly 25% of all low-carbon electricity globally. In countries like France, which gets about 70% of its electricity from nuclear, the power sector benefits from stable, reliable generation around the clock.

Modern reactor designs are safer, more efficient, and more versatile than ever before. Small Modular Reactors (SMRs) promise to make nuclear accessible to communities and regions that could never justify a traditional large plant. Advanced fuel cycles are tackling the waste challenge. And fusion — the holy grail of energy — is making real progress.

This isn't about choosing nuclear over any other source. Every form of energy — from coal and natural gas to solar and wind — has played a critical role in building the world we live in. Nuclear adds something unique to the mix: dense, reliable, carbon-free power that runs day and night. It's a complement to every other source, not a replacement.

The atom isn't the future. It's part of it. And it's time we gave it a fair hearing.`,
    tags: ["opinion", "clean energy", "policy"],
  },
  {
    id: "2",
    title: "Small Modular Reactors: The Game Changer We've Been Waiting For",
    author: "Dr. Sarah Chen",
    date: "March 28, 2026",
    excerpt: "SMRs could democratize nuclear energy, making it accessible to communities, remote regions, and industries that need reliable clean power.",
    content: `Small Modular Reactors represent perhaps the most exciting development in nuclear technology since the first commercial reactor went online in the 1950s.

Unlike traditional nuclear plants — which are massive, expensive, and take a decade or more to build — SMRs are designed to be factory-manufactured, shipped by truck or rail, and assembled on-site. They typically generate between 50 and 300 megawatts of electricity, compared to 1,000+ megawatts for conventional reactors.

This modular approach offers several game-changing advantages. First, costs become more predictable because factory production reduces the variability that has plagued large nuclear projects. Second, smaller size means SMRs can serve communities and industries that don't need — or can't justify — a full-scale nuclear plant. Third, many SMR designs incorporate passive safety features that make meltdowns physically impossible.

Several countries are already moving forward. Canada has committed to deploying SMRs in multiple provinces. The UK is backing Rolls-Royce's SMR design. And in the US, NuScale Power received the first-ever SMR design certification from the Nuclear Regulatory Commission.

The applications go beyond just electricity. SMRs can provide industrial heat for manufacturing, desalinate seawater in arid regions, produce hydrogen for transportation, and even power remote mining operations or military installations.

We're on the cusp of a nuclear renaissance — and SMRs are leading the charge.`,
    tags: ["technology", "SMR", "innovation"],
  },
  {
    id: "3",
    title: "Every Energy Source Has a Purpose",
    author: "Editorial Team",
    date: "March 20, 2026",
    excerpt: `At ${BRAND_MARK}, we champion nuclear — but we respect every form of energy that keeps the world running. Here's our philosophy.`,
    content: `One thing you won't find on ${BRAND_MARK} is negativity toward any form of energy. That's by design — and by conviction.

Too often, energy discussions devolve into tribal debates. Nuclear advocates dismiss renewables. Renewable supporters dismiss nuclear. And both sometimes forget that fossil fuels — coal, oil, and natural gas — built the modern world and continue to power billions of lives today.

The truth is simpler than the debate suggests: we benefit from all of these technologies. Each has strengths that complement the others.

Solar and wind are abundant, increasingly affordable, and can be deployed quickly. They're variable by nature — output changes with weather and time of day — but paired with storage and other baseload sources, they're tremendously valuable. Nuclear provides reliable, always-on power that pairs well with every other source. Hydropower offers both baseload and flexible generation. Geothermal taps Earth's constant heat. And fossil fuels provide energy density, portability, and reliability that billions of people depend on every day — they brought us to where we are, and they continue to serve a purpose as the energy landscape evolves.

A balanced energy portfolio is like a diversified investment portfolio — it's stronger because of its diversity, not in spite of it.

At ${BRAND_MARK}, we focus on nuclear because we believe it's underrepresented and undervalued in public discourse. But we'll never advance nuclear by tearing down any other energy source. Every form of power generation has contributed to human progress.

The goal is a future where every community has access to reliable, affordable energy. That means valuing every tool in the toolbox.`,
    tags: ["opinion", "energy diversity", "philosophy"],
  },
];

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Blog & Opinions</h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Editorials, commentary, and thought pieces from the {BRAND_MARK} team and guest contributors.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="retro-card">
              <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="h-4 w-4" />{post.author}</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{post.date}</span>
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">{post.title}</h2>
              
              {expandedPost === post.id ? (
                <div className="prose max-w-none">
                  {post.content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
                  ))}
                  <button
                    onClick={() => setExpandedPost(null)}
                    className="text-primary font-medium hover:underline mt-2"
                  >
                    ← Collapse
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <button
                    onClick={() => setExpandedPost(post.id)}
                    className="flex items-center gap-1 text-primary font-medium hover:underline"
                  >
                    Read full article <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              )}

              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 retro-card text-center">
          <p className="text-muted-foreground">
            📝 Interested in contributing? The Blog section is managed by the site operator.
            Opinions expressed here are those of individual authors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;