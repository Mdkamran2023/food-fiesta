import Header from "../Header";
import { fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should render Header Component with a login button", () => {
  //    could not find react-redux context value; please ensure the component is wrapped in a <Provider>
  // we are using UseSelector for subscribing the store....
  render(
    // the above error occurred in the <Link> Component :-- Link is coming from react-router-dom
    // for this we have to provide a router BrowserRouter from "react-router-dom"
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton= screen.getByRole("button" ,{name:"Login"});

  expect(loginButton).toBeInTheDocument();
});

it("should render Header Component with a Cart items 0 ", () => {
    //    could not find react-redux context value; please ensure the component is wrapped in a <Provider>
    // we are using UseSelector for subscribing the store....
    render(
      // the above error occurred in the <Link> Component :-- Link is coming from react-router-dom
      // for this we have to provide a router BrowserRouter from "react-router-dom"
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText("0 items");
  
    expect(cartItems).toBeInTheDocument();
  });

  it("should change Login Buttton to Logout on click", () => {
    //    could not find react-redux context value; please ensure the component is wrapped in a <Provider>
    // we are using UseSelector for subscribing the store....
    render(
      // the above error occurred in the <Link> Component :-- Link is coming from react-router-dom
      // for this we have to provide a router BrowserRouter from "react-router-dom"
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton= screen.getByRole("button",{name:"Login"})

    fireEvent.click(loginButton);

    const logoutButton=screen.getByRole("button",{name:"Logout"})
  
  
    expect(logoutButton).toBeInTheDocument();
  });

  // it("should renders with correct image", () => {
  //   render(
  //     <BrowserRouter>
  //       <Provider store={appStore}>
  //         <Header />
  //       </Provider>
  //     </BrowserRouter>
  //   );

  //   const correctImg= screen.getByTestId("image_load");
  //   expect(correctImg).toBeInTheDocument();
  // });