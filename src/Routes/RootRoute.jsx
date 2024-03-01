import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu/OurMenu";
import FoodOrder from "../Pages/FoodOrder/FoodOrder";
import Login from "../Pages/Login/Login";

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
    ],
  },
]);

export default router;
