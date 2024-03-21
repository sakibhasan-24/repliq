import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <h1 className="text-9xl font-bold flex items-center">
          4<span className="text-[200px] text-orange-500">0</span>4
        </h1>
        <p className="text-center font-bold text-3xl">Page Not Found</p>
      </div>
      <div className="flex flex-row gap-6 my-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-slate-800 text-slate-200 p-2 rounded-lg"
        >
          Go Back
        </button>
        <Link className="bg-green-800 text-slate-200 p-2 rounded-lg" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}
