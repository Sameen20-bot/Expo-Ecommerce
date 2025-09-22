import { FlatList, StyleSheet, Text, View } from "react-native";
import HomeHeader from "../../components/header/HomeHeader";
import EmptyCard from "../../components/card/EmptyCard";
import CartItem from "../../components/cart/CartItem";
import TotalViews from "../../components/cart/TotalViews";
import { AppColors } from "../../styles/colors";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import {
  addItemToCart,
  deleteItem,
  removeItemToCart,
} from "../../store/reducers/CartSlice";
import { shippingFee, taxes } from "../../constants/constant";

const Cart = () => {
  const navigation = useNavigation();

  const { items } = useSelector((state: RootState) => state.CartSlice);

  const totalItemSum = items.reduce((acc, item) => acc + item.sum, 0);

  const orderTotal = totalItemSum + taxes + shippingFee;

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, backgroundColor: AppColors.white }}>
      <HomeHeader />
      {items.length > 0 ? (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CartItem
                {...item}
                price={item.sum}
                imageUrl={item.imageURL}
                onReducePress={() => dispatch(removeItemToCart(item))}
                onDeletePress={() => dispatch(deleteItem(item))}
                onIncreasePress={() => dispatch(addItemToCart(item))}
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
          <TotalViews itemsPrice={totalItemSum} totalPrice={orderTotal} />
          <AppButton
            title="Continue"
            style={{ width: "90%" }}
            onPress={() => navigation.navigate("Check Out Screen")}
          />
        </>
      ) : (
        <EmptyCard />
      )}
    </View>
  );
};
export default Cart;
const styles = StyleSheet.create({});
