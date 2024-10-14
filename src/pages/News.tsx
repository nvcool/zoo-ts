import news1 from "@assets/news/news1.jpg";
import news2 from "@assets/news/news2.jpg";
import news3 from "@assets/news/news3.jpg";
import news4 from "@assets/news/news4.jpg";
import news5 from "@assets/news/news5.jpg";
import { SubscribeForm } from "@/components/SubscribeForm";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 0.9;
  const totalPages = Math.ceil(news.length / itemsPerPage);

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
        {totalPages > 0 && (
          <ul
            className="flex justify-center mb-[100px]"
            role="navigation"
            aria-label="Pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1} className="mx-1">
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-12 h-12 flex items-center justify-center rounded-[50%] ${
                    currentPage === index + 1
                      ? "bg-darkBlue text-white"
                      : "bg-gray-300 text-black"
                  }`}
                  aria-label={`Page ${index + 1}`}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
      <SubscribeForm />
    </div>
  );
};

// import news1 from "@assets/news/news1.jpg";
// import news2 from "@assets/news/news2.jpg";
// import news3 from "@assets/news/news3.jpg";
// import news4 from "@assets/news/news4.jpg";
// import news5 from "@assets/news/news5.jpg";
// import { SubscribeForm } from "@/components/SubscribeForm";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const news = [
//   {
//     image: news1,
//     text: "Сегодня вновь в Заповедном мире на Лампушке школьники Ленинградской области приняли участие в социальном проекте «Мы в ответе!» \n\n Наш проект создан на средства гранта Губернатора Ленинградской области при поддержке партнёров - «Зоопарка на Лампушке» и базы отдыха «Шишки на Лампушке».",
//     button: "Читать подробнее",
//   },
//   {
//     image: news2,
//     text: "«Лампушка» - заповедный мир» сегодня принимала гостей из семейных клубов Ленинградской области! Участие в проекте «В гостях у клуба», который проходит в 10 районах Ленинградской области, дает возможность познакомиться с прекрасными людьми, интересными проектами и замечательно провести время в окружении единомышленников!",
//     button: "Читать подробнее",
//   },
//   {
//     image: news3,
//     text: "Активный выходной день с пользой! \n 17 и 24 сентября учащиеся из нескольких школ Ленинградской области участвовали в мероприятии НКО «Лампушка» - Заповедный мир» в рамках социального проекта «Мы в ответе!», реализуемого на средства гранта Губернатора Ленинградской области.На территории базы «Заповедный мир Шишки на Лампушке» группы ждала насыщенная программа.",
//     button: "Читать подробнее",
//   },
//   {
//     image: news4,
//     text: "24 сентября группа обучающихся МОУ «Мельниковская СОШ» приняла участие в проекта «Мы в ответе», организованной автономной некоммерческой организацией по сохранению природных и семейных ценностей НКО «Лампушка» - Заповедный мир».",
//     button: "Читать подробнее",
//   },
//   {
//     image: news5,
//     text: "Сегодня учащиеся 5 «В» класса вместе с кл. рук. Литоминой Евгенией Александровной посетили парк «Шишки на Лампушке» и приняли участие в проекте «Мы в ответе». В программе мероприятия: квест по территории, урок экологии, творческий мастер-класс и экскурсия по самому большому частному Зоопарку в России.",
//     button: "Читать подробнее",
//   },
// ];

// export const News = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 2; // Количество новостей на странице

//   // Логика для получения текущих новостей
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(news.length / itemsPerPage);

//   return (
//     <div className="bg-background-news bg-cover bg-no-repeat pt-[125px] sm:pt-[228px] overflow-hidden">
//       <section className="container grid">
//         <h1 className="text-[64px] font-shantell text-orange text-center mb-14">
//           Наши события
//         </h1>
//         <ul className="grid gap-8 mb-10">
//           {currentItems.map((ivent) => (
//             <li
//               key={ivent.text}
//               className="flex flex-col sm:flex-row bg-white rounded-[90px] p-4 gap-8">
//               <img
//                 className="w-full sm:w-[392px] h-[400px] rounded-[90px] object-cover"
//                 src={ivent.image}
//                 alt=""
//               />
//               <div className="flex-1 grid content-around">
//                 <span className="whitespace-pre-line text-darkGreen text-lg">
//                   {ivent.text}
//                 </span>
//                 <Link
//                   to={"/news-ivent"}
//                   className="text-[22px] font-medium py-[18px] bg-orange text-center rounded-[30px] text-white hover:bg-yellow hover:text-orange transition-colors">
//                   {ivent.button}
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="flex justify-center mb-8">
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="mx-2 text-lg bg-yellow py-2 px-5 rounded-[30px] font-semibold">
//             Назад
//           </button>
//           <button
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//             disabled={currentPage === totalPages}
//             className="mx-2 text-lg bg-yellow py-2 px-5 rounded-[30px] font-semibold">
//             Далее
//           </button>
//         </div>
//         <ul
//           className="flex justify-center mb-[100px]"
//           role="navigation"
//           aria-label="Pagination">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <li key={index + 1} className="mx-1">
//               <button
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`w-12 h-12 flex items-center justify-center rounded-[50%] ${
//                   currentPage === index + 1
//                     ? "bg-darkBlue text-white"
//                     : "bg-gray-300 text-black"
//                 }`}
//                 aria-label={`Page ${index + 1}`}>
//                 {index + 1}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </section>
//       <SubscribeForm />
//     </div>
//   );
// };
