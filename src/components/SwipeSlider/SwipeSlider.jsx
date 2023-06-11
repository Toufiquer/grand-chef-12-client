// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination, Scrollbar } from "swiper";
import DisplayCenter from "../DisplayCenter/DisplayCenter";
const SwipeSlider = () => {
  return (
    <div className="">
      <div className="w-full text-center"></div>
      <Swiper
        autoplay={true}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          400: { slidesPerView: 1, spaceBetween: 150 },
          768: { slidesPerView: 2, spaceBetween: 50 },
        }}
        freeMode
        centeredSlides
        grabCursor
        centeredSlidesBounds
        modules={[FreeMode, Scrollbar, Pagination]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        {[1, 2, 3, 4, 5, 6, 7, 9, 8]?.map((i) => (
          <SwiperSlide key={i}>
            <DisplayCenter>
              <div className="flex flex-col">
                <h1 className="text-4xl text-center font-bold mb-2">
                  Hello there
                </h1>
                <img
                  src="https://i.ibb.co/BsXpQ0z/sta-je-html.jpg"
                  alt="Logo"
                  loading="lazy"
                />
              </div>
            </DisplayCenter>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex justify-center">
        <div className="btn btn-outline">View More</div>
      </div>
    </div>
  );
};

export default SwipeSlider;
