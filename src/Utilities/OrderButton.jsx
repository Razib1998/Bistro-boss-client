import { Link } from "react-router-dom";

const OrderButton = ({ title }) => {
  return (
    <div className="w-3/12 mx-auto mt-10 mb-10">
      <Link to={"/food-order"}>
        <button className="btn btn-outline border-o border-b-4">{title}</button>
      </Link>
    </div>
  );
};

export default OrderButton;
