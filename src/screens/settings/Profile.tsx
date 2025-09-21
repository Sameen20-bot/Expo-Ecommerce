import { StyleSheet, Text, View } from "react-native";
import HomeHeader from "../../components/header/HomeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { AppColors } from "../../styles/colors";
import AppText from "../../components/texts/AppText";
import { s, vs } from "react-native-size-matters";
import { FONTS } from "../../styles/fontt";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: AppColors.white, flex: 1 }}>
      <HomeHeader />
      <AppText style={styles.text}>Hello, Sameen Zaki</AppText>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSectionButton
          title="My Orders"
          onPress={() => navigation.navigate("My Orders")}
        />
        <ProfileSectionButton title="Language" />
        <ProfileSectionButton title="Logout" />
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
