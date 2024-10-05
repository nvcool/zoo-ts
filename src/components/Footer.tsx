import vk from "@assets/vk.svg";
import telegram from "@assets/telegram.svg";

export const Footer = () => {
  return (
    <footer className="container border-t-[1px] border-darkBlue border-opacity-65 py-8 sm:py-14 text-[18px] text-center">
      <p className=" mb-6 sm:mb-4">
        АНО ПО СОХРАНЕНИЮ ПРИРОДНЫХ И СЕМЕЙНЫХ ЦЕННОСТЕЙ ЛАМПУШКА - ЗАПОВЕДНЫЙ
        МИР.
      </p>
      <p className=" mb-8 sm:mb-6 ">
        ОГРН 1224700016133, ИНН 4704112036 и КПП 470401001
      </p>
      <p className="mb-6">
        Ленинградская обл, Приозерский р-н, <br /> с/п Раздольевское, тер. Ланс,
        зд. 1. <br />
        198261
      </p>
      <a href="tel: +77777777">+7 (777)-77-77</a>
      <div className="flex justify-center gap-[20px] sm:gap-6 mt-6">
        <a href="*">
          <img className=" h-10 w-10" src={vk} alt="" />
        </a>
        <a href="*">
          <img className=" h-10 w-10" src={telegram} alt="" />
        </a>
      </div>
    </footer>
  );
};
