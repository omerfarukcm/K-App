import data from "@/assets/data.json";
import images from "@/constant/images";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { CartItem } from "@/types/components";
import { windowWidth, windowHeight } from "@/constant/measurement";

const CartItemComponent = ({ item }: CartItem) => {
  const card = data.find((a) => a.id === item.id);
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          borderColor: theme.text,
        },
      ]}
    >
      <Link href={`/details/${card?.id}`}>
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
          <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>
            {t(`cars.${card?.name}`)}
          </Text>
          <Text style={{ color: theme.text }}>{card?.year}</Text>
        </View>
      </Link>
    </View>
  );
};

export default CartItemComponent;

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
  },
});
