import { StyleSheet, Text, View } from "react-native";
import HomeHeader from "../../components/header/HomeHeader";
import EmptyCard from "../../components/card/EmptyCard";
import CartItem from "../../components/cart/CartItem";

const Cart = () => {
  return (
    <View style={{flex: 1}}>
      <HomeHeader />
      {/* <EmptyCard /> */}
      <CartItem/>
    </View>
  );
};
export default Cart;
const styles = StyleSheet.create({});
