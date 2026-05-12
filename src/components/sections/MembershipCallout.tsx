"use client";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BotanicalDraw } from "@/components/illustrations/BotanicalDraw";

export function MembershipCallout() {
  const ref = useScrollReveal(0.15);

  return (
    <section className="py-24 lg:py-36 bg-parchment-dark relative overflow-hidden">
      {/* Background botanical decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none -translate-x-1/3">
        <BotanicalDraw variant="marigold" className="w-64 h-64 text-marigold" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none translate-x-1/3">
        <BotanicalDraw variant="marigold" className="w-64 h-64 text-marigold" />
      </div>

      <div ref={ref} className="reveal max-w-3xl mx-auto px-6 text-center">
        <p className="label text-marigold mb-8 ornament">The Quarterly Box</p>

        <h2 className="font-display italic text-display-lg text-maroon leading-none mb-8">
          Join the Society.
        </h2>

        <p className="font-body text-ink/70 text-xl leading-relaxed mb-12">
          Three subscription tiers. Seeds from the library, the printed Almanac, and access to the Greenhouse — our members' forum where the conversations that started in the seed library continue year-round.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/membership"
            className="inline-flex items-center gap-3 bg-maroon text-white px-10 py-4 font-display italic text-xl hover:bg-maroon-deep transition-colors duration-400"
          >
            Explore membership
          </Link>
          <Link
            href="/shop/membership-gift"
            className="inline-flex items-center gap-3 border border-maroon text-maroon px-10 py-4 font-display italic text-xl hover:bg-maroon hover:text-white transition-all duration-400"
          >
            Give as a gift
          </Link>
        </div>

        {/* Social proof */}
        <p className="mt-12 label text-ink/40">
          Joined by 1,400 members across Vermont and beyond
        </p>
      </div>
    </section>
  );
}
