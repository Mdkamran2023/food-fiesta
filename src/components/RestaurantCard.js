import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
        className="res-card m-4 p-4 w-[290px] h-[330px] rounded-lg hover:scale-[1.05] bg-slate-100 hover:bg-slate-200  "
      >
        <img
          className="res-logo rounded-lg h-[170] w-[100%] "
          // style={{ padding: "0", margin: "0" }}
          src={CDN_URL + resData.info.cloudinaryImageId}
        ></img>
        <h3 className="font-bold py-2 text-lg  whitespace-nowrap overflow-x-auto no-scrollbar">
          {name}
        </h3>
        <h4 className="whitespace-nowrap overflow-x-auto no-scrollbar">
          {cuisines.join(",")}{" "}
        </h4>
        <h4>
          {" "}
          <FontAwesomeIcon icon={faStar} color="gold"  style={{ marginRight: "2px" }}/>
          {avgRating} stars
        </h4>
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
        {/* <h4 className="px-1">Energized By:{loggedInUser}</h4> */}
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
    // const {header,subHeader}=(props?.resData?.info?.aggregatedDiscountInfoV3);
    console.log("Props", props.resData.info.aggregatedDiscountInfoV3);
    return (
      <div className="relative">
        <label className="absolute font-bold text-xl text-white m-2 p-2 left-6 top-[149px] bg-gradient-to-t from-black z-40 group-hover:scale-50 rounded-md w-[259px] ">
          {/* 👍WOW!! */}
          <span>{props?.resData?.info?.aggregatedDiscountInfoV3?.header}</span>
          <span className="mx-1">
            {props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}
          </span>
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
