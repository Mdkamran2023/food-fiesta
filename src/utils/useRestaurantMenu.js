import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  // fetch data
  const [resInfo, setResInfo] = useState(null);

  console.log("use restaurant called")
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let url = MENU_API + resId
    console.log("url: ", url);

   const data = await fetch(MENU_API + resId) ;
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
