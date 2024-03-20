import React from "react";
import Products from "../products/Products";
import Banner from "../../component/Banner/Banner";

export default function HomeItems() {
  return (
    <div>
      <div className="w-full sm:max-w-4xl md:max-w-6xl mx-auto ">
        <Banner />
      </div>
      <div className="w-full sm:max-w-4xl md:max-w-6xl mx-auto ">
        <Products />
      </div>
    </div>
  );
}
