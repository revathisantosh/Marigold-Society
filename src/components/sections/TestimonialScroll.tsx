"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { members } from "@/lib/data/members";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function TestimonialScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-32 bg-parchment overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <SectionLabel className="mb-6">The Membership</SectionLabel>
        <h2 className="font-display italic text-display-md text-maroon leading-tight max-w-lg">
          People who know what they're looking for.
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <motion.div
          style={{ x: x1 }}
          className="flex gap-4 w-max"
        >
          {[...members, ...members].map((member, i) => (
            <TestimonialCard key={`r1-${i}`} member={member} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <motion.div
          style={{ x: x2 }}
          className="flex gap-4 w-max"
        >
          {[...members.slice(2), ...members, ...members.slice(0, 2)].map((member, i) => (
            <TestimonialCard key={`r2-${i}`} member={member} variant="dark" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({
  member,
  variant = "light",
}: {
  member: (typeof members)[0];
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={`w-[340px] shrink-0 p-8 border ${
        variant === "dark"
          ? "bg-maroon border-maroon text-white"
          : "bg-parchment border-marigold/25 text-ink"
      }`}
    >
      <p
        className={`font-body italic text-lg leading-relaxed mb-6 ${
          variant === "dark" ? "text-white/90" : "text-ink/80"
        }`}
      >
        &ldquo;{member.quote}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p
            className={`font-display italic ${
              variant === "dark" ? "text-white" : "text-ink"
            }`}
          >
            {member.name}
          </p>
          <p
            className={`label text-2xs mt-1 ${
              variant === "dark" ? "text-white/50" : "text-ink/40"
            }`}
          >
            {member.location} — since {member.since}
          </p>
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-display italic ${
            variant === "dark" ? "bg-white/20 text-white" : "bg-marigold/15 text-maroon"
          }`}
        >
          {member.name.charAt(0)}
        </div>
      </div>
    </div>
  );
}
