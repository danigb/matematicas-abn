import React from "react";
import { Link, useLocation } from "@reach/router";
import useBackgroundColor from "../hooks/useBackgroundColor";
import { Header1 } from "./Theme";

type Props = {
  title: string;
  subtitle?: string;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  const { color } = useBackgroundColor();

  const location = useLocation();

  return (
    <div className={`${color} min-h-screen w-full`}>
      <div className={`${color} max-w-xl  m-auto p-6`}>
        {location.pathname !== "/" && <Link to="/">&larr; Volver</Link>}
        <Header1>{title}</Header1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
