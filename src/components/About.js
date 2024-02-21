import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }

    
    componentDidMount(){
        // console.log("parent ComponentDidMount");
      }

render(){

    // console.log("Parent Render");
    return (
        <div >
            <h1>Meet Our Techies..</h1>
            {/* <h1>About Class Component</h1> */}
            {/* <h2> This is Namaste React Web Series </h2> */}
            <div>
               loggedIn User
               <UserContext.Consumer>
                {({loggedInUser})=><h1>{loggedInUser}</h1>}
                </UserContext.Consumer> 
            </div>
            <div className="user-card-container flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
            <User name={"Kamran(function)"}/>
            {/* <UserClass name={"kamrani(class)"} location={"Karnataka"}/> */}
            <UserClass name={"Elon Musk(class)"} location={"US"}/>
            </div>
        </div>
    )
}
}

export default About;