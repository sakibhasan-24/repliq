import React, { useEffect, useState } from "react";
import useGetProducts from "../../hooks/useGetProducts";
import { Puff } from "react-loader-spinner";
import Product from "../../component/product/Product";
import useAddProducts from "../../hooks/useAddProducts";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
export default function Products() {
  const [products, setProducts] = useGetProducts();
  const [searchText, setSearchText] = useState("");
  const [addProducts, setAddProducts, handleAddProduct] = useAddProducts();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleSearch = () => {
    if (searchText.length === 0) return setProducts(products);
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    );
    setProducts(filteredProducts);
  };

  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <Puff />
      </div>
    );
  }

  return (
    <div className=" w-full mr-2  sm:max-w-4xl  md:max-w-6xl sm:mx-auto">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <h1 className="text-center font-bold text-2xl text-orange-500 underline">
        Products
      </h1>
      {/* <div className="flex justify-center items-center">
        <input
          placeholder="search"
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="border-2 border-gray-300 p-2 rounded-md"
        />
        <button onClick={handleSearch}>Search</button>
      </div> */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products &&
          products?.map((product) => (
            <Product
              product={product}
              key={product?._id}
              handleAddProduct={handleAddProduct}
            />
          ))}
      </div>
    </div>
  );
}
