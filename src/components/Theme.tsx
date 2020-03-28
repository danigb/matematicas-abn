import React from "react";

export const Header1: React.FC = ({ children }) => (
  <h1 className="text-3xl mb-4">{children}</h1>
);
export const Header2: React.FC = ({ children }) => (
  <h1 className="text-2xl mt-2">{children}</h1>
);
export const Header3: React.FC = ({ children }) => (
  <h1 className="text-xl mt-4">{children}</h1>
);

export const Paragraph: React.FC = ({ children }) => (
  <p className="my-2">{children}</p>
);

export const Actions: React.FC = ({ children }) => (
  <div className="mt-4">{children}</div>
);

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};
export const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  children,
  onClick
}) => (
  <button
    className={`${className} px-3 mr-6 rounded-full
      ${disabled ? "bg-transparent border opacity-50" : "bg-white"}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
