import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <div>
        <SectionTitle
          subHeading={"What our client say"}
          Heading={"Testimonials"}
        ></SectionTitle>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        //   pagination={{
        //     clickable: true,
        //   }}
        navigation={true}
        modules={[Keyboard, Navigation]}
        className="mySwiper"
      >
        {review.map((item) => (
          <SwiperSlide key={item._id}>
            <div>
              <div className="flex justify-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={item.rating}
                  readOnly
                />
              </div>
              <p className="text-center px-12 py-12">{item.details}</p>
              <h2 className="text-center text-2xl text-yellow-600">
                {item.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
