import React, { useState } from "react";
import bcryptjs from "bcryptjs";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const profilePicture =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTAFxRa7QIR39ejo9tL0zH0-EadbkcrziSSrdA5IrHEGIDfAFZybEvaukbxyHCy4lXJI&usqp=CAU";
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    // console.log(hashedPassword);

    if (phoneNumber.length !== 11) {
      setError("Please enter a valid phone number");
      console.log("length");
      setLoading(false);
      return;
    }
    const phoneNumberRegex = /^(013|017|018|019|015|016)\d{8}$/;

    // Validate the phone number
    if (!phoneNumberRegex.test(phoneNumber)) {
      toast.error("Only Number is valid");
      setError("Please enter a valid Bangladeshi phone number");
      setLoading(false);
      return;
    }

    if (
      phoneNumber.startsWith("013") ||
      phoneNumber.startsWith("017") ||
      phoneNumber.startsWith("018") ||
      phoneNumber.startsWith("019") ||
      phoneNumber.startsWith("015") ||
      phoneNumber.startsWith("016")
    ) {
      const userInfo = {
        phoneNumber,
        password: hashedPassword,
        profilePicture,
        createdAt: new Date(),
        userName,
      };
      // console.log(userInfo);
      const user = sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

      Swal.fire({
        icon: "success",
        title: "Successfully SignUp",
        showConfirmButton: false,
        timer: 1500,
      });
      setError("");
      setLoading(false);
      navigate("/container/registration/login");
    } else {
      setError("Please enter a valid phone number");
    }
  };
  // console.log(phoneNumber);
  return (
    <div className="w-full">
      <h1 className="text-center my-8 text-slate-800 font-semibold">
        SignUp with Mobile
      </h1>
      <div className="">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-6 items-center justify-center"
        >
          <input
            type="text"
            placeholder="name"
            className="input input-bordered w-full max-w-xs"
            // onChange={(e)=>{console.log(e.target.value)}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
            // onChange={(e)=>{console.log(e.target.value)}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            maxLength={11}
          />
          <input
            required
            type="password"
            placeholder="******************"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            disabled={loading}
            value={loading ? "loading....." : "sigUp"}
            className="w-full max-w-xs py-2 rounded-xl cursor-pointer bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
          />
        </form>
      </div>
    </div>
  );
}
