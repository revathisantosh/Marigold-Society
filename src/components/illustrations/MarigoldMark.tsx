interface Props {
  className?: string;
}

export function MarigoldMark({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central circle */}
      <circle cx="24" cy="24" r="5" fill="#C8893A" />
      {/* Petals — 8 petals radiating outward */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 24 + Math.cos(rad) * 13;
        const cy = 24 + Math.sin(rad) * 13;
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="5"
            ry="3"
            fill="#C8893A"
            transform={`rotate(${angle} ${cx} ${cy})`}
            opacity={i % 2 === 0 ? 1 : 0.65}
          />
        );
      })}
    </svg>
  );
}
