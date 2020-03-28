import React, { useState } from "react";

type Props = {
  className?: string;
  onChange: (newValue: string) => void;
  value: string;
  autoFocus?: boolean;
};

const NumberInput: React.FC<Props> = ({
  className,
  value,
  onChange,
  autoFocus
}) => {
  return (
    <input
      className={`w-full px-1 opacity-50 focus:opacity-100 ${className}`}
      value={value}
      autoFocus={autoFocus}
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
