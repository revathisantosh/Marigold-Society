import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { Seed } from "@/lib/data/seeds";
import { seedsByCategory } from "@/lib/data/seeds";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BotanicalDraw } from "@/components/illustrations/BotanicalDraw";
import { imageCoverTop } from "@/lib/siteImages";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Seed Library",
  description: "Over 400 heirloom varieties, documented and grown on our Vermont farm. Browse flowers, vegetables, herbs, and grains.",
};

const categories = ["All", "Flower", "Vegetable", "Herb", "Grain"] as const;

export default function SeedLibraryPage() {
  return (
    <div className="pt-28">
      {/* Hero header */}
      <section className="py-20 lg:py-28 bg-maroon text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none">
          <BotanicalDraw variant="vine" className="h-full text-marigold" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <SectionLabel color="marigold" className="mb-8">The Seed Library</SectionLabel>
              <h1 className="font-display italic text-display-lg text-white leading-none mb-8">
                Varieties worth growing.
              </h1>
              <p className="font-body text-white/70 text-xl leading-relaxed">
                Each variety in the library has been grown on our farm, documented, and — in most cases — carries a story that explains how it arrived here. We add new varieties each season and retire those that have found better custodians.
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:pl-12">
              {[
                { num: "400+", label: "heirloom varieties" },
                { num: "6", label: "growing seasons documented" },
                { num: "12", label: "countries of origin" },
              ].map(({ num, label }) => (
                <div key={label} className="border-l-2 border-marigold pl-6">
                  <p className="font-display italic text-5xl text-marigold">{num}</p>
                  <p className="label text-white/50">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-[60px] z-40 bg-parchment/95 backdrop-blur-sm border-b border-marigold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex gap-1 overflow-x-auto">
          {categories.map((cat) => (
            <a
              key={cat}
              href={cat === "All" ? "#all" : `#${cat.toLowerCase()}`}
              className="shrink-0 label text-sm py-4 px-4 text-ink/50 hover:text-marigold transition-colors border-b-2 border-transparent hover:border-marigold"
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-2 text-ink/30">
                  ({seedsByCategory[cat as Seed["category"]]?.length ?? 0})
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Seed categories */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {Object.entries(seedsByCategory).map(([category, categorySeeds]) => (
          <section key={category} id={category.toLowerCase()} className="mb-24">
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionLabel className="mb-3">{category}</SectionLabel>
                <h2 className="font-display italic text-3xl text-maroon">
                  {category === "Flower" && "For the cutting garden and the border"}
                  {category === "Vegetable" && "For the table and the root cellar"}
                  {category === "Herb" && "For medicine, kitchen, and fragrance"}
                  {category === "Grain" && "Ancient grains and heritage cereals"}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0.5">
              {categorySeeds.map((seed) => (
                <Link
                  key={seed.slug}
                  href={`/seed-library/${seed.slug}`}
                  className="group card-lift flex flex-col min-h-0 min-w-0 overflow-hidden border border-marigold/15 hover:border-marigold/50 transition-all duration-400 bg-parchment"
                >
                  {seed.image ? (
                    <div className="aspect-square bg-parchment-dark relative overflow-hidden min-h-0">
                      <Image
                        src={seed.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={`${imageCoverTop} transition-transform duration-500 group-hover:scale-[1.02]`}
                      />
                      {seed.featured && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="label text-2xs bg-marigold text-ink px-2 py-0.5">Selected</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    seed.featured && (
                      <div className="px-5 pt-5 border-b border-marigold/15">
                        <span className="label text-2xs bg-marigold text-ink px-2 py-0.5 inline-block">
                          Selected
                        </span>
                      </div>
                    )
                  )}

                  <div className={`p-5 ${seed.image ? "" : "border-t border-marigold/15"}`}>
                    <p className="font-body italic text-ink/40 text-sm mb-1">
                      {seed.latinName}
                    </p>
                    <h3 className="font-display italic text-lg text-ink group-hover:text-maroon transition-colors mb-2">
                      {seed.name}
                    </h3>
                    <p className="font-body text-ink/60 text-sm leading-relaxed line-clamp-2 mb-3">
                      {seed.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-maroon text-lg">
                        {formatPrice(seed.price)}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          className="label text-2xs px-2 py-0.5 rounded-full"
                          style={{
                            background: `${seed.accentColor}18`,
                            color: seed.accentColor,
                          }}
                        >
                          {seed.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Society CTA */}
      <div className="bg-parchment-dark py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display italic text-3xl text-maroon mb-4">
            Members receive seeds quarterly.
          </h2>
          <p className="font-body text-ink/70 mb-8">
            Cultivator members receive six packets per quarter, including exclusive varieties not otherwise available in the library.
          </p>
          <Link
            href="/membership"
            className="inline-block bg-maroon text-white px-8 py-4 font-display italic text-xl hover:bg-maroon-deep transition-colors"
          >
            Join the Society
          </Link>
        </div>
      </div>
    </div>
  );
}
