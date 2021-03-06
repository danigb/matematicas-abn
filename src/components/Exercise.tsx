import React, { useState, useMemo, useCallback } from "react";
import { Actions, Button } from "./Theme";
import { Link } from "@reach/router";
import Counter, { useCounter } from "./Counter";
import useBackgroundColor from "../hooks/useBackgroundColor";

export type ExerciseProps = {
  step: number;
  setSolved: (solved: boolean) => void;
  nextStep: () => void;
};

type Props = {
  time: number;
  render: React.FC<ExerciseProps>;
};

type ExerciceContainerProps = {
  isValid: boolean;
};

export const ExerciceContainer: React.FC<ExerciceContainerProps> = ({
  isValid,
  children
}) => (
  <div
    className={`Exercise my-16 py-8 px-4 border-8 border-black border-l-0 border-r-0 ${
      isValid ? "bg-green-500" : "bg-orange-500"
    }`}
  >
    {children}
  </div>
);

const Exercise: React.FC<Props> = ({ time, render }) => {
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isCurrentValid, setIsCurrentValid] = useState(false);
  const { points, seconds, startTimer } = useCounter(time);
  const { setBackground } = useBackgroundColor();

  const start = useCallback(() => {
    setShowResults(false);
    setStep(1);
    startTimer();
  }, [setShowResults, setStep, startTimer]);

  const setSolved = useCallback(
    (valid: boolean) => {
      setBackground(valid ? "SOLVED" : "NORMAL");
      setIsCurrentValid(valid);
    },
    [setBackground, setIsCurrentValid]
  );

  const running = seconds > 0;

  const nextStep = useCallback(() => {
    if (running) {
      setStep(step + 1);
      setSolved(false);
    } else {
      setShowResults(true);
    }
  }, [step, setStep, setShowResults, setSolved, running]);

  const currentStep = useMemo(() => {
    return step ? render({ step, setSolved, nextStep }) : null;
  }, [step, render, setSolved, nextStep]);

  return (
    <ExerciceContainer isValid={isCurrentValid}>
      {showResults ? (
        <div>
          Has conseguido {step} puntos
          <Actions>
            <Button onClick={start}>Reiniciar</Button>
            <Link to="/">Volver</Link>
          </Actions>
        </div>
      ) : step ? (
        <div>
          <Counter points={step ? step - 1 : 0} seconds={seconds} />

          {currentStep}
          <Actions>
            <Button onClick={nextStep} disabled={!isCurrentValid}>
              Siguiente
            </Button>
          </Actions>
        </div>
      ) : (
        <div>
          <Counter points={points} seconds={seconds} />
          <Actions>
            <Button onClick={start}>Empezar</Button>
          </Actions>
        </div>
      )}
    </ExerciceContainer>
  );
};

export default Exercise;
