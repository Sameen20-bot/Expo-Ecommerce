import { StyleSheet, Text, View } from "react-native";
import { AppColors } from "../../styles/colors";
import { vs, s } from "react-native-size-matters";
import AppInput from "../../components/inputs/AppInput";
import {
  shadowStyle,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import AppButton from "../../components/buttons/AppButton";

const CheckOutScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ paddingHorizontal: sharedPaddingHorizontal, marginTop: s(15) }}
      >
        <View style={styles.container}>
          <AppInput placeholder="Full Name" />
          <AppInput placeholder="Phone Number" />
          <AppInput placeholder="Detailed Address" />
        </View>
      </View>
      <View style={styles.bottomButton}>
        <AppButton title="Confirm" />
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
