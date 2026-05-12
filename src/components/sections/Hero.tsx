"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const heroYellow = "#EEC852";

export function Hero() {
  const [heroImageFailed, setHeroImageFailed] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacityRaw = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentOpacity = useTransform(contentOpacityRaw, (v) =>
    typeof v === "number" && Number.isFinite(v) ? v : 1
  );

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#1a2818]"
      aria-label="Welcome"
    >
      {/* Background + parallax */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden min-h-0 min-w-0"
        style={{ y: backgroundY }}
      >
        {heroImageFailed ? (
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#1a2820] via-[#243018] to-[#141c12]"
            aria-hidden
          />
        ) : (
          <Image
            src="/images/hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
            onError={() => setHeroImageFailed(true)}
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55"
          aria-hidden
        />
      </motion.div>

      {/* Copy */}
      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-5 pb-24 pt-36 text-center sm:px-8 sm:pb-28 sm:pt-40"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Line 1: Once + oval upon */}
          <div className="flex flex-wrap items-end justify-center gap-x-3 gap-y-2 md:gap-x-5">
            <motion.span
              className="font-great font-normal leading-none text-[clamp(3.25rem,14vw,8.5rem)]"
              style={{ color: heroYellow }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              Once
            </motion.span>

            <motion.span
              className="mb-2 inline-flex items-center justify-center rounded-[999px] border-2 px-5 py-2 md:mb-3 md:px-10 md:py-2.5"
              style={{
                borderColor: heroYellow,
                boxShadow: `0 0 0 1px ${heroYellow}33`,
              }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="font-times not-italic text-[clamp(1.5rem,4.5vw,2.75rem)] font-normal lowercase tracking-wide"
                style={{ color: heroYellow }}
              >
                upon
              </span>
            </motion.span>
          </div>

          {/* Line 2 */}
          <motion.h1
            className="font-great font-normal mt-1 max-w-[95vw] leading-[0.95] text-[clamp(2.75rem,11vw,7rem)] sm:mt-2"
            style={{ color: heroYellow }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            in a quiet Garden
          </motion.h1>

          <motion.p
            className="font-label mt-10 max-w-xl text-pretty text-[clamp(1rem,2.8vw,1.35rem)] font-normal leading-relaxed tracking-normal normal-case sm:mt-12"
            style={{ color: heroYellow }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            A society of growers, gatherers, and gardeners, keeping the seeds our grandmothers loved.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
