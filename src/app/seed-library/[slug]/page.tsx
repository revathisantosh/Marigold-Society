import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getSeedBySlug, seeds } from "@/lib/data/seeds";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { formatPrice } from "@/lib/utils";
import { imageCoverTop } from "@/lib/siteImages";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return seeds.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const seed = getSeedBySlug(params.slug);
  if (!seed) return { title: "Seed Not Found" };
  return {
    title: seed.name,
    description: seed.description,
  };
}

export default function SeedPage({ params }: Props) {
  const seed = getSeedBySlug(params.slug);
  if (!seed) notFound();

  const related = seeds
    .filter((s) => s.category === seed.category && s.slug !== seed.slug)
    .slice(0, 3);

  return (
    <div className="pt-28">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <nav className="flex items-center gap-2 label text-ink/40">
          <Link href="/seed-library" className="hover:text-marigold transition-colors">
            Seed Library
          </Link>
          <span>/</span>
          <span className="text-ink/60">{seed.category}</span>
          <span>/</span>
          <span className="text-ink">{seed.name}</span>
        </nav>
      </div>

      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start min-h-0">
          {seed.image && (
            <div className="lg:col-span-5 lg:sticky lg:top-28 min-h-0 min-w-0">
              <div
                className="aspect-square max-h-[min(92vw,36rem)] mx-auto w-full rounded-sm flex items-center justify-center p-8 sm:p-12 relative overflow-hidden min-h-0"
                style={{ background: `${seed.accentColor}12` }}
              >
                <div className="absolute inset-0 opacity-5 bg-noise" />

                <Image
                  src={seed.image}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className={imageCoverTop}
                />

                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                  <div>
                    <span className="label text-2xs block mb-1" style={{ color: seed.accentColor }}>
                      {seed.category}
                    </span>
                    <span className="label text-2xs text-ink/40">{seed.origin}</span>
                  </div>
                  {seed.featured && (
                    <span className="label text-2xs bg-marigold text-ink px-3 py-1">
                      Editor's Selection
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {seed.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label text-2xs border border-marigold/30 text-ink/60 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className={seed.image ? "lg:col-span-7" : "lg:col-span-12 max-w-4xl"}>
            {!seed.image && (
              <div className="flex flex-wrap gap-2 mb-8">
                {seed.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label text-2xs border border-marigold/30 text-ink/60 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <SectionLabel className="mb-6">{seed.family}</SectionLabel>

            <p className="font-body italic text-ink/50 text-lg mb-2">{seed.latinName}</p>
            <h1 className="font-display italic text-display-md text-maroon leading-tight mb-4">
              {seed.name}
            </h1>
            <p className="font-body text-ink/70 text-xl leading-relaxed mb-10">
              {seed.description}
            </p>

            {/* Purchase block */}
            <div className="border border-marigold/30 p-8 mb-12 bg-parchment-light">
              <div className="flex items-center justify-between mb-6">
                <span className="font-display italic text-4xl text-maroon">
                  {formatPrice(seed.price)}
                </span>
                <span className="label text-ink/50">per packet (~80 seeds)</span>
              </div>
              <button className="w-full bg-maroon text-white py-4 font-display italic text-xl hover:bg-maroon-deep transition-colors duration-300 mb-3">
                Add to Cart
              </button>
              <p className="label text-center text-ink/40 text-2xs">
                Ships within 3 business days · Free shipping over $40
              </p>
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-0.5 mb-12">
              {[
                { label: "Days to Maturity", value: seed.daysToMaturity === 365 ? "Blooms year 2" : seed.daysToMaturity === 730 ? "Blooms year 3" : `${seed.daysToMaturity} days` },
                { label: "Difficulty", value: seed.difficulty },
                { label: "Harvest Window", value: seed.harvestWindow },
                { label: "Documented Since", value: seed.year },
              ].map(({ label, value }) => (
                <div key={label} className="bg-parchment-dark p-5">
                  <p className="label text-ink/40 mb-1">{label}</p>
                  <p className="font-display italic text-ink text-lg">{value}</p>
                </div>
              ))}
            </div>

            {/* Provenance story */}
            <div className="mb-12">
              <h2 className="font-display italic text-2xl text-maroon mb-4">Provenance</h2>
              <div className="border-l-2 border-marigold pl-6">
                <p className="font-body text-ink/75 text-lg leading-relaxed">
                  {seed.story}
                </p>
              </div>
            </div>

            {/* Growing notes */}
            <div>
              <h2 className="font-display italic text-2xl text-maroon mb-4">Growing Notes</h2>
              <p className="font-body text-ink/75 text-lg leading-relaxed">
                {seed.growingNotes}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related seeds */}
      {related.length > 0 && (
        <section className="py-20 bg-parchment-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionLabel className="mb-12">More from the {seed.category} Collection</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/seed-library/${s.slug}`}
                  className="group block bg-parchment border border-marigold/15 hover:border-marigold/50 transition-all duration-400 p-6"
                >
                  <p className="font-body italic text-ink/40 text-sm mb-1">{s.latinName}</p>
                  <h3 className="font-display italic text-xl text-ink group-hover:text-maroon transition-colors mb-2">
                    {s.name}
                  </h3>
                  <p className="font-body text-ink/60 text-sm line-clamp-2 mb-4">
                    {s.description}
                  </p>
                  <span className="font-display text-maroon">{formatPrice(s.price)}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
