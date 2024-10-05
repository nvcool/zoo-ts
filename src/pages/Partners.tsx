import { Support } from "@/components/Support";
import SwiperPartners from "@/components/SwiperPartners";

export const Partners = () => {
  return (
    <div className=" bg-background-partners-mobile sm:bg-background-partners bg-cover bg-no-repeat pt-[125px]  sm:pt-[228px]  px-4 sm:px-0 overflow-hidden">
      <section className=" mb-14 sm:mb-[100px] container">
        <h1 className="font-shantell text-[24px] sm:text-[64px] sm:text-center mb-6 sm:mb-14 text-left">
          Наши партнеры
        </h1>
        <SwiperPartners />
      </section>
      <Support />
    </div>
  );
};
