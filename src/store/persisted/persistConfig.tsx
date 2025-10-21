import AsyncStorage from "@react-native-async-storage/async-storage";
import CartSlice from "../reducers/CartSlice";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "cart",
  storage: AsyncStorage,
  whitelist: ["items"],
};

export const persistedCartSlice = persistReducer(persistConfig, CartSlice);
