"use client";
import { useCustomCursor } from "@/hooks/useCursor";

export function CustomCursor() {
  const { cursorRef, dotRef } = useCustomCursor();

  return (
    <>
      <div ref={cursorRef} className="cursor" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
