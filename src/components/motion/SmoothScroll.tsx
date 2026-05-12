"use client";
import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";

export function SmoothScroll() {
  useLenis();

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.self !== window.top) {
        document.documentElement.setAttribute("data-embedded-preview", "");
      }
    } catch {
      document.documentElement.setAttribute("data-embedded-preview", "");
    }
    return () => {
      document.documentElement.removeAttribute("data-embedded-preview");
    };
  }, []);

  return null;
}
