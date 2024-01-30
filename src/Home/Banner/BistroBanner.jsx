
import img from "../../assets/home/chef-service.jpg"


const BistroBanner = () => {
    return (
      <div className="relative mt-24">
        <img src={img} alt="" />
        <div className="bg-[#FFFFFF] w-[1000px] h-[250px] absolute top-24 left-28 flex flex-col justify-center items-center ">
          <h3 className="text-4xl uppercase font-medium mb-2">Bistro Boss</h3>
          <p className="text-center">
            Indulge in Exquisite Flavors and Culinary Excellence at Our Charming
            Restaurant <br /> A Gastronomic Odyssey Where Passion Meets Palate,
            Unveiling a Symphony of Taste. Immerse Yourself in Unforgettable
            Dining Experiences Crafted with Love, Innovation, and Timeless
            Elegance
          </p>
        </div>
      </div>
    );
};

export default BistroBanner;