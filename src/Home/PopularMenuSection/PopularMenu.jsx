import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenusCard from "./MenusCard";

const PopularMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenus(popularMenu);
      });
  }, []);

 

  return (
    <div className="py-12">
      <section className="w-3/12 mx-auto text-center mt-10">
        <SectionTitle
          Heading={"From Our Menu"}
          subHeading={"check it Out"}
        ></SectionTitle>
      </section>
      <div className="grid md:grid-cols-2 gap-8">
        {menus.map((item) => (
          <MenusCard key={item._id} item={item}></MenusCard>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
