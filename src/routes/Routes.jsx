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
import AddUser from "../pages/adduser/AddUser";
import UserDetails from "../pages/adduser/UserDetails";
import Admin from "../pages/admin/Admin";
import EmailPass from "../pages/regularLogin/EmailPass";
import EmailPassLogin from "../pages/regularLogin/EmailPassLogin";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/user/details/:newId",
        element: <UserDetails />,
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
      {
        path: "/email-pass",
        element: <EmailPass />,
      },
      {
        path: "/email-pass/login",
        element: <EmailPassLogin />,
      },
    ],
  },
]);

export default router;
