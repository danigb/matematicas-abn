import React, { useEffect, useState, isValidElement } from "react";
import { ExerciseProps } from "../Exercise";
import { rndDigit } from "../../lib/numbers";
import NumberInput, { useNumberInput } from "../NumberInput";

const CountPoints: React.FC<ExerciseProps> = ({
  step,
  nextStep,
  setSolved
}) => {
  const [question, setQuestion] = useState(0);
  const input = useNumberInput();

  const isValid = +input.value === question;

  useEffect(() => {
    input.clear();
    setQuestion(rndDigit());
  }, [step]);

  useEffect(() => {
    setSolved(isValid);
  }, [isValid, setSolved]);

  return (
    <div>
      <div className="flex flex-wrap py-4 ">
        {[...Array(question).keys()].map((_, i) => (
          <div key={i} className="h-8 w-8 rounded-full bg-black mr-8 mt-8" />
        ))}
      </div>
      <NumberInput
        autoFocus
        onSubmit={() => isValid && nextStep()}
        {...input}
      />
    </div>
  );
};

export default CountPoints;
