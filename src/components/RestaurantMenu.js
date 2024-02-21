import {useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  // const params= useParams();
  // console.log(params);

  const dummy="Dummmy Data";

  
  const [showIndex,setShowIndex]=useState(0);
  const { resId } = useParams();


  // console.log("showIndices: ", showIndices)
  const resInfo = useRestaurantMenu(resId);
  // what we have done "it gives us resInfo" ,we don't have worry about fetch data logic
  // it just have to display it now, it doesn't have to manage its own state
  // how to get data is abstracted

  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   // console.log(json);
  //   setResInfo(json.data);
  // };

 

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);
  const { name, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl"> {name} </h1>
      <h3 className="text-2xl font-bold">{costForTwoMessage}</h3>
      <h2 className=" font-bold text-lg">
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")}
      </h2>
      {/* categories accordians */}
      {categories.map((category,index)=>
      // controlled Component
      <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
      // showItems={(index === showIndex) ? true : false} 
      // setShowIndex={() => setShowIndex(index) }
      dummy={dummy}
      /> )}
      </div>
  );
};

export default RestaurantMenu;
