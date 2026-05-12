"use client";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BotanicalDraw } from "@/components/illustrations/BotanicalDraw";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { imageCoverTop, siteImages } from "@/lib/siteImages";

export function AboutTeaser() {
  const textRef = useScrollReveal(0.15);
  const imageRef = useScrollReveal(0.15);

  return (
    <section className="py-32 lg:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-0">
          {/* Text side */}
          <div
            ref={textRef}
            className="reveal lg:col-span-6 lg:col-start-1"
          >
            <SectionLabel className="mb-8">Strafford, Vermont — Est. 2021</SectionLabel>

            <h2 className="font-display italic text-display-md text-maroon mb-8 leading-tight">
              A Society built on the premise that certain things are{" "}
              <em className="text-marigold not-italic">worth keeping.</em>
            </h2>

            <div className="space-y-5 font-body text-ink/75 text-lg">
              <p>
                We began as a seed swap in a church basement in Burlington — Estelle with her eight hundred packets of heirloom seeds and Oliver with a van and a folder of handwritten notes. What grew from that afternoon became something we hadn't entirely planned for: a community of people who care, with some intensity, about old varieties and good paper and the particular quality of attention that gardening demands.
              </p>
              <p>
                The Marigold Society is now a seed library, a pressed-flower atelier, a quarterly journal, and a small farm in Strafford where visitors are always welcome during the growing season. We remain, as we began, a society: a gathering of people who find meaning in the same things.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <Link
                href="/our-story"
                className="inline-flex items-center gap-3 font-display italic text-maroon hover:text-marigold transition-colors group"
              >
                Read our story
                <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
              </Link>
              <Link
                href="/visit"
                className="label text-ink/50 hover:text-ink transition-colors"
              >
                Visit the farm
              </Link>
            </div>
          </div>

          {/* Illustration + photo side */}
          <div
            ref={imageRef}
            className="reveal reveal-delay-2 lg:col-span-5 lg:col-start-8 relative min-h-0 min-w-0"
          >
            {/* Main image placeholder */}
            <div className="aspect-[3/4] max-h-[85vh] bg-parchment-dark rounded-sm overflow-hidden relative min-h-0">
              <Image
                src={siteImages.seedGarden}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className={imageCoverTop}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-maroon/50 via-maroon/10 to-transparent"
                aria-hidden
              />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-maroon/80 px-6 py-4">
                <p className="label text-white/60 mb-1">The Seed Garden</p>
                <p className="font-body text-white text-base italic">
                  Strafford, Vermont — June
                </p>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -left-8 top-1/3 bg-parchment border border-marigold/30 shadow-xl p-5 max-w-[160px]">
              <p className="font-display italic text-4xl text-maroon leading-none mb-1">
                400+
              </p>
              <p className="label text-ink/60">
                heirloom varieties in the library
              </p>
            </div>

            {/* Botanical draw element */}
            <div className="absolute -right-6 top-1/4">
              <BotanicalDraw
                variant="sprig-tall"
                className="w-12 h-32 text-vine/60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
