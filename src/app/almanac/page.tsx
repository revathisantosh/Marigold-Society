import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/data/articles";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BotanicalDraw } from "@/components/illustrations/BotanicalDraw";
import { BotanicalSprig } from "@/components/illustrations/BotanicalSprig";

export const metadata: Metadata = {
  title: "The Almanac",
  description: "A quarterly journal for those who read slowly. Essays, growing notes, material culture, and field observation — printed on uncoated stock and mailed to members.",
};

const issues = [
  { number: 9, season: "Summer", year: 2025, current: true },
  { number: 8, season: "Spring", year: 2025 },
  { number: 7, season: "Winter", year: 2024 },
  { number: 6, season: "Autumn", year: 2024 },
  { number: 5, season: "Summer", year: 2024 },
];

export default function AlmanacPage() {
  const featuredArticles = articles.filter((a) => a.featured);
  const archiveArticles = articles.filter((a) => !a.featured);

  return (
    <div className="pt-28">
      {/* Masthead */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
            <div className="lg:col-span-7">
              <SectionLabel className="mb-8">The Marigold Society Quarterly</SectionLabel>
              <h1 className="font-display italic text-display-xl text-maroon leading-none">
                The Almanac.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:pb-4">
              <p className="font-body text-ink/70 text-xl leading-relaxed">
                Written slowly and printed on paper. Eighty pages per issue — essays, field notes, growing guides, and the kind of observation that doesn't fit anywhere else.
              </p>
            </div>
          </div>

          {/* Issue browser */}
          <div className="flex gap-3 overflow-x-auto pb-4">
            {issues.map((issue) => (
              <div
                key={issue.number}
                className={`shrink-0 border p-5 w-36 ${
                  issue.current
                    ? "bg-maroon border-maroon text-white"
                    : "border-marigold/25 hover:border-marigold/60 transition-colors"
                }`}
              >
                <p className={`label text-2xs mb-2 ${issue.current ? "text-white/60" : "text-ink/40"}`}>
                  Issue No. {issue.number}
                </p>
                <p className={`font-display italic text-xl ${issue.current ? "text-white" : "text-ink"}`}>
                  {issue.season}
                </p>
                <p className={`label text-2xs mt-1 ${issue.current ? "text-white/50" : "text-ink/40"}`}>
                  {issue.year}
                </p>
                {issue.current && (
                  <span className="block mt-3 label text-2xs bg-marigold text-ink px-2 py-0.5 text-center">
                    Current
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <hr className="section-rule" />
      </div>

      {/* Current issue highlight */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel className="mb-12">Issue No. 9 — Summer 2025</SectionLabel>

        {/* From the editors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 bg-maroon text-white p-10">
            <p className="label text-marigold mb-6">From the Editors</p>
            <p className="font-display italic text-3xl text-white leading-tight mb-6">
              On the summer that felt, at last, like something permanent.
            </p>
            <p className="font-body text-white/75 text-lg leading-relaxed mb-6">
              The hollyhocks are eight feet tall and the marigolds, which we have been selecting for a particular depth of amber for four years now, have finally achieved something like what we were aiming for. It is a useful reminder that the things worth having take longer than you expect.
            </p>
            <p className="font-body italic text-white/50">
              — Estelle & Oliver Marchand
            </p>
          </div>

          {/* Issue contents */}
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="label text-ink/50 mb-6">In This Issue</p>
            <div className="space-y-1">
              {[
                { title: "The Ethics of the Hybrid", author: "Thomas Alderidge", category: "Essay" },
                { title: "A Field Guide to Vermont's Native Medicinals", author: "Rosalind Church", category: "Growing" },
                { title: "Still Life with Marigolds and Memory", author: "Marguerite Voss", category: "Personal" },
                { title: "What the Seed Banks Know", author: "Estelle Marchand", category: "Correspondence" },
                { title: "On Reading Gardens", author: "Oliver Marchand", category: "From the Editors" },
                { title: "Growing Notes: The Hollyhock Season", author: "Various Members", category: "Growing" },
              ].map(({ title, author, category }) => (
                <div
                  key={title}
                  className="flex items-start justify-between py-4 border-b border-marigold/15 gap-4"
                >
                  <div>
                    <p className="font-body text-ink/80 mb-1">{title}</p>
                    <p className="label text-2xs text-ink/40">
                      {author} — {category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Physical description */}
        <div className="grid grid-cols-3 gap-0.5">
          {[
            { label: "Pages", value: "84" },
            { label: "Format", value: "6\" × 9\"" },
            { label: "Paper", value: "70lb uncoated" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-parchment-dark p-8 text-center">
              <p className="font-display italic text-4xl text-maroon mb-1">{value}</p>
              <p className="label text-ink/50">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Article archive — all articles from the data */}
      <section id="archive" className="py-20 bg-maroon text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel color="marigold" className="mb-16">From the Archive</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/almanac/${article.slug}`}
                className="group block border-b border-white/10 py-8 hover:bg-white/5 transition-colors px-6 -mx-6"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="label text-2xs text-marigold">{article.category}</span>
                      <span className="label text-2xs text-white/30">·</span>
                      <span className="label text-2xs text-white/40">{article.issue}</span>
                    </div>
                    <h3 className="font-display italic text-2xl text-white group-hover:text-marigold transition-colors mb-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="font-body text-white/55 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <p className="label text-2xs text-white/35 mt-3">
                      By {article.author} · {article.readTime} min read
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-24 bg-parchment-light">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <BotanicalSprig className="w-64 h-12 text-marigold/40" />
          </div>
          <h2 className="font-display italic text-display-md text-maroon leading-tight mb-6">
            Receive The Almanac by post.
          </h2>
          <p className="font-body text-ink/70 text-xl leading-relaxed mb-10">
            Every issue is included with a Correspondent or Cultivator membership. Four issues per year, mailed to your door. The kind of thing you keep on a shelf.
          </p>
          <Link
            href="/membership"
            className="inline-block bg-maroon text-white px-10 py-4 font-display italic text-xl hover:bg-maroon-deep transition-colors"
          >
            Join the Society
          </Link>
        </div>
      </section>
    </div>
  );
}
