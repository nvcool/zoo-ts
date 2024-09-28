import { NavLink } from "react-router-dom";

interface ILinkProps {
  to: string;
  children?: JSX.Element | string;
}

export const Link = ({ to, children }: ILinkProps) => {
  return (
    <NavLink className={"button"} to={to}>
      {children}
    </NavLink>
  );
};
