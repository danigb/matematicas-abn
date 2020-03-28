import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-gray-900">
    <Header />

    <main className="flex flex-col flex-1 mx-auto max-w-4xl px-4 py-8 md:p-8 w-full">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
