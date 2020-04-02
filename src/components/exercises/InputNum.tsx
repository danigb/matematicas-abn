import React from "react";

type InputProps = {
  className?: string;
  pos: number;
  value: string;
  expected: string;
  onChange: (value: string) => void;
};
type InputState = "empty" | "valid" | "invalid";

const BORDER: Record<InputState, string> = {
  empty: "border-orange-300",
  valid: "border-green-500",
  invalid: "border-purple-500"
};
const BACKGROUND: Record<InputState, string> = {
  empty: "bg-white",
  valid: "bg-green-200",
  invalid: "bg-purple-200"
};

const InputNum: React.FC<InputProps> = ({
  className,
  pos,
  expected,
  value,
  onChange
}) => {
  const state: InputState = !value
    ? "empty"
    : value === expected
    ? "valid"
    : "invalid";
  return (
    <input
      type="number"
      className={`${className} px-1 border-t-4 border-b-4 ${BORDER[state]} ${BACKGROUND[state]}`}
      onKeyDown={handleEnter}
      value={value}
      onChange={e => onChange(e.target.value)}
      tabIndex={pos + 1}
      autoFocus={pos === 0}
    />
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
