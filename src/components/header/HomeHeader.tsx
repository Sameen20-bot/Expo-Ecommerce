import { Image, StyleSheet, Text, View } from "react-native";
import { IMAGES } from "../../constants/images-paths";
import { AppColors } from "../../styles/colors";
import { vs, s } from "react-native-size-matters";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.image} />
    </View>
  );
};
export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: vs(10),
  },
  image: {
    height: s(50),
    width: s(50),
    tintColor: AppColors.white,
  },
});
