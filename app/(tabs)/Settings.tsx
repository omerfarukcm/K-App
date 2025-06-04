import { useTheme } from "@/context/ThemeContext";
import i18next, { changeLanguage } from "@/services/i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, StyleSheet, Switch, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const data = [
  { label: "Türkçe", value: "tr" },
  { label: "İngilizce", value: "en" },
  { label: "Arapça", value: "ar" },
];

const Setting = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const [selected, setSelectedValue] = useState(i18next.language);
  const { t } = useTranslation();

  const handleLanguageChange = async (item: { value: string }) => {
    setSelectedValue(item.value);
    await changeLanguage(item.value);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.choose}>
        <View style={styles.theme}>
          <Text style={[styles.themeText, { color: theme.text }]}>
            {t("settings.darkMode")}
          </Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>
        <View style={styles.language}>
          <Text style={[styles.languageText, { color: theme.text }]}>
            {t("settings.language")}
          </Text>
          <Dropdown
            style={[styles.dropdown, { borderColor: theme.text }]}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            value={selected}
            onChange={handleLanguageChange}
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
    gap: 8,
  },
  languageText: {
    fontSize: 16,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
