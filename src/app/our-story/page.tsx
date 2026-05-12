import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BotanicalDraw } from "@/components/illustrations/BotanicalDraw";
import { BotanicalSprig } from "@/components/illustrations/BotanicalSprig";
import { WordReveal } from "@/components/motion/WordReveal";
import { imageCoverTop, siteImages } from "@/lib/siteImages";

export const metadata: Metadata = {
  title: "Our Story",
  description: "How The Marigold Society began in a church basement in Burlington and grew into a Vermont institution for heirloom seeds and botanical craft.",
};

const founders = [
  {
    name: "Estelle Marchand",
    role: "Co-Founder & Seed Curator",
    bio: "Estelle studied botany at Middlebury College and spent three years apprenticing under the plantswomen Helen Muir before returning to Vermont to start a seed garden. She is responsible for the acquisition, cultivation, and documentation of every variety in the Marigold Society library. She writes in The Almanac under her own name and, occasionally, under the pseudonym E.M. Callow.",
    detail: "Tends 40 varieties of cut flower in the south garden, maintains correspondence with seed custodians on three continents, and makes an unacceptable amount of calendula salve each autumn.",
  },
  {
    name: "Oliver Marchand",
    role: "Co-Founder & Editor",
    bio: "Oliver trained as a furniture-maker at the North Bennet Street School in Boston before a series of events — a seed swap, a woman with eight hundred packets of seeds, a van — changed the direction of his life entirely. He is responsible for the physical production of The Almanac, the design of the seed packaging, and the farm buildings.",
    detail: "Grows the dry beans and grain crops, maintains the seed-drying barn, typeset the first four issues of The Almanac by hand, and still occasionally makes furniture.",
  },
];

const timeline = [
  { year: "2019", event: "Estelle begins documenting the seed library she has assembled over six years of swaps and correspondence." },
  { year: "2020", event: "First winter seed swap in a church basement in Burlington. Thirty-seven people attend. More than expected." },
  { year: "2021", event: "The Marigold Society is incorporated. The first Almanac is printed on a Risograph in Oliver's workshop. Issue one sells out in eleven days." },
  { year: "2022", event: "We move to the farm in Strafford. The seed garden is planted for the first time as a proper growing enterprise rather than a private obsession." },
  { year: "2023", event: "The Cultivator subscription tier is introduced. Membership reaches 800. We hire our first employee, Sam Bellows, who manages the seed library and is a better organizer than either of us." },
  { year: "2024", event: "The Greenhouse opens — our members' forum, which turns out to be where the most interesting conversations happen. The pressed-flower kit is introduced in response to many, many requests." },
  { year: "2025", event: "1,400 members. The Almanac reaches its ninth issue. We are, somehow, still surprised by how many people care about these things." },
];

