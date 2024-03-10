import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Banner from "./Banner";
import UserContext from "../utils/UserContext";
import {SWIGGY_RESTAURANT_CARDS_API} from "../utils/constants"

const Body = () => {
  //local state variable = Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  // it will return the Component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // console.log("body rendered", listOfRestaurants);
  
  // whenever state variables update ,react triggers a reconcilation cycle
  //  (re-renders the Component)

  // []===>passing default value
  // Normal Js Variable
  // let listOfRestaurants=[];

  useEffect(() => {
    // console.log("useEffect Called");
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_CARDS_API
    );

    const json = await data.json();
    // console.log(json);
    // optional chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
    
        <h1 style={{ color: "Blue" }}>
          Patience is bitter, but its fruit is sweet.
        </h1>
        <h2>
          Looks like you're offline, just check your Internet Connection..
        </h2>
      </div>
    );
  }

  // imported from App.js and UserContext
  const { loggedInUser, setUserName } = useContext(UserContext);

  // Conditional Rendereing
  // if(listOfRestaurants.length == 0){
  //   return < Shimmer/>;
  // }

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body lg-w-[80%]">
      <Banner />
      <div className="filter flex max-md:flex-col">
        <div className="search ml-8 m-2 p-4 flex max-sm:flex-col max-md:mx-auto">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box border-2 border-gray-950 rounded-md p-1 bg-slate-50 max-sm:m-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // React don't have track of normal JS variables
            }}
          ></input>
          <button
            className="search-btn px-4 py-1 border-2 ml-2 border-green-300 rounded-lg bg-green-200 max-sm:m-2"
            onClick={() => {
              // onClick filter the restaurant cards and update the UI
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(filteredRestaurants);
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="whitespace-nowrap flex overflow-x-auto no-scrollbar ">
        <div className="flex justify-center items-center">
          <button
            className="filter-btn  px-4 py-1 ml-2  mb-2 border-2 border-gray-950 rounded-lg bg-gray-200"
            onClick={() => {
              // setListOfRestaurants();
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.3
              );
              // console.log(listOfRestaurants) ;
              // whenever a state variable updates React re-renders the Components
              // console.log(filteredList);
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div >
        <div className="flex justify-center items-center">
          <button
            className="filter-btn  px-4 py-1 ml-2  mb-2 border-2 border-gray-950 rounded-lg bg-gray-200"
            onClick={() => {
              // setListOfRestaurants();
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.sla.deliveryTime <= 28
              );
              // console.log(listOfRestaurants) ;
              // whenever a state variable updates React re-renders the Components
              // console.log(filteredList);
              setFilteredRestaurants(filteredList);
            }}
          >
            Fast Delivery
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="filter-btn  px-4 py-1 ml-2  mb-2 border-2 border-gray-950 rounded-lg bg-gray-200"
            onClick={() => {
              // setListOfRestaurants();
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.costForTwo <"₹300"
              );
              // console.log(listOfRestaurants) ;
              // whenever a state variable updates React re-renders the Components
              // console.log(filteredList);
              setFilteredRestaurants(filteredList);
            }}
          >
            Less Than Rs.300
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="filter-btn  px-4 py-1 ml-2  mb-2 border-2 border-gray-950 rounded-lg bg-gray-200"
            onClick={() => {
              // setListOfRestaurants();
              const filteredList = listOfRestaurants.filter(
                (res) =>res.info.costForTwo >"₹300" && res.info.costForTwo <"₹600" 
              );
              // console.log(listOfRestaurants) ;
              // whenever a state variable updates React re-renders the Components
              // console.log(filteredList);
              setFilteredRestaurants(filteredList);
            }}
          >
             Rs.300-Rs.600
          </button>
        </div>

        {/* <div className=" flex justify-center items-center ml-9 py-2 flex-col max-md:mx-auto  rounded-xl ">
            <label className="text-yellow-950">UserName : </label> 
          <input
            placeholder="UserName:"
            maxLength={12}
            className=" border-black rounded-lg py-1 border-2 px-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div> */}
        </div>
      </div>

      <div className="res-container flex flex-wrap  max-sm:justify-center md:justify-center max-md:justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* added Higher order Component if the restaurant isOpen */}
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
