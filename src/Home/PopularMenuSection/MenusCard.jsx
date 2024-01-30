const MenusCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex space-x-4">
      <img style={{borderRadius:'0 200px 200px 200px'}} src={image} className="w-[100px]" />
      <div>
        <h3 className="font-bold">{name}-----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenusCard;
