import SectionTitle from "../../components/SectionTitle/SectionTitle";
import img from "../../assets/home/featured.jpg";

import "./Feature.css";

const FeaturedMenu = () => {
  return (
    <div className="feature-item bg-fixed text-black pt-6 my-20">
      <div>
        <SectionTitle
          subHeading={"Check It Out"}
          Heading={"Featured Menus"}
        ></SectionTitle>
      </div>
      <div className=" md:flex justify-center items-center gap-8 ">
        <div className="w-[500px] h-[400px]">
          <img src={img} alt="" />
        </div>
        <div>
          <h4 className="text-lg font-semibold"> March 20, 2025</h4>
          <h2 className="text-2xl font-bold">Where Can I get Some ?</h2>
          <p className="mb-4 mt-2">
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.
            Sunt quo ipsam id atque hic <br /> qui, quisquam totam aliquid
            recusandae soluta.
          </p>
          <button className="btn btn-outline border-o border-b-4">
            {" "}
            Read More{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMenu;
