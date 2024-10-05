import news1 from "@assets/news/news1.jpg";
import news2 from "@assets/news/news2.jpg";
import news3 from "@assets/news/news3.jpg";
import news4 from "@assets/news/news4.jpg";
import news5 from "@assets/news/news5.jpg";
import { SubscribeForm } from "@/components/SubscribeForm";
import { Link } from "react-router-dom";

const news = [
  {
    image: news1,
    text: "Сегодня вновь в Заповедном мире на Лампушке школьники Ленинградской области приняли участие в социальном проекте «Мы в ответе!» \n\n Наш проект создан на средства гранта Губернатора Ленинградской области при поддержке партнёров - «Зоопарка на Лампушке» и базы отдыха «Шишки на Лампушке».",
    button: "Читать подробнее",
  },
  {
    image: news2,
    text: "«Лампушка» - заповедный мир» сегодня принимала гостей из семейных клубов Ленинградской области! Участие в проекте «В гостях у клуба», который проходит в 10 районах Ленинградской области, дает возможность познакомиться с прекрасными людьми, интересными проектами и замечательно провести время в окружении единомышленников!",
    button: "Читать подробнее",
  },
  {
    image: news3,
    text: "Активный выходной день с пользой! \n 17 и 24 сентября учащиеся из нескольких школ Ленинградской области участвовали в мероприятии НКО «Лампушка» - Заповедный мир» в рамках социального проекта «Мы в ответе!», реализуемого на средства гранта Губернатора Ленинградской области.На территории базы «Заповедный мир Шишки на Лампушке» группы ждала насыщенная программа.",
    button: "Читать подробнее",
  },
  {
    image: news4,
    text: "24 сентября группа обучающихся МОУ «Мельниковская СОШ» приняла участие в проекта «Мы в ответе», организованной автономной некоммерческой организацией по сохранению природных и семейных ценностей НКО «Лампушка» - Заповедный мир».",
    button: "Читать подробнее",
  },
  {
    image: news5,
    text: "Сегодня учащиеся 5 «В» класса вместе с кл. рук. Литоминой Евгенией Александровной посетили парк «Шишки на Лампушке» и приняли участие в проекте «Мы в ответе». В программе мероприятия: квест по территории, урок экологии, творческий мастер-класс и экскурсия по самому большому частному Зоопарку в России.",
    button: "Читать подробнее",
  },
];

export const News = () => {
  return (
    <div className=" bg-background-news bg-cover bg-no-repeat pt-[125px] sm:pt-[228px] overflow-hidden">
      <section className="container grid">
        <h1 className="text-[64px] font-shantell text-orange text-center mb-14">
          Наши события
        </h1>
        <ul className="grid gap-8 mb-10">
          {news.map((ivent) => (
            <li
              key={ivent.text}
              className="flex bg-white rounded-[90px] p-4 gap-8">
              <img
                className=" w-[392px] h-[400px] rounded-[90px]"
                src={ivent.image}
                alt=""
              />
              <div className="w-[496px] grid content-around">
                <span className=" whitespace-pre-line text-darkGreen text-lg">
                  {ivent.text}
                </span>
                <Link
                  to={"/news-ivent"}
                  className="text-[22px] font-medium py-[18px] bg-orange text-center rounded-[30px] text-white hover:bg-yellow hover:text-orange transition-colors">
                  {ivent.button}
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <button className="mx-auto text-lg bg-yellow py-5 px-12 rounded-[30px] font-semibold mb-8">
          Показать еще
        </button>
        <ul
          className="flex flex-wrap justify-center mb-[100px]"
          role="navigation"
          aria-label="Pagination">
          <li className="previous disabled">
            <a
              className=" "
              role="button"
              aria-disabled="true"
              aria-label="Previous page"
              rel="prev"></a>
          </li>
          <li className="selected">
            <a
              rel="canonical"
              role="button"
              className="w-12 h-12 flex items-center justify-center rounded-[50%] bg-darkBlue text-white"
              aria-label="Page 1 is your current page"
              aria-current="page">
              1
            </a>
          </li>
          <li>
            <a
              rel="next"
              role="button"
              className="w-12 h-12 flex items-center justify-center rounded-[50%]"
              aria-label="Page 2">
              2
            </a>
          </li>
          <li>
            <a
              role="button"
              className="w-12 h-12 flex items-center justify-center rounded-[50%]"
              aria-label="Page 3">
              3
            </a>
          </li>
          <li>
            <a
              role="button"
              className="w-12 h-12 flex items-center justify-center rounded-[50%]"
              aria-label="Page 8">
              4
            </a>
          </li>
          <li className="flex items-center mx-3">
            <a role="button" className="0" aria-label="Jump forward">
              ...
            </a>
          </li>
          <li>
            <a
              role="button"
              className="w-12 h-12 flex items-center justify-center rounded-[50%]"
              aria-label="Page 9">
              6
            </a>
          </li>
        </ul>
      </section>
      <SubscribeForm />
    </div>
  );
};
