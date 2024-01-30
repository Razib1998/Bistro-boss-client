import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const RecommendedMenu = () => {
 
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const saladItem = data.filter((item) => item.category === "salad");
        setMenus(saladItem);
      });
  }, []);

  return (
    <div>
      <div className="w-4/12 mx-auto text-center mt-12">
        <SectionTitle
          subHeading={"Should Try"}
          Heading={"Chef Recommends"}
        ></SectionTitle>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {menus.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="my-12">
              <img src={item.image} alt="" />
              <h3 className="text-xl mt-4 font-medium text-center">
                {item.name}
              </h3>
              <p className="text-center mt-4 mb-4">{item.recipe}</p>
              <button className="btn btn-active btn-accent md:w-[400px] mx-auto">
                Add To Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedMenu;
