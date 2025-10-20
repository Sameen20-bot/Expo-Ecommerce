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
import { useTranslation } from "react-i18next";

const CheckOutScreen = () => {
  
  const { t } = useTranslation();

  const schema = yup
    .object({
      FullName: yup
        .string()
        .required(t("checkout_name_required"))
        .min(3, t("checkout_name_min_length")),

      PhoneNumber: yup
        .string()
        .required(t("checkout_phone_required"))
        .matches(/^[0-9]+$/, t("checkout_phone_digits"))
        .min(10, t("checkout_phone_min_length")),

      DetailedAddress: yup
        .string()
        .required(t("checkout_address_required"))
        .min(15, t("checkout_address_min_length")),
    })
    .required();

  type data = yup.InferType<typeof schema>;

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
        message: t("checkout_success_message"),
      });

      navigation.goBack();

      dispatch(emptyCart());
    } catch (error) {
      console.error("Error saving order: ", error);
      showMessage({ type: "danger", message: t("checkout_error_message") });
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
            placeholder={t("checkout_fullname_placeholder")}
          />
          <AppTextInputController
            name="PhoneNumber"
            control={control}
            placeholder={t("checkout_phone_placeholder")}
          />
          <AppTextInputController
            name="DetailedAddress"
            control={control}
            placeholder={t("checkout_address_placeholder")}
          />
        </View>
      </View>
      <View style={styles.bottomButton}>
        <AppButton
          title={t("checkout_confirm_button")}
          onPress={handleSubmit(saveOrder)}
        />
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
