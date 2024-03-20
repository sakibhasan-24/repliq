import React, { useState } from "react";

import bcryptjs from "bcryptjs";
import { toast } from "react-toastify";
export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const userDetails = JSON.parse(sessionStorage.getItem("userInfo"));
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
      toast.error("Invalid Credentials");
      setLoading(false);
      return;
    }
    // save for some action(redux)
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
