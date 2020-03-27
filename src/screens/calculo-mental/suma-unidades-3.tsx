import React from "react";
import { RouteComponentProps } from "@reach/router";
import Layout from "../../components/Layout";
import Exercice from "../../components/Excercice";
import { Paragraph } from "../../components/Theme";
import Arithmetic from "../../components/exercices/ArithmeticNumbers";
import { randomDigitZero, sum } from "../../lib/numbers";

const generate = () => [randomDigitZero(), randomDigitZero()];

const Suma3: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Suma 3 unidades" subtitle="Cálculo mental">
      <Exercice
        time={3 * 60}
        render={exercice => (
          <Arithmetic {...exercice} generate={generate} operation={sum} />
        )}
      >
        <Paragraph>Suma 3 unidades lo más rápido que puedas</Paragraph>
      </Exercice>
    </Layout>
  );
};

export default Suma3;
