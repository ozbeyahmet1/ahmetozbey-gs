import { colorConverter, fontColorMatcher } from "@/helpers/utils";
import { ProductWidget } from "@/types";
import Image from "next/image";
import { CSSProperties } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

export default function NewCard({ action, active, amount, id, linked, selectedColor, type }: ProductWidget) {
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
          <FiEdit size={30} />
          <FaRegUser size={28} />
        </div>
        <p className="newCard_activity">Active</p>
        <p className="newCard_action">This product {action}</p>
        <p className="newCard_amount">
          {amount} {type}
        </p>
      </div>
    </div>
  );
}
