import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    errorElement: <h1>Error 404</h1>,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
