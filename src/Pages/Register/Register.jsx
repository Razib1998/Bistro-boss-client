import { Link } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                  })}
                  name="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="mt-2 text-red-600">
                    Password must be at least 6 characters
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
