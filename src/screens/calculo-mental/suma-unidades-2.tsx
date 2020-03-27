import React from "react";
import { RouteComponentProps } from "@reach/router";
import Layout from "../../components/Layout";
import Exercice from "../../components/Excercice";
import { Paragraph } from "../../components/Theme";
import SumNumbers from "../../components/arithmetic/SumNumbers";
import { randomInteger } from "../../lib/random";

const size = 2;
const digit = randomInteger(0, 9);

const Suma3: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Suma 3 números" subtitle="Cálculo mental">
      <Exercice
        render={exercice => (
          <SumNumbers size={size} generateNumber={digit} {...exercice} />
        )}
      >
        <Paragraph>Suma 2 números lo más rápido que puedas</Paragraph>
      </Exercice>
    </Layout>
  );
};

export default Suma3;
