// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination, Scrollbar } from "swiper";
import DisplayCenter from "../DisplayCenter/DisplayCenter";
import Loading from "../../pages/Loading/Loading";
import swal from "sweetalert";
const SwipeSlider = ({ isError, error, isLoading, data }) => {
  let content;
  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    swal({
      title: "Ops! Something went wrong",
      text: error,
      icon: "success",
      buttons: true,
      dangerMode: true,
    });
  }
  if (!isLoading && !isError && data?.length === 0) {
    content = (
      <DisplayCenter>
        <h2>Ops! Nothing was Found.</h2>
      </DisplayCenter>
    );
  }
  if (!isLoading && !isError && data?.length > 0) {
    content = (
      <>
        <div className="">
          <div className="w-full text-center"></div>
          <Swiper
            autoplay={true}
            pagination={{
              dynamicBullets: true,
            }}
            breakpoints={{
              400: { slidesPerView: 1, spaceBetween: 150 },
              969: { slidesPerView: 2, spaceBetween: 50 },
              1400: { slidesPerView: 3, spaceBetween: 50 },
            }}
            freeMode
            centeredSlides
            grabCursor
            centeredSlidesBounds
            modules={[FreeMode, Scrollbar, Pagination]}
            className="mySwiper"
          >
            {/* Slide 1 */}
            {data?.map((i, idx) => (
              <SwiperSlide key={i._id}>
                <DisplayCenter>
                  <div className="flex flex-col">
                    <h1 className="text-4xl text-center font-bold mb-2">
                      {i.className || "Instructor " + (idx + 1)}
                    </h1>
                    <img
                      className="max-h-[500px] max-w-[280px]"
                      src={`${
                        i?.photoUrl ||
                        "https://tr-portfolio-0.netlify.app/assets/img/skill-2.jpg"
                      }`}
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
      </>
    );
  }
  return content;
};

export default SwipeSlider;
