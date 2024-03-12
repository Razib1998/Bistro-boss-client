import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
import GoogleLogin from "../Shared/SocialLogin/GoogleLogin";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const LoggedUser = result.user;
        updateUserProfile(data.name, data.photURL).then(() => {
          const userInfo = {
            email: data.email,
            name: data.name,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                title: "User Created Successfully",
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
              navigate("/");
            }
          });
        });

        console.log("Logged User", LoggedUser);
      })
      .catch((err) => {
        if (err.message.includes("auth/email-already-in-use")) {
          Swal.fire({
            title: "Email Already Exists!!!",
            icon: "error",
          });
        }
      });
  };
  return (
    <div>
      <div className="hero h-[900px] w-7/8 mx-auto mt-24 bg-[#edeef0]">
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <div className="text-center flex-1 gap-8">
            <img className="w-[650px] h-[450px]" src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-full flex-1 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Type your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="mt-2 text-red-600">
                    Name field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="mt-2 text-red-600">
                    PhotoURL field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="mt-2 text-red-600">
                    Email field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
                  })}
                  name="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "minLength" && (
                  <span className="mt-2 text-red-600">
                    Password must be at least 6 characters
                  </span>
                )}
                {errors.password?.type === "maxlength" && (
                  <span className="mt-2 text-red-600">
                    Password must be less then 20 characters.‚
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="mt-2 text-red-600">
                    Password must be at least one capital letter, one small
                    letter, one number and one special character.
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="text-center p-6">
              <p>
                Already have an account?
                <span>
                  <Link to={"/login"}>
                    <button className="btn btn-link ">Login Now</button>
                  </Link>
                </span>
              </p>
            </div>
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
