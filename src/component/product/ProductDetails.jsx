import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [singleProduct, setSingleProduct] = useState({});
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  //   console.log(id);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  //   console.log(products);
  const detailsProduct = products.find((product) => product._id == id);
  return (
    <section className="my-12 w-full p-4 sm:max-w-3xl  mx-auto">
      <div className="shadow-2xl py-2 px-4 rounded-md">
        <img className="w-full" src={detailsProduct?.image} alt="iamges" />
      </div>
      <div className="my-12">
        <div className="bg-gray-100 max-w-2xl mx-auto text-center rounded-lg font-bold space-y-4 py-6">
          <h1 className="bg-green-600 py-4 px-8 rounded-md max-w-xl mx-auto cursor-pointer hover:bg-green-400">
            {detailsProduct?.name}
          </h1>
          <p className="bg-purple-600 py-4 px-8 rounded-md max-w-xl mx-auto cursor-pointer hover:bg-purple-400">
            {detailsProduct?.category}
          </p>
        </div>
        <p className="text-center text-gray-500 text-xl my-6">
          {detailsProduct?.details}
        </p>
        <div className="flex items-center justify-between gap-2">
          <p className="bg-red-400 rounded-md text-white font-bold text-xs px-4 py-2">
            category:{detailsProduct?.category}
          </p>
          <p className="bg-blue-800 rounded-md text-white font-bold text-xs px-4 py-2">
            ${detailsProduct?.price}
          </p>
        </div>
        {detailsProduct?.offer && (
          <div className="bg-gray-100 px-4 py-2  rounded-md my-6">
            <p className="font-semibold text-xs my-6">
              Based On Offer you will get{" "}
              <span className="bg-red-800 px-2 py-1 rounded-md text-white">
                {detailsProduct?.offer}%
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
