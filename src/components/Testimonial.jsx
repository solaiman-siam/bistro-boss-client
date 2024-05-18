import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating, RatingStar } from "flowbite-react";

function Testimonial() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  });

  return (
    <div>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {review.map((element) => (
          <SwiperSlide key={element._id}>
            {" "}
            <section className="p-6">
              <div className="container max-w-xl mx-auto">
                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                  <img
                    src="https://source.unsplash.com/random/100x100?4"
                    alt=""
                    className="w-20 h-20 rounded-full bg-gray-500 dark:bg-gray-500"
                  />
                  <blockquote className="max-w-lg text-lg italic font-medium text-center">
                    {element.details}
                  </blockquote>
                  <div className="text-center text-gray-400 dark:text-gray-600">
                    <p>{element.name}</p>
                    <p>CEO of Company Co.</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      aria-label="Page 1"
                      className="w-2 h-2 rounded-full bg-gray-50 dark:bg-gray-900"
                    ></button>
                    <button
                      type="button"
                      aria-label="Page 2"
                      className="w-2 h-2 rounded-full bg-gray-600 dark:bg-gray-400"
                    ></button>
                    <button
                      type="button"
                      aria-label="Page 3"
                      className="w-2 h-2 rounded-full bg-gray-600 dark:bg-gray-400"
                    ></button>
                    <button
                      type="button"
                      aria-label="Page 4"
                      className="w-2 h-2 rounded-full bg-gray-600 dark:bg-gray-400"
                    ></button>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
