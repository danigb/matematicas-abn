import React, { useState } from "react";

type Props = {
  className?: string;
  onChange: (newValue: string) => void;
  onSubmit: () => void;
  value: string;
  autoFocus?: boolean;
};

const NumberInput: React.FC<Props> = ({
  className,
  value,
  onChange,
  onSubmit,
  autoFocus
}) => {
  return (
    <input
      type="number"
      className={`w-full px-1 opacity-50 focus:opacity-100 ${className}`}
      value={value}
      autoFocus={autoFocus}
      onKeyDown={e => (e.keyCode === 13 ? onSubmit() : void 0)}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export function useNumberInput() {
  const [value, setValue] = useState("");

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const clear = () => setValue("");

  return { value, onChange, clear };
}

export default NumberInput;
