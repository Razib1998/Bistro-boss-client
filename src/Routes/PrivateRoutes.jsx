import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import ClipLoader from "react-spinners/ClipLoader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <ClipLoader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
