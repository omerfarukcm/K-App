import aston from "@/assets/images/aston-martin-vantage-gte.jpg";
import bently from "@/assets/images/bently-continental-gt3.jpg";
import japan from "@/assets/images/japan.jpg";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const PAGE_WIDTH = windowWidth * 0.8; // Sayfa genişliğini ekran genişliğinin %80'i olarak ayarladık
const PAGE_HEIGHT = windowHeight * 0.4; // Carousel yüksekliğini sabit tuttuk
const ITEM_WIDTH = PAGE_WIDTH * 0.7; // Kartın genişliğini ayarlayın
const ITEM_HEIGHT = PAGE_HEIGHT * 0.9; // Kartın yüksekliğini ayarlayın

const imageMap: { [key: string]: any } = {
  "bently-continental-gt3.jpg": bently,
  "aston-martin-vantage-gte.jpg": aston,
  "japan.jpg": japan,
};

const CarouselCardItem = ({ item }: { item: { image: string } }) => {
  const source = imageMap[item.image];
  const { theme } = useTheme();
  
  return (
    <View style={[styles.card, { backgroundColor: theme.background }]}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

export default CarouselCardItem;

const styles = StyleSheet.create({
  card: {
    width: ITEM_WIDTH, // Kart genişliği
    height: ITEM_HEIGHT, // Kart yüksekliği
    borderRadius: 25, // Köşe yuvarlama
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  image: {
    width: "100%", // Kartın genişliği kadar
    height: "100%", // Kartın yüksekliği kadar
    borderRadius: 25, // Köşe yuvarlama
    resizeMode: "cover", // Resmin nasıl sığacağını ayarlar
  },
});
