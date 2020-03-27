import React from "react";
import { RouteComponentProps } from "@reach/router";
import Layout from "../../components/Layout";
import Exercice from "../../components/Excercice";
import { Paragraph } from "../../components/Theme";
import SumNumbers from "../../components/arithmetic/SumNumbers";
import { randomDigit } from "../../lib/random";

const size = 2;
const centena = () => randomDigit() * 100;

const Suma3: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Suma centenas" subtitle="Cálculo mental">
      <Exercice
        render={exercice => (
          <SumNumbers size={size} generateNumber={centena} {...exercice} />
        )}
      >
        <Paragraph>Suma 2 centenas más rápido que puedas</Paragraph>
      </Exercice>
    </Layout>
  );
};

export default Suma3;
