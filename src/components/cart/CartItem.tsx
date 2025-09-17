import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { vs, s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { FONTS } from "../../styles/fontt";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const tempData = {
  id: 2,
  price: 749,
  title: "Lenovo Laptop",
  imageURL:
    "https://image.made-in-china.com/318f0j00nEfGPdYIhWom/6%E6%9C%8814%E6%97%A5%287%29.mp4.webp",
};

const CartItem = () => {
  return (
    <View style={styles.container}>
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: tempData.imageURL }} style={styles.image} />
      </View>
      {/* Details Container */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{tempData.title}</AppText>
        <AppText style={styles.price}>${tempData.price}</AppText>

        {/* quantity set */}
        <View style={styles.qty}>
          <Pressable style={styles.iconBtn}>
            <FontAwesome name="plus" size={s(10)} color={AppColors.primary} />
          </Pressable>
          <AppText style={styles.textQty}>1</AppText>
          <Pressable style={styles.iconBtn}>
            <FontAwesome name="minus" size={s(10)} color={AppColors.primary} />
          </Pressable>
        </View>
      </View>
      {/* Delete Container */}
      <View style={styles.deleteContainer}>
        <Pressable style={styles.deleteButton}>
          <AntDesign name="delete" size={s(14)} color={AppColors.redColor} />
          <AppText style={styles.delete}>Delete</AppText>
        </Pressable>
      </View>
    </View>
  );
};
export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: AppColors.white,
    borderBottomWidth: 1,
    paddingBottom: vs(6),
    borderColor: AppColors.blueGray,
  },
  imageContainer: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: s(7),
  },
  detailsContainer: {
    flex: 0.5,
    marginLeft: s(7),
  },
  deleteContainer: {
    flex: 0.25,
    justifyContent: "flex-end",
    paddingEnd: s(15),
    alignItems: "center",
  },
  image: {
    height: s(80),
    width: s(80),
    borderRadius: s(10),
  },
  title: {
    fontSize: s(15),
    fontFamily: FONTS.Medium,
    color: AppColors.primary,
    marginTop: vs(5),
  },
  price: {
    fontSize: s(16),
    fontFamily: FONTS.Bold,
    color: AppColors.primary,
    marginVertical: vs(5),
  },
  delete: {
    marginLeft: s(7),
    color: AppColors.medGray,
    fontSize: s(13),
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  qty: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: s(5),
    borderRadius: s(10),
    borderWidth: s(1),
    borderColor: AppColors.blueGray,
    width: s(80),
  },
  iconBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.lightGray,
    height: s(20),
    width: s(20),
    padding: s(5),
    borderRadius: s(10),
  },
  textQty: {
    flex: 1,
    color: AppColors.primary,
    textAlign: "center",
  },
});
