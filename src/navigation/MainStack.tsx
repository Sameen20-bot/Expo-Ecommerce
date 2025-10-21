import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack } from "./AuthStack";
import { BottomTabs } from "./BottomTab";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import Order from "../screens/settings/Order";
// import { useDispatch, useSelector } from "react-redux";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { setLoading, setUserData } from "../store/reducers/UserSlice";
import { useEffect, useState } from "react";
// import { RootState } from "../store/Store";
import { AppColors } from "../styles/colors";
import { ActivityIndicator, View } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase";

const Stack = createStackNavigator();

export const MainStack = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [userData, setUserData] = useState<object | null>(null);

  // Approach for larvel or mangodb etc..
  // const dispatch = useDispatch();

  // const { userData, isLoading } = useSelector(
  //   (state: RootState) => state.userSlice
  // );

  // const isUserLogIn = async () => {
  //   try {
  //     const storedUserData = await AsyncStorage.getItem("USER_DATA");
  //     if (storedUserData) {
  //       dispatch(setUserData(JSON.parse(storedUserData)));
  //     } else {
  //       dispatch(setLoading(false));
  //     }
  //   } catch (error) {
  //     console.log("Error in user data saving: ", error);
  //     dispatch(setLoading(false));
  //   }
  // };

  // useEffect(() => {
  //   isUserLogIn();
  // }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (userDataFromFirebase) => {
      if (userDataFromFirebase) {
        console.log("User is signed in.");
        setUserData(userDataFromFirebase);
        setIsLoading(false);
      } else {
        console.log("User is signed out.");
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator size={"large"} color={AppColors.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={userData ? "BottomTabs" : "AuthStack"}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen
        options={{ headerShown: true }}
        name="My Orders"
        component={Order}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Check Out Screen"
        component={CheckOutScreen}
      />
    </Stack.Navigator>
  );
};
