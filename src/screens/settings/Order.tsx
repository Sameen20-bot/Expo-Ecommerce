import { StyleSheet, Text, View } from "react-native";
import OrderItem from "../../components/order/OrderItem";
import { FlatList } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { vs, s } from "react-native-size-matters";
import { getOrderData } from "../../configs/dataService";

const Order = () => {
  const [orderList, setOrderList] = useState([]);

  const getOrder = async () => {
    const response = await getOrderData();
    setOrderList(response);
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={orderList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OrderItem
            totalAmount={item.totalItemSum}
            totalPrice={item.orderTotal}
            date={new Date(item.createdAt.seconds * 1000).toLocaleString()}
          />
        )}
        contentContainerStyle={{paddingBottom:s(10)}}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
