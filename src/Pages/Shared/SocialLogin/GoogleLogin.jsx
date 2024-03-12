import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { axiosPublic } from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      const user = result.user;
      const userInfo = {
        email: user?.email,
        name: user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="p-4">
      <div className="divider divider-neutral font-bold">Or</div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full  mt-4 mb-6"
      >
        <FaGoogle className="text-blue-500 text-xl"></FaGoogle>
        <span className="text-blue-500 text-l">Login With Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
