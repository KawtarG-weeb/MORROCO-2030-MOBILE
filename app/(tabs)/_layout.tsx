import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#7A1F16",
        tabBarStyle: { height: 60 },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen name="cities" options={{ title: "Cities" }} />
      <Tabs.Screen name="profil" options={{ title: "Profil" }} />
      <Tabs.Screen name="services" options={{ title: "Services" }} />
    </Tabs>
  );
}
