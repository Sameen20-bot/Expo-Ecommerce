import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { s } from "react-native-size-matters";
import SignIn from "./src/screens/auth/SignIn";
import SignUp from "./src/screens/auth/SignUp";
import { AuthStack } from "./src/navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./src/navigation/MainStack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store/Store";

export default function App() {
  const [fonts] = useFonts({
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fonts) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, paddingTop: s(20), backgroundColor: "#fff" }}
      >
        <Provider store={store}>
          <NavigationContainer>
            <FlashMessage position={"top"} />
            <MainStack />
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
