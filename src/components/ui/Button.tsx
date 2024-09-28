import React from "react";
interface IButtonProps {
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  children?: JSX.Element | string;
}

export const Button = React.forwardRef(
  ({ children, className, onClick, type }: IButtonProps, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        onClick={onClick}
        className={`button ${className || ""}`}>
        {children}
      </button>
    );
  }
);
