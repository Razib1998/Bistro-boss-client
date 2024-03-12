import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      const user = result.user;
      console.log("Google Login User", user);
    });
  };
  return (
    <div className="p-4">
      <div className="divider divider-neutral font-bold">Or</div>
      <button
        onClick={handleGoogleLogin}
        className="  btn btn-outline w-full  mt-4 mb-6"
      >
        <FaGoogle className="text-blue-500 text-xl"></FaGoogle>
        <span className="text-blue-500 text-l">Login With Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
