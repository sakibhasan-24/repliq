import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "../../component/Item/Item";
import { v4 as uuidv4 } from "uuid";
import {
  removeAll,
  removeItem,
} from "../../redux/addProducts/addProductsSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Checkout() {
  const { items } = useSelector((state) => state.items);
  const itemsPrice = items
    ?.map((item) => item.price)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

  const charge = (itemsPrice * 0.05).toFixed(2);
  // console.log(itemsPrice);
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(removeItem(item.newId));
    // dispatch(removeItem());
  };
  const handleRemoveAll = () => {
    Swal.fire({
      title: "Are you sure want to delete all items?",
      text: "You can add again",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeAll());
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="max-w-xs w-full mx-auto my-6 ">
      <h1 className="text-center font-bold text-orange-500 text-4xl">
        Added Items
      </h1>
      <div className="spacey-y-8">
        {items &&
          items.map((item) => (
            <Item key={uuidv4()} item={item} handleDelete={handleDelete} />
          ))}
      </div>
      {items?.length > 0 && (
        <div className="text-xl font-semibold text-slate-600 space-y-3 my-2">
          <h1>total Price ${itemsPrice}</h1>
          <p className="">Delivery charge: ${charge}</p>
          <h1>total charge : ${itemsPrice + charge}</h1>
        </div>
      )}
      <div>
        {items?.length === 0 ? (
          <Link to="/">
            <button className="bg-green-800 text-black px-4 py-2 rounded-md">
              Add items
            </button>
          </Link>
        ) : (
          <button
            onClick={handleRemoveAll}
            className="bg-red-400 text-black px-4 py-2 rounded-md"
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
}
