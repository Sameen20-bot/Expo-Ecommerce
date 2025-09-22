import { Control, Controller, FieldValue, FieldValues, Path } from "react-hook-form";
import { StyleSheet } from "react-native";
import AppInput from "./AppInput";
import { AppColors } from "../../styles/colors";
import { vs, s } from "react-native-size-matters";
import AppText from "../texts/AppText";

interface AppTextInputControllerTypes<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: object;
  placeholder: string;
  keyboardType?: "default" | "numeric" | "email-address";
  secureTextEntry?: boolean;
}

const AppTextInputController= <T extends FieldValues>  ({
  control,
  name,
  rules,
  placeholder,
  keyboardType,
  secureTextEntry,
}: AppTextInputControllerTypes<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            style={error && styles.errorInput}
          />
          {error && <AppText style={styles.errorText}>{error.message}</AppText>}
        </>
      )}
    />
  );
};

export default AppTextInputController;

const styles = StyleSheet.create({
  errorInput: {
    borderColor: AppColors.redColor,
    borderWidth: s(1),
  },
  errorText: {
    color: AppColors.redColor,
    fontSize: s(12),
    textAlign: "center",
    marginBottom: vs(10),
    marginTop: vs(-5),
  },
});
