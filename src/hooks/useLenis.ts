"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Lenis smooth wheel does not reliably receive events inside cross-origin iframes (e.g. IDE previews). */
export function prefersSmoothScroll(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (window.self !== window.top) return false;
  } catch {
    return false;
  }
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useLenis() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!prefersSmoothScroll()) return;

    let rafId = 0;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (prefersSmoothScroll()) {
      lenisRef.current?.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
}
