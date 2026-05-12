import { Hero } from "@/components/sections/Hero";
import { FeaturedSeeds } from "@/components/sections/FeaturedSeeds";
import { AlmanacTeaser } from "@/components/sections/AlmanacTeaser";
import { MembershipCallout } from "@/components/sections/MembershipCallout";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { SeasonalAnnouncement } from "@/components/sections/SeasonalAnnouncement";
import { TestimonialScroll } from "@/components/sections/TestimonialScroll";

export default function HomePage() {
  return (
    <>
      <Hero />

      <SeasonalAnnouncement />
      <AboutTeaser />
      <FeaturedSeeds />
      <AlmanacTeaser />
      <TestimonialScroll />
      <MembershipCallout />
    </>
  );
}
