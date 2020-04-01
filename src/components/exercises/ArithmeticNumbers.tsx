import React, { useEffect, useState } from "react";
import NumberInput, { useNumberInput } from "../NumberInput";
import { ExerciseProps } from "../Exercise";

const defaultQuestionString = (numbers: number[]) =>
  numbers.join(" + ") + " = ";

type Props = ExerciseProps & {
  step: number;
  generate: () => number[];
  operation: (a: number, b: number) => number;
  questionString?: (nums: []) => string;
};

const ArithmeticNumbers: React.FC<Props> = ({
  setSolved,
  nextStep,
  step,
  generate,
  operation,
  questionString
}) => {
  const [numbers, setNumbers] = useState(generate());
  const input = useNumberInput();

  const question = questionString || defaultQuestionString;

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
      <div className="flex flex-col lg:flex-row text-3xl">
        <div className="flex-grow text-right whitespace-no-wrap mr-2">
          {question(numbers)}
        </div>
        <div className="w-full lg:w-1/3 overflow-hidden">
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
