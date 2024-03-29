import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu/OurMenu";
import FoodOrder from "../Pages/FoodOrder/FoodOrder";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUSers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItem from "../Pages/Dashboard/ManagItem/ManageItem";
import AdminRoutes from "./AdminRoutes";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "our-menu",
        element: <OurMenu />,
      },
      {
        path: "order-food/:category",
        element: <FoodOrder />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // User dashboard
      {
        path: "cart",
        element: <Cart />,
      },
      // Admin Dashboard
      {
        path: "users",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoutes>
            <AddItem />
          </AdminRoutes>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoutes>
            <ManageItem />
          </AdminRoutes>
        ),
      },
      {
        path: "update/:id",
        element: (
          <AdminRoutes>
            <UpdateItem />
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/menus/${params.id}`),
      },
    ],
  },
]);

export default router;
