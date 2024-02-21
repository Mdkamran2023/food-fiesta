import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-bold ">
      <button className="mx-auto" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-bars fa-2x"></i> {/* This is a hamburger icon */}
      </button>

      {isOpen && (
        <ul className="flex  justify-center bg-cyan-900 bg-cover  rounded-full mx-auto font-semibold">
          <li className="px-4 mx-4 bg-slate-300 rounded-lg hover:bg-slate-400 hover:text-white">
            {" "}
            <Link to="/about"> About Us </Link>{" "}
          </li>
          <li className="px-4 mx-4 bg-slate-300 rounded-lg hover:bg-slate-400 hover:text-white">
            {" "}
            <Link to="/contact"> Contact Us </Link>{" "}
          </li>
          <li className="px-4  mx-4 bg-slate-300 rounded-lg hover:bg-slate-400 hover:text-white">
            {" "}
            <Link to="/grocery"> Grocery </Link>{" "}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
