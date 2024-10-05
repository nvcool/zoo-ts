import logo from "/src/assets/header/logo.svg";
import { CustomNavLink } from "./ui/CustomNavLink";
import { Modal } from "./Menu";

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
    <header className="container absolute inset-x-0">
      <nav className="flex justify-between mt-7 px-4">
        <CustomNavLink to="/" className=" grid justify-items-center">
          <img
            className="h-16 w-16 sm:h-[124px] sm:w-[124px]"
            src={logo}
            alt=""
          />
          <span className="font-shantell text-[6.5px] font-medium sm:text-xs">
            "Лампушка"- Заповедный мир"
          </span>
        </CustomNavLink>
        <ul className="sm:hidden md:hidden lg:flex gap-2 h-fit hidden mt-9 ">
          {links.map((link) => (
            <li
              className="bg-yellow rounded-[14px] py-1 px-4 uppercase font-medium leading-[normal]"
              key={link.text}>
              <CustomNavLink to={link.link}>{link.text}</CustomNavLink>
            </li>
          ))}
        </ul>
        <div className="sm:flex md:flex lg:hidden my-auto">
          <Modal />
        </div>
      </nav>
    </header>
  );
};
