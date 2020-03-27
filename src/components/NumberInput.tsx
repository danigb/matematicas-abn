import React, { useState } from "react";
import cs from "classcat";

type Props = {
  onChange: (newValue: string) => void;
  value: string;
  autoFocus?: boolean;
};

const NumberInput: React.FC<Props> = ({ value, onChange, autoFocus }) => {
  return (
    <input
      className={cs("px-1 opacity-50 focus:opacity-100")}
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
