import { FlatList, StyleSheet, Text, View } from "react-native";
import HomeHeader from "../../components/header/HomeHeader";
import EmptyCard from "../../components/card/EmptyCard";
import CartItem from "../../components/cart/CartItem";
import TotalViews from "../../components/cart/TotalViews";
import { products } from "../../data/products";
import { AppColors } from "../../styles/colors";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";

const Cart = () => {
  const navigation = useNavigation();

  const { items } = useSelector((state: RootState) => state.CartSlice);

  return (
    <View style={{ flex: 1, backgroundColor: AppColors.white }}>
      <HomeHeader />
      {/* <EmptyCard /> */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem {...item} imageUrl={item.imageURL} />
        )}
        showsHorizontalScrollIndicator={false}
      />
      <TotalViews itemsPrice={3000} totalPrice={3020} />
      <AppButton
        title="Continue"
        style={{ width: "90%" }}
        onPress={() => navigation.navigate("Check Out Screen")}
      />
    </View>
  );
};
export default Cart;
const styles = StyleSheet.create({});
