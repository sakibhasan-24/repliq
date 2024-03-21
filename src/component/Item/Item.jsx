import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Item({ item, handleDelete }) {
  // console.log(item?.offer);
  const offerPrice = item.price - (item?.price * item?.offer || 2) / 100;

  return (
    <div className="my-8">
      <div className="flex items-center space-x-4 border-b border-gray-300 py-4">
        <img
          className="w-16 h-16 object-cover rounded-lg"
          src={item.image}
          alt={"s"}
        />
        <div className="flex flex-col flex-grow">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.category}</p>
        </div>
        {item?.offer ? (
          <div>
            <p className="font-semibold line-through">${item.price}</p>
            <p>${offerPrice}</p>
          </div>
        ) : (
          <p className="font-semibold">${item.price}</p>
        )}
        <div>
          <FaRegTrashAlt
            onClick={() => handleDelete(item)}
            className="cursor-pointer text-xl font-bold text-red-600"
          />
        </div>
      </div>
    </div>
  );
}
