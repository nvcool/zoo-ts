import { Button } from "./ui/Button";
import flowers from "@assets/background/flowers.png";
import vk from "@assets/vk.svg";

export const SubscribeForm = () => {
  return (
    <div className="container">
      <h3 className="text-[64px] text-orange text-center mb-14">
        Подписаться на новости
      </h3>
      <div className="text-center mb-8 text-lg">
        Узнавайте о наших событиях{" "}
        <strong className="font-semibold leading-[140%]">первыми</strong>
      </div>
      <form className="grid gap-6 relative mb-8 justify-items-center">
        <input
          className=" rounded-[30px] py-[22px] max-w-[496px] w-[100%] text-center"
          type="text"
          placeholder="Как вас зовут?"
          required
        />
        <input
          className="rounded-[30px] py-[22px] max-w-[496px] w-[100%] text-center"
          type="email"
          placeholder="Ваш email"
          required
        />
        <img className=" absolute bottom-0 -z-10" src={flowers} alt="" />
        <Button type="button" className="relative ">
          Подписаться
        </Button>
      </form>
      <div className="mb-10">
        <p className=" text-lg text-center mb-14">
          Нажимая на кнопку, вы даете <br />{" "}
          <a className="text-yellow" href="#">
            согласие на обработку персональных данных.
          </a>
        </p>
        <p className="text-lg text-center">
          Вы также можете узнавать наши новости из группы Вконтакте. Мы
          регулярно обновляем нашу ленту новостей, радуя подписчиков новыми
          интересными публикациями.
        </p>
      </div>
      <a
        href="/news"
        className="mb-[100px] bg-white text-darkBlue flex gap-4 leading-[140%] text-lg w-[496px] justify-center py-[18px] rounded-[30px] mx-auto">
        Наша группа ВКонтакте
        <img className="w-8 h-8" src={vk} />
      </a>
    </div>
  );
};
