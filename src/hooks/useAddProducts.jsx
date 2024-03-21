import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/addProducts/addProductsSlice";

export default function useAddProducts() {
  const dispatch = useDispatch();
  const [addProducts, setAddProducts] = useState([]);
  const handleAddProducts = (product) => {
    dispatch(addItem(product));
    setAddProducts([product, ...addProducts]);
  };
  return [addProducts, setAddProducts, handleAddProducts];
}
