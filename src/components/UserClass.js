import React from "react";

// whenever u create an instance of class

class UserClass extends React.Component {
  constructor(props) {
    // The Super(props) method is used to call constructor of the parent class and pass the props parameter to it.
    // This is required when creating a new instance of a component that extends another Components..
    super(props);
    //   console.log(props);
    // state  variable creation
    this.state = {
      // count:0,
      userInfo: {
        // passing initial value
        name: "Dreamer",
        location: "India",
        avatar_url:
          "https://git-scm.com/images/logos/downloads/Git-Logo-Black.png",
      },
    };
    //   console.log(this.props.name," Child Constructor");
  }

  async componentDidMount() {
    //   // console.log(this.props.name,"Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/mdkamran2023");
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    });

    // this.timer=setInterval(()=>{
    //   console.log("Child-ComponentDidMount");
    // },1000);

  }

  // how to acheive useEffect(()=>{  },[count]);
  componentDidUpdate(prevProps,prevState){
    if(this.state.count !== prevState.count){

    }
    // console.log("ComponentDidUpdate");
  }

  componentWillUnmount(){
    // clearInterval(this.timer);
    // console.log("ComponentWillUnmount");
  }

  render() {
    // const { location } = this.props;
    // const {count}=this.state;
    // console.log(this.props.name," Child Rendered");

    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;

    return (
      // {/* <h3>Count:{count}</h3> */}
      //       {/* <button onClick={()=>{
      //     // never update state variable directly
      //         this.setState({
      //           count: this.state.count+1
      //         })
      //       }}>Count Increase</button> */}
     
        <div className="user-card bg-slate-700 w-72 rounded-lg p-4 m-4">
        <img className="rounded-full w-[50%] mx-auto pt-2" src={avatar_url}></img>

        <div className="text-center text-white">
        {/* <h2>Name:{this.props.name}</h2> */}
        <h2>Name:{name}</h2>
        {/* <h3>Location:{location}</h3> */}
        <h3>Location:{location}</h3>
        <h4>Info:Class Based Component</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;

/****
 * -------MOUNTING CYLCLE----------
 * 
 * constructor(dummy)
 * render (dummy)
 *        <HTML  Dummy>
 * Component did Mount is called
 *        <API CALLED>
 *        <this.setState> -->>State Variable is updated
 * 
 * -------UPDATING---------------
 * render(API data)
 * <HTML(new API data)>
 * Component Did Update
 * 
 * ---- UnMOUNTING-----
 * componentWillUnmount ---->whenever going to aother page(Spa)
 *  
 * 
 */
