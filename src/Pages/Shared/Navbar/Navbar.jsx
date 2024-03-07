import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { CiShoppingCart } from "react-icons/ci";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { logOut } = useContext(AuthContext);
  const [cartItems] = useCart();

  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire({
        title: "Logout successful",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    });
  };

  const links = (
    <>
      <NavLink>
        <li>
          <button>HOME</button>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <button>CONTACT US</button>
        </li>
      </NavLink>
      <NavLink to={"/dashboard"}>
        <li>
          <button>DASHBOARD</button>
        </li>
      </NavLink>
      <NavLink to={"/our-menu"}>
        <li>
          <button>OUR MENU</button>
        </li>
      </NavLink>
      <NavLink to={"/order-food/salad"}>
        <li>
          <button>ORDERED FOOD</button>
        </li>
      </NavLink>
      <div>
        <Link to={"/dashboard/cart"}>
          <div className="relative mt-2 mx-4">
            <CiShoppingCart className="text-2xl font-black" />
            <span className="absolute right-[-10px] top-[-10px] h-[15px] w-[15px] rounded-full bg-purple-600 flex justify-center items-center text-xs">
              {cartItems.length}
            </span>
          </div>
        </Link>
      </div>
      {user?.email ? (
        <>
          <div className="mx-4 mt-3">
            <strong>{user?.displayName}</strong>
          </div>
          <div className="mx-4 mt-2">
            <button>
              <CgProfile className="w-[25px] h-[25px]"></CgProfile>
            </button>
          </div>
          <button onClick={handleLogout} className="btn btn-primary mx-4">
            Logout
          </button>
        </>
      ) : (
        <Link to={"/login"}>
          <button className="btn btn-primary">Login</button>
        </Link>
      )}
      <li></li>
    </>
  );
  return (
    <div>
      <div className="flex gap-44 fixed z-10 bg-opacity-30 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu mr-52 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className=" navbar-center mr-20 hidden lg:flex">
          <ul className="menu mr-52 menu-horizontal px-1">{links}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
