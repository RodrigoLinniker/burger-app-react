import { TbCaretLeft, TbCaretRight } from "react-icons/tb";
import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";

interface SwiperAlimentosProps {
  children: React.ReactNode;
}

export function SwiperAlimentos({ children }: SwiperAlimentosProps) {
  return (
    <div className="w-full max-w-[1544px] max-md:max-w-[450px] mx-auto flex max-lg:mt-10 mt-28 items-center justify-center">
      <div className="swiper-button-prev-unique cursor-pointer">
        <TbCaretLeft size={48} className="text-[#5243C2]" />
      </div>
      <Swiper
        slidesPerView={2}
        slidesPerGroup={2}
        loopFillGroupWithBlank={true}
        navigation={{
          nextEl: ".swiper-button-next-unique",
          prevEl: ".swiper-button-prev-unique",
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1280: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1440: {
            slidesPerView: 8,
            slidesPerGroup: 8,
          },
        }}
        mousewheel={true}
        modules={[Pagination, Navigation]}
        className="w-full"
      >
        {children}
      </Swiper>
      <div className="swiper-button-next-unique  cursor-pointer ">
        {" "}
        <TbCaretRight size={48} className="text-[#5243C2]" />
      </div>
    </div>
  );
}
