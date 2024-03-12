import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-[300px] p-8 bg-[#D1A054] min-h-screen">
        <div className="mb-8 mt-12 flex ml-3 items-center uppercase">
          <a className="btn btn-ghost text-xl">
            BISTRO BOSS <br />
            Restaurant
          </a>
        </div>
        <ul className="menu">
          {isAdmin ? (
            <>
              <li className="text-lg">
                <NavLink to={"/dashboard/adminHome"}>
                  <span className="text-lg">
                    <FaHome />
                  </span>
                  Admin Home
                </NavLink>
              </li>
              <li className="text-lg my-2">
                <NavLink to={"/dashboard/addItems"}>
                  <span>
                    <FaUtensils />
                  </span>
                  Add Items
                </NavLink>
              </li>
              <li className="text-lg my-2">
                <NavLink to={"/dashboard/manageItems"}>
                  <span>
                    <FaList />
                  </span>
                  Manage Items
                </NavLink>
              </li>
              <li className="text-lg my-2">
                <NavLink to={"/dashboard/manageBookings"}>
                  <span>
                    <FaBook />
                  </span>
                  Manage Bookings
                </NavLink>
              </li>
              <li className="text-lg my-2 mb-8">
                <NavLink to={"/dashboard/users"}>
                  <span>
                    <FaUsers />
                  </span>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-lg">
                <NavLink to={"/dashboard/home"}>
                  <span className="text-lg">
                    <FaHome />
                  </span>
                  User Home
                </NavLink>
              </li>
              <li className="text-lg my-2">
                <NavLink to={"/dashboard/reservation"}>
                  <span>
                    <FaCalendar />
                  </span>
                  Reservation
                </NavLink>
              </li>
              <li className="text-lg my-2">
                <NavLink to={"/dashboard/cart"}>
                  <span>
                    <FaShoppingCart />
                  </span>
                  My Cart
                </NavLink>
              </li>
              <li className="text-lg my-2">
                <NavLink to={"/dashboard/review"}>
                  <span>
                    <FaAd />
                  </span>
                  Add A Review
                </NavLink>
              </li>
              <li className="text-lg my-2 mb-8">
                <NavLink to={"/dashboard/bookings"}>
                  <span>
                    <FaCalendar />
                  </span>
                  My Bookings
                </NavLink>
              </li>
            </>
          )}

          <div className="divider divider-neutral"></div>

          {/* Shared nav */}
          <li className="text-lg my-2 mt-8">
            <NavLink to={"/"}>
              <span>
                <FaHome />
              </span>
              Home
            </NavLink>
          </li>
          <li className="text-lg my-2">
            <NavLink to={"/our-menu"}>
              <span>
                <FaList />
              </span>
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
