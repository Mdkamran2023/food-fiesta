import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-300 mt-8 rounded-lg max-md:rounded-md  max-md:h-auto p-10 max-md:pt-5">
      <div className=" flex flex-row  items-center justify-between max-md:w-[80%] w-[90%] mx-auto  max-md:flex-col  max-md:items-start ">
        <div>
        <Link link to="/">
          <img
            alt="Food Fiesta"
            className="h-[98px] rounded-full mt-2"
            src={"https://as1.ftcdn.net/v2/jpg/02/10/07/94/1000_F_210079401_F4ONbo2mipFYjZbCNWqGluCYzhQv4LdA.jpg"}
          ></img>
          </Link>
          <span className="font-semibold text-xl text-neutral-800 hover:text-neutral-500 hover:cursor-pointer"><Link link to="/">Food Fiesta</Link></span>
        </div>

        <div className="flex flex-col mt-2">
          <h5 className="mb-2 font-semibold hover:cursor-pointer hover:underline hover:underline-offset-4">  <Link to="/about"> About Us </Link></h5>
          <p className="mb-1 hover:cursor-pointer hover:underline hover:underline-offset-4">Company Information</p>
          <p className="mb-1 hover:cursor-pointer hover:underline hover:underline-offset-4">Careers</p>
          <p className="mb-1 hover:cursor-pointer hover:underline hover:underline-offset-4">Blog</p>
        </div>
        <div className="flex flex-col mt-2">
          <h5 className="mb-2 font-semibold hover:cursor-pointer hover:underline hover:underline-offset-4"><Link to="/contact"> Contact </Link></h5>
          <p className="mb-1 hover:cursor-pointer hover:underline hover:underline-offset-4"> <Link to="/contact">Help & Support </Link></p>
          <p className="mb-1 hover:cursor-pointer hover:underline hover:underline-offset-4">  <Link to="/contact">Partner with us</Link></p>
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
