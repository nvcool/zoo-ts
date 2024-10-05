// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules

import hand from "@assets/partners/hand.svg";
const partners = [
  {
    image: hand,
    text: `Автономная некоммерческая \n организация \n «Крышечки доброТЫ»`,
  },
  {
    image: hand,
    text: `Автономная некоммерческая \n организация \n «Межрегиональный центр патриотического, социального \n и экологического воспитания \n и заботы о среде обитания»`,
  },
  {
    image: hand,
    text: `Региональная Физкультурно-Спортивная Общественная Организация «Федерация Воздухоплавательного Спорта Ленинградской Области»`,
  },
  {
    image: hand,
    text: `Автономная некоммерческая организация \n «Семейно-молодежное сообщество»`,
  },
  {
    image: hand,
    text: `Аэроклуб «Воздух»`,
  },
  {
    image: hand,
    text: `Общество с ограниченной ответственностью «Бюро образовательных проектов \n и программ «Лампа» `,
  },
];

export default function SwiperPartners() {
  return (
    <>
      <div className="">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={16}
          centeredSlides={true}
          //   initialSlide={2}
          className="mySwiper flex sm:hidden overflow-visible">
          <ul className="leading-[140%] ">
            {partners.map((partner) => (
              <SwiperSlide key={partner.text} className="">
                <li className=" odd:bg-white rounded-[30px] flex flex-col items-center gap-4 pt-6 px-4 h-[363px] sm:h-[284px] w-[264px]">
                  <img className="w-fit" src={partner.image} alt="" />
                  <span className="font-semibold whitespace-pre-line text-center">
                    {partner.text}
                  </span>
                </li>
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>

      <div className="">
        <ul className=" hidden grid-cols-3 leading-[140%] sm:grid">
          {partners.map((partner) => (
            <li
              key={partner.text}
              className=" odd:bg-white rounded-[30px] flex flex-col items-center gap-4 pt-4 px-6 h-[284px]">
              <img className="w-fit" src={partner.image} alt="" />
              <span className="font-semibold whitespace-pre-line text-center">
                {partner.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
