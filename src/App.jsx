import { RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "./routes/Routes";
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
