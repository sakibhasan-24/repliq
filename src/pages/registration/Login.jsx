import React, { useState } from "react";

import bcryptjs from "bcryptjs";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);
  const userDetails = JSON.parse(sessionStorage.getItem("userInfo"));
  if (!userDetails) {
    navigate("/container/registration/signup");
    toast.error("Please Register First");
    return;
  }
  console.log(userDetails);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const validPassword = bcryptjs.compareSync(password, userDetails.password);
    if (!validPassword) {
      toast.error("Invalid Credentials");
      setLoading(false);
      return;
    }
    if (phoneNumber !== userDetails.phoneNumber) {
      setLoading(false);
      toast.error("Invalid Credentials");
      return;
    }
    // save for some action(redux)
    dispatch(loginSuccess(userDetails));
    setLoading(false);
    toast.success("Login Successfully");
    navigate("/");
  };
  return (
    <div className="w-full">
      <h1 className="text-center my-8 text-slate-800 font-semibold">
        Login with Mobile
      </h1>
      <div className="">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-6 items-center justify-center"
        >
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="******************"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            disabled={loading}
            value={loading ? "loading....." : "login"}
            className="w-full max-w-xs py-2 rounded-xl cursor-pointer bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
          />
        </form>
      </div>
    </div>
  );
}
