import { ChangeEvent, useState } from "react";

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

export default function Checkbox({ checked, label, onChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };
  return (
    <div className="checkbox_wrapper">
      <input
        className="inp-cbx"
        id="cbx-15"
        type="checkbox"
        style={{ display: "none" }}
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="cbx" htmlFor="cbx-15">
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
      </label>
    </div>
  );
}
