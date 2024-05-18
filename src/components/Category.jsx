import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../src/assets/home/slide1.jpg";
import img2 from "../../src/assets/home/slide2.jpg";
import img3 from "../../src/assets/home/slide3.jpg";
import img4 from "../../src/assets/home/slide4.jpg";
import img5 from "../../src/assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "./SectionTitle";

function Category() {
  return (
    <div className="pb-20 max-w-7xl mx-auto px-32 pt-14">
      <SectionTitle
        subTitle={"From 11:00am to 11:00pm"}
        title={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" relative">
            <img src={img1} alt="" />
            <h4 className=" text-white font-medium absolute bottom-2  left-8  shadow-lg text-center">
              SALADS
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" relative">
            <img src={img2} alt="" />
            <h4 className=" text-white font-medium absolute bottom-2  left-8  shadow-lg text-center">
              SOUPS
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" relative">
            <img src={img3} alt="" />
            <h4 className=" text-white font-medium absolute bottom-2  left-8  shadow-lg text-center">
              PIZZAS
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" relative">
            <img src={img4} alt="" />
            <h4 className=" text-white font-medium absolute bottom-2  left-8  shadow-lg text-center">
              DESERTS
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" relative">
            <img src={img5} alt="" />
            <h4 className=" text-white font-medium absolute bottom-2  left-8  shadow-lg text-center">
              SALADS
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" relative">
            <img src={img2} alt="" />
            <h4 className=" text-white font-medium absolute bottom-2  left-8  shadow-lg text-center">
              SALADS
            </h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Category;
