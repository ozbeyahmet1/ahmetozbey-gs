import "./toggle.module.scss";

export interface ToggleProps {
  value: boolean;
  "data-testid"?: string;
  onChange: () => void;
}

export const Toggle = ({ value, onChange, ...props }: ToggleProps) => {
  const mode = value ? "checked" : "";
  return (
    <div className={["toggle_container", mode].join(" ")} onClick={onChange} {...props}>
      <div className={`toggle_track ${value ? "checked" : ""}`}>
        <div className="toggle_thumb--hover">
          <div className={`toggle_thumb ${value ? "checked" : ""}`} />
        </div>
      </div>
    </div>
  );
};
