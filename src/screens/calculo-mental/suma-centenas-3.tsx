import React from "react";
import { RouteComponentProps } from "@reach/router";
import Layout from "../../components/Layout";
import Exercice from "../../components/Excercice";
import { Paragraph } from "../../components/Theme";
import ArithmeticNumbers from "../../components/exercices/ArithmeticNumbers";
import { sum, randomCentena } from "../../lib/numbers";

const generate = () => [randomCentena(), randomCentena(), randomCentena()];

const Suma3: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Suma 3 centenas" subtitle="Cálculo mental">
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
        <Paragraph>Suma 2 centenas más rápido que puedas</Paragraph>
      </Exercice>
    </Layout>
  );
};

export default Suma3;
