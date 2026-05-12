import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BotanicalDraw } from "@/components/illustrations/BotanicalDraw";
import { BotanicalSprig } from "@/components/illustrations/BotanicalSprig";
import { imageCoverTop, siteImages } from "@/lib/siteImages";

export const metadata: Metadata = {
  title: "Visit",
  description: "The Marigold Society farm in Strafford, Vermont is open May through October. Come see the seed garden, the cutting garden, and the barn.",
};

const openDays2025 = [
  { date: "Saturday, 17 May", note: "Spring planting open day" },
  { date: "Saturday, 14 June", note: "The seed garden in early bloom" },
  { date: "Saturday, 19 July", note: "Peak season — hollyhocks and marigolds" },
  { date: "Saturday, 16 August", note: "Harvest begins — dried flower workshop" },
  { date: "Saturday, 20 September", note: "Autumn gathering — seed-saving demonstration" },
  { date: "Saturday, 18 October", note: "Closing day — the last harvest" },
];

export default function VisitPage() {
  return (
    <div className="pt-28">
      {/* Masthead */}
      <section className="py-20 lg:py-28 bg-maroon text-white relative overflow-hidden">
        <div className="absolute left-0 inset-y-0 w-1/4 opacity-5 flex items-center justify-start pl-8 pointer-events-none">
          <BotanicalDraw variant="vine" className="h-full w-16 text-marigold" />
        </div>
        <div className="absolute right-0 inset-y-0 w-1/4 opacity-5 flex items-center justify-end pr-8 pointer-events-none">
          <BotanicalDraw variant="vine" className="h-full w-16 text-marigold" style={{ transform: "scaleX(-1)" }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <SectionLabel color="marigold" className="mb-8">Strafford, Vermont</SectionLabel>
          <h1 className="font-display italic text-display-lg text-white leading-none mb-8">
            Come in season.
          </h1>
          <p className="font-body text-white/75 text-xl leading-relaxed">
            The farm sits on forty acres of old pasture in the hills outside Strafford. We are open to visitors during the growing season — on scheduled open days and by appointment for members.
          </p>
        </div>
      </section>

      {/* Getting here */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-0">
          <div className="min-h-0 min-w-0">
            <SectionLabel className="mb-8">The Farm</SectionLabel>
            <h2 className="font-display italic text-3xl text-maroon mb-6">18 Old Mill Road, Strafford</h2>

            <div className="space-y-6 font-body text-ink/75 text-lg leading-relaxed">
              <p>
                We are 45 minutes from both Burlington and Hanover. The farm is at the end of a long dirt road — worth it, we are told. There is ample parking in the meadow by the barn, and the seed garden is immediately visible from the drive.
              </p>
              <p>
                The barn, where the seed-drying happens and where we print the Almanac on our Risograph, is open on all scheduled open days. Oliver is usually there and happy to show you how it works.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {[
                { label: "Address", value: "18 Old Mill Road, Strafford, VT 05072" },
                { label: "From Burlington", value: "I-89 South to Exit 2, then VT-14 South. 42 miles, approximately 50 minutes." },
                { label: "From Hanover NH", value: "I-91 North to Exit 14, then VT-113 West. 28 miles, approximately 40 minutes." },
                { label: "By train", value: "Amtrak to White River Junction. Arrange transport from there — we can suggest options." },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="label text-marigold mb-1">{label}</p>
                  <p className="font-body text-ink/70">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Farm — seed garden */}
          <div className="min-h-0 min-w-0">
            <div className="aspect-square max-h-[min(92vw,32rem)] mx-auto bg-parchment-dark border border-marigold/20 relative overflow-hidden min-h-0">
              <Image
                src={siteImages.seedGarden}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={imageCoverTop}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/55 via-transparent to-transparent pointer-events-none" aria-hidden />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="font-display italic text-xl text-white drop-shadow-sm">Strafford, Vermont</p>
                <p className="label text-white/70 mt-1">44.03°N 72.36°W</p>
              </div>
            </div>
            <p className="label text-2xs text-ink/30 text-center mt-2">
              Directions provided above · GPS coordinates 44.0287, -72.3641
            </p>
          </div>
        </div>
      </section>

      {/* Open days */}
      <section className="py-24 bg-parchment-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-4">Open Days 2025</SectionLabel>
          <p className="font-body text-ink/60 text-lg mb-12 max-w-lg">
            On open days, the farm is accessible 10am – 4pm, no reservation required. Members may also visit by appointment on any day the farm is operating.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {openDays2025.map(({ date, note }) => (
              <div key={date} className="bg-parchment border border-marigold/15 p-8">
                <p className="font-display italic text-2xl text-maroon mb-2">{date}</p>
                <p className="font-body text-ink/60 italic">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-maroon/10 border border-maroon/20 p-8">
            <p className="font-display italic text-maroon text-xl mb-2">
              Member appointments
            </p>
            <p className="font-body text-ink/70 leading-relaxed">
              Cultivator and Patron members may visit on any working day by appointment. Write to us at hello@marigoldsociety.com at least one week in advance. Patron members are welcome to stay for lunch.
            </p>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel className="mb-12">What you'll find</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5">
          {[
            {
              title: "The Seed Garden",
              desc: "Four acres of heirloom varieties at various stages of growth. Labeled with variety name, provenance, and year of introduction. The hollyhocks reach their peak in late July — they are remarkable.",
            },
            {
              title: "The Cutting Garden",
              desc: "A half-acre garden grown specifically for the pressed-flower kits and dried arrangements. Staffed on open days by our flower manager, Isabelle Renaud, who will discuss technique with anyone who asks.",
            },
            {
              title: "The Seed Barn",
              desc: "The original dairy barn, converted to seed-drying and printing. The Risograph press where the Almanac is printed is in here, and we run the press on most open days.",
            },
            {
              title: "The Farm Stand",
              desc: "A small stand with seeds, dried arrangements, and the current issue of the Almanac. Credit cards accepted. We often have produce from the kitchen garden as well.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-marigold/20 p-10">
              <h3 className="font-display italic text-2xl text-maroon mb-4">{title}</h3>
              <p className="font-body text-ink/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops */}
      <section id="workshops" className="py-24 bg-maroon text-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel color="marigold" className="mb-12">Workshops</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5">
            {[
              {
                title: "Seed Saving for Beginners",
                when: "Third Saturday of each month, June – September",
                desc: "A two-hour workshop covering the fundamentals of seed selection, harvest, processing, and storage. Led by Estelle.",
                price: "$65",
              },
              {
                title: "The Art of Pressing",
                when: "Select Saturdays, July – October",
                desc: "A half-day workshop on the practice of flower pressing — technique, plant selection, drying, mounting, and archiving. Led by Isabelle Renaud.",
                price: "$85",
                image: siteImages.flowerPress,
              },
              {
                title: "Reading the Garden",
                when: "By arrangement, May – August",
                desc: "A private tour of the farm with Oliver or Estelle, focused on garden history and the stories behind the varieties. Groups up to six.",
                price: "$120 / person",
              },
            ].map(({ title, when, desc, price, image }) => (
              <div key={title} className="border border-white/10 overflow-hidden flex flex-col">
                {image && (
                  <div className="relative aspect-[16/9] w-full shrink-0 border-b border-white/10">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className={imageCoverTop}
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                <p className="label text-marigold text-2xs mb-4">{when}</p>
                <h3 className="font-display italic text-2xl text-white mb-3">{title}</h3>
                <p className="font-body text-white/65 leading-relaxed mb-6">{desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-display italic text-xl text-marigold">{price}</span>
                  <Link
                    href="#workshops"
                    className="label text-2xs text-white/40 hover:text-marigold transition-colors"
                  >
                    Enquire →
                  </Link>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal note */}
      <section className="py-20 bg-parchment-light">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <BotanicalSprig className="w-64 h-12 text-marigold/40" />
          </div>
          <p className="font-display italic text-2xl text-maroon/70 leading-relaxed">
            The farm smells different in every month it is open. May is earth and cold; June is grass and the first marigolds; July and August are the full abundance; September is dry seed heads and the beginning of wood smoke. October is the best of all.
          </p>
          <p className="label text-ink/40 mt-6">— Estelle Marchand, Almanac No. 4</p>
        </div>
      </section>
    </div>
  );
}
