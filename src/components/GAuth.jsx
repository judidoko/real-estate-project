import React from "react";
import { FcGoogle } from "react-icons/fc";

const GAuth = () => {
  return (
    <>
      <button className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-2 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-200 ease-in-out rounded">
        <FcGoogle className="bg-white text-2xl mr-2 rounded-full" /> Sign In
        With Google
      </button>
    </>
  );
};

export default GAuth;
