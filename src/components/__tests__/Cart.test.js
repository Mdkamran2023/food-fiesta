import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../__mocks__/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// faking api call --
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should Load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Recommended(14)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  const addBtns = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[0]);
  console.log(addBtns.length);

  expect(screen.getByText("1 items")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("2 items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(16);
  // added carts items i.e 2  and recommended 14

  fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
  expect(screen.getAllByTestId("foodItems").length).toBe(14);
  expect(screen.getByText("Cart is Empty"))



});
