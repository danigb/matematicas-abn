import React from "react";
import { RouteComponentProps } from "@reach/router";
import Layout from "../../components/Layout";
import Exercice from "../../components/Excercice";
import { Paragraph } from "../../components/Theme";
import ArithmeticNumbers from "../../components/exercices/ArithmeticNumbers";
import {
  sum,
  randomDigit,
  randomDecena,
  randomCentena,
  shuffle,
} from "../../lib/numbers";

const generate = () =>
  shuffle([randomDigit(), randomDecena(), randomCentena()]);

const Suma3: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Suma unidades, decenas y centenas" subtitle="Cálculo mental">
      <Exercice
        time={3 * 60}
        render={exercice => (
          <ArithmeticNumbers
            generate={generate}
            operation={sum}
            {...exercice}
          />
        )}
      >
        <Paragraph>
          Tienes que sumar decenas, decenas y unidades, lo más rápido que puedas
        </Paragraph>
        <Paragraph>Por ejemplo: 5 + 30 + 400 = 435</Paragraph>
      </Exercice>
    </Layout>
  );
};

export default Suma3;
