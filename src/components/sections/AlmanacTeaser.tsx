"use client";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getFeaturedArticles } from "@/lib/data/articles";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BotanicalSprig } from "@/components/illustrations/BotanicalSprig";
import { imageCoverTop } from "@/lib/siteImages";

export function AlmanacTeaser() {
  const headerRef = useScrollReveal(0.1);
  const articles = getFeaturedArticles().slice(0, 3);

  return (
    <section className="py-24 lg:py-40 bg-parchment-light relative overflow-hidden">
      {/* Top rule */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <hr className="section-rule mb-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header with large display text */}
        <div ref={headerRef} className="reveal mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <SectionLabel className="mb-8">The Almanac — A Quarterly Journal</SectionLabel>
              <h2 className="font-display italic text-display-lg text-maroon leading-none">
                Written for those who read slowly.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="font-body text-ink/70 text-lg leading-relaxed">
                Eighty pages of essays, growing notes, material culture, and the kind of field observation that doesn't fit anywhere else. Printed on uncoated stock and mailed to your door, quarterly.
              </p>
              <Link
                href="/almanac"
                className="inline-flex items-center gap-3 mt-6 font-display italic text-maroon hover:text-marigold transition-colors group"
              >
                Read the current issue
                <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
              </Link>
            </div>
          </div>
        </div>

        {/* Articles — asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
          {/* Featured large article */}
          {articles[0] && <LargeArticleCard article={articles[0]} />}

          {/* Two smaller articles */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {articles.slice(1).map((article, i) => (
              <SmallArticleCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="flex flex-col items-center gap-6">
          <BotanicalSprig className="w-64 h-12 text-marigold/40" />
          <p className="label text-ink/40 text-center">
            Issue No. 9 — Summer 2025 — now available
          </p>
        </div>
      </div>
    </section>
  );
}

function LargeArticleCard({ article }: { article: ReturnType<typeof getFeaturedArticles>[0] }) {
  const ref = useScrollReveal(0.1);

  return (
    <div ref={ref} className="reveal lg:col-span-8">
      <Link
        href={`/almanac/${article.slug}`}
        className="group block min-h-0 min-w-0 border border-marigold/20 hover:border-marigold/50 transition-all duration-500 overflow-hidden"
      >
        {/* Image area */}
        <div className="aspect-[16/9] max-h-[min(70vh,32rem)] relative flex items-end p-8 overflow-hidden min-h-0 bg-parchment-dark">
          {article.coverImage ? (
            <Image
              src={article.coverImage}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className={imageCoverTop}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-maroon/20 via-parchment to-marigold/20" aria-hidden />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-maroon/20 to-transparent" aria-hidden />
          <div className="relative z-10">
            <span className="label text-2xs text-marigold block mb-2">{article.category}</span>
            <h3 className="font-display italic text-3xl lg:text-4xl text-white group-hover:text-marigold transition-colors leading-tight max-w-lg">
              {article.title}
            </h3>
          </div>
        </div>

        {/* Article info */}
        <div className="p-8 bg-parchment">
          <p className="label text-ink/50 mb-3">
            {article.issue} — by {article.author}
          </p>
          <p className="font-body text-ink/70 text-lg leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-2 text-maroon group-hover:text-marigold transition-colors">
            <span className="font-display italic">Continue reading</span>
            <span className="w-6 h-px bg-current block transition-all duration-300 group-hover:w-8" />
          </div>
        </div>
      </Link>
    </div>
  );
}

function SmallArticleCard({ article, index }: { article: ReturnType<typeof getFeaturedArticles>[0]; index: number }) {
  const ref = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <Link
        href={`/almanac/${article.slug}`}
        className="group block border border-marigold/20 hover:border-marigold/50 transition-all duration-500 p-6"
      >
        <span className="label text-2xs text-marigold block mb-3">{article.category}</span>
        <h3 className="font-display italic text-xl text-ink group-hover:text-maroon transition-colors mb-3 leading-tight">
          {article.title}
        </h3>
        <p className="font-body text-ink/60 text-base line-clamp-2 mb-4">
          {article.subtitle}
        </p>
        <div className="flex items-center justify-between">
          <span className="label text-2xs text-ink/40">
            {article.readTime} min read
          </span>
          <span className="label text-2xs text-maroon group-hover:text-marigold transition-colors">
            {article.author}
          </span>
        </div>
      </Link>
    </div>
  );
}
