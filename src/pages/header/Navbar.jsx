import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger, CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import useAddProducts from "../../hooks/useAddProducts";
export default function Navbar() {
  const { currentUser } = useSelector((state) => state.user);

  // const { addProductsItems } = useSelector((state) => state.addItems);
  // console.log(addProductsItems);
  const { items } = useSelector((state) => state.items);
  // console.log(items);
  const location = useLocation();
  const handleActiveRoute = (route) => {
    if (route === location.pathname) return true;
  };
  const [sideBar, setSideBar] = useState(false);
  const [addProducts] = useAddProducts();
  // console.log(addProducts);
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
        <Link
          className={`mr-5 hover:text-orange-400 ${
            handleActiveRoute("/addedProducts") &&
            "border-b-2 border-orange-400"
          }`}
          to="/checkout"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">
              {items.length}
            </span>
          </div>
        </Link>
        <Link
          className={`mr-5 hover:text-orange-400 ${
            handleActiveRoute("/") && "border-b-2 border-orange-400"
          }`}
          to="/container"
        >
          views
        </Link>
        <Link
          className={`mr-5 hover:text-orange-400 ${
            handleActiveRoute("/products") && "border-b-2 border-orange-400"
          }`}
          to="/products"
        >
          Products
        </Link>
        <Link className="mr-5 hover:text-orange-400" to="/add-user">
          Add Customer
        </Link>

        <Link className="mr-5 hover:text-orange-400" to="/admin">
          admin
        </Link>
        {currentUser ? (
          <Link className="mr-5 hover:text-orange-400" to="/">
            logout
          </Link>
        ) : (
          <Link className="my-3 text-white hover:text-orange-400" to="/login">
            Login
          </Link>
        )}
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
          <Link
            className="my-3 text-white hover:text-orange-400"
            to="/add-user"
          >
            Add Customer
          </Link>
          <Link className="my-3 text-white hover:text-orange-400" to="/">
            Products
          </Link>
          <Link className="my-3 text-white hover:text-orange-400" to="/admin">
            admin
          </Link>
          {currentUser ? (
            <Link className="my-3 text-white hover:text-orange-400" to="/login">
              Logout
            </Link>
          ) : (
            <Link className="my-3 text-white hover:text-orange-400" to="/login">
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
