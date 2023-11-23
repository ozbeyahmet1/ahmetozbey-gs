import Image from "next/image";
import { CSSProperties, useRef, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { colorConverter, fontColorMatcher } from "../../helpers/utils";
import useBottomPosition from "../../hooks/usePosition";
import { changeActivity, changeColor, changeLinkedState } from "../../redux/store/slices/productWidgetSlice";
import { Color, ProductWidget } from "../../types";
import Checkbox from "../checkbox";
import ColorPalette from "../colorPalette";
import { Toggle } from "../toggle";
import Tooltip from "../tooltip";
export default function Card({ action, active, amount, id, linked, selectedColor, type }: ProductWidget) {
  const cardStyle: CSSProperties = {
    background: colorConverter(selectedColor),
    color: fontColorMatcher(selectedColor),
  };
  const dispatch = useDispatch();
  const handleLinked = () => {
    dispatch(changeLinkedState({ productId: id }));
  };
  const handleSetActive = () => {
    dispatch(changeActivity({ productId: id }));
  };
  const handleChangeColor = (newColor: Color) => {
    dispatch(changeColor({ productId: id, newColor }));
  };

  {
    /* To ensure that the Tooltip component appears directly below the "Link to Public Profile" text,
  the following steps are followed:
  1.First, create a hook named usePosition to determine the position of the bottom of the component
  where the "Link to Public Profile" text is located.
  2.Then, use this hook to set the calculated position value as the top distance of the div element
  containing the Tooltip.This way, the Tooltip is rendered exactly at the desired position.; */
  }
  const bottomRef = useRef<HTMLDivElement>(null);
  const bottomPosition = useBottomPosition({ elementRef: bottomRef });
  const containerStyle: CSSProperties = {
    top: bottomPosition ? bottomPosition : 0,
  };
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="card">
      <div className="card--top" style={cardStyle}>
        <Image
          src="https://res.cloudinary.com/droheqpxn/image/upload/v1700233486/grenspark/logo_eji8n9.svg"
          width={32}
          height={32}
          alt=""
        />
        <div>
          <p className="card_description">This product {action}</p>
          <p className="card_count">
            {amount} {type}
          </p>
        </div>
      </div>
      <div className="card--bottom">
        <div className="card_block" ref={bottomRef}>
          <div className="card_text">
            <p>Link to Public Profile</p>
            <div onMouseEnter={() => setShowTooltip(true)}>
              <AiOutlineInfoCircle size={12} />
            </div>
          </div>
          <Checkbox checked={linked} label="" onChange={active ? handleLinked : undefined} />
        </div>
        <div className="card_block">
          <p>Badge Color</p>
          {active
            ? <ColorPalette selectedColor={selectedColor} onChange={handleChangeColor} />
            :
            <ColorPalette selectedColor={selectedColor} onChange={undefined} />
          }

        </div>
        <div className="card_block">
          <p>Activate Badge</p>
          <Toggle value={active} onChange={handleSetActive} />
        </div>
      </div>
      <div className="card_tooltipWrapper" style={containerStyle}>
        {showTooltip && <Tooltip showTooltip={setShowTooltip} />}
      </div>
    </div>
  );
}
