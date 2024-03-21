import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bcryptjs from "bcryptjs";
import { loginSuccess } from "../../redux/user/userSlice";
export default function EmailPassLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  //   console.log(currentUser);

  const navigate = useNavigate();
  const userDetailsInfo = JSON.parse(sessionStorage.getItem("userInfo"));

  useEffect(() => {
    if (currentUser) toast.success("already you are logged in");
  }, [currentUser]);
  const handleLogin = (e) => {
    e.preventDefault();

    // dispatch(login(email,password));
    if (userDetailsInfo?.email !== email) {
      toast.error("Wrong Crediantials");
      return;
    }
    const validPass = bcryptjs.compareSync(password, userDetailsInfo?.password);
    if (!validPass) {
      toast.error("Wrong Crediantials");
      return;
    }
    // console.log(email, password);
    if (userDetailsInfo?.email === email && validPass) {
      toast.success("Login Successfull");
      dispatch(loginSuccess(userDetailsInfo));
      navigate("/");
    }
  };
  return (
    <div className="w-full">
      <h1 className="text-center my-8 text-slate-800 font-semibold">
        SignUp with Email & password
      </h1>
      <div className="">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-6 items-center justify-center"
        >
          <input
            type="email"
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            required
            type="password"
            placeholder="******************"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value={"login"}
            className="w-full max-w-xs py-2 rounded-xl cursor-pointer bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
          />
        </form>
        <p className="text-center">
          don't have an account?
          <Link className="cursor-pointer hover:text-blue-500" to="/email-pass">
            signup
          </Link>
        </p>
      </div>
    </div>
  );
}
