import React from "react";

const Footer: React.FC = ({ children }) => (
  <footer className="bg-orange-500">
    <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-4 text-sm">
      <p className="text-white">
        Hecho con ♥️ ️por madres y padres del CEIP del Huerta de Santa Marina
      </p>

      <p>
        <a
          className="no-underline text-white"
          href="https://github.com/danigb/matematicas-abn"
        >
          Colaborar
        </a>
      </p>
    </nav>
  </footer>
);

export default Footer;
