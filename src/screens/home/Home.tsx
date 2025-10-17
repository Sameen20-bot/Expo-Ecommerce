import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import HomeHeader from "../../components/header/HomeHeader";
import AppText from "../../components/texts/AppText";
import Card from "../../components/card/Card";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/reducers/CartSlice";
import { useEffect, useState } from "react";
import { getProductsData } from "../../configs/dataService";

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await getProductsData();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView nestedScrollEnabled>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.imageURL}
            title={item.title}
            price={item.price}
            onAddToCardPress={() => {
              dispatch(addItemToCart(item));
            }}
          />
        )}
        scrollEnabled={false}
        contentContainerStyle={{
          paddingHorizontal: s(10),
          marginTop: vs(10),
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(10),
        }}
      />
    </ScrollView>
  );
};
export default Home;
const styles = StyleSheet.create({});
