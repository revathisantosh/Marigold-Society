import type { Metadata } from "next";
import Link from "next/link";
import { members } from "@/lib/data/members";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BotanicalDraw } from "@/components/illustrations/BotanicalDraw";
import { BotanicalSprig } from "@/components/illustrations/BotanicalSprig";

export const metadata: Metadata = {
  title: "The Greenhouse",
  description: "The Marigold Society's member forum — where conversations about growing, pressing, and the subjects of The Almanac continue year-round.",
};

const discussions = [
  {
    category: "Growing",
    title: "What are you direct-seeding right now? (Zone 5 check-in)",
    author: "Henri Beaumont",
    replies: 23,
    updated: "2 hours ago",
    excerpt: "We had our last frost May 9 here in St. Johnsbury. I've got beets, carrots, and the Cornichon de Paris in the ground. The runners go in next weekend when the soil finally warms...",
  },
  {
    category: "Pressing",
    title: "Technique question: keeping blues from fading",
    author: "Tomoko Holt",
    replies: 14,
    updated: "Yesterday",
    excerpt: "I've been losing blue colors — cornflower, borage — to a sort of grey wash after about a year in the herbarium. Has anyone found a reliable way to set them? I've tried silica gel and the low-heat method...",
  },
  {
    category: "The Almanac",
    title: "Thoughts on the 'Ethics of the Hybrid' piece in No. 9",
    author: "Philippa Rowe",
    replies: 31,
    updated: "Yesterday",
    excerpt: "Thomas's piece got me thinking about where exactly we draw the line when we talk about 'heirloom.' If a variety has been maintained for fifty years, is it still a hybrid? Or does it become something else...",
  },
  {
    category: "Seed Saving",
    title: "Successfully overwintered the Black Hollyhock — notes",
    author: "Dr. Sarah Osei",
    replies: 8,
    updated: "3 days ago",
    excerpt: "This was my third attempt with the Antwerp Black. The key turned out to be the mulching approach — six inches of straw after a hard frost, not before...",
  },
  {
    category: "General",
    title: "Member gardens — share photos and notes (ongoing thread)",
    author: "Oliver Marchand",
    replies: 186,
    updated: "4 days ago",
    excerpt: "This thread is for sharing what's happening in your garden right now. No expertise required. Just what you're growing and what you're noticing...",
  },
  {
    category: "Apothecary",
    title: "Calendula harvest timing — when to pick for maximum resin",
    author: "Rosalind Church",
    replies: 19,
    updated: "5 days ago",
    excerpt: "The window is narrower than most guides suggest. I've found the resin content peaks very specifically in the first six hours after opening on a sunny morning...",
  },
];

