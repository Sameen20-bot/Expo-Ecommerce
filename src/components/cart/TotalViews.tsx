import { StyleSheet, Text, View } from "react-native";
import AppText from "../texts/AppText";
import { vs, s } from "react-native-size-matters";
import { FONTS } from "../../styles/fontt";
import { AppColors } from "../../styles/colors";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { FC } from "react";
import { shippingFee, taxes } from "../../constants/constant";

interface TotalViewsTypes {
  itemsPrice: number | string;
  totalPrice: number | string;
}

const TotalViews: FC<TotalViewsTypes> = ({ itemsPrice, totalPrice }) => {
  return (
    <View
      style={{
        backgroundColor: AppColors.white,
        paddingHorizontal: sharedPaddingHorizontal,
      }}
    >
      <View style={styles.row}>
        <AppText style={styles.text}>Items Price:</AppText>
        <AppText style={styles.price}>${itemsPrice}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.text}>Taxes:</AppText>
        <AppText style={styles.price}>${taxes}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.text}>Shipping Fee:</AppText>
        <AppText style={styles.price}>${shippingFee}</AppText>
      </View>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AppText style={styles.text}>Total Order:</AppText>
        <AppText style={styles.price}>${totalPrice}</AppText>
      </View>
    </View>
  );
};
export default TotalViews;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(10),
  },
  text: {
    flex: 1,
    fontSize: s(16),
    fontFamily: FONTS.Medium,
    color: AppColors.primary,
  },
  price: {
    fontSize: s(16),
    fontFamily: FONTS.Medium,
    color: AppColors.primary,
  },
  separator: {
    height: s(1),
    width: "100%",
    backgroundColor: AppColors.blueGray,
    marginVertical: vs(5),
  },
});
