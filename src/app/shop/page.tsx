import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data/shop";
import { seedsByCategory, type Seed } from "@/lib/data/seeds";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { formatPrice } from "@/lib/utils";
import { BotanicalDraw } from "@/components/illustrations/BotanicalDraw";
import { imageCoverTop } from "@/lib/siteImages";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Heirloom collections, pressing kits, membership gifts, and individual seed packets from The Marigold Society.",
};

const categoryLabels: Record<(typeof products)[0]["category"], string> = {
  "seed-collection": "Seed Collections",
  "pressed-flower": "Pressed Flower",
};

const categoryDescriptions: Record<Seed["category"], string> = {
  Flower: "For the cutting garden and the border",
  Vegetable: "For the table and the root cellar",
  Herb: "For medicine, kitchen, and fragrance",
  Grain: "Ancient grains and heritage cereals",
};

export default function ShopPage() {
  const madeByUs = products;

  return (
    <div className="pt-28">
      {/* Header */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <SectionLabel className="mb-8">The Shop</SectionLabel>
            <h1 className="font-display italic text-display-lg text-maroon leading-none">
              Things we make — and seeds from the library.
            </h1>
          </div>
          <p className="font-body text-ink/70 text-xl leading-relaxed">
            Below are the boxes and kits we assemble by hand. Individual varieties match our seed library categories;
            each packet links to its full story and growing notes.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <hr className="section-rule mb-16" />
      </div>

      {/* Things we make */}
      <section id="things-we-make" className="max-w-7xl mx-auto px-6 lg:px-12 mb-28 scroll-mt-28">
        <SectionLabel className="mb-12">Things we make</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 min-h-0">
          {madeByUs.map((product, i) => (
            <ProductCard key={product.id} product={product} large={i === 0} />
          ))}
        </div>
      </section>

      {/* Seeds — same groupings as the seed library */}
      <div className="border-t border-marigold/15 pt-8 bg-parchment-dark/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 mb-8">
          <SectionLabel className="mb-6">Seeds</SectionLabel>
          <p className="font-body text-ink/70 text-lg leading-relaxed max-w-2xl">
            Browse by type as in the{" "}
            <Link href="/seed-library" className="text-maroon underline-offset-4 hover:underline">
              seed library
            </Link>
            . Purchase packets here; provenance and cultivation notes live on each variety page.
          </p>
        </div>

        {(Object.entries(seedsByCategory) as [Seed["category"], Seed[]][]).map(([category, categorySeeds]) => (
          <section
            key={category}
            id={`shop-${category.toLowerCase()}`}
            className="mb-24 max-w-7xl mx-auto px-6 lg:px-12 scroll-mt-28"
          >
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionLabel className="mb-3">{category}</SectionLabel>
                <h2 className="font-display italic text-3xl text-maroon">{categoryDescriptions[category]}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0.5 min-h-0">
              {categorySeeds.map((seed) => (
                <SeedPacketCard key={seed.slug} seed={seed} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Gift card */}
      <section className="py-24 bg-maroon text-white relative overflow-hidden">
        <div className="absolute right-0 inset-y-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-end pr-8">
          <BotanicalDraw variant="marigold" className="w-64 h-64 text-white" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <SectionLabel color="white" className="mb-8">
            Give the gift
          </SectionLabel>
          <h2 className="font-display italic text-display-md text-white leading-tight mb-6">
            A membership, gifted.
          </h2>
          <p className="font-body text-white/75 text-xl leading-relaxed mb-10">
            A Correspondent membership makes an exceptional gift for the gardener, the reader, the person who appreciates things made with care. Includes a hand-lettered card from us, mailed separately.
          </p>
          <Link
            href="/shop/membership-gift"
            className="inline-block bg-parchment text-ink px-10 py-4 font-display italic text-xl hover:bg-marigold transition-colors"
          >
            Shop gift memberships — from {formatPrice(45)}
          </Link>
        </div>
      </section>

      {/* Shipping info */}
      <section className="py-12 bg-parchment-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { label: "Free shipping", desc: "On all orders over $40 within the continental US" },
              { label: "Ships within 3 days", desc: "Most orders leave the farm within three business days" },
              { label: "Seed season", desc: "Seed orders ship February through September for best viability" },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="text-marigold mt-1">✦</span>
                <div>
                  <p className="font-display italic text-ink mb-1">{label}</p>
                  <p className="font-body text-ink/60 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({
  product,
  large = false,
}: {
  product: (typeof products)[0];
  large?: boolean;
}) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block min-h-0 min-w-0 card-lift border border-marigold/15 hover:border-marigold/50 transition-all duration-400 bg-parchment overflow-hidden"
    >
      <div
        className={`${large ? "aspect-[4/3]" : "aspect-square"} bg-parchment-dark relative overflow-hidden min-h-0 max-h-[min(100vw,56rem)]`}
      >
        <Image
          src={product.image}
          alt=""
          fill
          sizes={
            large ? "(max-width: 1024px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          }
          className={`${imageCoverTop} transition-transform duration-500 group-hover:scale-[1.02]`}
        />

        <div className="absolute top-3 left-3 z-10 flex gap-2">
          {product.new && (
            <span className="label text-2xs bg-maroon text-white px-2 py-0.5">New</span>
          )}
          {product.limited && (
            <span className="label text-2xs bg-marigold text-ink px-2 py-0.5">
              Limited {product.stock ? `— ${product.stock} left` : ""}
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <p className="label text-2xs text-ink/40 mb-1">{categoryLabels[product.category]}</p>
        <h3 className="font-display italic text-xl text-ink group-hover:text-maroon transition-colors mb-2">
          {product.name}
        </h3>
        <p className="font-body text-ink/60 text-sm leading-relaxed line-clamp-2 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-display text-maroon text-lg">{formatPrice(product.price)}</span>
          <span className="label text-2xs text-marigold group-hover:text-maroon transition-colors">View →</span>
        </div>
      </div>
    </Link>
  );
}

function SeedPacketCard({ seed }: { seed: Seed }) {
  return (
    <Link
      href={`/seed-library/${seed.slug}`}
      className="group card-lift block min-h-0 min-w-0 border border-marigold/15 hover:border-marigold/50 transition-all duration-400 bg-parchment flex flex-col overflow-hidden"
    >
      {seed.image ? (
        <div className="aspect-square bg-parchment-dark relative overflow-hidden shrink-0 min-h-0">
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
          <div className="px-5 pt-5 shrink-0">
            <span className="label text-2xs bg-marigold text-ink px-2 py-0.5 inline-block">Selected</span>
          </div>
        )
      )}

      <div className={`p-5 flex flex-col flex-1 ${seed.image ? "" : "border-t border-marigold/15"}`}>
        <p className="font-body italic text-ink/40 text-sm mb-1">{seed.latinName}</p>
        <h3 className="font-display italic text-lg text-ink group-hover:text-maroon transition-colors mb-2">
          {seed.name}
        </h3>
        <p className="font-body text-ink/60 text-sm leading-relaxed line-clamp-2 mb-3">{seed.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display text-maroon text-lg">{formatPrice(seed.price)}</span>
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
    </Link>
  );
}
