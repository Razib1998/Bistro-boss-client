import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import cart from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { logOut } = useContext(AuthContext);

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
      <NavLink>
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
      <li>
        <button>
          <img className="h-[30px] w-[30px]" src={cart} alt="" />
        </button>
      </li>
      {user?.email ? (
        <>
          <div className="mr-[20px] mt-3">
            <strong>{user?.displayName}</strong>
          </div>
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </>
      ) : (
        <Link to={"/login"}>
          <button className="btn btn-primary">Login</button>
        </Link>
      )}
      <li>
        <button>
          <CgProfile className="w-[25px] h-[25px]"></CgProfile>
        </button>
      </li>
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
