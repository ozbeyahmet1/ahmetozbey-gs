import { Color } from "@/types";
import ColorBadge from "../colorBadge";

export interface ColorPaletteProps {
  selectedColor: Color;
  onChange: (newColor: Color) => void;
}

interface ColorObject {
  name: string;
  value: Color;
}

export default function ColorPalette({ selectedColor, onChange }: ColorPaletteProps) {
  const colors: Array<ColorObject> = [
    { name: "blue", value: "blue" },
    { name: "green", value: "green" },
    { name: "beige", value: "beige" },
    { name: "white", value: "white" },
    { name: "black", value: "black" },
  ];
  return (
    <div className="colorPalette">
      {colors.map((color, i) => {
        return (
          <ColorBadge
            background={color.value}
            isSelected={selectedColor == color.value ? true : false}
            key={i}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
}
