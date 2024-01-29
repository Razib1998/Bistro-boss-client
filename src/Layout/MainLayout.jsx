import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const MainLayout = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
        <Footer />
      </div>
    );
};

export default MainLayout;