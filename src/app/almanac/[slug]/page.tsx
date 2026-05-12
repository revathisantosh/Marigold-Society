import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, articles } from "@/lib/data/articles";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BotanicalDraw } from "@/components/illustrations/BotanicalDraw";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  return (
    <div className="pt-28">
      {/* Article header */}
      <header className="py-20 lg:py-28 bg-parchment-light">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel className="mb-8">{article.category}</SectionLabel>
          <h1 className="font-display italic text-display-md text-maroon leading-tight mb-4">
            {article.title}
          </h1>
          <p className="font-body text-ink/60 text-xl italic leading-relaxed mb-8">
            {article.subtitle}
          </p>
          <div className="flex items-center justify-center gap-4">
            <p className="label text-ink/50">By {article.author}</p>
            <span className="text-marigold/50">·</span>
            <p className="label text-ink/50">{article.issue}</p>
            <span className="text-marigold/50">·</span>
            <p className="label text-ink/50">{article.readTime} min read</p>
          </div>
        </div>
      </header>

      {/* Drop cap opening */}
      <article className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left botanical decoration */}
          <aside className="hidden lg:flex lg:col-span-2 justify-end pt-8">
            <BotanicalDraw variant="sprig-tall" className="w-10 h-48 text-vine/50" />
          </aside>

          {/* Main text */}
          <div className="lg:col-span-7">
            <div className="prose-custom space-y-8 font-body text-ink/85 text-xl leading-relaxed">
              {article.content.map((section, i) => {
                if (section.type === "paragraph" && i === 0) {
                  // Drop cap on first paragraph
                  const firstChar = section.text[0];
          const rest = section.text.slice(1);
                  return (
                    <p key={i}>
                      <span className="float-left font-display italic text-7xl text-maroon leading-none mr-3 mt-1">
                        {firstChar}
                      </span>
                      {rest}
                    </p>
                  );
                }
                if (section.type === "paragraph") {
                  return (
                    <p key={i} className="font-body text-ink/80 text-xl leading-relaxed">
                      {section.text}
                    </p>
                  );
                }
                if (section.type === "pullquote") {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-4 border-marigold pl-8 my-12 font-display italic text-2xl text-maroon leading-relaxed"
                    >
                      {section.text}
                    </blockquote>
                  );
                }
                if (section.type === "heading") {
                  return (
                    <h2 key={i} className="font-display italic text-3xl text-maroon mt-12 mb-2">
                      {section.text}
                    </h2>
                  );
                }
                if (section.type === "divider") {
                  return (
                    <div key={i} className="flex justify-center my-10">
                      <span className="text-marigold/60 text-2xl tracking-widest">✦ ✦ ✦</span>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Author bio */}
            <div className="mt-16 pt-8 border-t border-marigold/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-marigold/20 flex items-center justify-center shrink-0">
                  <span className="font-display italic text-xl text-maroon">
                    {article.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display italic text-lg text-ink mb-1">
                    {article.author}
                  </p>
                  <p className="font-body text-ink/60 text-base leading-relaxed">
                    {article.authorBio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-8">
              {/* Issue info */}
              <div className="border border-marigold/25 p-6">
                <p className="label text-marigold mb-3">This article appeared in</p>
                <p className="font-display italic text-lg text-ink mb-1">{article.issue}</p>
                <p className="label text-2xs text-ink/40 mb-4">{article.date}</p>
                <Link
                  href="/membership"
                  className="block text-center bg-maroon text-white py-3 label hover:bg-maroon-deep transition-colors"
                >
                  Subscribe to The Almanac
                </Link>
              </div>

              {/* Tags */}
              <div>
                <p className="label text-ink/40 mb-3">Topics</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="label text-2xs border border-marigold/25 text-ink/50 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 bg-parchment-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionLabel className="mb-10">From the same issue</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/almanac/${a.slug}`}
                  className="group block border border-marigold/20 hover:border-marigold/50 transition-all p-8"
                >
                  <span className="label text-2xs text-marigold block mb-3">{a.category}</span>
                  <h3 className="font-display italic text-2xl text-maroon group-hover:text-maroon transition-colors mb-3">
                    {a.title}
                  </h3>
                  <p className="font-body text-ink/60 line-clamp-2">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
