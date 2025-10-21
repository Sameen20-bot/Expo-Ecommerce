import { StyleSheet, Text, View } from "react-native";
import HomeHeader from "../../components/header/HomeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { AppColors } from "../../styles/colors";
import AppText from "../../components/texts/AppText";
import { s, vs } from "react-native-size-matters";
import { FONTS } from "../../styles/fontt";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { SheetManager } from "react-native-actions-sheet";
import LanguageBottomSheet from "../../components/language/LanguageBottomSheet";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/reducers/UserSlice";
import { auth } from "../../configs/firebase";
import { signOut } from "@firebase/auth";

const Profile = () => {
  const { t } = useTranslation();

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("USER_DATA");
      navigation.reset({
        index: 0,
        routes: [{ name: "AuthStack" }],
      });
      await signOut(auth);
    } catch (error) {
      console.log("Error removing user data: ", error);
    }
  };

  return (
    <View style={{ backgroundColor: AppColors.white, flex: 1 }}>
      <HomeHeader />
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSectionButton
          title={t("profile_my_orders")}
          onPress={() => navigation.navigate("My Orders")}
        />
        <ProfileSectionButton
          title={t("profile_language")}
          onPress={() => SheetManager.show("LANG_SHEET")}
        />
        <LanguageBottomSheet />
        <ProfileSectionButton
          title={t("profile_logout")}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  text: {
    fontSize: s(18),
    fontFamily: FONTS.Bold,
    paddingHorizontal: sharedPaddingHorizontal,
    marginVertical: s(17),
  },
});
