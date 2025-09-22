import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartSliceTypes {
  id: number | string;
  qty: number;
  price: number;
  sum: number;
}

interface CartState {
  items: CartSliceTypes[];
}

const initialState: CartState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add Item To Cart

    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.sum += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
          sum: action.payload.price,
        });
      }
    },

    // Remove Item From Cart

    removeItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem && existingItem.qty != 1) {
        existingItem.qty -= 1;
        existingItem.sum -= action.payload.price;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    // Delete Item From Cart

    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    // Empty Cart
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemToCart, deleteItem, emptyCart } =
  CartSlice.actions;
export default CartSlice.reducer;
