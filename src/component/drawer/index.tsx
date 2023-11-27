import { Color, ProductWidget } from "@/types";
import { useEffect, useState } from "react";
import Checkbox from "../checkbox";
import ColorPalette from "../colorPalette";
import NewCard from "../newCard";
import { Toggle } from "../toggle";

export interface DrawerProps {
  card: ProductWidget;
  handleLinked: () => void;
  handleSetActive: () => void;
  handleChangeColor: (newColor: Color) => void;
}

export default function Drawer({ card, handleLinked, handleSetActive, handleChangeColor, showDrawer }: DrawerProps) {
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (card.active) {
      setShowError(false);
    }
  }, [card]);
  return (
    <div className="drawer">
      <div className="drawer--top">
        <p className="drawer_header">Selected Item</p>
        <NewCard {...card} editable={false} />
      </div>
      <div className="drawer_column">
        <p>Linked To Profile</p>
        <Checkbox checked={card.linked} onChange={card.active ? handleLinked : () => setShowError(true)} label="" />
      </div>
      <div className="drawer_column">
        <p>Activity</p>
        <Toggle onChange={handleSetActive} value={card.active} data-testid="" />
      </div>
      <div className="drawer_column">
        <p>Pick Color</p>
        <ColorPalette
          selectedColor={card.selectedColor}
          onChange={card.active ? handleChangeColor : () => setShowError(true)}
        />
      </div>
      {showError && (
        <div className="drawer_error">
          To make edits, you must set the activity field to true. Remember, only one widget can be active at a time.
        </div>
      )}
    </div>
  );
}
