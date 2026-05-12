"use client";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getFeaturedSeeds } from "@/lib/data/seeds";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { formatPrice } from "@/lib/utils";
import { BotanicalDraw } from "@/components/illustrations/BotanicalDraw";
import { imageCoverTop } from "@/lib/siteImages";

export function FeaturedSeeds() {
  const sectionRef = useScrollReveal(0.1);
  const seeds = getFeaturedSeeds();

  return (
    <section className="py-24 lg:py-36 bg-maroon text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <BotanicalDraw variant="vine" className="w-24 h-96 text-marigold" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-5 pointer-events-none">
        <BotanicalDraw variant="vine" className="w-24 h-96 text-marigold" style={{ transform: "scaleX(-1)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={sectionRef} className="reveal flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel color="marigold" className="mb-6">The Seed Library</SectionLabel>
            <h2 className="font-display italic text-display-md text-white leading-tight">
              From the current season's selection
            </h2>
          </div>
          <Link
            href="/seed-library"
            className="shrink-0 label text-white/50 hover:text-marigold transition-colors link-underline"
          >
            Browse all 400+ varieties
          </Link>
        </div>

        {/* Seeds grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 min-h-0">
          {seeds.map((seed, i) => (
            <SeedCard key={seed.slug} seed={seed} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display italic text-xl text-white mb-2">
              Join as a Cultivator to receive seeds quarterly.
            </p>
            <p className="label text-white/40">Selected by Estelle and Oliver each season.</p>
          </div>
          <Link
            href="/membership"
            className="shrink-0 inline-flex items-center gap-3 border border-marigold text-marigold px-8 py-3 label hover:bg-marigold hover:text-ink transition-all duration-300"
          >
            Explore membership
          </Link>
        </div>
      </div>
    </section>
  );
}

function SeedCard({ seed, index }: { seed: ReturnType<typeof getFeaturedSeeds>[0]; index: number }) {
  const ref = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Link
        href={`/seed-library/${seed.slug}`}
        className="group flex flex-col min-h-0 min-w-0 bg-maroon border border-white/10 hover:border-marigold/50 transition-all duration-500 overflow-hidden"
      >
        {seed.image ? (
          <div className="aspect-square relative overflow-hidden min-h-0 bg-gradient-to-br from-maroon via-maroon to-parchment/5">
            <Image
              src={seed.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={`${imageCoverTop} transition-transform duration-500 group-hover:scale-[1.03]`}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-maroon/75 via-maroon/20 to-transparent pointer-events-none"
              aria-hidden
            />
            <div className="absolute top-4 right-4 z-10">
              <span className="label text-2xs bg-white/10 text-white/60 px-2 py-1">{seed.difficulty}</span>
            </div>
            <div className="absolute top-4 left-4 z-10">
              <span className="label text-2xs" style={{ color: seed.accentColor }}>
                {seed.category}
              </span>
            </div>
          </div>
        ) : (
          <div className="px-6 pt-6 pb-2 border-b border-white/10 flex justify-between items-start gap-4">
            <span className="label text-2xs" style={{ color: seed.accentColor }}>
              {seed.category}
            </span>
            <span className="label text-2xs bg-white/10 text-white/60 px-2 py-1">{seed.difficulty}</span>
          </div>
        )}

        <div className={`p-6 border-t border-white/10 ${seed.image ? "" : "flex-1"}`}>
          <p className="font-body italic text-white/50 text-sm mb-1">
            {seed.latinName}
          </p>
          <h3 className="font-display italic text-xl text-white mb-2 group-hover:text-marigold transition-colors">
            {seed.name}
          </h3>
          <p className="font-body text-white/60 text-sm leading-relaxed line-clamp-2 mb-4">
            {seed.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-display text-marigold">
              {formatPrice(seed.price)}
            </span>
            <span className="label text-2xs text-white/40">
              {seed.daysToMaturity === 365 ? "2nd year" : seed.daysToMaturity === 730 ? "3rd year" : `${seed.daysToMaturity} days`}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
