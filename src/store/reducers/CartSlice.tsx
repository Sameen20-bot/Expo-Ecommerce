import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // Add Item To Cart
    // Remove Item From Cart
    // Remove Product From Cart
    // Empty Cart
  },
});

export const {} = CartSlice.actions;

export default CartSlice.reducer;
