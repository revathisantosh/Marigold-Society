"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface Props {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export function WordReveal({ text, className, tag: Tag = "p", delay = 0 }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useScrollReveal<any>(0.1);
  const words = text.split(" ");

  return (
    <Tag
      ref={ref}
      className={cn("word-reveal", className)}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ transitionDelay: `${delay + i * 0.04}s` }}
        >
          {word}{i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
