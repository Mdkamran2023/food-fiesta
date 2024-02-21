// Integration testing

import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../__mocks__/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// faking our Api call using MOck_Data and all
// making fetch function exactly like what browsers give us
// it will fetch function from mock
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for M text input ", async () => {
  // act returns a promise so we need to use await keyword
  await act(async () => {
    render(
      // it is just for the purpose of LINK
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  console.log(searchInput);
  // e as target -- what value i want to write
  fireEvent.change(searchInput, { target: { value: "M" } });
  fireEvent.click(searchBtn);

  // // screen should load restaurants card
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).not.toBe(4);
  expect(searchBtn).toBeInTheDocument();
});

it("Should filter Top Rated Restaurants ", async () => {
  // it is used whwn u need to update state or fetch some data
  // act returns a promise so we need to use await keyword
  await act(async () => {
    render(
      // it is just for the purpose of LINK
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedBtn= screen.getByRole("button",{name:"Top Rated Restaurants"});
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter= screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).not.toBe(10);

});
