import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BotanicalSprig } from "@/components/illustrations/BotanicalSprig";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your selection before completing your order.",
};

export default function CartPage() {
  return (
    <div className="pt-28">
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel className="mb-8">Your Cart</SectionLabel>
        <h1 className="font-display italic text-display-md text-maroon leading-tight mb-16">
          Ready to complete your order?
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Cart items area */}
          <div className="lg:col-span-7">
            {/* Empty state */}
            <div className="border border-marigold/20 p-16 text-center">
              <div className="flex justify-center mb-8">
                <BotanicalSprig className="w-48 h-10 text-marigold/30" />
              </div>
              <p className="font-display italic text-2xl text-ink/60 mb-4">
                Your cart is empty.
              </p>
              <p className="font-body text-ink/50 mb-8">
                There is a particular pleasure in arriving at a thing slowly, via a seed library and a journal and a community that knows what it is doing.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/seed-library"
                  className="inline-block bg-maroon text-white px-8 py-3 font-display italic text-lg hover:bg-maroon-deep transition-colors"
                >
                  Browse the seed library
                </Link>
                <Link
                  href="/shop"
                  className="inline-block border border-maroon text-maroon px-8 py-3 font-display italic text-lg hover:bg-maroon hover:text-white transition-all"
                >
                  Visit the shop
                </Link>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-5">
            <div className="border border-marigold/20 p-8 sticky top-28">
              <p className="label text-ink/50 mb-6">Order Summary</p>

              <div className="space-y-3 mb-8">
                {[
                  { label: "Subtotal", value: "—" },
                  { label: "Shipping", value: "Calculated at checkout" },
                  { label: "Members discount", value: "—" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between">
                    <span className="font-body text-ink/60">{label}</span>
                    <span className="font-body text-ink/60">{value}</span>
                  </div>
                ))}
                <hr className="section-rule my-4" />
                <div className="flex justify-between">
                  <span className="font-display italic text-xl text-ink">Total</span>
                  <span className="font-display italic text-xl text-maroon">—</span>
                </div>
              </div>

              <button
                disabled
                className="w-full bg-maroon/40 text-white/60 py-4 font-display italic text-xl cursor-not-allowed mb-4"
              >
                Proceed to Checkout
              </button>

              <div className="space-y-3 pt-4 border-t border-marigold/15">
                <p className="label text-ink/40 text-2xs">Membership discount applied automatically at checkout.</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="flex-1 border border-marigold/30 bg-parchment px-4 py-2 font-body text-sm text-ink placeholder-ink/30 focus:outline-none focus:border-marigold"
                  />
                  <button className="label text-sm border border-marigold/30 text-ink/60 px-4 py-2 hover:border-marigold hover:text-marigold transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested */}
        <div className="mt-24">
          <SectionLabel className="mb-10">You might like</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5">
            {[
              {
                href: "/shop/heirloom-founders-collection",
                title: "The Founders' Collection",
                desc: "Eight heirloom varieties, selected by Estelle and Oliver.",
                price: "$42",
              },
              {
                href: "/shop/pressed-flower-beginners-kit",
                title: "The Pressing Kit",
                desc: "Everything needed to begin pressing — built to last.",
                price: "$68",
              },
              {
                href: "/membership",
                title: "Membership",
                desc: "Seeds, The Almanac, the Greenhouse — quarterly.",
                price: "From $45/quarter",
              },
            ].map(({ href, title, desc, price }) => (
              <Link
                key={href}
                href={href}
                className="group block border border-marigold/20 hover:border-marigold/50 transition-all p-8"
              >
                <h3 className="font-display italic text-xl text-ink group-hover:text-maroon transition-colors mb-2">
                  {title}
                </h3>
                <p className="font-body text-ink/60 text-sm mb-4">{desc}</p>
                <span className="font-display text-maroon">{price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
