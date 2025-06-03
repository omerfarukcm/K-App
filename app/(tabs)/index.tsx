import data from "@/assets/data.json";
import CarouselCardItem from "@/components/CarouselCardItem";
import CartItem from "@/components/CartItem";
import { useTheme } from "@/context/ThemeContext";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Extrapolate, interpolate } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

// Eklenenler:
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const PAGE_WIDTH = windowWidth * 0.8; // Sayfa genişliğini ekran genişliğinin %80'i olarak ayarladık
const PAGE_HEIGHT = windowHeight * 0.4; // Carousel yüksekliğini sabit tuttuk

const snapPoints = ["50%", "100%"];

export default function Index() {
  const sheetRef = useRef<BottomSheet>(null);
  const { theme } = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.screenOne}>
          <View>
            <Carousel
              loop={true}
              width={PAGE_WIDTH}
              height={PAGE_HEIGHT}
              data={data}
              renderItem={({ item }) => <CarouselCardItem item={item} />}
              customAnimation={(value) => {
                "worklet";

                const translateX = interpolate(
                  value,
                  [-1, 0, 1],
                  [-PAGE_WIDTH / 2, 0, PAGE_WIDTH / 2], // Kaydırma miktarı
                  Extrapolate.CLAMP
                );

                const scale = interpolate(
                  value,
                  [-1, 0, 1],
                  [0.8, 1, 0.8], // Ortadaki eleman 1, yanlardakiler 0.8
                  Extrapolate.CLAMP
                );

                const opacity = interpolate(
                  value,
                  [-1, 0, 1],
                  [0.6, 1, 0.6], // Ortadaki eleman daha belirgin
                  Extrapolate.CLAMP
                );

                return {
                  transform: [{ translateX }, { scale }],
                  opacity,
                };
              }}
              scrollAnimationDuration={1200}
            />
          </View>
        </View>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          backgroundStyle={{ backgroundColor: theme.background }}
          handleIndicatorStyle={{ backgroundColor: theme.text }}
        >
          <BottomSheetView style={[styles.bottomSheet, { backgroundColor: theme.background }]}>
            <FlatList
              data={data}
              renderItem={({ item }) => <CartItem item={item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              contentContainerStyle={{ backgroundColor: theme.background }}
            />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenOne: {
    flexDirection: "row",
    height: windowHeight * 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  screenTwo: {
    height: windowHeight * 0.5,
    backgroundColor: "green",
  },
  bottomSheet: {
    padding: windowWidth * 0.02,
  },
});
