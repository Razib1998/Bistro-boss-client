import MenusCard from "../../../Home/PopularMenuSection/MenusCard";

const MenusCategory = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 py-12">
        {items.map((item) => (
          <MenusCard key={item._id} item={item}></MenusCard>
        ))}
      </div>
    </div>
  );
};

export default MenusCategory;
