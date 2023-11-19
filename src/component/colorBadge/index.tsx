import { CSSProperties } from "react";
import { colorConverter } from "../../helpers/utils";
import { Color } from "../../types";

export interface ColorBadgeProps {
  isSelected: boolean;
  background: Color;
  onChange: (newColor: Color) => void;
}

export default function ColorBadge({ isSelected, background, onChange }: ColorBadgeProps) {
  const containerStyle: CSSProperties = {
    border: isSelected ? "2px solid grey" : "",
    background: colorConverter(background),
  };
  return (
    <span
      style={containerStyle}
      className="colorBadge"
      onClick={() => onChange(background)}
      data-testid="colorBadge"></span>
  );
}
