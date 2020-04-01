import React from "react";

type Props = {
  className?: string;
};

export const Header1: React.FC = ({ children }) => (
  <h1 className="text-3xl mb-4 border-gray border-b">{children}</h1>
);
export const Header2: React.FC = ({ children }) => (
  <h1 className="text-2xl mt-2">{children}</h1>
);
export const Header3: React.FC = ({ children }) => (
  <h1 className="text-xl mt-4">{children}</h1>
);
export const Header4: React.FC = ({ children }) => (
  <h1 className="text-xl font-bold mt-4">{children}</h1>
);

export const Paragraph: React.FC = ({ children }) => (
  <p className="my-2">{children}</p>
);

export const Actions: React.FC<Props> = ({ className, children }) => (
  <div className={`${className} flex mt-4`}>{children}</div>
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
    className={`${className} px-6 mr-4 rounded-full
      ${disabled ? "bg-transparent border opacity-50" : "bg-white"}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
