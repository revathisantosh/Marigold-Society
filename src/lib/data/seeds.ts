import { siteImages } from "@/lib/siteImages";

export interface Seed {
  slug: string;
  /** Optional photo in `/public/images` for cards and detail pages. */
  image?: string;
  name: string;
  latinName: string;
  family: string;
  origin: string;
  year: string;
  description: string;
  story: string;
  growingNotes: string;
  harvestWindow: string;
  daysToMaturity: number;
  difficulty: "Gentle" | "Moderate" | "Patient";
  category: "Flower" | "Vegetable" | "Herb" | "Grain";
  featured: boolean;
  price: number;
  accentColor: string;
  tags: string[];
}

export const seeds: Seed[] = [
  {
    slug: "lady-margaret-marigold",
    image: siteImages.ladyMargaretMarigold,
    name: "Lady Margaret Marigold",
    latinName: "Tagetes erecta 'Lady Margaret'",
    family: "Asteraceae",
    origin: "Oaxaca, Mexico — collected 1887",
    year: "Pre-1887",
    description: "Deep amber-saffron blooms of startling complexity, each petal edged in a darker copper that deepens through the season.",
    story: "Found growing wild along a stone wall on a hillside farm outside Oaxaca by the botanist Harriet Callow, who pressed a specimen and sent seeds to her sister in Bath. That sister's granddaughter brought them to Vermont in 1962. We have grown Lady Margaret every year since our founding, and she has never once disappointed.",
    growingNotes: "Sow indoors 6–8 weeks before last frost. Pinch at 6 inches to encourage branching. Extraordinarily drought-tolerant once established. Dead-head regularly for continuous bloom from June through hard frost.",
    harvestWindow: "July – October",
    daysToMaturity: 75,
    difficulty: "Gentle",
    category: "Flower",
    featured: true,
    price: 6.50,
    accentColor: "#C8893A",
    tags: ["heirloom", "cut flower", "pollinator", "fragrant"],
  },
  {
    slug: "vermont-scarlet-runner",
    image: siteImages.vermontScarletRunner,
    name: "Vermont Scarlet Runner",
    latinName: "Phaseolus coccineus 'Vermont Scarlet'",
    family: "Fabaceae",
    origin: "Montpelier, Vermont — selected 1934",
    year: "1934",
    description: "Vivid vermillion flowers cascade down sturdy vines all summer, followed by dramatic purple-black pods and richly flavored beans.",
    story: "Selected over three generations by the Mercier family of Montpelier, who grew them up the south wall of their dairy barn. When the farm was sold in 1998, eldest daughter Colette carried the seeds in a glass jar to her apartment, keeping the line alive until she met our co-founder Estelle at a seed swap in Burlington six years later.",
    growingNotes: "Direct sow after all frost danger has passed. Provide sturdy support — vines reach 10–12 feet. Excellent nitrogen fixer. Flowers are edible and make a striking garnish. Shell beans can be dried for winter storage.",
    harvestWindow: "August – September",
    daysToMaturity: 70,
    difficulty: "Gentle",
    category: "Vegetable",
    featured: true,
    price: 5.00,
    accentColor: "#6B2426",
    tags: ["heirloom", "climbing", "edible flower", "nitrogen-fixer"],
  },
  {
    slug: "black-hollyhock-antwerp",
    image: siteImages.antwerpBlackHollyhock,
    name: "Antwerp Black Hollyhock",
    latinName: "Alcea rosea 'Nigra'",
    family: "Malvaceae",
    origin: "Ghent, Belgium — documented 1629",
    year: "Pre-1629",
    description: "Flowers of such deep burgundy they appear nearly black in evening light, rising on stately 8-foot spires above wide, velvety leaves.",
    story: "This variety appears in Flemish still-life paintings of the 1630s — look for the dark spires rising in the background of van Huysum's lesser-known garden studies. Our stock traces to a gardener at Sissinghurst who corresponded with Vita Sackville-West, who wrote of them in a 1948 letter as 'the most aristocratic thing in the whole border.'",
    growingNotes: "Biennial — sow in summer for blooms the following year, or start indoors very early for same-season flowers. Prefers lean, well-drained soil and full sun. Self-seeds prolifically once established.",
    harvestWindow: "June – August (second year)",
    daysToMaturity: 365,
    difficulty: "Patient",
    category: "Flower",
    featured: true,
    price: 7.00,
    accentColor: "#6B2426",
    tags: ["heirloom", "biennial", "cottage garden", "architectural"],
  },
  {
    slug: "cornichon-de-paris",
    image: siteImages.cornichonDeParis,
    name: "Cornichon de Paris",
    latinName: "Cucumis sativus 'Cornichon de Paris'",
    family: "Cucurbitaceae",
    origin: "Île-de-France — documented 1775",
    year: "Pre-1775",
    description: "Crisp, thin-skinned cucumbers, harvest them at two inches for traditional French cornichons or let them run to four for slicing.",
    story: "These cucumbers were grown in the kitchen gardens of Versailles during the reign of Louis XVI and documented in the palace's meticulous garden records. A cutting of the original strain traveled to Quebec with Ursuline nuns in 1812, where it was maintained in their convent garden until the Sisters shared seeds with our founder's grandmother at a church sale in 1971.",
    growingNotes: "Start indoors 3 weeks before transplanting, or direct sow when soil reaches 65°F. Prolific producer — harvest every 2–3 days to keep plants producing. Trellis for straight fruits and better air circulation.",
    harvestWindow: "July – September",
    daysToMaturity: 52,
    difficulty: "Gentle",
    category: "Vegetable",
    featured: false,
    price: 4.50,
    accentColor: "#4A5230",
    tags: ["heirloom", "pickling", "french", "prolific"],
  },
  {
    slug: "immortelle-helichrysum",
    image: siteImages.immortelleStrawFlower,
    name: "Immortelle Straw Flower",
    latinName: "Helichrysum bracteatum 'Monstrosum'",
    family: "Asteraceae",
    origin: "Provence, France — collected 1863",
    year: "Pre-1863",
    description: "Papery, sun-bright blooms in shades of amber, saffron, and old rose that hold their color and form for years after drying.",
    story: "In the dried-flower tradition of Provence, the immortelle has been harvested and hung from rafters for centuries. This particular large-flowered strain was maintained by a family of florists in Grasse — the same valley famous for its perfume roses — who selected for the deepest, most saturated colors over six generations before the trade shifted to imports.",
    growingNotes: "Direct sow in fall for spring germination, or start indoors 6–8 weeks early. Harvest flowers when fully open but before center shows — this is when colors are most vibrant. Hang upside down in small bundles to dry.",
    harvestWindow: "July – September",
    daysToMaturity: 85,
    difficulty: "Moderate",
    category: "Flower",
    featured: false,
    price: 6.00,
    accentColor: "#C8893A",
    tags: ["heirloom", "everlasting", "dried flower", "fragrant"],
  },
  {
    slug: "calendula-resina",
    image: siteImages.resinaCalendula,
    name: "Resina Calendula",
    latinName: "Calendula officinalis 'Resina'",
    family: "Asteraceae",
    origin: "Mediterranean — documented 16th century",
    year: "Pre-1550",
    description: "Intensely resinous single blooms of deep orange, prized above all others for their medicinal and cosmetic properties.",
    story: "Selected specifically for resin content rather than ornamental qualities, Resina contains three times the active compounds of typical garden varieties. It was the preferred calendula of apothecaries throughout the Mediterranean for five hundred years. We grow it in our medicinal garden and harvest weekly through the long Vermont summer.",
    growingNotes: "Cold-tolerant and easy — direct sow as soon as soil can be worked in spring. Blooms within 50 days. Self-seeds enthusiastically. Collect resinous petals from fully open flowers; sticky fingers are a sign of high-quality harvest.",
    harvestWindow: "June – October",
    daysToMaturity: 50,
    difficulty: "Gentle",
    category: "Flower",
    featured: false,
    price: 5.50,
    accentColor: "#C8893A",
    tags: ["heirloom", "medicinal", "edible", "self-seeding"],
  },
  {
    slug: "four-corners-blue-corn",
    image: siteImages.fourCornersBlueCorn,
    name: "Four Corners Blue Corn",
    latinName: "Zea mays 'Four Corners Blue'",
    family: "Poaceae",
    origin: "Ancestral Puebloan — maintained 800+ years",
    year: "Pre-1200",
    description: "Deep indigo-black kernels of extraordinary nutty sweetness, cultivated for over eight centuries in the canyon lands of the American Southwest.",
    story: "We grow this corn in deep respect and gratitude. We source our stock from a seed-saving cooperative working with Indigenous farmers in the Four Corners region, and a portion of every sale returns to that organization. We do not claim ownership of this heritage — we are stewards who have been given permission to share these seeds more widely.",
    growingNotes: "Plant in blocks of at least 4 rows for good pollination. Needs full sun and warm nights — wait until soil is genuinely warm. Isolate from other corn by at least 1000 feet or stagger planting times by three weeks. Dry thoroughly on the stalk before harvest.",
    harvestWindow: "September – October",
    daysToMaturity: 100,
    difficulty: "Patient",
    category: "Grain",
    featured: true,
    price: 8.00,
    accentColor: "#1E3A5F",
    tags: ["indigenous", "ancient variety", "grain", "ornamental"],
  },
  {
    slug: "turkish-echinacea",
    image: siteImages.narrowLeafEchinacea,
    name: "Narrow-leaf Echinacea",
    latinName: "Echinacea angustifolia",
    family: "Asteraceae",
    origin: "Great Plains — native",
    year: "Native",
    description: "The original medicinal coneflower of the American prairie, with narrow petals of soft rose-pink and an intensely resinous, tongue-numbing root.",
    story: "The more potent of the two medicinal echinaceas, angustifolia was used by Plains nations long before it appeared in any European pharmacopoeia. Slower-growing and more demanding than its popular cousin purpurea, it rewards the patient gardener with a permanent, drought-resistant presence and a root that intensifies with every passing year.",
    growingNotes: "Requires cold stratification — sow in fall or refrigerate moist seeds for 30 days before spring sowing. Slow to establish (often blooms in year two or three) but extremely long-lived. Once settled, virtually indestructible.",
    harvestWindow: "July – August",
    daysToMaturity: 730,
    difficulty: "Patient",
    category: "Herb",
    featured: false,
    price: 9.00,
    accentColor: "#6B2426",
    tags: ["native", "medicinal", "prairie", "perennial"],
  },
];

export const seedsByCategory: Record<Seed["category"], Seed[]> = {
  Flower: seeds.filter((s) => s.category === "Flower"),
  Vegetable: seeds.filter((s) => s.category === "Vegetable"),
  Herb: seeds.filter((s) => s.category === "Herb"),
  Grain: seeds.filter((s) => s.category === "Grain"),
};

export function getSeedBySlug(slug: string): Seed | undefined {
  return seeds.find((s) => s.slug === slug);
}

export function getFeaturedSeeds(): Seed[] {
  return seeds.filter((s) => s.featured);
}

export function getSeedsByCategory(category: Seed["category"]): Seed[] {
  return seeds.filter((s) => s.category === category);
}
