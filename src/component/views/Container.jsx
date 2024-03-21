import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

export default function Container() {
  return (
    <div className="max-w-xl sm:max-w-6xl mx-auto p-2 flex flex-col sm:flex-row gap-4">
      <Helmet>
        <title>registration</title>
      </Helmet>
      <div className="w-full sm:w-1/3 md:w-1/4  ">
        <div className="bg-white p-4 shadow-md rounded-lg flex flex-col gap-6">
          <Link to="/email-pass" className="text-xs font-semibold mb-2">
            Email and pass registration
          </Link>
          <Link
            to="/container/registration/signup"
            className="text-xs font-semibold mb-2"
          >
            Registration with mobile
          </Link>
        </div>
      </div>
      <div className=" w-full sm:w-2/3 md:w-3/4  ">
        <Outlet />
      </div>
    </div>
  );
}
