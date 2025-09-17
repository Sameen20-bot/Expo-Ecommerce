import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { FONTS } from "../../styles/fontt";
import { AppColors } from "../../styles/colors";
import AppButton from "../buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EmptyCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="shopping-outline"
        size={s(100)}
        color={AppColors.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>Your Cart Is Empty</AppText>
      <AppText style={styles.subTitle}>
        Browse our products and find something you like.
      </AppText>
      <AppButton
        title="Start Shopping"
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
