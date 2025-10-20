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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/firebase";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/reducers/UserSlice";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();

  const schema = yup
    .object({
      Email: yup
        .string()
        .email(t("sign_in_email_invalid"))
        .required(t("sign_in_email_required")),

      Password: yup
        .string()
        .required(t("sign_in_password_required"))
        .min(6, t("sign_in_password_min_length")),
    })
    .required();

  type data = yup.InferType<typeof schema>;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onSignIn = async (data: data) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.Email,
        data.Password
      );
      navigation.navigate("BottomTabs");
      console.log(userCredentials);
      dispatch(
        setUserData({
          uid: userCredentials.user.uid,
        })
      );
    } catch (error: any) {
      let errorMessage = "";
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        errorMessage = t("sign_in_error_user_not_found");
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = t("sign_in_error_invalid_credential");
      } else {
        errorMessage = t("sign_in_error_default");
      }

      showMessage({
        type: "danger",
        message: errorMessage,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController
        name="Email"
        control={control}
        placeholder={t("sign_in_email_placeholder")}
      />
      <AppTextInputController
        name="Password"
        control={control}
        placeholder={t("sign_in_password_placeholder")}
      />
      <AppText style={styles.text}>Smart E-commerce App</AppText>
      <AppButton
        title={t("sign_in_login_button")}
        onPress={handleSubmit(onSignIn)}
      />
      <AppButton
        title={t("sign_in_signup_button")}
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
