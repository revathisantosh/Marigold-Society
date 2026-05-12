"use client";
import { useEffect, useRef } from "react";

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const onMouseEnterLink = () => cursor.classList.add("cursor--hover");
    const onMouseLeaveLink = () => cursor.classList.remove("cursor--hover");

    const links = document.querySelectorAll("a, button, [data-cursor]");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    window.addEventListener("mousemove", onMouseMove);

    let animId: number;
    function animate() {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      if (cursor) cursor.style.transform = `translate(${curX - 20}px, ${curY - 20}px)`;
      animId = requestAnimationFrame(animate);
    }
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
      cancelAnimationFrame(animId);
    };
  }, []);

  return { cursorRef, dotRef };
}
