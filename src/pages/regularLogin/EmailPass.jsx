import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcryptjs from "bcryptjs";
import { toast } from "react-toastify";
export default function EmailPass() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    if (email.length == 0 || password.length == 0) {
      toast.error("all fields are required");
    }
    const hashedPassword = bcryptjs.hashSync(password);
    sessionStorage.removeItem("userInfo");
    const userDetails = {
      email,
      password: hashedPassword,
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQc8AS8lajjEalCKTTlR9hDnjlSeg0QPubQ&usqp=CAU",
    };
    sessionStorage.setItem("userInfo", JSON.stringify(userDetails));
    toast.success("account created successful");
    setEmail("");
    setPassword("");
    navigate("/email-pass/login");
  };
  return (
    <div className="w-full">
      <h1 className="text-center my-8 text-slate-800 font-semibold">
        SignUp with Email & password
      </h1>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-center justify-center"
        >
          <input
            type="email"
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
            required
            onChange={(e) => setEmail(e.target.value)}
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
            //   disabled={loading}
            //   value={loading ? "loading....." : "sigUp"}

            value={"signup"}
            className="w-full max-w-xs py-2 rounded-xl cursor-pointer bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
          />
        </form>
        <p className="text-center">
          already have an account?
          <Link
            className="cursor-pointer hover:text-blue-500"
            to="/email-pass/login"
          >
            login
          </Link>
        </p>
      </div>
    </div>
  );
}
