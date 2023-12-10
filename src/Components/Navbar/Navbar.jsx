import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="3000"
      className="navbar bg-green-700 rounded-2xl"
    >
      <div className="navbar-start"></div>
      <Link to="/">
        <div className="navbar-center  ">
          <a className="btn btn-ghost text-xl font-semibold">
            UnityIPL Assignment Frontend
          </a>
        </div>
      </Link>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
