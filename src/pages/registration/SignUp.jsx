import React from "react";

export default function SignUp() {
  return (
    <div className="w-full">
      <h1 className="text-center my-8 text-slate-800 font-semibold">
        SignUp with Mobile
      </h1>
      <div className="">
        <form className="flex flex-col gap-6 items-center justify-center">
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="******************"
            className="input input-bordered w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
}
