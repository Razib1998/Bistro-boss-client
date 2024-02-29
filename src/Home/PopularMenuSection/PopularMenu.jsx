import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import MenusCategory from "../../Pages/Menu/MenuCategory/MenusCategory";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div className="py-12">
      <section>
        <SectionTitle
          Heading={"From Our Menu"}
          subHeading={"check it Out"}
        ></SectionTitle>
      </section>
      <MenusCategory items={popular}></MenusCategory>
    </div>
  );
};

export default PopularMenu;
