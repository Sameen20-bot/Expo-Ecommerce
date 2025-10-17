import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FlashMessage from "react-native-flash-message";
import { s } from "react-native-size-matters";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store/Store";
import { MainStack } from "./src/navigation/MainStack";

export default function App() {
  const [fonts] = useFonts({
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fonts) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, paddingTop: s(20), backgroundColor: "#fff" }}
        >
          <NavigationContainer>
            <FlashMessage position="top" />
            <MainStack />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
