import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { subscriptionTiers, members } from "@/lib/data/members";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BotanicalDraw } from "@/components/illustrations/BotanicalDraw";
import { BotanicalSprig } from "@/components/illustrations/BotanicalSprig";
import { formatPrice } from "@/lib/utils";
import { imageCoverTop, siteImages } from "@/lib/siteImages";

export const metadata: Metadata = {
  title: "Membership",
  description: "Three tiers of membership in The Marigold Society. Seeds, The Almanac, the Greenhouse, and the company of people who care about these things.",
};

const faqs = [
  {
    q: "When does my box ship?",
    a: "Boxes ship in the first week of March, June, September, and December — aligned with the seasons. Your first box ships in the next scheduled quarter after you join.",
  },
  {
    q: "Can I choose my seeds?",
    a: "Correspondent members receive our standard seasonal selection. Cultivator members receive a slightly different selection each quarter, weighted toward more unusual and exclusive varieties. Neither tier allows individual selection — the curation is part of the experience.",
  },
  {
    q: "What if I don't have a garden?",
    a: "Many members begin with the Correspondent membership specifically to start a garden. The Almanac includes growing guidance for every seed in your box. We also have balcony and container growing guides in the Greenhouse.",
  },
  {
    q: "How do I access the Greenhouse?",
    a: "You'll receive an invitation email with your first box. The Greenhouse is a private member forum — not a social network. It's a place for conversations about growing, pressing, and the matters covered in The Almanac.",
  },
  {
    q: "Can I pause or cancel?",
    a: "Yes. You can pause for one quarter (boxes skip but membership remains active) or cancel at any time. We don't believe in making it difficult to leave.",
  },
];

