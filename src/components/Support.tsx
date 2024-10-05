import { Button } from "./ui/Button";

export const Support = () => {
  return (
    <section className="container">
      <h3 className="font-shantell text-[24px] sm:text-[64px] text-center text-orange mb-6 sm:mb-14">
        Как поддержать
      </h3>
      <p className="text-center text-base sm:text-lg mb-6 leading-[140%]">
        В отличие от государственных учреждений мы быстрее и гибче реагируем на
        происходящие изменения, <br />
        сокращаем издержки и делаем все, чтобы наши питомцы были здоровы, сыты и
        ухожены. Вместе с тем, расходы <br /> зоопарка на содержание животных
        составляют около 3 млн рублей ежемесячно.
      </p>
      <p className="text-center text-base sm:text-lg mb-6 leading-[140%]">
        Любое великое дело начинаются с малого: вы можете прийти в зоопарк в
        качестве волонтера, сделать небольшого пожертвования в пользу зоопарка
        или заключить договор об опеке над животным. Любой человек или компания
        может стать другом нашего зоопарка и его обитателей. Мы всегда открыты
        для предложений.
      </p>
      <p className="text-center text-base sm:text-lg mb-8 leading-[140%]">
        Мы любим природу и обитателей «Зоопарка на Лампушке», животные отвечают
        нам взаимностью.{" "}
        <span className="font-semibold">
          Присоединяйтесь к команде «Зоопарка на Лампушке» и спешите делать
          добрые дела вместе с нами.
        </span>
      </p>
      <button className="bg-yellow hover:bg-[#FBBE14] transition-colors rounded-[14px] py-2 sm:py-1 px-4 uppercase font-medium leading-[normal] block mx-auto mb-8 sm:mb-10 text-[15px]">
        скачать банковские реквизиты нко <br className=" hidden sm:block" />
        «лампушка» - заповедный мир»
      </button>
      <Button className=" mb-14 sm:mb-[100px] w-[358px] sm:w-[496px]">
        Стать частью команды
      </Button>
    </section>
  );
};
