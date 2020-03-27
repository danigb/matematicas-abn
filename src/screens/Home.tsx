import React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import Layout from "../components/Layout";
import { Header2, Header3 } from "../components/Theme";
import useBackgroundColor from "../hooks/useBackgroundColor";

type ItemProps = {
  to?: string;
};

const Item: React.FC<ItemProps> = ({ to, children }) => (
  <li>
    {to ? (
      <Link to={to}>{children}</Link>
    ) : (
      <p className="opacity-50">{children} (próximamente)</p>
    )}
  </li>
);

const Home: React.FC<RouteComponentProps> = () => {
  useBackgroundColor();
  return (
    <Layout title="Matemáticas ABN">
      <Header2>Cálculo mental</Header2>
      <Header3>Números</Header3>
      <ul>
        <Item>Amigos del 10 (Amigo del 6 = 4)</Item>
        <Item>Amigos del 100 (Amigo del 60 = 40)</Item>
        <Item>Descomponer números de tres cifras (138 = 100 + 30 + 8)</Item>
        <Item>Descomponer números cuatro cifras (138 = 100 + 30 + 8)</Item>
      </ul>
      <Header3>Sumas</Header3>
      <ul>
        <Item to="/calculo-mental/suma-unidades-2">
          Suma 2 unidades (4 + 5 = 9)
        </Item>
        <li>
          <Link to="/calculo-mental/suma-unidades-3">
            Suma 3 números (7 + 8 + 4 = 19)
          </Link>
        </li>
        <li>
          <Link to="/calculo-mental/suma-decenas-2">
            Suma 2 decenas (20 + 40 = 60)
          </Link>
        </li>
        <li>
          <Link to="/calculo-mental/suma-decenas-3">
            Suma 3 decenas (20 + 50 + 40 = 110)
          </Link>
        </li>
        <li>
          <Link to="/calculo-mental/suma-centenas-2">
            Suma 2 centenas (100 + 400 = 500)
          </Link>
        </li>
        <li>
          <Link to="/calculo-mental/suma-centenas-3">
            Suma 3 centenas (100 + 300 + 200 = 600)
          </Link>
        </li>
        <Item to="/calculo-mental/suma-unidades-decenas-centenas">
          Suma unidades, decenas y centenas (7 + 80 + 300 = 380)
        </Item>
      </ul>
      <Header3>Restas</Header3>
      <ul>
        <Item to="/calculo-mental/suma-2-unidades">
          Resta unidades (6 - 2 = 4)
        </Item>
      </ul>
      <Header3>Multiplicaciones</Header3>
      <ul>
        <Item>Multiplicar por 2 (7 x 2 = 14)</Item>
        <Item>Multiplicar dos unidades (7 x 3 = 21)</Item>
      </ul>
    </Layout>
  );
};

export default Home;
