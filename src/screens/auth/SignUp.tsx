import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import { vs, s } from "react-native-size-matters";
import AppInput from "../../components/inputs/AppInput";
import { useState, useTransition } from "react";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";
import { auth } from "../../configs/firebase";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/reducers/UserSlice";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();

  const schema = yup
    .object({
      Name: yup.string().required(t("sign_up_username_required")),

      Email: yup
        .string()
        .email(t("sign_up_email_invalid"))
        .required(t("sign_up_email_required")),

      Password: yup
        .string()
        .required(t("sign_up_password_required"))
        .min(6, t("sign_up_password_min_length")),
    })
    .required();

  type data = yup.InferType<typeof schema>;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onSignUp = async (data: data) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.Email,
        data.Password
      );
      Alert.alert(t("sign_up_success"));
      navigation.navigate("BottomTabs");
      dispatch(
        setUserData({
          uid: userCredentials.user.uid,
        })
      );
    } catch (error: any) {
      let errorMessage = "";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = t("sign_up_error_email_in_use");
      } else if (error.code === "auth/invalid-email") {
        errorMessage = t("sign_up_error_invalid_email");
      } else if (error.code === "auth/weak-password") {
        errorMessage = t("sign_up_error_weak_password");
      } else {
        errorMessage = t("sign_up_error_default");
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
        name="Name"
        control={control}
        placeholder={t("sign_up_username_placeholder")}
      />
      <AppTextInputController
        name="Email"
        control={control}
        placeholder={t("sign_up_email_placeholder")}
      />
      <AppTextInputController
        name="Password"
        control={control}
        placeholder={t("sign_up_password_placeholder")}
      />
      <AppText style={styles.text}>Smart E-commerce App</AppText>
      <AppButton
        title={t("sign_up_create_account_button")}
        onPress={handleSubmit(onSignUp)}
      />
      <AppButton
        title={t("sign_up_goto_signin_button")}
        style={styles.signinButton}
        textColor={AppColors.primary}
        onPress={() => navigation.navigate("SignIn")}
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
