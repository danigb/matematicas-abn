import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Helmet from "react-helmet";

const Layout: React.FC = ({ children }) => (
  <div className="flex flex-col min-h-screen text-gray-900 font-cursive">
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Delius&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <main className="flex flex-col flex-1 mx-auto max-w-4xl px-4 py-8 md:p-8 w-full">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
