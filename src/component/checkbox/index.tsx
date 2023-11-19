export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function Checkbox({ checked, label, onChange }: CheckboxProps) {
  // Generate a unique id
  const inputId = "cbx-" + Math.floor(Math.random() * 1000);

  return (
    <div className="checkbox_wrapper">
      <input
        className="inp-cbx"
        id={inputId}
        type="checkbox"
        style={{ display: "none" }}
        checked={checked}
        onChange={onChange}
      />
      <label className="cbx" htmlFor={inputId}>
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
        {label}
      </label>
    </div>
  );
}
