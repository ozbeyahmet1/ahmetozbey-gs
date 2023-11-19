import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface TooltipProps {
  showTooltip: Dispatch<SetStateAction<boolean>>;
}
export default function Tooltip({ showTooltip }: TooltipProps) {
  return (
    <div className="tooltip" onMouseLeave={() => showTooltip(false)} data-testid="tooltip-container">
      <p>
        This widget links directly to your public profile so that you can easily share your impact with your customers.
        Turn it off here if you do not want the badge to link to it.
      </p>
      <Link href="/mywidgets">
        <button>View Public Profile</button>
      </Link>
    </div>
  );
}
