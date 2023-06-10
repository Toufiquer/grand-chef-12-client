// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";
import DisplayCenter from "../DisplayCenter/DisplayCenter";
const SwipeSlider = () => {
  return (
    <div className="">
      <div className="w-full text-center"></div>
      <Swiper
        spaceBetween={2}
        slidesPerView={2}
        autoplay={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {/* Slide 1 */}
        <SwiperSlide>
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
        {/* Slide 1 */}
        <SwiperSlide>
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
        {/* Slide 1 */}
        <SwiperSlide>
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
        {/* Slide 1 */}
        <SwiperSlide>
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
        {/* Slide 1 */}
        <SwiperSlide>
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
        {/* Slide 1 */}
        <SwiperSlide>
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
      </Swiper>
      <div className="w-full flex justify-center">
        <div className="btn btn-outline">View More</div>
      </div>
    </div>
  );
};

export default SwipeSlider;
