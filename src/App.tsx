import React from "react";
import { Router } from "@reach/router";
import Home from "./screens/Home";
import Suma3 from "./screens/calculo-mental/suma-unidades-3";
import Suma2 from "./screens/calculo-mental/suma-unidades-2";
import SumaDecenas2 from "./screens/calculo-mental/suma-decenas-2";
import SumaDecenas3 from "./screens/calculo-mental/suma-decenas-3";
import SumaCentenas2 from "./screens/calculo-mental/suma-centenas-2";
import SumaCentenas3 from "./screens/calculo-mental/suma-centenas-3";

const App: React.FC = () => {
  return (
    <Router>
      <Home path="/" />
      <Suma3 path="calculo-mental/suma-unidades-2" />
      <Suma2 path="calculo-mental/suma-unidades-3" />
      <SumaDecenas2 path="calculo-mental/suma-decenas-2" />
      <SumaDecenas3 path="calculo-mental/suma-decenas-3" />
      <SumaCentenas2 path="calculo-mental/suma-centenas-2" />
      <SumaCentenas3 path="calculo-mental/suma-centenas-3" />
    </Router>
  );
};

export default App;
