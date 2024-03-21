import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDetails() {
  const { usersList } = useSelector((state) => state.usersList);

  const { newId } = useParams();
  //   console.log(usersList);
  const currentUser = usersList.find((user) => user.newId === newId);
  //   console.log(currentUser);
  const navigate = useNavigate();
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-center font-bold text-2xl mb-4">
        User Details{" "}
        <span className="text-orange-600">
          {currentUser?.name || "Name Not Found"}
        </span>
      </h1>
      <div className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-orange-400 p-1"
            src={
              currentUser?.profilePicture || "https://via.placeholder.com/150"
            }
            alt="User Profile"
          />
        </div>
        <div className="text-center px-6 py-4">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            {currentUser?.name || "Name Not Found"}
          </p>
          <p className="text-sm text-gray-600 mb-2">{currentUser?.email}</p>
          <p className="text-sm text-gray-600 mb-2">{currentUser?.phone}</p>
          <p className="text-sm text-gray-600 mb-2">
            Role: {currentUser?.role || "Not Set Yet"}
          </p>
          <p className="text-slate-500">{currentUser?.details}</p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="w-1/3 my-2 mx-2 px-2 py-1 rounded-md bg-slate-800 text-white "
        >
          back
        </button>
      </div>
    </div>
  );
}
