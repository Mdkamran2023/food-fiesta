import { useState, useEffect } from "react";
import Shimmer1 from "./Shimmer1";

const Banner = () => {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    fetchBannerData();
  }, []);

  const fetchBannerData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setBannerList(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    console.log(bannerList);
  };

  return (bannerList.length===0) ? <Shimmer1/>
  :  (
    <div>
      <h1 className="text-4xl ml-8">What's on your mind ?</h1>
      <ul className="whitespace-nowrap overflow-x-auto overflow-y-hidden scrollbar-hide">
        {bannerList.map((bannerlistelem) => (
          <li  className="inline-block " key={bannerlistelem.id}>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_258,h_290/" +
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
