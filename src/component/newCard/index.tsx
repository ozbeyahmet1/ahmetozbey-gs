import Image from "next/image";
import { CSSProperties } from "react";
import { FaUser } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { colorConverter, fontColorMatcher } from "../../helpers/utils";
import { ProductWidget } from "../../types";

export interface NewCardProps {
  onClick?: () => void;
  editable?: boolean;
}
export default function NewCard({
  action,
  active,
  amount,
  linked,
  selectedColor,
  type,
  onClick,
  editable = true,
}: ProductWidget & NewCardProps) {
  const cardStyle: CSSProperties = {
    background: colorConverter(selectedColor),
    color: fontColorMatcher(selectedColor),
  };

  return (
    <div style={cardStyle} className="newCard">
      <Image
        src="https://res.cloudinary.com/droheqpxn/image/upload/v1701046447/grenspark/612ceb8d47f7f912e571fead_Bottom_20Left_20Leave_wo2vln.svg"
        width={100}
        height={160}
        alt=""
        className="newCard_image"
      />
      <div className="newCard_inline">
        <div className="newCard--top">
          <div className="newCard_linked">{linked && <FaUser size={28} />}</div>
          {editable && (
            <div onClick={onClick} className="newCard_edit">
              <FiEdit size={30} />
            </div>
          )}
        </div>
        {active ? <p className="newCard_activity--green">Active</p> : <p className="newCard_activity--red">Inactive</p>}
        <p className="newCard_action">This product {action}</p>
        <p className="newCard_amount">
          {amount} {type}
        </p>
      </div>
    </div>
  );
}
