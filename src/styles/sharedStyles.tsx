import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { AppColors } from "./colors";

export const sharedPaddingHorizontal = s(12);

export const shadowStyle = StyleSheet.create({
  //  ios
  shadow: {
    shadowColor: AppColors.black,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
});
