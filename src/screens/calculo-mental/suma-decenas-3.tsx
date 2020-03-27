import React from "react";
import { RouteComponentProps } from "@reach/router";
import Layout from "../../components/Layout";
import Exercice from "../../components/Excercice";
import { Paragraph } from "../../components/Theme";
import SumNumbers from "../../components/arithmetic/SumNumbers";
import { randomDigit } from "../../lib/random";

const decena = () => randomDigit() * 10;

const Suma3: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Suma decenas" subtitle="Cálculo mental">
      <Exercice
        render={exercice => (
          <SumNumbers size={2} generateNumber={decena} {...exercice} />
        )}
      >
        <Paragraph>Suma 2 decenas más rápido que puedas</Paragraph>
      </Exercice>
    </Layout>
  );
};

export default Suma3;
