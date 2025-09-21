import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "../texts/AppText";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { FONTS } from "../../styles/fontt";
import { FC } from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface ProfileSectionButtonTypes {
  title: string;
  onPress: () => void;
}

const ProfileSectionButton: FC<ProfileSectionButtonTypes> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppText style={styles.text}>{title}</AppText>
      <MaterialIcons
        name="arrow-forward-ios"
        size={s(14)}
        color={AppColors.medGray}
      />
    </TouchableOpacity>
  );
};
export default ProfileSectionButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: vs(10),
    flexDirection: "row",
    borderBottomWidth: s(2),
    borderBottomColor: AppColors.lightGray,
    marginTop: vs(14),
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: s(16),
    fontFamily: FONTS.Medium,
    color: AppColors.primary,
  },
});
