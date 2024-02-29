const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Food" />
        </figure>
        <p className="bg-black text-white absolute right-0 mr-8 mt-6 px-4 rounded-lg">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
