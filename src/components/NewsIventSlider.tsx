import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import photo1 from "@assets/news/photo1.jpg";
import photo2 from "@assets/news/photo2.jpg";
import photo3 from "@assets/news/photo3.jpg";
import photo4 from "@assets/news/photo4.jpg";
import photo5 from "@assets/news/photo5.jpg";
import arrow from "@assets/arrow.svg";
import { Navigation } from "swiper/modules";

// Определите тип для фотографий
interface Photo {
  image: string;
}

const photos: Photo[] = [
  {
    image: photo1,
  },
  {
    image: photo2,
  },
  {
    image: photo3,
  },
  {
    image: photo4,
  },
  {
    image: photo5,
  },
];

export const NewsIventSlider: React.FC = () => {
  const navigationPrevRef = useRef<HTMLButtonElement | null>(null);
  const navigationNextRef = useRef<HTMLButtonElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // Состояние для активного индекса

  interface CustomNavigationOptions {
    prevEl?: HTMLElement | null;
    nextEl?: HTMLElement | null;
    // Добавь другие параметры, если необходимо
  }

  return (
    <>
      <Swiper
        breakpoints={{
          390: {
            slidesPerView: 1.3,
            spaceBetween: 0,
          },
          1366: {
            slidesPerView: "auto",
            spaceBetween: 0,
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Обновляем индекс при изменении слайда
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const navigationParams = swiper.params.navigation;

          if (navigationParams && typeof navigationParams !== "boolean") {
            (navigationParams as CustomNavigationOptions).prevEl =
              navigationPrevRef.current;
            (navigationParams as CustomNavigationOptions).nextEl =
              navigationNextRef.current;
          }
        }}
        modules={[Navigation]}
        centeredSlides={true}
        className="h-[316px] w-full relative overflow: visible">
        {photos.map((photo, index) => (
          <SwiperSlide
            key={photo.image}
            className={`flex transition-all duration-100 ${
              index === activeIndex
                ? "w-[496px] h-[316px] mx-8 "
                : "w-[112px] h-[136px] mx-1"
            }`}>
            <img
              className=" object-cover w-full h-full
               rounded-[30px]"
              src={photo.image}
              alt=""
            />
          </SwiperSlide>
        ))}
        <div className="flex items-center justify-between container absolute inset-x-0 bottom-0 z-10">
          <button ref={navigationPrevRef}>
            <img src={arrow} alt="" />
          </button>
          <button ref={navigationNextRef} className=" rotate-180">
            <img src={arrow} alt="" />
          </button>
        </div>
      </Swiper>
    </>
  );
};
