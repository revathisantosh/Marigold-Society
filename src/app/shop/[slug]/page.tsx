import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data/shop";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { formatPrice } from "@/lib/utils";
import { imageCoverTop } from "@/lib/siteImages";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Not Found" };
  return { title: product.name, description: product.description };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="pt-28">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <nav className="flex items-center gap-2 label text-ink/40">
          <Link href="/shop" className="hover:text-marigold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image */}
          <div className="aspect-square max-h-[min(100vw,42rem)] mx-auto w-full bg-parchment-dark relative overflow-hidden min-h-0">
            <Image
              src={product.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={imageCoverTop}
              priority
            />
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              {product.new && <span className="label text-2xs bg-maroon text-white px-2 py-0.5">New</span>}
              {product.limited && <span className="label text-2xs bg-marigold text-ink px-2 py-0.5">Limited</span>}
            </div>
          </div>

          {/* Info */}
          <div>
            <SectionLabel className="mb-6">{product.category.replace("-", " ")}</SectionLabel>
            <h1 className="font-display italic text-display-md text-maroon leading-tight mb-4">
              {product.name}
            </h1>
            <p className="font-body text-ink/70 text-xl leading-relaxed mb-8">
              {product.longDescription}
            </p>

            {product.includes && (
              <div className="mb-8">
                <p className="label text-ink/50 mb-4">Includes</p>
                <ul className="space-y-2">
                  {product.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-ink/75">
                      <span className="text-marigold shrink-0 mt-1">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.dimensions && (
              <p className="label text-ink/40 mb-8">Dimensions / Weight: {product.dimensions}</p>
            )}

            {/* Purchase */}
            <div className="border-t border-marigold/20 pt-8">
              <div className="flex items-center justify-between mb-6">
                <span className="font-display italic text-5xl text-maroon">
                  {formatPrice(product.price)}
                </span>
                {product.limited && product.stock && (
                  <span className="label text-2xs text-marigold">
                    {product.stock} remaining
                  </span>
                )}
              </div>
              <button className="w-full bg-maroon text-white py-4 font-display italic text-xl hover:bg-maroon-deep transition-colors mb-3">
                Add to Cart
              </button>
              <p className="label text-center text-ink/40 text-2xs">
                Free shipping over $40 · Ships within 3 days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-parchment-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionLabel className="mb-10">You might also like</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/shop/${p.slug}`}
                  className="group block border border-marigold/15 hover:border-marigold/50 p-6 transition-all bg-parchment"
                >
                  <h3 className="font-display italic text-xl text-ink group-hover:text-maroon transition-colors mb-2">
                    {p.name}
                  </h3>
                  <p className="font-body text-ink/60 text-sm line-clamp-2 mb-4">{p.description}</p>
                  <span className="font-display text-maroon">{formatPrice(p.price)}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