export default function MembershipPage() {
  return (
    <div className="pt-28">
      {/* Header */}
      <section className="py-20 lg:py-28 bg-maroon text-white relative overflow-hidden min-h-0">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-end pr-12 overflow-hidden">
          <BotanicalDraw
            variant="marigold"
            className="w-[min(85vw,24rem)] h-[min(85vw,24rem)] shrink-0 text-white max-w-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel color="white" className="mb-8">Membership</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <h1 className="font-display italic text-display-lg text-white leading-none mb-8">
                Join the Society.
              </h1>
              <p className="font-body text-white/75 text-xl leading-relaxed">
                A quarterly subscription that connects you to the seed library, the printed Almanac, and a community of people who share your particular preoccupations.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: "📮", text: "The Almanac, printed and posted quarterly" },
                { icon: "🌱", text: "Seed packets from the library each season" },
                { icon: "🌿", text: "Access to the Greenhouse — our members' forum" },
                { icon: "✦", text: "Discounts across the seed library and shop" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <span className="text-2xl" role="img">{icon}</span>
                  <p className="font-body text-white/80 text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tier cards */}
      <section className="py-24 lg:py-36 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel className="mb-16">Choose your membership</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5">
          {subscriptionTiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>

        <p className="label text-ink/40 text-center mt-8">
          All memberships renew automatically. Cancel or pause at any time.
        </p>
      </section>

      {/* What's inside the box */}
      <section className="py-24 bg-parchment-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-6">What arrives at your door</SectionLabel>
          <h2 className="font-display italic text-display-md text-maroon leading-tight mb-16 max-w-lg">
            A considered object, four times a year.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-0">
            {/* Box illustration */}
            <div className="bg-parchment border border-marigold/25 aspect-[4/3] max-h-[min(85vh,36rem)] flex items-center justify-center relative overflow-hidden min-h-0 min-w-0 mx-auto w-full">
              <Image
                src={siteImages.seedGarden}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={imageCoverTop}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-parchment/95 via-parchment/80 to-parchment/40" aria-hidden />
              <div className="relative z-10 text-center p-8">
                <p className="font-display italic text-2xl text-ink">The Cultivator Box</p>
                <p className="label text-ink/40 mt-2">Summer 2025</p>
              </div>
              <div className="absolute bottom-4 right-4 z-10 label text-2xs text-ink/40">
                Seasonal contents vary
              </div>
            </div>

            {/* Contents list */}
            <div>
              <p className="label text-ink/50 mb-8">
                A Cultivator box contains, typically:
              </p>
              <div className="space-y-4">
                {[
                  { item: "The Almanac", desc: "84 pages, current issue, printed on 70lb uncoated stock" },
                  { item: "Six seed packets", desc: "Including at least two Cultivator-exclusive varieties not in the public library" },
                  { item: "The pressed-flower kit", desc: "Seasonal addition — materials for pressing and mounting" },
                  { item: "A grower's card", desc: "Notes on each seed variety from Estelle, specific to the season" },
                  { item: "The Greenhouse invitation", desc: "If you're a new member — your private member forum access" },
                ].map(({ item, desc }) => (
                  <div key={item} className="flex items-start gap-4 py-4 border-b border-marigold/15">
                    <span className="text-marigold mt-1">✦</span>
                    <div>
                      <p className="font-display italic text-ink mb-0.5">{item}</p>
                      <p className="font-body text-ink/60 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member voices */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel className="mb-16">From the membership</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {members.slice(0, 3).map((member) => (
            <div key={member.id} className="border border-marigold/20 p-8">
              <p className="font-body italic text-ink/80 text-lg leading-relaxed mb-6">
                &ldquo;{member.quote}&rdquo;
              </p>
              <div>
                <p className="font-display italic text-ink">{member.name}</p>
                <p className="label text-2xs text-ink/40 mt-1">
                  {member.location} · Member since {member.since}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-parchment-dark">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel className="mb-12">Common questions</SectionLabel>

          <div className="space-y-1">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border-b border-marigold/20">
                <summary className="flex items-center justify-between py-5 cursor-pointer list-none font-display italic text-xl text-ink hover:text-maroon transition-colors">
                  {q}
                  <span className="text-marigold transition-transform group-open:rotate-45 duration-300 ml-4 shrink-0">
                    +
                  </span>
                </summary>
                <p className="pb-6 font-body text-ink/70 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-maroon text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-10 opacity-20">
            <BotanicalSprig className="w-64 h-16 text-white" />
          </div>
          <h2 className="font-display italic text-display-md text-white leading-tight mb-6">
            Start with the Correspondent.
          </h2>
          <p className="font-body text-white/70 text-xl leading-relaxed mb-10">
            Three seed packets, The Almanac, the Greenhouse. Everything you need to begin. You can upgrade at any time.
          </p>
          <Link
            href="#correspondent"
            className="inline-block bg-marigold text-ink px-10 py-4 font-display italic text-xl hover:bg-parchment transition-colors"
          >
            Join as Correspondent — {formatPrice(45)}/quarter
          </Link>
        </div>
      </section>
    </div>
  );
}

function TierCard({ tier }: { tier: (typeof subscriptionTiers)[0] }) {
  return (
    <div
      id={tier.id}
      className={`p-10 flex flex-col ${
        tier.featured
          ? "bg-maroon text-white"
          : "bg-parchment border border-marigold/20 text-ink"
      }`}
    >
      {tier.featured && (
        <span className="label text-2xs bg-marigold text-ink px-3 py-1 self-start mb-6">
          Most Popular
        </span>
      )}

      <p className={`label mb-3 ${tier.featured ? "text-white/60" : "text-ink/50"}`}>
        {tier.billing === "annual" ? "Annual" : "Quarterly"}
      </p>
      <h3 className={`font-display italic text-4xl mb-2 ${tier.featured ? "text-white" : "text-ink"}`}>
        {tier.name}
      </h3>
      <p className={`font-body mb-6 ${tier.featured ? "text-white/70" : "text-ink/60"}`}>
        {tier.description}
      </p>

      <div className="mb-8">
        <span className={`font-display italic text-5xl ${tier.featured ? "text-white" : "text-maroon"}`}>
          {formatPrice(tier.price)}
        </span>
        <span className={`label ml-2 ${tier.featured ? "text-white/50" : "text-ink/40"}`}>
          / {tier.billing === "annual" ? "year" : "quarter"}
        </span>
      </div>

      <ul className="space-y-3 mb-10 flex-1">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className={`mt-1 shrink-0 ${tier.featured ? "text-marigold" : "text-marigold"}`}>✦</span>
            <span className={`font-body text-sm leading-relaxed ${tier.featured ? "text-white/80" : "text-ink/70"}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 font-display italic text-xl transition-colors duration-300 ${
          tier.featured
            ? "bg-marigold text-ink hover:bg-parchment"
            : "bg-maroon text-white hover:bg-maroon-deep"
        }`}
      >
        Join as {tier.name}
      </button>
    </div>
  );
}
