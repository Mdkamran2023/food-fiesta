import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";

const User = (props) => {
  const [userInfo, setUserInfo] = useState([{
    name: "Dreamer",
    location: "India",
    avatar_url: "https://git-scm.com/images/logos/downloads/Git-Logo-Black.png",
  }]);

  useEffect(() => {
    getUserInfo();
    console.log("useEffect called");

    // This function is there for unmounting
    return () => {
      // clearInterval(timer);
      console.log("useEffect----> unmounting Phase");
    };
  }, []);

  const getUserInfo = async () => {
    const data = await fetch("https://api.github.com/users");
    const json = await data.json();
    console.log(json);
    setUserInfo(json.slice(0, 10));
    console.log(userInfo);
  };

   return userInfo.length == 0?(<Shimmer/>):(
    <>
      {userInfo.map(({ login, location="US", avatar_url }) => {
        return (
          <div className="user-card bg-slate-700 w-72 rounded-lg p-4 m-4">
            <img
              className="rounded-full w-[50%] mx-auto pt-2"
              src={avatar_url}
            ></img>
            <div className="text-center text-white">
              <h2>UserName:{login}</h2>
              <h3>Location:{location}</h3>
              {/* <h4>Info:Functional Component</h4> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default User;
