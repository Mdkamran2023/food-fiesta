import { useState, useEffect } from "react";

const User = (props) => {
  // const [count, setCount] = useState(0);

  const [userInfo, setUserInfo] = useState({
    name: "Dreamer",
    location: "India",
    avatar_url: "https://git-scm.com/images/logos/downloads/Git-Logo-Black.png",
  });

  useEffect(() => {
    getUserInfo();

    //  const timer= setInterval(()=>{
    //     console.log("it will not stop in class-based-component we used componentWillUnmount ")
    //   },10000)

    console.log("useEffect called");

    // This function is there for unmounting
    return () => {
      // clearInterval(timer);
      console.log("useEffect----> unmounting Phase");
    };
  }, []);

  const getUserInfo = async () => {
    const data = await fetch("https://api.github.com/users/mdkamran2023");
    const json = await data.json();
    setUserInfo(json);
  };

  const { name, location, avatar_url } = userInfo;
  //   const { name } = props;
  return (
    <div className="user-card bg-slate-700 w-72 rounded-lg p-4 m-4">
      {/* <h3>Count:{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button> */}

      {/* <h2>Name:{name}</h2> */}
      <img className="rounded-full w-[50%] mx-auto pt-2" src={avatar_url}></img>
      <div className="text-center text-white">
      <h2>Name:{name}</h2>
      <h3>Location:{location}</h3>
      <h4>Info:Functional Component</h4>
      </div>
    </div>
  );
};

export default User;
