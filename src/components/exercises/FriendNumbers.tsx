import React, { useState, useEffect } from "react";
import { ExerciseProps } from "../Exercise";
import NumberInput, { useNumberInput } from "../NumberInput";

type Props = ExerciseProps & {
  generate: () => number;
  solution: (n: number) => number;
};

const FriendNumbers: React.FC<Props> = ({
  setSolved,
  nextStep,
  step,
  generate,
  solution
}) => {
  const [question, setQuestion] = useState(generate());
  const input = useNumberInput();

  useEffect(() => {
    setQuestion(generate());
    input.clear();
  }, [step, generate]);

  const isValid = +input.value === solution(question);

  useEffect(() => {
    setSolved(isValid);
  }, [isValid, setSolved]);

  return (
    <form
      className="flex flex-wrap"
      onSubmit={e => {
        e.preventDefault();
        if (isValid) {
          nextStep();
        }
      }}
    >
      <div className="whitespace-no-wrap mr-4">
        El amigo del {question} es el
      </div>
      <NumberInput
        onSubmit={() => isValid && nextStep()}
        {...input}
        autoFocus
      />
    </form>
  );
};
export default FriendNumbers;
