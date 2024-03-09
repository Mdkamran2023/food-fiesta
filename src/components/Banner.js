import { useState, useEffect } from "react";
import Shimmer1 from "./Shimmer1";
import { SWIGGY_RESTAURANT_CARDS_API } from "../utils/constants"

const Banner = () => {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    fetchBannerData();
  }, []);

  const fetchBannerData = async () => {
    const data = await fetch(
      SWIGGY_RESTAURANT_CARDS_API
    );
    const json = await data.json();

    setBannerList(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    console.log(bannerList);
  };

  return (bannerList.length===0) ? <Shimmer1/>
  :  (
    <div className="ml-6">
      <h1 className="text-3xl ml-8 ">What's on your mind ?</h1>
      <ul className="whitespace-nowrap overflow-x-auto overflow-y-hidden scrollbar-hide">
        {bannerList.map((bannerlistelem) => (
          <li  className="inline-block " key={bannerlistelem.id}>
            <img
            //  className=" max-sm:w-[218] max-md:w-[230]"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_154,h_190/" +
                bannerlistelem.imageId
              }
              alt={bannerlistelem.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Banner;
