import { StyleSheet, Text, View } from "react-native";
import { AppColors } from "../../styles/colors";
import { vs, s } from "react-native-size-matters";
import AppInput from "../../components/inputs/AppInput";
import {
  shadowStyle,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import AppButton from "../../components/buttons/AppButton";
import { useForm } from "react-hook-form";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { showMessage } from "react-native-flash-message";
import { shippingFee, taxes } from "../../constants/constant";
import { useNavigation } from "@react-navigation/native";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../configs/firebase";
import { emptyCart } from "../../store/reducers/CartSlice";

const schema = yup
  .object({
    FullName: yup
      .string()
      .required("Name is required.")
      .min(3, "Name must be atleast 3 characters."),

    PhoneNumber: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]+$/, "Must be only digits.")
      .min(10, "Phone number must be atleast 10 digits."),

    DetailedAddress: yup
      .string()
      .required("Address is required.")
      .min(15, "Your address must be atleast 15 characters."),
  })
  .required();

type data = yup.InferType<typeof schema>;

const CheckOutScreen = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state: RootState) => state.userSlice);

  const { items } = useSelector((state: RootState) => state.CartSlice);

  const totalItemSum = items.reduce((acc, item) => acc + item.sum, 0);

  const orderTotal = totalItemSum + taxes + shippingFee;

  const navigation = useNavigation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const saveOrder = async (data: data) => {
    try {
      const orderData = {
        ...data,
        items,
        createdAt: new Date(),
        totalItemSum,
        orderTotal,
      };

      const userOrderRef = collection(doc(db, "users", userData.uid), "orders");
      await addDoc(userOrderRef, orderData);

      const orderRef = collection(db, "admin");
      await addDoc(orderRef, orderData)
        .then(() => console.log("Admin order added"))
        .catch((e) => console.error("Admin order failed:", e));

      showMessage({
        type: "success",
        message: "Order placed successfully.",
      });

      navigation.goBack();

      dispatch(emptyCart());
    } catch (error) {
      console.error("Error saving order: ", error);
      showMessage({ type: "danger", message: "Error Happen" });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ paddingHorizontal: sharedPaddingHorizontal, marginTop: s(15) }}
      >
        <View style={styles.container}>
          <AppTextInputController
            name="FullName"
            control={control}
            placeholder="Full Name"
          />
          <AppTextInputController
            name="PhoneNumber"
            control={control}
            placeholder="Phone Number"
          />
          <AppTextInputController
            name="DetailedAddress"
            control={control}
            placeholder="Detailed Address"
          />
        </View>
      </View>
      <View style={styles.bottomButton}>
        <AppButton title="Confirm" onPress={handleSubmit(saveOrder)} />
      </View>
    </View>
  );
};

export default CheckOutScreen;
const styles = StyleSheet.create({
  container: {
    ...shadowStyle.shadow,
    backgroundColor: AppColors.white,
    padding: s(8),
    borderRadius: s(8),
  },
  bottomButton: {
    paddingHorizontal: sharedPaddingHorizontal,
    position: "absolute",
    bottom: 10,
    width: "100%",
    borderTopWidth: s(3),
    borderColor: AppColors.blueGray,
    paddingVertical: s(10),
  },
});
