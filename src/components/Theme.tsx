import React from "react";
import cs from "classcat";

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
  <p className="">{children}</p>
);

type Property = {
  className?: string;
  label: string;
};
export const Property: React.FC<Property> = ({
  className,
  label,
  children,
}) => (
  <div className={className}>
    <label>{label}</label>
    {children}
  </div>
);

export const Actions: React.FC = ({ children }) => (
  <div className="mt-4">{children}</div>
);

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};
export const Button: React.FC<ButtonProps> = ({
  disabled,
  children,
  onClick,
}) => (
  <button
    className={cs({
      "px-3 mr-6 rounded-full opacity-50 ": true,
      "bg-transparent border": disabled,
      "bg-white hover:opacity-100": !disabled,
    })}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
