import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { ClockLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <ClockLoader />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
