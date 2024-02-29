import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessert from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenusCategory from "../MenuCategory/MenusCategory";
import OrderButton from "../../../Utilities/OrderButton";

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
      <Cover
        img={menuImg}
        title={"our menu"}
        details={"Would You Like To Try A Dish"}
      ></Cover>
      <SectionTitle
        Heading={"Today Offer"}
        subHeading={"Don not miss out"}
      ></SectionTitle>
      <MenusCategory items={offered}></MenusCategory>
      <OrderButton title={"Order Your Favourite Food"}></OrderButton>
      <Cover
        img={dessert}
        title={"Dessert"}
        details={"Would  you like to Try a dish"}
      ></Cover>
      <MenusCategory items={desert}></MenusCategory>
      <OrderButton title={"Order Your Favourite Food"}></OrderButton>
      <Cover
        img={soupImg}
        title={"Soup"}
        details={"Would  you like to Try a dish"}
      ></Cover>
      <MenusCategory items={soup}></MenusCategory>
      <Cover
        img={saladImg}
        title={"Salad"}
        details={"Would  you like to Try a dish"}
      ></Cover>
      <MenusCategory items={salad}></MenusCategory>
      <OrderButton title={"Order Your Favourite Food"}></OrderButton>
      <Cover
        img={pizzaImg}
        title={"Pizza"}
        details={"Would  you like to Try a dish"}
      ></Cover>
      <MenusCategory items={pizza}></MenusCategory>
      <OrderButton title={"Order Your Favourite Food"}></OrderButton>
    </div>
  );
};

export default OurMenu;
