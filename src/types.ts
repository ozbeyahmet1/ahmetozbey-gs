export type Color = "white" | "black" | "blue" | "green" | "beige";
export type Action = "collects" | "plants" | "offsets";
export type Type = "carbon" | "plastic bottles" | "trees";
export interface ProductWidget {
  id: number;
  type: Type;
  amount: number;
  action: Action;
  active: boolean;
  linked: boolean;
  selectedColor: Color;
}
