const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div>
      <div className="card card-compact h-[500px] w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Food" />
        </figure>
        <p className="bg-black text-white absolute right-0 mr-8 mt-6 px-4 rounded-lg">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title flex flex-col items-center">{name}</h2>
          <p className="text-lg text-center">{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline bg-slate-100 border-orange-300 border-o border-b-4">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
