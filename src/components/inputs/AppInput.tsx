import { StyleSheet, Text, TextInput, TextStyle, View } from "react-native";
import { vs, s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { FC } from "react";

interface AppInputTypes {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "numeric" | "email-address";
  style?: TextStyle;
}

const AppInput: FC<AppInputTypes> = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  keyboardType,
  style,
}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
    />
  );
};
export default AppInput;
const styles = StyleSheet.create({
  input: {
    height: vs(40),
    borderRadius: s(25),
    borderWidth: 1,
    borderColor: AppColors.borderColor,
    paddingHorizontal: s(15),
    fontSize: s(16),
    backgroundColor: AppColors.white,
    width: "100%",
    marginBottom: vs(10),
  },
});
