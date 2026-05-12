import Link from "next/link";
import { BotanicalSprig } from "@/components/illustrations/BotanicalSprig";

const footerLinks = {
  "The Society": [
    { href: "/our-story", label: "Our Story" },
    { href: "/visit", label: "Visit the Farm" },
    { href: "/greenhouse", label: "The Greenhouse" },
    { href: "/membership", label: "Membership" },
  ],
  "Seed Library": [
    { href: "/seed-library", label: "Browse All Seeds" },
    { href: "/seed-library#flower", label: "Flowers" },
    { href: "/seed-library#vegetable", label: "Vegetables" },
    { href: "/seed-library#herb", label: "Herbs" },
    { href: "/seed-library#grain", label: "Grains" },
  ],
  "The Almanac": [
    { href: "/almanac", label: "Current Issue" },
    { href: "/almanac#archive", label: "Archive" },
    { href: "/almanac/founders-letter-beginnings", label: "First Issue" },
  ],
  "Shop": [
    { href: "/shop", label: "Shop home" },
    { href: "/shop#things-we-make", label: "Things we make" },
    { href: "/shop#shop-flower", label: "Seeds — Flowers" },
    { href: "/cart", label: "Your Cart" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-maroon text-white relative overflow-hidden">
      <div className="border-t border-white/10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/1.svg"
                alt=""
                width={120}
                height={120}
                className="h-14 w-auto shrink-0 brightness-0 invert opacity-95"
              />
              <span className="font-display italic text-2xl text-white leading-tight">
                The Marigold Society
              </span>
            </div>
            <p className="font-body text-white/70 leading-relaxed max-w-sm mb-8">
              A Vermont seed library, pressed-flower atelier, and quarterly journal for those who believe the old ways are worth preserving.
            </p>
            <address className="not-italic">
              <p className="label text-marigold mb-2">Find Us</p>
              <p className="text-white/70 text-base">
                18 Old Mill Road<br />
                Strafford, Vermont 05072
              </p>
            </address>
            <div className="mt-6">
              <p className="label text-marigold mb-2">Write to Us</p>
              <p className="text-white/70 text-base">hello@marigoldsociety.com</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="label text-marigold mb-5">{section}</p>
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white/60 hover:text-white transition-colors duration-300 text-base font-body link-underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Almanac subscription CTA */}
        <div className="border border-white/20 p-8 mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="label text-marigold mb-2">The Almanac</p>
            <p className="font-display italic text-2xl text-white">
              Receive the quarterly journal
            </p>
          </div>
          <Link
            href="/membership"
            className="shrink-0 inline-flex items-center gap-2 bg-marigold text-ink px-8 py-3 label hover:bg-white hover:text-maroon transition-colors duration-300"
          >
            Join the Society
          </Link>
        </div>

        {/* Botanical decoration */}
        <div className="flex justify-center mb-12 opacity-20">
          <BotanicalSprig className="w-64 h-20 text-white" />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="label text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} The Marigold Society. Strafford, Vermont.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="label text-white/40 hover:text-white/70 transition-colors text-2xs">
              Privacy
            </Link>
            <Link href="/shipping" className="label text-white/40 hover:text-white/70 transition-colors text-2xs">
              Shipping
            </Link>
            <Link href="/terms" className="label text-white/40 hover:text-white/70 transition-colors text-2xs">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
