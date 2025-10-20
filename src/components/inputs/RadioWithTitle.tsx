import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";

interface RadioWithTitleProps extends TouchableOpacityProps {
  selected: boolean;
  title: string;
  onPress: () => void;
}

const RadioWithTitle: React.FC<RadioWithTitleProps> = ({
  selected,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.circle}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <AppText style={styles.title}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default RadioWithTitle;

const styles = StyleSheet.create({
  container: {
    paddingVertical: vs(5),
    paddingHorizontal: vs(10),
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    height: s(20),
    width: s(20),
    borderRadius: s(10),
    borderColor: AppColors.primary,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    height: s(10),
    width: s(10),
    borderRadius: s(5),
    backgroundColor: AppColors.primary,
  },
  title: {
    marginStart: s(10),
  },
});
