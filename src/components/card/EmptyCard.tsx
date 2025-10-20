import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { FONTS } from "../../styles/fontt";
import { AppColors } from "../../styles/colors";
import AppButton from "../buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const EmptyCard = () => {
  const navigation = useNavigation();

  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="shopping-outline"
        size={s(100)}
        color={AppColors.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>{t("empty_cart_title")}</AppText>
      <AppText style={styles.subTitle}>{t("empty_cart_subtitle")}</AppText>
      <AppButton
        title={t("start_shopping")}
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};
export default EmptyCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: s(20),
    fontFamily: FONTS.Bold,
    color: AppColors.primary,
    marginBottom: vs(10),
  },
  subTitle: {
    fontSize: s(16),
    fontFamily: FONTS.Medium,
    color: AppColors.primary,
    marginBottom: vs(20),
    textAlign: "center",
  },
  btn: {
    width: "80%",
  },
  icon: {
    marginBottom: vs(20),
  },
});
