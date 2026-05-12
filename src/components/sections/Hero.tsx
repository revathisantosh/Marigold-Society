"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const heroYellow = "#EEC852";

export function Hero() {
  const [heroImageFailed, setHeroImageFailed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqNarrow = window.matchMedia("(max-width: 767px)");
    const update = () =>
      setReduceMotion(mqMotion.matches || mqNarrow.matches);
    update();
    mqMotion.addEventListener("change", update);
    mqNarrow.addEventListener("change", update);
    return () => {
      mqMotion.removeEventListener("change", update);
      mqNarrow.removeEventListener("change", update);
    };
  }, []);

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

  const parallaxBg = reduceMotion ? ({ y: "0%" } as const) : { y: backgroundY };
  const parallaxContent = reduceMotion ? undefined : { y: contentY, opacity: contentOpacity };

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0f1610]"
      aria-label="Welcome"
    >
      {/* Background + parallax */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden min-h-0 min-w-0"
        style={parallaxBg}
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
            className="object-cover object-[center_22%] sm:object-top"
            onError={() => setHeroImageFailed(true)}
          />
        )}

        {/* Base readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 md:from-black/45 md:via-black/25 md:to-black/55"
          aria-hidden
        />

        {/* Mobile: cinematic vignette + soft spotlight on copy */}
        <div
          className="pointer-events-none absolute inset-0 md:hidden"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 95% 75% at 50% 38%, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.72) 100%)",
          }}
        />

        {/* Mobile: thin gold atmosphere */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay md:hidden"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 42%, rgba(238,200,82,0.14) 0%, transparent 55%)",
          }}
        />
      </motion.div>

      {/* Copy */}
      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-5 pb-[max(5rem,env(safe-area-inset-bottom))] pt-[max(6rem,calc(env(safe-area-inset-top)+4.5rem))] text-center sm:px-8 sm:pb-28 sm:pt-40 md:pt-36"
        {...(parallaxContent ?? {})}
      >
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full max-w-[min(100%,22rem)] flex-col items-center sm:max-w-none"
        >
          {/* Mobile: stacked dramaturgy — desktop: inline */}
          <div className="flex w-full flex-col items-center gap-4 md:flex-row md:flex-wrap md:items-end md:justify-center md:gap-x-5 md:gap-y-2">
            <motion.span
              className="font-great font-normal leading-none text-[clamp(4.25rem,18vw,8.5rem)] md:text-[clamp(3.25rem,14vw,8.5rem)] [text-shadow:0_4px_32px_rgba(0,0,0,0.65),0_1px_0_rgba(255,255,255,0.06)]"
              style={{ color: heroYellow }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              Once
            </motion.span>

            <motion.span
              className="inline-flex items-center justify-center rounded-[999px] border-2 px-8 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[2px] md:mb-3 md:px-10 md:py-2.5 md:shadow-none md:backdrop-blur-none"
              style={{
                borderColor: heroYellow,
                boxShadow: `0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px ${heroYellow}44`,
                background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 100%)",
              }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="font-times not-italic text-[clamp(1.75rem,6vw,2.75rem)] font-normal lowercase tracking-[0.08em] md:text-[clamp(1.5rem,4.5vw,2.75rem)] md:tracking-wide"
                style={{ color: heroYellow }}
              >
                upon
              </span>
            </motion.span>
          </div>

          <motion.h1
            className="font-great font-normal mt-2 max-w-[min(100%,20ch)] leading-[0.92] text-[clamp(3.15rem,13.5vw,7rem)] [text-shadow:0_6px_40px_rgba(0,0,0,0.7),0_2px_0_rgba(0,0,0,0.35)] sm:mt-2 sm:max-w-[95vw] md:leading-[0.95]"
            style={{ color: heroYellow }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block md:inline">in a quiet</span>{" "}
            <span className="block md:inline">Garden</span>
          </motion.h1>

          {/* Ornament — mobile only */}
          <motion.div
            className="mt-8 flex items-center gap-4 md:hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
          >
            <span className="h-px w-14 bg-gradient-to-r from-transparent via-hero-yellow/70 to-hero-yellow/90" />
            <span className="font-display text-sm italic tracking-[0.35em] text-hero-yellow/95">
              ✦
            </span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent via-hero-yellow/70 to-hero-yellow/90" />
          </motion.div>

          <motion.p
            className="font-label mt-8 max-w-[min(100%,22rem)] text-pretty text-[clamp(1.0625rem,3.5vw,1.35rem)] font-normal leading-[1.65] tracking-[0.02em] normal-case [text-shadow:0_2px_24px_rgba(0,0,0,0.75)] sm:mt-10 sm:max-w-xl md:mt-12 md:tracking-normal"
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
