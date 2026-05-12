interface Props {
  className?: string;
}

export function BotanicalSprig({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central stem */}
      <line x1="160" y1="75" x2="160" y2="10" />

      {/* Left branch */}
      <path d="M160 50 Q130 40 115 25" />
      {/* Left leaves */}
      <path d="M115 25 Q105 15 120 10 Q125 20 115 25" fill="currentColor" opacity="0.3" />
      <path d="M137 38 Q127 28 138 20 Q143 30 137 38" fill="currentColor" opacity="0.3" />

      {/* Right branch */}
      <path d="M160 50 Q190 40 205 25" />
      {/* Right leaves */}
      <path d="M205 25 Q215 15 200 10 Q196 20 205 25" fill="currentColor" opacity="0.3" />
      <path d="M183 38 Q193 28 182 20 Q177 30 183 38" fill="currentColor" opacity="0.3" />

      {/* Top flower */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const px = 160 + Math.cos(rad) * 8;
        const py = 10 + Math.sin(rad) * 8;
        return (
          <ellipse
            key={i}
            cx={px}
            cy={py}
            rx="3.5"
            ry="2"
            fill="currentColor"
            opacity="0.6"
            transform={`rotate(${angle} ${px} ${py})`}
          />
        );
      })}
      <circle cx="160" cy="10" r="2.5" fill="currentColor" />

      {/* Far left sprig */}
      <path d="M160 30 Q120 20 95 30" />
      <path d="M95 30 Q80 22 95 14 Q100 22 95 30" fill="currentColor" opacity="0.2" />

      {/* Far right sprig */}
      <path d="M160 30 Q200 20 225 30" />
      <path d="M225 30 Q240 22 225 14 Q220 22 225 30" fill="currentColor" opacity="0.2" />

      {/* Very far decorative dots */}
      <circle cx="70" cy="38" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="58" cy="32" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="250" cy="38" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="262" cy="32" r="1" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
