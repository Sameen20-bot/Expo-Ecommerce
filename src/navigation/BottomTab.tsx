import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Cart from "../screens/cart/Cart";
import Profile from "../screens/settings/Profile";
import { AppColors } from "../styles/colors";
import { vs, s } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarStyle: {
          paddingTop: s(4),
        },
        tabBarLabelStyle: {
          fontSize: s(12),
          marginTop: vs(4),
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          title: "Home",
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
          title: "Cart",
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          title: "Profile",
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
