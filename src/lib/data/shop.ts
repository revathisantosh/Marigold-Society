import { siteImages } from "@/lib/siteImages";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "seed-collection" | "pressed-flower";
  price: number;
  description: string;
  longDescription: string;
  includes?: string[];
  dimensions?: string;
  new: boolean;
  limited: boolean;
  stock?: number;
  /** Product photo in `/public/images` — required for all shop items. */
  image: string;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "heirloom-founders-collection",
    image: siteImages.craft,
    name: "The Founders' Collection",
    category: "seed-collection",
    price: 42,
    description: "Eight packets of our most beloved heirloom varieties, selected by Estelle and Oliver.",
    longDescription:
      "This is the collection we would send to a friend who was starting a garden from nothing. Eight varieties chosen for their combined beauty, usefulness, and historical significance — a complete garden in miniature. Presented in a hand-stamped linen envelope with growing notes for each variety.",
    includes: [
      "Lady Margaret Marigold",
      "Vermont Scarlet Runner",
      "Antwerp Black Hollyhock",
      "Resina Calendula",
      "Immortelle Straw Flower",
      "Cornichon de Paris",
      "Narrow-leaf Echinacea",
      "Four Corners Blue Corn",
    ],
    new: false,
    limited: false,
  },
  {
    id: "p2",
    slug: "pressed-flower-beginners-kit",
    image: siteImages.flowerPress,
    name: "The Pressing Kit",
    category: "pressed-flower",
    price: 68,
    description: "Everything needed to begin the practice of pressing — built to last.",
    longDescription:
      "A complete pressing kit made from materials selected for longevity rather than economy: two cherry wood pressing boards, brass hardware, archival blotting paper (50 sheets), a journal with 90gsm pages suitable for mounting, a bone folder, and a packet of immortelle flowers from our garden for your first press. Arrives in a cotton canvas bag.",
    includes: [
      "Cherry wood press (8\" × 10\") with brass wing nuts",
      "50 sheets archival blotting paper",
      "Pressing journal — 140 pages, 90gsm",
      "Bone folder",
      "Packet of Immortelle Straw Flower seeds",
      "Technique card — 12 plant profiles",
    ],
    dimensions: "9\" × 11\" × 3\"",
    new: false,
    limited: false,
  },
  {
    id: "p7",
    slug: "membership-gift",
    image: siteImages.membershipGift,
    name: "Membership Gift",
    category: "seed-collection",
    price: 45,
    description: "Give the gift of a Correspondent membership — includes a hand-lettered card.",
    longDescription:
      "A gift membership in the Correspondent tier, good for one year. Includes a hand-lettered card from us explaining what the recipient will receive, mailed separately before the first box arrives so they know to expect it. The recipient can choose to continue or upgrade at the end of their gifted year.",
    new: false,
    limited: false,
  },
];