export default function GreenhousePage() {
  return (
    <div className="pt-28">
      {/* Header */}
      <section className="py-20 lg:py-28 bg-vine text-parchment relative overflow-hidden">
        <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none">
          <BotanicalDraw variant="vine" className="w-20 h-64 text-parchment" />
        </div>
        <div className="absolute right-0 top-0 opacity-20 pointer-events-none" style={{ transform: "scaleX(-1)" }}>
          <BotanicalDraw variant="vine" className="w-20 h-64 text-parchment" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <SectionLabel color="parchment" className="mb-8">Member Forum</SectionLabel>
          <h1 className="font-display italic text-display-lg text-parchment leading-none mb-8">
            The Greenhouse.
          </h1>
          <p className="font-body text-parchment/80 text-xl leading-relaxed">
            A private forum for members. The conversations that begin in the seed library and continue through The Almanac find their home here. Accessible to all members of the Society.
          </p>
        </div>
      </section>

      {/* Login / join gate */}
      <section className="py-16 bg-parchment-light border-b border-marigold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display italic text-2xl text-maroon mb-1">
              The Greenhouse is for members.
            </p>
            <p className="font-body text-ink/60">
              Join the Society to access the forum, the full seed library, and The Almanac.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button className="border border-maroon text-maroon px-6 py-3 font-display italic hover:bg-maroon hover:text-white transition-all">
              Sign In
            </button>
            <Link
              href="/membership"
              className="bg-maroon text-white px-6 py-3 font-display italic hover:bg-maroon-deep transition-colors"
            >
              Join
            </Link>
          </div>
        </div>
      </section>

      {/* Forum preview */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main discussions */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <SectionLabel className="!gap-0 !before:hidden !after:hidden">Recent Discussions</SectionLabel>
              <div className="flex gap-3">
                {["All", "Growing", "Pressing", "Almanac", "Seeds"].map((filter) => (
                  <button
                    key={filter}
                    className={`label text-2xs px-3 py-1 border transition-colors ${
                      filter === "All"
                        ? "bg-marigold border-marigold text-ink"
                        : "border-marigold/25 text-ink/50 hover:border-marigold hover:text-marigold"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              {discussions.map((d, i) => (
                <div
                  key={d.title}
                  className={`border border-marigold/15 p-6 hover:border-marigold/40 transition-all ${
                    i === 0 ? "bg-marigold/5" : "bg-parchment"
                  } relative`}
                >
                  {/* Lock overlay for non-members */}
                  <div className="absolute inset-0 flex items-center justify-center bg-parchment/60 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity">
                    <div className="text-center">
                      <p className="font-display italic text-xl text-maroon mb-2">Members only</p>
                      <Link href="/membership" className="label text-marigold">
                        Join to read →
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-marigold/20 flex items-center justify-center shrink-0">
                      <span className="font-display italic text-maroon">{d.author.charAt(0)}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="label text-2xs text-marigold">{d.category}</span>
                        {i === 0 && (
                          <span className="label text-2xs bg-maroon text-white px-2 py-0.5">Active</span>
                        )}
                      </div>
                      <h3 className="font-display italic text-xl text-maroon mb-2 leading-tight">
                        {d.title}
                      </h3>
                      <p className="font-body text-ink/60 text-sm leading-relaxed line-clamp-2 mb-3">
                        {d.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="label text-2xs text-ink/40">{d.author}</span>
                        <span className="label text-2xs text-ink/30">·</span>
                        <span className="label text-2xs text-ink/40">{d.replies} replies</span>
                        <span className="label text-2xs text-ink/30">·</span>
                        <span className="label text-2xs text-ink/40">{d.updated}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="font-body italic text-ink/50 mb-4">
                There are 847 active discussions in the Greenhouse.
              </p>
              <Link
                href="/membership"
                className="label text-marigold hover:text-maroon transition-colors"
              >
                Join to read them all →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Members online */}
            <div className="border border-marigold/20 p-6">
              <p className="label text-marigold mb-5">Active Members</p>
              <div className="space-y-4">
                {members.slice(0, 4).map((member) => (
                  <div key={member.id} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-parchment-dark flex items-center justify-center">
                      <span className="font-display italic text-sm text-maroon">{member.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-body text-ink text-sm">{member.name}</p>
                      <p className="label text-2xs text-ink/40">{member.location}</p>
                    </div>
                    <span className="ml-auto w-2 h-2 rounded-full bg-vine/60" />
                  </div>
                ))}
              </div>
              <p className="label text-2xs text-ink/30 mt-4">
                1,247 members total
              </p>
            </div>

            {/* Categories */}
            <div className="border border-marigold/20 p-6">
              <p className="label text-marigold mb-5">Categories</p>
              <div className="space-y-2">
                {[
                  { name: "Growing", count: 312 },
                  { name: "Seed Saving", count: 198 },
                  { name: "The Almanac", count: 156 },
                  { name: "Pressing", count: 134 },
                  { name: "Apothecary", count: 89 },
                  { name: "General", count: 247 },
                ].map(({ name, count }) => (
                  <div key={name} className="flex items-center justify-between py-2 border-b border-marigold/10">
                    <span className="font-body text-ink/75 text-sm">{name}</span>
                    <span className="label text-2xs text-ink/30">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pinned from Estelle */}
            <div className="bg-maroon text-white p-6">
              <p className="label text-marigold mb-3">Pinned from Estelle</p>
              <p className="font-body italic text-white/80 text-sm leading-relaxed mb-4">
                "The Greenhouse is a place for genuine exchange. We ask only that you bring the same quality of attention here that you bring to the garden."
              </p>
              <p className="label text-2xs text-white/40">— May 2025</p>
            </div>
          </aside>
        </div>
      </div>

      {/* Join CTA */}
      <section className="py-16 bg-parchment-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <BotanicalSprig className="w-64 h-10 text-marigold/40" />
          </div>
          <h2 className="font-display italic text-3xl text-maroon mb-4">
            The conversations are better inside.
          </h2>
          <p className="font-body text-ink/65 text-lg mb-8">
            Join the Society to access the Greenhouse, receive the Almanac, and take part in the seed library.
          </p>
          <Link
            href="/membership"
            className="inline-block bg-maroon text-white px-10 py-4 font-display italic text-xl hover:bg-maroon-deep transition-colors"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}
