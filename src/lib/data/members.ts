export interface Member {
  id: string;
  name: string;
  location: string;
  since: string;
  description: string;
  growing: string[];
  quote: string;
}

export interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  billing: "quarterly" | "annual";
  description: string;
  includes: string[];
  featured: boolean;
}

export const members: Member[] = [
  {
    id: "1",
    name: "Philippa Rowe",
    location: "Dorset, Vermont",
    since: "Spring 2021",
    description: "Former editor at a Boston publishing house, now tending three acres outside Dorset. Philippa grows primarily for cutting and pressing.",
    growing: ["Lady Margaret Marigold", "Antwerp Black Hollyhock", "Immortelle Straw Flower"],
    quote: "The Almanac is the only thing I read the day it arrives. I read it with coffee and I read it slowly.",
  },
  {
    id: "2",
    name: "James & Tomoko Holt",
    location: "Middlebury, Vermont",
    since: "Autumn 2021",
    description: "James teaches landscape history at Middlebury; Tomoko is a textile artist who incorporates dried flowers into her work.",
    growing: ["Four Corners Blue Corn", "Vermont Scarlet Runner", "Calendula Resina"],
    quote: "We grow things here that we don't know the names of. We just call them 'the ones from the Marigold Society' and people always want to know more.",
  },
  {
    id: "3",
    name: "Rosalind Church",
    location: "Montpelier, Vermont",
    since: "Winter 2022",
    description: "An herbalist and apothecary who supplies local practitioners. The seed library has become essential to her practice.",
    growing: ["Turkish Echinacea", "Calendula Resina", "Cornichon de Paris"],
    quote: "There are things in the seed library I cannot find anywhere else. That matters.",
  },
  {
    id: "4",
    name: "Henri Beaumont",
    location: "St. Johnsbury, Vermont",
    since: "Spring 2022",
    description: "Third-generation farmer who converted his family's dairy operation to a market garden. Henri is one of our most prolific seed-savers.",
    growing: ["Vermont Scarlet Runner", "Four Corners Blue Corn", "Cornichon de Paris"],
    quote: "My grandfather would have understood what the Marigold Society is doing. He saved everything. He knew what was worth keeping.",
  },
  {
    id: "5",
    name: "Dr. Sarah Osei",
    location: "Burlington, Vermont",
    since: "Autumn 2022",
    description: "A physician who gardens for sanity, as she puts it. Her Burlington backyard contains more variety than most full-sized farms.",
    growing: ["Lady Margaret Marigold", "Black Hollyhock Antwerp", "Resina Calendula"],
    quote: "I come home from a shift and I go straight to the garden before I do anything else. It restores something.",
  },
  {
    id: "6",
    name: "Beatrice & Luc Fontaine",
    location: "Shelburne, Vermont",
    since: "Spring 2023",
    description: "Beatrice runs a flower farm; Luc is a chef at a restaurant in Burlington. The Marigold Society connects their two practices.",
    growing: ["Immortelle Straw Flower", "Vermont Scarlet Runner", "Lady Margaret Marigold"],
    quote: "The edible flowers from these seeds are on the menu. People ask where they come from and I tell them: from people who care.",
  },
];

export const subscriptionTiers: SubscriptionTier[] = [
  {
    id: "correspondent",
    name: "Correspondent",
    price: 45,
    billing: "quarterly",
    description: "The essential membership — everything you need to begin.",
    includes: [
      "The Almanac (printed quarterly, 80+ pages)",
      "3 seed packets from the current season's selection",
      "Access to the Greenhouse — our member forum",
      "10% discount in the seed library and shop",
      "Early access to limited variety releases",
    ],
    featured: false,
  },
  {
    id: "cultivator",
    name: "Cultivator",
    price: 75,
    billing: "quarterly",
    description: "For the serious grower who wants the full experience.",
    includes: [
      "The Almanac (printed quarterly, 80+ pages)",
      "6 seed packets — including exclusive Cultivator varieties",
      "Full pressed-flower kit with seasonal botanicals",
      "Access to the Greenhouse with Cultivator forum",
      "15% discount in the seed library and shop",
      "Priority access to limited variety releases",
      "Invitation to our annual harvest gathering",
    ],
    featured: true,
  },
  {
    id: "patron",
    name: "Patron",
    price: 240,
    billing: "annual",
    description: "The founding-member tier. For those who want to go deeper.",
    includes: [
      "Everything in Cultivator, quarterly",
      "Handwritten note from Estelle or Oliver with each box",
      "Access to our private seed library — varieties not otherwise available",
      "Invitation to our annual spring seed swap at the farm",
      "Your name in the Almanac's patron list each year",
      "20% discount in the seed library and shop",
      "One personal growing consultation per year (by phone or letter)",
    ],
    featured: false,
  },
];
