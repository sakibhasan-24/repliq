import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className=" flex justify-between items-center">
      <div>
        <Link className="flex items-center" to="">
          <span className="text-orange-400 text-3xl sm:text-6xl font-serif  font-bold">
            REPL
          </span>
          <span className="ml-2 text-2xl font-extrabold">IQ</span>
        </Link>
      </div>
      <div>
        {/* 
           initially not show
           if small it will show
           if click it will open as side bar
           if click close 
        
        */}
      </div>

      <div className="hidden sm:flex font-semibold flex-col sm:flex-row items-center">
        <Link className="mr-5 hover:text-orange-400" to="/">
          Add products
        </Link>
        <Link className="mr-5 hover:text-orange-400" to="/">
          Add Customer
        </Link>
        <Link to="/login" className="mr-5 hover:text-orange-400">
          Login
        </Link>
        <Link className="mr-5 hover:text-orange-400" to="/">
          Products
        </Link>
      </div>
      <CiMenuBurger
        className="text-4xl sm:hidden cursor-pointer"
        onClick={() => setSideBar(!sideBar)}
      />
      {sideBar && (
        <div
          className={`sm:hidden absolute   w-1/3 z-10   bg-slate-700 rounded-md flex flex-col items-center justify-start h-[400px]   ${
            sideBar
              ? "top-0 right-0 duration-1000"
              : "-top-[200px] left-20 duration-1000"
          } `}
        >
          <CiMenuBurger
            className={`text-4xl cursor-pointer mt-4 `}
            onClick={() => setSideBar(!sideBar)}
          />
          <Link className="my-3 text-white hover:text-orange-400" to="/">
            Add Products
          </Link>
          <Link className="my-3 text-white hover:text-orange-400" to="/">
            Add Customer
          </Link>
          <Link className="my-3 text-white hover:text-orange-400" to="/">
            Products
          </Link>
          <Link className="my-3 text-white hover:text-orange-400" to="/login">
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
