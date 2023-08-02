import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS
      console.log(current(state));
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      console.log(current(state), action.payload);
      // state.items.pop(action.payload);
      const filterItem = current(state).items.filter(item => item.card.info.id !== action.payload);
      console.log(filterItem);
      state.items = filterItem;
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;