import { Link } from "react-router-dom";
import MenusCard from "../../../Home/PopularMenuSection/MenusCard";
import Cover from "../../Shared/Cover/Cover";

const MenusCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 py-12">
        {items.map((item) => (
          <MenusCard key={item._id} item={item}></MenusCard>
        ))}
      </div>
      <div className="w-3/12 mx-auto mt-10 mb-10">
        <Link to={`/order-food/${title}`}>
          <button className="btn btn-outline border-o border-b-4">
            Order Your Favourite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenusCategory;
