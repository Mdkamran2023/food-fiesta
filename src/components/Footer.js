import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-300 mt-10 rounded-full max-md:rounded-lg">
      <div className=" flex flex-row  items-center justify-between w-[80%] mx-auto  max-md:flex-col ">
        <div>
          <img
            alt="Food Fiesta"
            className="h-[78px] rounded-full"
            src={"https://as1.ftcdn.net/v2/jpg/02/10/07/94/1000_F_210079401_F4ONbo2mipFYjZbCNWqGluCYzhQv4LdA.jpg"}
          ></img>
          <span className="font-bold text-neutral-800"> Food Fiesta</span>
        </div>

        <div className="flex flex-col mt-2">
          <h5 className="mb-2 font-semibold">About Us</h5>
          <p className="mb-1">Company Information</p>
          <p className="mb-1">Careers</p>
          <p className="mb-1">Blog</p>
        </div>
        <div className="flex flex-col mt-2">
          <h5 className="mb-2 font-semibold">Contact</h5>
          <p className="mb-1">Help & Support</p>
          <p className="mb-1">Partner with us</p>
        </div>
        <div className="flex flex-col mt-2">
          <h5 data-testid="legal" className="mb-2 font-semibold">Legal</h5>
          <p className="mb-1">Terms & Conditions</p>
          <p className="mb-1">Refund & Cancellation</p>
          <p className="mb-3">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
