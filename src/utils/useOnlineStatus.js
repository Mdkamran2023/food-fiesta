import { useState,useEffect } from "react";
const useOnlineStatus=()=>{
//   try to check online status

const [onlineStatus,setonlineStatus] =useState(true);

useEffect(()=>{
window.addEventListener("offline",()=>{
setonlineStatus(false);
})

window.addEventListener("online",()=>{
    setonlineStatus(true);
    })

},[]); // will be executed once []

// boolean value

return onlineStatus;
}

export default useOnlineStatus;