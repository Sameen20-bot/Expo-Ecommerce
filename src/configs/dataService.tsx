import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getProductsData = async () => {
  try {
    const datas = await getDocs(collection(db, "products"));
    const list = [];

    datas.forEach((item) => {
      list.push(item.data());
    });

    return list;
  } catch (error) {
    console.error("Error Fetching Data: ", error);
  }
};
