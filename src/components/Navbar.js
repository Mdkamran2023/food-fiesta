import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <nav  className="font-bold ml-3 max-sm:mt-2 max-lg:mt-1  z-40 ">
      {!isOpen && (
        <button className="mx-auto" onClick={() => setIsOpen(!isOpen)}>
          <i className="fas fa-bars fa-2x"></i> {/* This is a hamburger icon */}
        </button>
      )}

      {isOpen && (
        <div className="">
          {isOpen && (
            <button className="mx-auto" onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
          )}
          <ul className="flex  flex-col absolute justify-center items-center  bg-teal-900 bg-opacity-90  bg-cover max-sm:w-screen max-sm:h-1/2  w-[30%] h-2/5 rounded-lg font-semibold top-32 right-0">
            {/* {isOpen && (
              <button
                className="absolute  top-0 right-0"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </button>
            )} */}
            <li className="px-4 absolute top-5 right-0 text-white">
              {onlineStatus ? "Online Status : " : "Offline :"}
              {onlineStatus ? (
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ color: "orange", textDecoration: "line-through" }}
                  />
                </span>
              ) : (
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ color: "red", textDecoration: "line-through" }}
                  />
                </span>
              )}
            </li>
            <li><img  className="w-28 rounded-full" src="https://img.getimg.ai/generated/img-D62cCK5AcOSyCEiQ9TQ0G.jpeg"></img></li>
            <li className="px-4 mx-4  rounded-lg  hover:underline-offset-2 hover:underline hover:opacity-70 text-white text-xl sm:text-lg lg:text-xl font-normal">
              <Link to="/"> Home</Link>
            </li>
            <li className="px-4 mx-4  rounded-lg hover:underline  hover:opacity-70 text-white text-xl sm:text-lg lg:text-xl font-normal">
              {" "}
              <Link to="/about"> About Us </Link>{" "}
            </li>
            <li className="px-4 mx-4  rounded-l hover:underline hover:opacity-70 text-white text-xl sm:text-lg  lg:text-xl font-normal">
              {" "}
              <Link to="/contact"> Contact Us </Link>{" "}
            </li>
            <li className="px-4  mx-4 rounded-lg hover:underline hover:opacity-70 text-white text-xl sm:text-lg lg:text-xl  font-normal ">
              {" "}
              <Link to="/grocery"> Grocery </Link>{" "}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

