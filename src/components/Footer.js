import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-300 mt-10 rounded-lg max-md:rounded-md h-[200px] max-md:h-auto">
      <div className=" flex flex-row  items-center justify-between w-[80%] mx-auto  max-md:flex-col ">
        <div>
          <img
            alt="Food Fiesta"
            className="h-[98px] rounded-full mt-2"
            src={"https://as1.ftcdn.net/v2/jpg/02/10/07/94/1000_F_210079401_F4ONbo2mipFYjZbCNWqGluCYzhQv4LdA.jpg"}
          ></img>
          <span className="font-bold text-neutral-800 hover:text-neutral-500 hover:cursor-pointer"><Link link to="/">Food Fiesta</Link></span>
        </div>

        <div className="flex flex-col mt-2">
          <h5 className="mb-2 font-semibold hover:cursor-pointer hover:underline hover:underline-offset-4">  <Link to="/about"> About Us </Link></h5>
          <p className="mb-1 hover:cursor-pointer hover:underline hover:underline-offset-4">Company Information</p>
          <p className="mb-1 hover:cursor-pointer hover:underline hover:underline-offset-4">Careers</p>
          <p className="mb-1 hover:cursor-pointer hover:underline hover:underline-offset-4">Blog</p>
        </div>
        <div className="flex flex-col mt-2 ">
          <h5 className="mb-2 font-semibold hover:cursor-pointer hover:underline hover:underline-offset-4"><Link to="/contact"> Contact </Link></h5>
          <p className="mb-1 hover:cursor-pointer hover:underline hover:underline-offset-4">Help & Support</p>
          <p className="mb-1 hover:cursor-pointer hover:underline hover:underline-offset-4">Partner with us</p>
        </div>
        <div className="flex flex-col mt-2">
          <h5 data-testid="legal" className="mb-2 font-semibold hover:cursor-pointer hover:underline hover:underline-offset-4">Legal</h5>
          <p className="mb-1 hover:cursor-pointer hover:underline hover:underline-offset-4">Terms & Conditions</p>
          <p className="mb-1 hover:cursor-pointer hover:underline hover:underline-offset-4">Refund & Cancellation</p>
          <p className="mb-3 hover:cursor-pointer hover:underline hover:underline-offset-4">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
