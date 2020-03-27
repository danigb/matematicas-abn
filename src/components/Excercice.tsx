import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Actions, Button, Property } from "./Theme";
import useBackgroundColor from "../hooks/useBackgroundColor";
import { Link } from "@reach/router";
import Counter, { useCounter } from "./Counter";

export type ExerciceProps = {
  step: number;
  setSolved: (solved: boolean) => void;
  nextStep: () => void;
};

type Props = {
  render: React.FC<ExerciceProps>;
};

const Exercice: React.FC<Props> = ({ children, render }) => {
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isCurrentValid, setIsCurrentValid] = useState(false);
  const { setBackground } = useBackgroundColor();
  const { points, seconds, startTimer } = useCounter();

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
    [setBackground, setIsCurrentValid],
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

  const current = useMemo(() => {
    return step ? render({ step, setSolved, nextStep }) : null;
  }, [step, render, setSolved, nextStep]);

  return (
    <div>
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
          <Counter points={points} seconds={seconds} />

          {current}
          <Actions>
            <Button onClick={nextStep} disabled={!isCurrentValid}>
              Siguiente
            </Button>
          </Actions>
        </div>
      ) : (
        <div>
          <Counter points={points} seconds={seconds} />
          {children}
          <Actions>
            <Button onClick={start}>Empezar</Button>
          </Actions>
        </div>
      )}
    </div>
  );
};

export default Exercice;
