import ThemeProvider, { useTheme } from "@/context/ThemeContext";
import {
  NotoSans_400Regular,
  NotoSans_700Bold,
} from "@expo-google-fonts/noto-sans";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function RootLayoutNav() {
  const { theme } = useTheme();
  const [fontsLoaded] = useFonts({
    "NotoSans-Regular": NotoSans_400Regular,
    "NotoSans-Bold": NotoSans_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        { backgroundColor: theme.background },
      ]}
    >
      <SafeAreaView style={StyleSheet.absoluteFillObject}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <RootLayoutNav />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
