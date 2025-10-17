import { collection, doc, getDocs } from "firebase/firestore";
import { auth, db } from "./firebase";
import { store } from "../store/Store";

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

export const getOrderData = async () => {
  try {
    const userIdFromRedux = store.getState().userSlice.userData.uid;
    const userIdFromFireBase = auth.currentUser?.uid;
    const userOrderRef = collection(
      doc(db, "users", userIdFromFireBase),
      "orders"
    );
    const datas = await getDocs(userOrderRef);

    const dataList = datas.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return dataList;
  } catch (error) {
    console.error("Error Fetching Data: ", error);
  }
};
