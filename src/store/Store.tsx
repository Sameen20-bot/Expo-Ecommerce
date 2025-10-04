import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducers/CartSlice";
import userSlice from "./reducers/UserSlice";

export const store = configureStore({
  reducer: {
    CartSlice,
    userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
