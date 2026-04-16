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