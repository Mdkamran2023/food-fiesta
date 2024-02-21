import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Vanilla(older) Redux -->Don't mutate state returning was mandatory
    // const newState=[...state]
    // newState.items.push(action.payload);
    // return newState;


    // but in REDUX TOOLKIT -->it uses immer behind the scenes
    // We need to either mutate the state or return a new state



    // action:reducer function -->modifies the cart
    addItem: (state, action) => {
      // mutating the state here -->directly modifying state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // originalState={items:["pizza"]}
    clearCart: (state, action) => {
      // state.items.length = 0;

       return {items:[]}; //this new [] will be replaced inside originalState={items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
