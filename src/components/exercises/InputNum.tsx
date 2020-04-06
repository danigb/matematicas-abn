import React from "react";

export type InputState = "empty" | "valid" | "invalid";

type InputProps = {
  className?: string;
  pos: number;
  value: string;
  state: InputState;
  onChange?: (value: string) => void;
};

const BORDER: Record<InputState, string> = {
  empty: "border-orange-300",
  valid: "border-green-500",
  invalid: "border-purple-500",
};
const BACKGROUND: Record<InputState, string> = {
  empty: "bg-white",
  valid: "bg-green-200",
  invalid: "bg-purple-200",
};

const InputNum: React.FC<InputProps> = ({
  className = "",
  pos,
  value,
  state,
  onChange,
}) => {
  return (
    <div className={`${className} px-1`}>
      <input
        type="number"
        className={`w-full px-1 border-t-4 border-b-4 ${BORDER[state]} ${BACKGROUND[state]}`}
        onKeyDown={handleEnter}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        tabIndex={pos + 1}
        autoFocus={pos === 0}
      />
    </div>
  );
};
export default InputNum;

function handleEnter(event: React.KeyboardEvent<HTMLInputElement>) {
  if (event.keyCode === 13) {
    const form = (event.target as any).form;
    const index = Array.prototype.indexOf.call(form, event.target);
    const next = form.elements[index + 1];
    if (next) next.focus();
    else event.preventDefault();
  }
}
