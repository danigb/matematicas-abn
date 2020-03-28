import React, { useEffect, useState } from "react";
import NumberInput, { useNumberInput } from "../NumberInput";
import { ExerciseProps } from "../Exercise";

type Props = ExerciseProps & {
  step: number;
  generate: () => number[];
  operation: (a: number, b: number) => number;
};

const ArithmeticNumbers: React.FC<Props> = ({
  setSolved,
  nextStep,
  step,
  generate,
  operation
}) => {
  const [numbers, setNumbers] = useState(generate());
  const input = useNumberInput();

  useEffect(() => {
    setNumbers(generate());
    input.clear();
  }, [step, generate]);

  const isValid = +input.value === numbers.reduce(operation);

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
      <div className="flex row text-3xl flex-no-wrap">
        <div className="flex-grow text-right whitespace-no-wrap mr-2">
          {numbers.join(" + ") + " = "}
        </div>
        <div className="w-1/3 overflow-hidden">
          <NumberInput
            onSubmit={() => isValid && nextStep()}
            {...input}
            autoFocus
          />
        </div>
      </div>
    </form>
  );
};

export default ArithmeticNumbers;
