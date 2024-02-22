import Footer from "../Footer";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("Should render footer legal element ",()=>{
    render(
      <BrowserRouter>
        <Footer/>
        </BrowserRouter>
    );

  const legalHeader=  screen.getByText("Legal");
expect(legalHeader).toBeInTheDocument();
})