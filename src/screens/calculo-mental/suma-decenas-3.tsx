import React from "react";
import { RouteComponentProps } from "@reach/router";
import Layout from "../../components/Layout";
import Exercice from "../../components/Excercice";
import { Paragraph } from "../../components/Theme";
import ArithmeticNumbers from "../../components/exercices/ArithmeticNumbers";
import { sum, randomDecena } from "../../lib/numbers";

const generate = () => [randomDecena(), randomDecena(), randomDecena()];

const Suma3: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Suma 3 decenas" subtitle="Cálculo mental">
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
        <Paragraph>Suma 3 decenas más rápido que puedas</Paragraph>
      </Exercice>
    </Layout>
  );
};

export default Suma3;
