import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import { vs, s } from "react-native-size-matters";
import AppInput from "../../components/inputs/AppInput";
import { useState } from "react";
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

const SignUp = () => {
  const schema = yup
    .object({
      Name: yup.string().required("Name is required"),

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

  const dispatch = useDispatch();

  const onSignUp = async (data: data) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.Email,
        data.Password
      );
      Alert.alert("User account created.");
      navigation.navigate("BottomTabs");
      dispatch(
        setUserData({
          uid: userCredentials.user.uid,
        })
      );
    } catch (error: any) {
      let errorMessage = "";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "The email address is invalid.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "The password is too weak.";
      } else {
        errorMessage = "An error occurred during sign-up.";
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
        placeholder="Enter Your Name"
      />
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
      <AppButton title="Create New Account" onPress={handleSubmit(onSignUp)} />
      <AppButton
        title="Go To Sign In"
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
