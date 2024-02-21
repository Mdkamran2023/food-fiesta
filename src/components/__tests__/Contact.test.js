import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact Us Page Test Cases",()=>{

  afterAll(()=>{
    console.log("After all");
  })

  afterEach(()=>{
    console.log("After Each")
  })

  // it will run beforeAll test cases
  beforeAll(()=>{
    console.log("Before All");
  })

  // it will run before each
  beforeEach(()=>{
    console.log("Before Each");
  })

  test("Should load contact us Component ", () => {
    // for testing react component we need to render on jsdom first
  
    render(<Contact />); //@babel/preset-react for testing in jsx
  
    const heading = screen.getByRole("heading");
  
    //  assertion
    expect(heading).toBeInTheDocument();
  });
  
  test("Should load button inside contact us Component ", () => {
    // for testing react component we need to render on jsdom first
  
    render(<Contact />); //@babel/preset-react for testing in jsx
  
    //  const button=screen.getByRole("button");
    const button = screen.getByText("Submit");
  
    //  assertion
    expect(button).toBeInTheDocument();
  });
  
  test("Should load input inside contact us Component ", () => {
    // for testing react component we need to render on jsdom first
  
    render(<Contact />); //@babel/preset-react for testing in jsx
  
    // Querying
    const inputName = screen.getByPlaceholderText("Name");
    console.log(inputName); // vdom react element
    //  assertion
    expect(inputName).toBeInTheDocument();
  });
  
  it("", () => {
    render(<Contact />);
  
    const inputs = screen.getAllByPlaceholderText("Name");
  
    // assertion
    expect(inputs.length).not.toBe(2);
  });

})


