import { siteImages } from "@/lib/siteImages";

export interface Article {
  slug: string;
  /** Optional cover for listing cards / teasers */
  coverImage?: string;
  title: string;
  subtitle: string;
  author: string;
  authorBio: string;
  issue: string;
  issueNumber: number;
  date: string;
  category: string;
  readTime: number;
  featured: boolean;
  excerpt: string;
  content: Section[];
  tags: string[];
}

interface Section {
  type: "paragraph" | "pullquote" | "heading" | "divider";
  text: string;
}

export const articles: Article[] = [
  {
    slug: "on-saving-seeds",
    coverImage: siteImages.quietArtOfKeeping,
    title: "On the Quiet Art of Keeping",
    subtitle: "Why saving seeds is not merely thrift, but a form of remembering",
    author: "Estelle Marchand",
    authorBio: "Estelle Marchand is co-founder of The Marigold Society and tends the seed garden with her husband Oliver. She studied botany at Middlebury and apprenticed under the late plantswomen Helen Muir.",
    issue: "The Almanac No. 7 — Winter",
    issueNumber: 7,
    date: "December 2024",
    category: "Craft",
    readTime: 8,
    featured: true,
    excerpt: "There is a particular kind of silence that descends over a garden in late October, when the first hard frost has silvered everything and the long labour of growing is finished. It is in this silence that I do my most important work.",
    content: [
      { type: "paragraph", text: "There is a particular kind of silence that descends over a garden in late October, when the first hard frost has silvered everything and the long labour of growing is finished. It is in this silence that I do my most important work: moving through the cold rows with a basket and a pair of scissors, collecting the papery hulls and swollen pods that are the garden's last gift before it sleeps." },
      { type: "paragraph", text: "Seed-saving is sometimes described as an act of resistance — against industrial agriculture, against the homogenization of the food supply, against the creeping erasure of variety. These things are true. But when I am actually doing it, kneeling in the frost with my fingers gone pink and my breath clouding in the morning air, it feels less like resistance and more like correspondence." },
      { type: "pullquote", text: "Each seed is a letter written by every gardener who ever grew that plant — a message carried across generations in a sealed envelope no larger than a thumbnail." },
      { type: "paragraph", text: "The hollyhock seeds I am collecting this morning came to us from a woman named Colette Picard, who brought them from her mother's garden in Lyon when she emigrated to Vermont in 1971. Colette grew them for thirty years on a farm in Strafford before she passed them to us at a seed swap in a church basement in Burlington, tucked inside a folded square of brown paper with her handwriting on it: 'Alcea, noir, très ancien.' Very old, very black. She had no more information than that. Neither, perhaps, did her mother." },
      { type: "paragraph", text: "This is the nature of heirloom seeds: their histories are almost always partial. The documentation is spotty, the provenance uncertain, the stories mixed with legend. What we know for certain is that someone, at every point in the chain, decided these seeds were worth keeping. That judgment is itself a kind of inheritance." },
      { type: "heading", text: "The Practice" },
      { type: "paragraph", text: "The mechanics are simpler than most people expect. You allow some plants to go fully to seed rather than deadheading them — a counter-intuitive act for a gardener trained to keep things tidy. You let the pods dry on the plant as long as weather allows, then harvest just before the first serious rains. Clean, dry, label carefully. Store in a cool, dark, dry place in paper envelopes rather than plastic, which traps moisture." },
      { type: "paragraph", text: "The harder discipline is selection. When you are saving seed, every choice about which plants to let bolt becomes a breeding decision. Do you select the earliest to ripen, or the latest? The tallest plant, or the most compact? The deepest color, or the most consistent? Over generations, these choices accumulate. A variety is nothing more than the sum of thousands of such choices made by thousands of pairs of hands over centuries of seasons." },
      { type: "pullquote", text: "A variety is nothing more than the sum of thousands of choices made by thousands of pairs of hands over centuries of seasons." },
      { type: "paragraph", text: "This is why seed-saving is, at its heart, an act of attention. You must know your plants well enough to recognize excellence when you see it. You must be willing to let imperfect specimens go to compost rather than perpetuating their qualities. And you must be patient enough to understand that the effects of your selections won't be visible for years." },
      { type: "heading", text: "What We Owe" },
      { type: "paragraph", text: "I am sometimes asked whether it bothers me that seeds can be patented, that varieties can be owned. It does bother me, though perhaps not in the way people expect. What bothers me most is not the legal question but the philosophical one: the presumption that a living thing shaped by ten thousand years of human and natural collaboration can belong to anyone in particular." },
      { type: "paragraph", text: "What we owe, I think, is exactly what Colette Picard did: we receive the seeds with gratitude, we tend them faithfully, we pass them along. We add our small chapter to a story that began long before us and will continue long after. This seems to me the only honorable relationship with inheritance of any kind." },
    ],
    tags: ["seed saving", "craft", "philosophy", "winter"],
  },
  {
    slug: "the-pressed-flower-tradition",
    title: "The Memory of Flowers",
    subtitle: "A short history of pressing, and why it has never gone out of fashion",
    author: "Thomas Alderidge",
    authorBio: "Thomas Alderidge is The Almanac's contributing editor for material culture. He lives in Woodstock, Vermont, where he maintains a Victorian-era herbarium begun by his great-aunt.",
    issue: "The Almanac No. 5 — Summer",
    issueNumber: 5,
    date: "June 2024",
    category: "History",
    readTime: 6,
    featured: true,
    excerpt: "The Victorians pressed flowers with a fervor that we might now call obsessive. In the language of flowers, a single sprig of lavender tucked inside a letter could say what propriety forbade speaking aloud.",
    content: [
      { type: "paragraph", text: "The Victorians pressed flowers with a fervor that we might now call obsessive. In the language of flowers — floriography, to give it its proper name — a single sprig of lavender tucked inside a letter could say what propriety forbade speaking aloud. Pansy for thoughts. Rosemary for remembrance. Red tulip for a declaration of love so bold it required the cover of botany to survive." },
      { type: "paragraph", text: "But flower-pressing long predates the Victorians. Herbalists pressed specimens for identification and documentation from the earliest days of botanical study — Luca Ghini, who taught at Bologna in the 1530s, is generally credited with inventing the practice. His students carried it across Europe, and within a generation, the herbarium had become the essential tool of the natural philosopher." },
      { type: "pullquote", text: "Every pressed flower is a kind of stopped clock — a moment of bloom preserved against the certainty of decay." },
      { type: "paragraph", text: "What is it that makes the pressed flower such a persistent human impulse? I have thought about this for years, standing over my great-aunt's herbarium in Woodstock, turning the tissue-thin pages with their crumbling specimens still fragrant after eighty years. I think it is the same impulse that makes us photograph things we love: the desire to arrest time, to say 'this existed, and I was here with it.'" },
      { type: "heading", text: "Technique and Time" },
      { type: "paragraph", text: "The technique itself has changed little. You need a press (two boards, some bolts, absorbent paper), or in a pinch, a heavy book with sheets of blotting paper. Flowers should be harvested at mid-morning after dew has dried but before afternoon heat sets in. They should be slightly less than fully open — pressing captures a moment, and a bloom just before its peak preserves a quality of anticipation." },
      { type: "paragraph", text: "The waiting is the hardest part. Three weeks minimum for most specimens, longer for succulent flowers or those with a high moisture content. The temptation to check is almost unbearable. Resist it: any disturbance during the drying process risks smearing colors or misaligning petals, and the patience will be repaid by specimens that hold their color and form for decades." },
      { type: "paragraph", text: "Our pressed-flower kits include the papers and pressing boards, but also something equally important: an archival journal in which to place the pressed specimens alongside notes. Date, location, plant name if known, any observations about the growing conditions or the particular quality of light that day. This context is what elevates a pressed flower from a curiosity to a document — a record not only of the flower but of the life it was embedded in." },
    ],
    tags: ["pressed flowers", "history", "craft", "victoriana"],
  },
  {
    slug: "growing-in-hard-places",
    title: "The Garden at the Edge of Things",
    subtitle: "What a Vermont winter teaches you about patience, failure, and next year",
    author: "Marguerite Voss",
    authorBio: "Marguerite Voss farms with her partner Declan on 40 acres outside Craftsbury, Vermont. She writes about growing at altitude and in difficult soil.",
    issue: "The Almanac No. 8 — Spring",
    issueNumber: 8,
    date: "March 2025",
    category: "Growing",
    readTime: 7,
    featured: true,
    excerpt: "We are at 1,600 feet in the Northeast Kingdom, which means our last frost date is a suggestion rather than a fact, and our first fall frost sometimes arrives before the summer has properly said goodbye.",
    content: [
      { type: "paragraph", text: "We are at 1,600 feet in the Northeast Kingdom, which means our last frost date is a suggestion rather than a fact, and our first fall frost sometimes arrives before the summer has properly said goodbye. The catalogs give growing zones as though they were certainties. Up here, they are starting points for negotiation." },
      { type: "paragraph", text: "What I have learned, in twelve years of farming this particular piece of ground, is that difficulty has its gifts. The short season concentrates everything. Flavors intensify when plants rush to maturity. Colors deepen in the cool nights of August. The tomatoes I get in September — when I get them at all — are better than any I have eaten in warmer climates, because they have had to work for their ripeness." },
      { type: "pullquote", text: "Difficulty has its gifts. The short season concentrates everything — flavors, colors, the particular intensity of things that know their time is limited." },
      { type: "paragraph", text: "The failures are instructive too, though I won't pretend they are welcome. Three winters ago, a polar vortex arrived in January without the decency of a snow cover, and I lost a hundred feet of garlic that I had planted in October. The ground froze to eighteen inches without insulation, and the cloves simply gave up. I grieved that garlic. Then I ordered more, from a new supplier in Quebec who grows strains selected for exactly this kind of brutal cold, and the following year I had the best crop of my life." },
      { type: "heading", text: "The Education of Failure" },
      { type: "paragraph", text: "The catalogs and the growing guides present gardening as a matter of following instructions correctly. Those of us who garden in hard places know better. The instructions are a hypothesis. The garden tests it every single year, and the results are always surprising." },
      { type: "paragraph", text: "What the short-season garden demands above all is variety. Not diversity for its own sake, but the practical wisdom of spreading risk. I grow three or four varieties of every important crop, selected for different maturities, different cold tolerances, different resistances. In any given year, some will fail. Some will succeed beyond expectation. The portfolio approach is how you eat." },
      { type: "paragraph", text: "This is why heirloom varieties matter to me not as a romantic attachment to the past but as a pragmatic tool. Varieties that have been selected for generations in difficult climates have a kind of encoded knowledge that no recently developed commercial variety can match. They have already survived many versions of the worst that weather can do. They know something." },
    ],
    tags: ["growing", "vermont", "difficult climate", "failure", "resilience"],
  },
  {
    slug: "the-language-of-dried-things",
    title: "After the Bloom",
    subtitle: "On the strange beauty of what remains when color has gone",
    author: "Estelle Marchand",
    authorBio: "Estelle Marchand is co-founder of The Marigold Society and tends the seed garden with her husband Oliver.",
    issue: "The Almanac No. 6 — Autumn",
    issueNumber: 6,
    date: "September 2024",
    category: "Craft",
    readTime: 5,
    featured: false,
    excerpt: "I have always preferred October's garden to July's — not despite the fact that it is dying, but because of it.",
    content: [
      { type: "paragraph", text: "I have always preferred October's garden to July's — not despite the fact that it is dying, but because of it. July is extravagant, overwhelming, almost aggressive in its abundance. October is precise. Everything that remains has survived selection, and there is a quality of intention about it." },
      { type: "paragraph", text: "The seed heads of the echinacea stand like small dark maces against the morning sky. The papery lanterns of the physalis glow amber in the low autumn light, their skins translucent as old maps. The feverfew has dried to the color of old linen. The honesty — Lunaria, the money plant — has shed its outer skins and stands trembling in the first cold wind, its seed-cases silver and round as coins, as the name promises." },
      { type: "pullquote", text: "Everything that remains in the October garden has survived selection, and there is a quality of intention about it." },
      { type: "paragraph", text: "I gather these things by the armful and bring them inside, where they spend winter in tall vessels of cloudy glass on the deep windowsills of the farmhouse. They are not a substitute for living flowers. They are something different: a record of the growing season in its most reduced form, abstracted down to structure and shadow." },
    ],
    tags: ["dried flowers", "autumn", "craft", "beauty"],
  },
  {
    slug: "founders-letter-beginnings",
    title: "A Letter From the Beginning",
    subtitle: "On why we started The Marigold Society, and what we hoped it might become",
    author: "Oliver Marchand",
    authorBio: "Oliver Marchand is co-founder of The Marigold Society. He trained as a furniture-maker before turning to seed-saving and small-scale farming.",
    issue: "The Almanac No. 1 — Spring",
    issueNumber: 1,
    date: "March 2021",
    category: "From the Editors",
    readTime: 4,
    featured: false,
    excerpt: "We started this in our kitchen, with a wood stove going and about eight hundred packets of seeds on the table, none of them labeled consistently.",
    content: [
      { type: "paragraph", text: "We started this in our kitchen, with a wood stove going and about eight hundred packets of seeds on the table, none of them labeled consistently. Estelle had the idea. I had the skepticism and, after she talked me into it, the van. We drove to six seed swaps that winter, from Burlington down to Brattleboro, listening to people talk about what they were growing and why." },
      { type: "paragraph", text: "What we heard, over and over, was a version of the same story: I inherited these seeds, or I found these at a swap fifteen years ago, or my grandmother grew these. What we also heard was the anxiety underneath: I don't know how much longer I can keep them going. I'm getting old. I don't have anyone to pass them to." },
      { type: "pullquote", text: "We are not a seed bank. We are something more like a salon — a gathering place for the people who care about these things." },
      { type: "paragraph", text: "The Marigold Society is our answer to that anxiety. We are not a seed bank — we are too small and too interested in people to be a proper institution. We are something more like a salon: a gathering place for the people who care about these things, where the seeds can move and the stories can be told and the knowledge can pass from one pair of hands to the next." },
      { type: "paragraph", text: "The Almanac is part of that. We want a record of what we're learning and growing and thinking about — something printed on paper, that can sit on a shelf and be passed along. Something that will still exist in thirty years." },
    ],
    tags: ["founders", "origins", "almanac", "community"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getArticlesByIssue(issueNumber: number): Article[] {
  return articles.filter((a) => a.issueNumber === issueNumber);
}
