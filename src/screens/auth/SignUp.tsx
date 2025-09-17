import { Image, StyleSheet, Text, View } from "react-native";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import { vs, s } from "react-native-size-matters";
import AppInput from "../../components/inputs/AppInput";
import { useState } from "react";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppInput
        placeholder="Enter User Name"
        onChangeText={setEmail}
        value={email}
      />
      <AppInput
        placeholder="Enter Email"
        onChangeText={setEmail}
        value={email}
      />
      <AppInput
        placeholder="Enter Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <AppText style={styles.text}>Smart E-commerce App</AppText>
      <AppButton title="Create New Account" />
      <AppButton
        title="Go To Sign In"
        style={styles.signinButton}
        textColor={AppColors.primary}
        onPress={()=>navigation.navigate("SignIn")}
      />
    </View>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sharedPaddingHorizontal,
    alignItems: "center",
  },
  logo: {
    height: s(130),
    width: s(130),
    marginBottom: vs(30),
  },
  text: {
    fontSize: s(16),
    marginVertical: vs(15),
  },
  signinButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
