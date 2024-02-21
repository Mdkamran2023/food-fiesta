import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err= useRouteError();  
    console.log(err);
    return(
        <div>
            <h1>Ooops!!!</h1>
            <h1>Something Went wrong..</h1>
        <h3 style={{color:"#0fe00a"}}>{err.data}:{err.status}</h3>
        </div>
    )
}

export default Error;