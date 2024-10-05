import React from "react";
interface IButtonProps {
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  children?: JSX.Element | string;
}

type Ref = HTMLButtonElement;

export const Button = React.forwardRef<Ref, IButtonProps>(
  ({ children, className, onClick, type }, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        onClick={onClick}
        className={`text-white bg-orange hover:bg-yellow hover:text-orange transition-colors w-[358px] sm:w-[496px] mx-auto block py-[18px] text-[18px] rounded-[30px]  ${
          className || ""
        }`}>
        {children}
      </button>
    );
  }
);
