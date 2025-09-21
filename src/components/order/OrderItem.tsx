import { StyleSheet, Text, View } from "react-native";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";
import { vs, s } from "react-native-size-matters";
import {
  shadowStyle,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { FC } from "react";

interface OrderItemTypes {
  totalAmount: number | string;
  totalPrice: number | string;
  date: number | string;
}

const OrderItem:FC<OrderItemTypes> = ({ totalAmount, totalPrice, date }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <AppText variant="medium">ORDER DETAILS:</AppText>
        <View style={styles.separator} />
        <View style={styles.row}>
          <AppText variant="medium">Total Price: {totalPrice}</AppText>
          <AppText variant="medium" style={{ color: AppColors.darkBrown }}>
            {totalAmount}$
          </AppText>
        </View>
        <View style={styles.row}>
          <AppText variant="medium">Date: {date}</AppText>
          <AppText variant="medium" style={{ color: AppColors.darkBrown }}>
            {date}
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: sharedPaddingHorizontal,
    marginTop: s(10),
  },
  container: {
    backgroundColor: AppColors.white,
    padding: s(10),
    borderRadius: s(16),
    width: "100%",
    ...shadowStyle.shadow,
  },
  separator: {
    borderBottomColor: AppColors.black,
    borderBottomWidth: s(1),
    marginBottom: s(10),
    marginTop: s(5),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
