import { NavLink } from "react-router-dom";
import logo from "/src/assets/header/logo.svg";
import { CustomNavLink } from "./ui/CustomNavLink";

const links = [
  {
    text: "о нас",
    link: "/about-us",
  },
  {
    text: "проекты и события",
    link: "/projects",
  },
  {
    text: "новости",
    link: "/news",
  },
  {
    text: "партнеры",
    link: "/partners",
  },
  {
    text: "зоопарк",
    link: "/zoo",
  },
];

export const Header = () => {
  return (
    <header className="container">
      <nav className="flex justify-between mt-7">
        <CustomNavLink to="/" className=" grid justify-items-center">
          <img src={logo} alt="" />
          <span className="font-shantell text-[6.5px] font-medium sm:text-xs">
            "Лампушка"- Заповедный мир"
          </span>
        </CustomNavLink>
        <ul className="flex gap-2 h-fit mt-9">
          {links.map((link) => (
            <li
              className="bg-yellow rounded-[14px] py-1 px-4 uppercase font-medium leading-[normal]"
              key={link.text}>
              <CustomNavLink to={link.link}>{link.text}</CustomNavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
