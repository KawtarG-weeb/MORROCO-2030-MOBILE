import LanguageModal from "@/app/modal";
import { LanguageProvider } from "@/context";
import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <LanguageProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="fan-id" />
        <Stack.Screen name="evisa" />
        <Stack.Screen name="evisa/request" />
        <Stack screenOptions={{ headerShown: false }} />
      </Stack>

      <LanguageModal />
    </LanguageProvider>
  );
}
