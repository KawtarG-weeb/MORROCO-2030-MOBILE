import { Colors } from "@/constants/theme";
import { LanguageProvider, useLanguage } from "@/context";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LanguageModal from "./modal";

function CustomHeader() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  const { openLanguageModal } = useLanguage();

  return (
    <View style={[styles.header, { backgroundColor: theme.background }]}>
      <Text style={[styles.logo, { color: theme.tint }]}>
        MORWC
      </Text>

      <View style={styles.menu}>
        <TouchableOpacity>
          <Text style={[styles.link, { color: theme.text }]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={openLanguageModal}>
          <Text style={[styles.lang, { color: theme.text }]}>Lang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function RootLayout() {
  return (
    <LanguageProvider>
      <Stack screenOptions={{ headerShown: false }} />
      <LanguageModal />
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menu: {
    flexDirection: "row",
    gap: 16,
  },
  link: {
    fontSize: 14,
  },
  lang: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'currentColor',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
