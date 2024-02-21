import React,{lazy,Suspense, useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
// providing store to react application 
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On demand Loading
// dynamix import

const Grocery= lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import('./components/About'));

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -ResturantContainer
 *      --ResturantCard
 *         ---img
 *         ---Name of Res,Star Rating,cuisine,delivery time
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */
const Applayout = () => {

  const [userName, setUserName]=useState();

// authentication code
useEffect(()=>{
  // Make an API call and send username and password
  const data={
    name:"Md Kamran",
  };
  setUserName(data.name); 
},[])

  return (
    // passing store as props
    <Provider store={appStore}>
    {/* overrided the UserContext loggedInUser value */}
<UserContext.Provider value={{loggedInUser:userName ,setUserName}}>
{/* Md kamran */}
    <div className="app">
    {/* <UserContext.Provider value={{loggedInUser:"Md Noman"}}> */}
{/* Md Noman */}
      <Header />
      {/* </UserContext.Provider> */}
      {/* this element will render either <Body/> when the url is "/",
      render <About/> when URL "/about",
      render <Contact/> when URL "/contact"
       */}
      <Outlet />
      <Footer/>
    </div>

    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:<Suspense fallback={<h1>Loading...</h1>}> <About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Applayout />);

root.render(<RouterProvider router={appRouter} />);
