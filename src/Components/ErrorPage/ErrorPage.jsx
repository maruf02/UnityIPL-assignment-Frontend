import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen text-center py-[10%] bg-gradient-to-r from-violet-500 to-fuchsia-900">
      <h2 className="text-6xl text-red-800 font-extrabold py-10">OOPPS!!!!</h2>
      <h2 className="text-4xl text-red-800 font-bold">
        Seems to be You lost your way
      </h2>
      <Link to="/" className="btn btn-primary text-2xl text-white my-10 px-10">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
