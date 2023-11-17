import { useState } from 'react';
import './toggle.module.scss';

export interface ToggleProps {
  value?: boolean;
}

export const Toggle = ({ value = false, ...props }: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(value);

  const toggleHandler = () => {
    setIsChecked((prev) => !prev);
  };
  const mode = isChecked ? "checked" : "";
  return (

    <div className={["toggle_container", mode].join(" ")} onClick={toggleHandler} {...props}>
      <div className={`toggle_track ${isChecked ? 'checked' : ''}`}>
        <div className='toggle_thumb--hover'>
          <div className={`toggle_thumb ${isChecked ? 'checked' : ''}`} />
        </div>
      </div>
    </div>
  );
};
