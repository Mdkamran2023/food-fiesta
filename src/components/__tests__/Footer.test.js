import Footer from "../Footer";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render footer legal element ",()=>{
    render(
        <Footer/>
    );

  const legalHeader=  screen.getByText("Legal");
expect(legalHeader).toBeInTheDocument();
})