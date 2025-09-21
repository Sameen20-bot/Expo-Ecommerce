import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack } from "./AuthStack";
import { BottomTabs } from "./BottomTab";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import Order from "../screens/settings/Order";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
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
