import { CSSProperties, ReactNode } from "react";

export interface MenuProps {
  icon: ReactNode;
  text: string;
  isSelected: boolean;
  href: string;
}

export default function Menu({ icon, text, isSelected, href }: MenuProps) {
  const SelectedMenuStyles: CSSProperties = {
    background: "white",
    border: "5px",
  };
  return (
    <a className="menu" style={isSelected ? SelectedMenuStyles : undefined} href={href}>
      {icon}
      <p>{text}</p>
    </a>
  );
}
