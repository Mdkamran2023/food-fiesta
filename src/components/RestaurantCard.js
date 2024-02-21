import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  // const{image,resData}=props;

  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  // console.log("resData.info: ", resData.info);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div data-testid="resCard" className="flex flex-row">
      <div
        // style={{ backgroundColor: "#f0f0fa" }}
        className="res-card m-4 p-4 w-[250px] rounded-lg hover:scale-[1.08] bg-slate-100 hover:bg-slate-200 overflow-hidden"
      >
        <img
          className="res-logo rounded-lg"
          // style={{ padding: "0", margin: "0" }}
          src={CDN_URL + resData.info.cloudinaryImageId}
        ></img>
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4 className="whitespace-initial">{cuisines.join(",")} </h4>
        <h4>{avgRating} stars</h4>
        <div
          className="cost-del flex justify-between"
          // style={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   paddingInline: "3px",
          // }}
        >
          <span>{costForTwo}</span>
          <span>ETA:{sla.deliveryTime} minutes</span>
        </div>
        <h4 className="px-1">Energized By:{loggedInUser}</h4>
      </div>
    </div>
  );
};

// Higher Order Component
// input- RestaurantCard ==>> RestaurantCardPromoted

// function  taking RestaurantCard as a component
// returning a component "retun(props)=>{return()}"
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">
          👍WOW!!
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
