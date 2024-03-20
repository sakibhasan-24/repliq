import React from "react";
import { Link, Outlet } from "react-router-dom";
import activeRoute from "../../helper/activeRoute";

export default function RegistrationLayout() {
  const activeRouter = activeRoute();
  return (
    <div className="w-full sm:max-w-[500px] bg-slate-100 shadow-2xl shadow-slate-400 rounded-lg p-8 mx-auto">
      <div className="flex items-center justify-center gap-6 font-semibold text-xl text-orange-800">
        <Link
          to="/container/registration/signup"
          className={`${
            activeRouter("/container/registration/signup")
              ? "shadow-lg shadow-slate-900 text-slate-800 px-4 py-2 rounded-lg bg-slate-200"
              : ""
          }`}
        >
          Sign Up
        </Link>
        <Link
          className={`${
            activeRouter("/container/registration/login")
              ? "shadow-lg shadow-slate-900 text-slate-800 px-4 py-2 rounded-lg bg-slate-200"
              : ""
          }`}
          to="/container/registration/login"
        >
          Login
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
