import { Helmet } from "react-helmet-async";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenusCategory from "../MenuCategory/MenusCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Our Menu</title>
      </Helmet>
      <SectionTitle
        Heading={"Today Offer"}
        subHeading={"Don not miss out"}
      ></SectionTitle>
      <MenusCategory items={offered}></MenusCategory>
      <MenusCategory
        title={"dessert"}
        img={dessertImg}
        items={desert}
      ></MenusCategory>
      <MenusCategory title={"soup"} img={soupImg} items={soup}>
        ‚
      </MenusCategory>
      <MenusCategory
        title={"salad"}
        img={saladImg}
        items={salad}
      ></MenusCategory>
      <MenusCategory
        title={"pizza"}
        img={pizzaImg}
        items={pizza}
      ></MenusCategory>
    </div>
  );
};

export default OurMenu;
