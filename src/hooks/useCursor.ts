"use client";
import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [data-cursor]";

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;
    const ring = cursor;

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

      const under = document.elementFromPoint(mouseX, mouseY);
      const interactive = under?.closest(INTERACTIVE);
      ring.classList.toggle("cursor--hover", Boolean(interactive));
    };

    window.addEventListener("mousemove", onMouseMove);

    let animId = 0;
    function animate() {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      ring.style.transform = `translate(${curX - 20}px, ${curY - 20}px)`;
      animId = requestAnimationFrame(animate);
    }
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return { cursorRef, dotRef };
}
