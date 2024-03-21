import React from "react";
import { Link } from "react-router-dom";

export default function EmailPassLogin() {
  return (
    <div className="w-full">
      <h1 className="text-center my-8 text-slate-800 font-semibold">
        SignUp with Email & password
      </h1>
      <div className="">
        <form
          //   onSubmit={handleFormSubmit}
          className="flex flex-col gap-6 items-center justify-center"
        >
          <input
            type="text"
            placeholder="name"
            className="input input-bordered w-full max-w-xs"
            // onChange={(e)=>{console.log(e.target.value)}
            // onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
            // onChange={(e)=>{console.log(e.target.value)}
            //   onChange={(e) => setPhoneNumber(e.target.value)}
            required
            maxLength={11}
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
          don't have an account?
          <Link className="cursor-pointer hover:text-blue-500" to="/email-pass">
            signup
          </Link>
        </p>
      </div>
    </div>
  );
}
