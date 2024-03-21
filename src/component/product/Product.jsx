import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product, handleAddProduct }) {
  const { _id, image, price, offer, category, details, name } = product;
  return (
    <div className="w-[450px] sm:w-full cursor-pointer   mx-auto my-12 border-2 p-2 flex flex-col gap-4 shadow-lg shadow-slate-200 rounded-md">
      <div className="   p-4 rounded-lg flex-grow">
        <img
          className="w-full hover:scale-105 overflow-hidden transition-all duration-500 h-[300px]"
          src={image}
          alt="product"
        />
      </div>
      <div className="flex flex-col mt-2 gap-6 ">
        <h1 className="text-2xl  text-center font-semibold text-gray-700">
          {name}
        </h1>
        <h1 className="text-xs text-center py-2 text-slate-100  rounded-md bg-purple-600 w-1/2 ">
          {category}
        </h1>
        <p className="text-gray-500">{details.slice(0, 100)}...</p>
        <div className="flex items-center flex-grow justify-between mt-4">
          <p className="text-xl font-semibold text-gray-700">${price}</p>
          {offer && (
            <p className="text-xl font-semibold text-green-500 ">
              {offer}% offer
            </p>
          )}
        </div>
        <div className="flex items-center justify-end gap-6">
          <button
            onClick={() => handleAddProduct(product)}
            className="w-1/2 bg-indigo-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-indigo-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
          <Link
            className="w-1/2 bg-orange-900 text-white py-2 px-4 rounded-lg mt-4 hover:bg-orange-600 transition-colors duration-300"
            to={`/details/${_id}`}
          >
            <button>view Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
