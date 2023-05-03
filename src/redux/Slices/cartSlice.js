import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  //step 1 : give name to slice
  name: "cart",

  //step 2: give initial state
  initialState: [],

  // step 3: make reducers functions

  reducers: {
    add: () => {},
    remove: () => {},
  },
});

export const { add, remove } = CartSlice.actions;

export default CartSlice.reducer;
