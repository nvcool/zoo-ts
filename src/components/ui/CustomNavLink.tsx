import { NavLink } from "react-router-dom";

interface ICustomNavLinkProps {
  className?: string;
  children?: JSX.Element[] | string;
  to: string;
}

export const CustomNavLink = ({
  children,
  to,
  className,
}: ICustomNavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return `link ${isActive ? "link--active" : ""} ${className || ""}`;
      }}
      to={to}>
      {children}
    </NavLink>
  );
};
