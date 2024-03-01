import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();

  const isLogin = location.pathname.includes("/login");

  return (
    <div>
      {isLogin || <Navbar></Navbar>}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {isLogin || <Footer />}
    </div>
  );
};

export default MainLayout;
