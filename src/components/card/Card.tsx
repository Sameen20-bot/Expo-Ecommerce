import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { FONTS } from "../../styles/fontt";
import { Ionicons } from "@expo/vector-icons";
import { shadowStyle } from "../../styles/sharedStyles";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface CardTypes {
  onAddToCardPress: () => void;
  price: number;
  title: string;
  imageUrl: string;
}

const Card: FC<CardTypes> = ({ onAddToCardPress, imageUrl, title, price }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {/* Card Button */}
      <TouchableOpacity style={styles.btn} onPress={onAddToCardPress}>
        <Ionicons name="cart" size={s(15)} color={AppColors.white} />
      </TouchableOpacity>
      {/* Image Ui */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
      </View>

      {/* Details Ui */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>
          {t("totals_currency")} {price}
        </AppText>
      </View>
    </View>
  );
};
export default Card;
const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: s(195),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    ...shadowStyle.shadow,
  },
  imageContainer: {
    overflow: "hidden",
    width: "100%",
    height: s(130),
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    paddingTop: s(8),
    paddingBottom: vs(15),
    paddingHorizontal: vs(10),
  },
  title: {
    fontSize: s(15),
    fontFamily: FONTS.Medium,
    color: AppColors.primary,
  },
  price: {
    fontFamily: FONTS.Bold,
    fontSize: s(15),
    color: AppColors.primary,
    marginTop: vs(4),
  },
  btn: {
    height: s(28),
    width: s(28),
    backgroundColor: AppColors.primary,
    position: "absolute",
    left: s(5),
    top: s(5),
    zIndex: 1,
    borderRadius: s(14),
    justifyContent: "center",
    alignItems: "center",
  },
});
