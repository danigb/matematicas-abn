import React, { useState, useRef } from "react";

type Props = {
  className?: string;
  onChange: (newValue: string) => void;
  onSubmit: () => void;
  value: string;
  reference: React.MutableRefObject<HTMLInputElement>;
  autoFocus?: boolean;
};

const NumberInput: React.FC<Props> = ({
  className,
  value,
  onChange,
  onSubmit,
  reference,
  autoFocus
}) => {
  return (
    <input
      ref={reference}
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
  const reference = useRef<HTMLInputElement>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const clear = () => {
    setValue("");
    if (reference.current) {
      reference.current.focus();
    }
  };

  return { value, onChange, clear, reference };
}

export default NumberInput;
