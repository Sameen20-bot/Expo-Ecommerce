import { Image, StyleSheet, Text, View } from "react-native";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import { vs, s } from "react-native-size-matters";
import AppInput from "../../components/inputs/AppInput";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AppTextInputController from "../../components/inputs/AppTextInputController";

const SignIn = () => {
  const schema = yup
    .object({
      Email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required."),

      Password: yup
        .string()
        .required("Password is required.")
        .min(6, "Password must be atleast 6 characters."),
    })
    .required();

  type data = yup.InferType<typeof schema>;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation();

  const onSignIn = () => {
    navigation.navigate("BottomTabs");
  };

  return (
    <View style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController
        name="Email"
        control={control}
        placeholder="Enter Email Address"
      />
      <AppTextInputController
        name="Password"
        control={control}
        placeholder="Enter Password"
      />
      <AppText style={styles.text}>Smart E-commerce App</AppText>
      <AppButton title="Login" onPress={handleSubmit(onSignIn)} />
      <AppButton
        title="Sign Up"
        style={styles.registerButton}
        textColor={AppColors.primary}
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

export default SignIn;
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
  registerButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
