import * as Dialog from "@radix-ui/react-dialog";
import menu from "@assets/menu.svg";
import closed from "@assets/closed.svg";
import { Link } from "react-router-dom";

export const Modal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="">
        <img className=" opacity-55" src={menu} alt="" />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className=" fixed bg-opacity-60 z-10 bg-darkGreen inset-0" />
      <Dialog.Content className=" bg-background fixed inset-x-0 inset-y-0 px-4 py-6 z-10 flex flex-col-reverse justify-end">
        <Dialog.Title />
        <Dialog.Description className="grid gap-8 mt-8 text-xl leading-[130%] font-medium">
          <Dialog.Close asChild>
            <Link className="" to={"/about-us"}>
              О нас
            </Link>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Link className="" to={"/projects"}>
              Проекты и события
            </Link>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Link className="" to={"/news"}>
              Новости
            </Link>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Link className="" to={"/partners"}>
              Партнеры
            </Link>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Link className="" to={"/zoo"}>
              Зоопарк
            </Link>
          </Dialog.Close>
        </Dialog.Description>
        <Dialog.Close className="" asChild>
          <button className=" opacity-60 w-10 ml-auto" aria-label="Close">
            <img src={closed} alt="" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
