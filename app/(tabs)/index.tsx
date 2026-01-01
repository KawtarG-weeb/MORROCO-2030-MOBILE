import { router } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function HomeTab() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("@/assets/images/wc.png")}
        style={styles.hero}
      >
        <View style={styles.overlay} />

        <Animated.Text entering={FadeInUp.duration(700)} style={styles.title}>
          VIBREZ{"\n"}CÉLÉBREZ{"\n"}MOROCCO 2030
        </Animated.Text>
      </ImageBackground>

      {/* SERVICES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>NOS SERVICES</Text>

        <View style={styles.services}>
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => router.push("/cities")}
          >
            <Text style={styles.cardIcon}>🏙️</Text>
            <Text style={styles.cardText}>Villes</Text>
          </TouchableOpacity>

         
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 320,
    justifyContent: "flex-end",
    padding: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(122,31,22,0.75)",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  section: {
    padding: 16,
    backgroundColor: "#F5F5DC",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#7A1F16",
  },
  services: {
    flexDirection: "row",
    gap: 16,
  },
  card: {
    flex: 1,
    backgroundColor: "#7A1F16",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  cardIcon: {
    fontSize: 28,
    color: "#fff",
  },
  cardText: {
    color: "#fff",
    marginTop: 8,
    fontWeight: "bold",
  },
});
