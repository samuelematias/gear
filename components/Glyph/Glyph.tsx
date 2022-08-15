const glyphs = {
  rightArrow: "→",
  leftArrow: "←",
  externalArrow: "↗",
  circleCheck: "",
  circleX: "",
} as const;

interface GlyphProps {
  name: keyof typeof glyphs;
}

export const Glyph = ({ name }: GlyphProps) => {
  return <span aria-hidden="true">{glyphs[name]}</span>;
};