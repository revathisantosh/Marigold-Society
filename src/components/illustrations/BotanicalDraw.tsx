"use client";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface Props {
  variant?: "marigold" | "vine" | "seed-pod" | "sprig-tall";
  className?: string;
  style?: React.CSSProperties;
}

export function BotanicalDraw({ variant = "marigold", className, style }: Props) {
  const ref = useScrollReveal<SVGSVGElement>(0.2);

  return (
    <>
      {variant === "marigold" && (
        <svg
          ref={ref}
          className={cn("botanical-draw reveal", className)}
          style={style}
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Stem */}
          <path d="M100 195 Q98 160 100 120 Q102 80 100 40" />
          {/* Side leaves */}
          <path d="M100 140 Q80 125 72 108 Q88 112 100 140" />
          <path d="M100 120 Q120 105 128 88 Q112 92 100 120" />
          <path d="M100 95 Q78 80 72 62 Q86 68 100 95" />
          {/* Petals */}
          {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 100 + Math.cos(rad) * 22;
            const cy = 40 + Math.sin(rad) * 22;
            return (
              <path
                key={i}
                d={`M100 40 Q${100 + Math.cos(rad - 0.3) * 30} ${40 + Math.sin(rad - 0.3) * 30} ${cx} ${cy} Q${100 + Math.cos(rad + 0.3) * 30} ${40 + Math.sin(rad + 0.3) * 30} 100 40`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              />
            );
          })}
          {/* Center */}
          <circle cx="100" cy="40" r="8" />
          <circle cx="100" cy="40" r="4" />
        </svg>
      )}

      {variant === "vine" && (
        <svg
          ref={ref}
          className={cn("botanical-draw reveal", className)}
          style={style}
          viewBox="0 0 120 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <path d="M60 400 Q50 360 55 320 Q65 280 55 240 Q45 200 60 160 Q75 120 60 80 Q45 40 60 10" />
          {/* Tendrils */}
          <path d="M55 320 Q30 305 22 288 Q40 292 55 320" />
          <path d="M65 280 Q90 265 98 248 Q80 252 65 280" />
          <path d="M55 240 Q25 222 18 202 Q36 210 55 240" />
          <path d="M60 160 Q88 145 96 128 Q78 132 60 160" />
          {/* Small leaves */}
          <ellipse cx="22" cy="288" rx="8" ry="5" transform="rotate(-30 22 288)" opacity="0.6" />
          <ellipse cx="98" cy="248" rx="8" ry="5" transform="rotate(30 98 248)" opacity="0.6" />
          <ellipse cx="18" cy="202" rx="8" ry="5" transform="rotate(-40 18 202)" opacity="0.6" />
          <ellipse cx="96" cy="128" rx="8" ry="5" transform="rotate(20 96 128)" opacity="0.6" />
        </svg>
      )}

      {variant === "seed-pod" && (
        <svg
          ref={ref}
          className={cn("botanical-draw reveal", className)}
          style={style}
          viewBox="0 0 160 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {/* Stem */}
          <path d="M80 190 Q78 155 80 120" />
          {/* Pod shape */}
          <path d="M80 120 Q50 115 42 90 Q38 65 60 50 Q72 42 80 45 Q88 42 100 50 Q122 65 118 90 Q110 115 80 120" />
          {/* Internal lines */}
          <path d="M65 95 Q80 92 95 95" opacity="0.5" />
          <path d="M62 80 Q80 76 98 80" opacity="0.5" />
          <path d="M67 65 Q80 62 93 65" opacity="0.5" />
          {/* Seeds */}
          <ellipse cx="80" cy="88" rx="3" ry="5" opacity="0.7" />
          <ellipse cx="70" cy="72" rx="3" ry="4" opacity="0.5" />
          <ellipse cx="90" cy="72" rx="3" ry="4" opacity="0.5" />
          {/* Sepals */}
          <path d="M67 122 Q58 108 62 95" opacity="0.5" />
          <path d="M93 122 Q102 108 98 95" opacity="0.5" />
        </svg>
      )}

      {variant === "sprig-tall" && (
        <svg
          ref={ref}
          className={cn("botanical-draw reveal", className)}
          style={style}
          viewBox="0 0 80 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        >
          <path d="M40 290 Q38 240 40 190 Q42 140 40 90 Q38 50 40 20" />
          <path d="M40 220 Q20 205 14 188 Q28 194 40 220" />
          <path d="M40 190 Q60 175 66 158 Q52 164 40 190" />
          <path d="M40 150 Q18 135 12 118 Q26 124 40 150" />
          <path d="M40 115 Q62 100 68 83 Q54 89 40 115" />
          <path d="M40 80 Q22 65 16 48 Q30 54 40 80" />
          <path d="M40 55 Q56 40 62 23 Q48 29 40 55" />
          <circle cx="40" cy="20" r="5" />
          {[0, 72, 144, 216, 288].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <path
                key={i}
                d={`M40 20 Q${40 + Math.cos(rad) * 14} ${20 + Math.sin(rad) * 14} ${40 + Math.cos(rad) * 10} ${20 + Math.sin(rad) * 10}`}
                opacity="0.7"
                style={{ transitionDelay: `${0.8 + i * 0.08}s` }}
              />
            );
          })}
        </svg>
      )}
    </>
  );
}
