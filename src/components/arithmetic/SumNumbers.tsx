import React, { useEffect, useState, useMemo } from "react";
import { arrayOf } from "../../lib/random";
import NumberInput, { useNumberInput } from "../NumberInput";
import { ExerciceProps } from "../Excercice";

type Props = ExerciceProps & {
  size: number;
  generateNumber: () => number;
};

const SumNumbers: React.FC<Props> = ({
  setSolved,
  nextStep,
  step,
  size,
  generateNumber,
}) => {
  const rand = useMemo(() => arrayOf(size, generateNumber), [
    size,
    generateNumber,
  ]);

  const [numbers, setNumbers] = useState(rand());
  const input = useNumberInput();

  useEffect(() => {
    console.log("NEW STEP", step);
    setNumbers(rand());
    input.clear();
  }, [step, rand]);

  const isValid = +input.value === numbers.reduce((a, b) => a + b);

  useEffect(() => {
    setSolved(isValid);
  }, [isValid, setSolved]);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (isValid) {
          nextStep();
        }
      }}
    >
      <div className="text-3xl">
        {numbers.join(" + ") + " = "}
        <NumberInput {...input} autoFocus />
      </div>
    </form>
  );
};

export default SumNumbers;
