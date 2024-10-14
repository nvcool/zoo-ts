import * as Dialog from "@radix-ui/react-dialog";
import closed from "@assets/closed.svg";
import { Button } from "./ui/Button";

interface ISpasiboModalProps {
  children: string;
}

export const SpasiboModal = ({ children }: ISpasiboModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="mb-14 sm:mb-[100px] w-[358px] sm:w-[496px]">
          {children}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className=" bg-[#73aadda3] inset-0 fixed backdrop-blur-[5px]" />
        <Dialog.Content className=" bg-background top-[160px] left-1/2 fixed max-w-[848px] w-full -translate-x-1/2 text-center p-10 rounded-[60px]">
          <Dialog.Title className="text-[64px] font-shantell">
            Ваша анкета <br />
            отправлена
          </Dialog.Title>
          <Dialog.Description className="text-lg ">
            Мы свяжемся с вами в ближайшее время
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className="absolute top-6 right-6 opacity-60" aria-label="">
              <img src={closed} alt="" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
