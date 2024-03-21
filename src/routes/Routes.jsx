import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Container from "../component/views/Container";
import RegistrationLayout from "../component/views/RegistrationLayout";
import Login from "../pages/registration/Login";
import SignUp from "../pages/registration/SignUp";
import HomeItems from "../pages/Home/HomeItems";
import Products from "../pages/products/Products";
import Product from "../component/product/Product";
import ProductDetails from "../component/product/ProductDetails";
import Checkout from "../pages/checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    errorElement: <h1>Error 404</h1>,
    children: [
      {
        path: "",
        element: <HomeItems />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/container",
        element: <Container />,
        children: [
          {
            path: "/container/registration",
            element: <RegistrationLayout />,
            children: [
              {
                path: "/container/registration/login",
                element: <Login />,
              },
              {
                path: "/container/registration/signup",
                element: <SignUp />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
