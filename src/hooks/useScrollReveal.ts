"use client";
import { useEffect, useRef } from "react";

export function useScrollReveal<T extends Element = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.classList.add("is-revealed");
    };

    /** Embedded / zero-height previews sometimes never fire IntersectionObserver. */
    const tryRevealFromGeometry = () => {
      if (el.classList.contains("is-revealed")) return true;
      const rect = el.getBoundingClientRect();
      const vh =
        window.innerHeight || document.documentElement.clientHeight || 0;
      const vw =
        window.innerWidth || document.documentElement.clientWidth || 0;
      if (rect.width <= 0 || rect.height <= 0) return false;
      const intersects =
        rect.top < vh &&
        rect.bottom > 0 &&
        rect.left < vw &&
        rect.right > 0;
      if (intersects) {
        reveal();
        return true;
      }
      return false;
    };

    if (tryRevealFromGeometry()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: [0, threshold], rootMargin: "0px 0px 20% 0px" }
    );

    observer.observe(el);

    let rafId = 0;
    rafId = requestAnimationFrame(() => {
      if (tryRevealFromGeometry()) observer.disconnect();
    });

    const t0 = window.setTimeout(() => {
      if (tryRevealFromGeometry()) observer.disconnect();
    }, 0);

    const onResize = () => {
      if (tryRevealFromGeometry()) {
        observer.disconnect();
        window.removeEventListener("resize", onResize);
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t0);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [threshold]);

  return ref;
}
