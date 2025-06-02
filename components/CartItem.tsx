import data from "@/assets/data.json";
import images from "@/constant/images";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CartItem = ({ item }: { item: any }) => {
  const card = data.find((a) => a.id === item.id);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {card?.image && (
          <Image
            source={images[card.image as keyof typeof images]}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {card?.name}
        </Text>
        <Text>{card?.year}</Text>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    borderRadius: 20,
    maxWidth: "50%",
    borderWidth: 0.2,
  },
  imageContainer: {
    width: "100%",
    height: windowHeight * 0.2,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 8,
  },
  name: {
    fontSize: 16,
    fontFamily: "NotoSans-Regular",
    color: "black",
  },
});
