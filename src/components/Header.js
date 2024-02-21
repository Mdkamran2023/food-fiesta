import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
// import image from "../../Assets/ff-transparent.svg";


const Header = () => {
  // let btnNameJS="Login";

  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header Rendered");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  //Subscribing to the store using a  Selector
  // we are subscribing to the cart.items  -->reading the data on header
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty =[] => useEffect is called on initial render(just once)
  // if dependency array is [variable_name]=> called everytime variable_name is updated

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  // const image = require('../../Assets/ff-transparent.svg');

  return (
    <>
      <div className="flex  justify-between bg-gray-100 shadow-lg mb-2 rounded-md w-full max-sm:flex-col max-md:flex-col lg:flex-row ">
        <div className="ml-2">
          {/* <img data-testid="image_load" className="w-32 max-sm:mx-auto max-md:mx-auto" src={require('../../Assets/ff-transparent.svg')}></img> */}
          <img  data-testid="image_load" className="w-32 max-sm:mx-auto max-md:mx-auto rounded-full" src={"https://as1.ftcdn.net/v2/jpg/02/10/07/94/1000_F_210079401_F4ONbo2mipFYjZbCNWqGluCYzhQv4LdA.jpg"}></img>
        </div>
        <div className="flex justify-center items-center ">
          <ul className="flex p-4 m-4 max-md:flex-col lg:flex-row">
            <li className="px-4 ">{onlineStatus ? "✅" : "🔴"} </li>
            <li className="px-4 max-sm:mt-1 max-md:mt-1 font-bold">
              <Link to="/"> Home</Link>
            </li>

            <li className="px-4 max-sm:mt-1 max-md:mt-1 font-bold">
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartItems.length} items
              </Link>
            </li>

            <button
              className="px-3 py-2 bg-red-500 rounded-md max-sm:mt-2 max-md:mt-1"
              onClick={() => {
                // btnNameJS="Logout";
                // console.log(btnNameJS);
                // btnName will change to Logout but it will not updated in case of using JS variable

                console.log(btnNameReact);
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
              }}
            >
              {/* on clicking on button setbtnNameReact will help i re-render the Whole Component and it will update only LOGIn Button
              but in case of btnNameJS react will not have track of this variable */}
              {/* {btnNameJS} */}
              {/* how const variable is modified ? -- when u click on button it will re-render the whole header Component and btnNameReact will be new variable..... */}
              {btnNameReact}
            </button>
            <li className="px-4 max-sm:mt-1 max-md:mt-1 font-bold font-sans">
              {loggedInUser}
            </li>
          </ul>
        </div>
      </div>
      <div className="ml-[8]">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
