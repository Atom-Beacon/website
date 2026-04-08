import { User, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";

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
    id: "1",
    title: "Why Nuclear Deserves a Second Look",
    author: "Editorial Team",
    date: "April 3, 2026",
    excerpt: "Public perception of nuclear energy is shifting — and for good reason. Let's explore why now is the time to reconsider the atom.",
    content: `For decades, nuclear energy has been misunderstood. Hollywood dramatizations, Cold War anxieties, and a handful of well-publicized accidents created a narrative that overshadowed nuclear's remarkable safety record and environmental benefits.

But times are changing. With climate urgency at an all-time high, energy policymakers, environmentalists, and even former nuclear skeptics are taking a fresh look at what atomic energy can offer.

The numbers speak for themselves: nuclear power provides about 10% of the world's electricity and roughly 25% of all low-carbon electricity globally. In countries like France, which gets about 70% of its electricity from nuclear, carbon emissions from the power sector are a fraction of those in countries relying heavily on fossil fuels.

Modern reactor designs are safer, more efficient, and more versatile than ever before. Small Modular Reactors (SMRs) promise to make nuclear accessible to communities and regions that could never justify a traditional large plant. Advanced fuel cycles are tackling the waste challenge. And fusion — the holy grail of energy — is making real progress.

This isn't about choosing nuclear over renewables. It's about recognizing that we need every tool in the toolbox. Nuclear provides the reliable, always-on power that complements intermittent sources like wind and solar. Together, they can deliver a truly clean grid.

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
    excerpt: "At Atom Beacon, we champion nuclear — but we champion clean energy as a whole. Here's why the 'us vs. them' mentality in energy debates hurts everyone.",
    content: `One thing you won't find on Atom Beacon is negativity toward other forms of clean energy. That's by design — and by conviction.

Too often, energy discussions devolve into tribal debates. Nuclear advocates dismiss renewables as unreliable. Solar and wind supporters portray nuclear as dangerous and expensive. Fossil fuel interests play both sides against each other. Meanwhile, carbon emissions keep rising.

The truth is simpler than the debate suggests: we need all of these technologies. Each has strengths that complement the others' limitations.

Solar and wind are abundant, increasingly affordable, and can be deployed quickly. But they're intermittent — the sun doesn't always shine, and the wind doesn't always blow. Nuclear provides reliable, always-on baseload power that fills those gaps. Hydropower offers both baseload and flexible peaking power. Geothermal taps Earth's constant heat in favorable locations. Battery storage is bridging short-term gaps.

A clean energy portfolio is like a diversified investment portfolio — it's stronger because of its diversity, not in spite of it.

At Atom Beacon, we focus on nuclear because we believe it's underrepresented and undervalued in public discourse. But we'll never advance nuclear by tearing down other clean technologies. We're all on the same team.

The only opponent is carbon. Let's act like it.`,
    tags: ["opinion", "clean energy", "philosophy"],
  },
];

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Blog & Opinions</h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Editorials, commentary, and thought pieces from the Atom Beacon team and guest contributors.
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
