import { Color } from "@/types";

export function colorConverter(selectedColor: Color): string {
  switch (selectedColor) {
    case "blue":
      return "#2e3a8c";
    case "green":
      return "#3b755f";
    case "beige":
      return "#f2ebdb";
    case "black":
      return "#212121";
    case "white":
      return "#ffffff";
    default:
      return "#ffffff";
  }
}

export function fontColorMatcher(selectedColor: Color): string {
  switch (selectedColor) {
    case "beige":
      return "#3b755f";
    case "white":
      return "#212121";
    default:
      return "#ffffff";
  }
}
