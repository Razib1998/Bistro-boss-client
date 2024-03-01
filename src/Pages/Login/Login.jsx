import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import loginImg from "../../assets/others/authentication1.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const capchaRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "User Login Successful",
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
        navigate(from, { replace: true });
      })
      .catch((err) => {
        if (err.message.includes("auth/invalid-credential")) {
          Swal.fire({
            title: "Password Wrong!!!",
            icon: "error",
          });
        }
      });
  };

  const capchaValidation = () => {
    const user_capcha = capchaRef.current.value;
    console.log(user_capcha);
    if (validateCaptcha(user_capcha)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div>
      <div className="hero h-[900px] w-7/8 mx-auto mt-24 bg-[#edeef0]">
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <div className="text-center flex-1 gap-8">
            <img className="w-[650px] h-[450px]" src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-full flex-1 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Capcha</span>
                </label>
                <LoadCanvasTemplate />
                <input
                  onBlur={capchaValidation}
                  type="text"
                  placeholder="Type the above capcha"
                  name="capcha"
                  ref={capchaRef}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button disabled={disabled} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center p-6">
              <p>
                New Here ?
                <span>
                  <Link to={"/register"}>
                    <button className="btn btn-link ">Register Now</button>
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

export default Login;
