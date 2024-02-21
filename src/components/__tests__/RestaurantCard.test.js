import {render,screen} from "@testing-library/react";
import RestaurantCard,{ withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../__mocks__/resCardMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("should render RestaurantCard component with  props data",()=>{
   
    render(
        <Provider store={appStore} >
        <RestaurantCard resData={MOCK_DATA}/>
        </Provider>
        );

 const name=screen.getByText("Theobroma");

//  assertion
expect(name).toBeInTheDocument();
})


describe('withPromotedLabel', () => {
    it('renders the promoted label and the RestaurantCard', () => {
      const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);
      const { getByText } = render(<RestaurantCardWithPromotedLabel  resData={MOCK_DATA}/>);
  
      expect(getByText('👍WOW!!')).toBeInTheDocument(); // from "@testing-library/jest-dom"
    });
  });