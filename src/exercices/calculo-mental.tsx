import React from "react";
import Exercice from "../components/Exercice";
import ArithmeticNumbers from "../components/exercices/ArithmeticNumbers";
import { twoDigits, sum } from "../lib/numbers";

const SumaUnidades: React.FC = () => (
  <Exercice
    time={3 * 60}
    render={exercice => (
      <ArithmeticNumbers {...exercice} generate={twoDigits} operation={sum} />
    )}
  >
    <p>Hello2</p>
  </Exercice>
);
