import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  color?: "marigold" | "maroon" | "ink" | "parchment" | "white";
}

export function SectionLabel({ children, className, color = "marigold" }: Props) {
  const colorMap = {
    marigold: "text-marigold",
    maroon: "text-maroon",
    ink: "text-ink",
    parchment: "text-parchment",
    white: "text-white",
  };

  return (
    <div className={cn("ornament label", colorMap[color], className)}>
      {children}
    </div>
  );
}
