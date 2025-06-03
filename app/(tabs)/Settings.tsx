import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Switch, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const data = [
  { label: "Türkçe", value: "Türkçe" },
  { label: "İngilizce", value: "İngilizce" },
  { label: "Arapça", value: "Arapça" },
];

const Setting = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const [selected, setSelectedValue] = useState("Türkçe");

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.choose}>
        <View style={styles.theme}>
          <Text style={[styles.themeText, { color: theme.text }]}>Karanlık Mod</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
          />
        </View>
        <View style={styles.language}>
          <Dropdown
            style={[styles.dropdown, { borderColor: theme.text }]}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            value={selected}
            onFocus={() => setSelectedValue("Türkçe")}
            onBlur={() => setSelectedValue("Türkçe")}
            onChange={(item) => {
              setSelectedValue(item.value);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  choose: {
    padding: windowWidth * 0.03,
    gap: windowHeight * 0.05,
  },
  theme: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  themeText: {
    fontSize: 16,
  },
  language: {
    width: "100%",
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
