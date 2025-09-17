import { FC } from "react";
import { StyleSheet, Text, TextProps, TextStyle, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import { FONTS } from "../../styles/fontt";

// Just meray understanding kay liya
// TypeScript me |
//ska matlab “union type” hota hai (type system ke andar).
// Sirf ye batata hai ke variable multiple types me se ek ho sakta hai.
// Ye sirf compile-time pe check hota hai.

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: "bold" | "medium";
}

const AppText: FC<AppTextProps> = ({
  children,
  style,
  variant = "medium",
  ...rest
}) => {
  return (
    <Text {...rest} style={[styles[variant], style]}>
      {children}
    </Text>
  );
};
export default AppText;
const styles = StyleSheet.create({
  medium: {
    fontSize: s(16),
    color: AppColors.black,
    fontFamily: FONTS.Medium,
  },
  bold: {
    fontSize: s(18),
    color: AppColors.black,
    fontFamily: FONTS.Bold,
  },
});
