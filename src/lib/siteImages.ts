/** Public URLs for assets in `/public/images` (spaces URL-encoded for `next/image`). */
export const siteImages = {
  hero: "/images/hero.png",
  seedGarden: "/images/Seed%20Garden.png",
  flowerPress: "/images/flower%20press.png",
  craft: "/images/craft.png",
  membershipGift: "/images/Membership%20gift.png",
  ladyMargaretMarigold: "/images/Lady%20Margaret%20marigold%20flower.png",
  vermontScarletRunner: "/images/Vermont%20Scarlet%20Runner.png",
  antwerpBlackHollyhock: "/images/Antwerp%20Black%20Hollyhock.png",
  fourCornersBlueCorn: "/images/four%20corners%20blue%20corn.png",
  cornichonDeParis: "/images/Cornichon%20de%20Paris.png",
  immortelleStrawFlower: "/images/Immortelle%20Straw%20Flower.png",
  resinaCalendula: "/images/Resina%20Calendula%20flower.png",
  narrowLeafEchinacea: "/images/Narrow-leaf%20Echinacea.png",
  /** Almanac — “On the Quiet Art of Keeping” hero art */
  quietArtOfKeeping: "/images/On%20the%20Quiet%20art%20of%20keeping.png",
} as const;

/** Use with `next/image` when `object-cover` must preserve the top of the frame (crop excess from the bottom). */
export const imageCoverTop = "object-cover object-top";
