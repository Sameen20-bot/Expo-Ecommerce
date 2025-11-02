import { StyleSheet, Text, View } from "react-native";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";
import { vs, s } from "react-native-size-matters";
import {
  shadowStyle,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface OrderItemTypes {
  totalAmount: number | string;
  totalPrice: number | string;
  date: number | string;
}
s;
const OrderItem: FC<OrderItemTypes> = ({ totalAmount, totalPrice, date }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <AppText variant="medium">{t("order_details_title")}</AppText>
        <View style={styles.separator} />
        <View style={styles.row}>
          <AppText variant="medium">
            {" "}
            {t("order_total_price")} {t("totals_currency")} {totalPrice}
          </AppText>
          <AppText variant="medium" style={{ color: AppColors.darkBrown }}>
            {t("totals_currency")} {totalAmount} {t("order_total_price")}
          </AppText>
        </View>
        <View style={styles.row}>
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
