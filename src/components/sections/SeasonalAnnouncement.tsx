"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function SeasonalAnnouncement() {
  return (
    <section className="bg-maroon py-4">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-4"
      >
        <span className="text-marigold" aria-hidden="true">✦</span>
        <p className="label text-white/90 text-center">
          The Almanac No. 9 — Summer is now available.{" "}
          <Link href="/almanac" className="text-marigold hover:text-white transition-colors underline underline-offset-2">
            Read the issue
          </Link>
        </p>
        <span className="text-marigold" aria-hidden="true">✦</span>
      </motion.div>
    </section>
  );
}
