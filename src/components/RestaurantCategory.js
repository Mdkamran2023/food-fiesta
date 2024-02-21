import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, dummy }) => {
  // console.log("showItem value", showItems);
  // const [showItems,setShowItems]=useState(false);

  const [active, setActive] = useState(false);
  // console.log("active ", active);

  const handleClick = () => {
    // console.log("clicked");
    // added toggle feature
    // setShowItems(!showItems);
    // setShowIndex();

    setActive(!active);
  
  };

  return (
    <div>
      {/* Header */}
      <div className="w-[60%] mx-auto my-4  bg-slate-100  shadow-lg max-md:w-[85%]  rounded-lg max-sm:w-[90%] ">
        <div
          className=" p-4 flex justify-between  rounded-xl cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⏬</span>
        </div>
        {/* Accordian Body */}
        {active && <ItemList items={data?.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