export default function OurStoryPage() {
  return (
    <div className="pt-28">
      {/* Header */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionLabel className="mb-8">Our Story</SectionLabel>
            <WordReveal
              text="What began as a seed swap became a small institution."
              tag="h1"
              className="font-display italic text-display-lg text-maroon leading-none"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="font-body text-ink/70 text-xl leading-relaxed">
              Strafford, Vermont. The farm sits on forty acres of old dairy pasture, most of it still grass, with a seed garden, a cutting garden, and a barn that Oliver converted into a seed-drying and printing operation in 2022.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <hr className="section-rule" />
      </div>

      {/* Origin story */}
      <section className="py-24 lg:py-36 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Botanical illustration */}
          <div className="lg:col-span-3 flex justify-center">
            <BotanicalDraw variant="vine" className="w-16 h-80 text-vine" />
          </div>

          {/* Text */}
          <div className="lg:col-span-8 lg:col-start-4">
            <div className="space-y-8 font-body text-ink/80 text-xl leading-relaxed">
              <p>
                The church basement smelled of old hymnals and someone's good idea about coffee cake. It was January 2020, and Estelle had set up a folding table with perhaps sixty packets of seeds laid out in alphabetical order — a catalog she had been assembling, without any particular plan, for six years of seed swaps and correspondence with growers across the country and overseas.
              </p>
              <p>
                She had expected perhaps twenty people. Thirty-seven came.
              </p>
              <p>
                What she noticed, moving around the room, was not just enthusiasm for the seeds themselves — though there was that — but a kind of recognition. People picked up a packet and told a story. <em>My grandmother grew this in New Hampshire.</em> <em>I found this at a swap in Quebec in 1998 and I've been growing it ever since.</em> <em>I have no idea where I got this or what it is but it's the best tomato I've ever eaten and I need someone else to know about it.</em>
              </p>
              <p className="text-2xl font-display italic text-maroon">
                The Marigold Society began, in that moment, as a room full of people who understood that certain things are worth keeping.
              </p>
              <p>
                We have tried to build the rest of it — the seed library, the journal, the farm, the membership, the Greenhouse — around that understanding. The seeds are the center of gravity. Everything else orbits them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 bg-maroon text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel color="marigold" className="mb-16">The Founders</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-maroon border border-white/10 p-12">
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-full bg-marigold/20 flex items-center justify-center mb-6">
                    <span className="font-display italic text-2xl text-marigold">
                      {founder.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display italic text-3xl text-white mb-1">
                    {founder.name}
                  </h3>
                  <p className="label text-marigold">{founder.role}</p>
                </div>
                <p className="font-body text-white/75 text-lg leading-relaxed mb-6">
                  {founder.bio}
                </p>
                <p className="font-body italic text-white/50 text-base border-l-2 border-marigold/40 pl-4">
                  {founder.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-36 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel className="mb-16">A Brief History</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className={`border-l-2 ${i % 2 === 0 ? "border-marigold" : "border-maroon/40"} pl-8 pb-12`}
            >
              <p className="font-display italic text-4xl text-marigold mb-3">{item.year}</p>
              <p className="font-body text-ink/75 text-lg leading-relaxed">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The farm */}
      <section className="py-24 bg-maroon text-white relative overflow-hidden min-h-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden min-h-0 min-w-0">
          <Image
            src={siteImages.seedGarden}
            alt=""
            fill
            sizes="100vw"
            className={`${imageCoverTop} opacity-25`}
          />
          <div className="absolute inset-0 bg-maroon/85" aria-hidden />
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center z-[1] overflow-hidden">
          <BotanicalDraw
            variant="marigold"
            className="w-[min(90vw,28rem)] h-[min(90vw,28rem)] shrink-0 text-white max-w-full"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <SectionLabel color="white" className="mb-8">Come and See</SectionLabel>
          <h2 className="font-display italic text-display-md text-white leading-tight mb-8">
            The farm is open from May through October.
          </h2>
          <p className="font-body text-white/75 text-xl leading-relaxed mb-12">
            We welcome visitors during the growing season, by appointment or on our open days (announced in The Almanac and to members first). The seed garden is at its most extraordinary in late July, when the hollyhocks are eight feet tall and the marigolds have gone slightly mad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/visit"
              className="inline-block bg-parchment text-ink px-10 py-4 font-display italic text-xl hover:bg-marigold transition-colors duration-300"
            >
              Plan a visit
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-36 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {[
            {
              title: "On seeds",
              body: "We do not own the varieties in our library. We are stewards. Every seed we sell comes with an implicit request: grow it, save it, share it. The library exists only as long as people are willing to participate in its continuation.",
            },
            {
              title: "On the Almanac",
              body: "We make the Almanac on paper because paper is permanent. We write slowly and edit carefully because we believe the things worth printing are worth taking time over. We have never published a piece we don't believe in.",
            },
            {
              title: "On community",
              body: "The Marigold Society is a membership because it is, genuinely, a society — a group of people with shared interests and shared obligations to each other. We try to run it like one.",
            },
          ].map((value) => (
            <div key={value.title} className="border-t-2 border-marigold pt-8">
              <h3 className="font-display italic text-2xl text-maroon mb-4">{value.title}</h3>
              <p className="font-body text-ink/70 leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>

        {/* Bottom botanical */}
        <div className="mt-24 flex justify-center">
          <BotanicalSprig className="w-80 h-16 text-marigold/30" />
        </div>
      </section>
    </div>
  );
}
