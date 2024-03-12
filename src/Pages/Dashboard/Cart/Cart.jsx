import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdOutlineDelete } from "react-icons/md";

const Cart = () => {
  const [cartItems] = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <SectionTitle
        subHeading="My Cart"
        Heading="Wanna Add More ?"
      ></SectionTitle>
      <div className="flex md:flex justify-evenly mt-8">
        <h2 className="text-3xl font-bold">Total Items: {cartItems.length}</h2>
        <h2 className="text-3xl font-bold">Total Price: ${totalPrice}</h2>
        <button className="btn btn-primary">Pay Now</button>
      </div>
      <div className="overflow-x-auto mt-12">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr className="">
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              {/* <th>Quantity</th> */}
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-lg text-gray-500">{item.name}</td>
                <td className="text-lg text-gray-500">$ {item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    <MdOutlineDelete className="text-2xl text-red-700"></MdOutlineDelete>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
