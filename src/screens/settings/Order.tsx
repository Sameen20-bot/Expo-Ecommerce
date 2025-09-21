import { StyleSheet, Text, View } from "react-native";
import OrderItem from "../../components/order/OrderItem";
import { FlatList } from "react-native-gesture-handler";

const data = [
  {
    id: 1,
    date: "2025-01-01",
    totalAmount: 120.5,
    totalPrice: "$150",
  },
  {
    id: 2,
    date: "2025-01-02",
    totalAmount: 75.0,
    totalPrice: "$90",
  },
  {
    id: 3,
    date: "2025-01-03",
    totalAmount: 200.25,
    totalPrice: "$250",
  },
];

const Order = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OrderItem
            totalAmount={item.totalAmount}
            totalPrice={item.totalPrice}
            date={item.date}
          />
        )}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
