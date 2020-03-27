import React from "react";
import { Link, useLocation } from "@reach/router";
import { Header1 } from "./Theme";

type Props = {
  title: string;
  subtitle?: string;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  const location = useLocation();

  return (
    <div className={`min-h-screen w-full`}>
      <div className={`max-w-xl  m-auto p-6`}>
        {location.pathname !== "/" && (
          <Link to="/">&larr; Matemáticas ABN</Link>
        )}
        <Header1>{title}</Header1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
