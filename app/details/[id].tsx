import Data from "@/assets/data.json";
import images from "@/constant/images";
import { useTheme } from "@/context/ThemeContext";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { windowWidth, windowHeight } from "@/constant/measurement";
import { ImageKeys, CarData } from "@/types/id";

const DetailPage = () => {
  const { id } = useLocalSearchParams();
  const { theme } = useTheme();

  const data = (Data as CarData[]).find((a) => a.id === Number(id));

  if (!data) {
    return null;
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View>
        <Image source={images[data.image]} style={styles.image} />
        <View style={styles.box}>
          <FontAwesome6 name="box-open" size={24} color="black" />
          <Text style={[styles.boxText, { color: theme.text }]}>
            {data.box}
          </Text>
        </View>
      </View>
      <View style={styles.textCanter}>
        <Text style={[styles.texts, { color: theme.text }]}>{data.name}</Text>
        <View>
          <Text style={[styles.year, { color: theme.text }]}>
            {data.year || "-"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
  },
  image: {
    width: "100%",
    height: windowHeight * 0.5,
  },
  texts: {
    fontSize: 20,
  },
  textCanter: {
    padding: windowWidth * 0.02,
  },
  year: {
    fontSize: 17,
  },
  box: {
    position: "absolute",
    bottom: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 8,
    borderRadius: 8,
  },
  boxText: {
    color: "black",
  },
});
